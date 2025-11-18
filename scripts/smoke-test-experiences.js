#!/usr/bin/env node

/**
 * Smoke Test for Experiences Page
 * 
 * This script performs basic validation of the experiences.html page:
 * 1. Verifies that experiences-data.js loads and contains valid data
 * 2. Checks that the number of experiences matches expected count
 * 3. Validates that each experience has required fields
 * 4. Ensures no placeholder-only or empty descriptions
 * 
 * Usage:
 *   node scripts/smoke-test-experiences.js
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
    log(`✓ ${message}`, 'green');
}

function logError(message) {
    log(`✗ ${message}`, 'red');
}

function logWarning(message) {
    log(`⚠ ${message}`, 'yellow');
}

function logInfo(message) {
    log(`ℹ ${message}`, 'blue');
}

// Test configuration
const REQUIRED_FIELDS = ['id', 'translations', 'duration', 'price', 'image'];
const REQUIRED_TRANSLATION_FIELDS = ['name', 'description'];
const SUPPORTED_LANGUAGES = ['en', 'it', 'fr', 'es'];
const MIN_DESCRIPTION_LENGTH = 50; // Minimum characters for a valid description

let testsPassed = 0;
let testsFailed = 0;

// Main test function
function runSmokeTests() {
    log('\n=== Experiences Page Smoke Tests ===\n', 'bright');
    
    // Test 1: Check if experiences-data.js exists
    const experiencesDataPath = path.join(__dirname, '..', 'js', 'experiences-data.js');
    
    if (!fs.existsSync(experiencesDataPath)) {
        logError('experiences-data.js file not found!');
        testsFailed++;
        return false;
    }
    logSuccess('experiences-data.js file exists');
    testsPassed++;
    
    // Test 2: Load and parse the experiences data
    let experiencesDatabase;
    try {
        const fileContent = fs.readFileSync(experiencesDataPath, 'utf8');
        
        // Simple evaluation to extract the data (in production, use proper parsing)
        const match = fileContent.match(/const experiencesDatabase = (\[[\s\S]*?\]);/);
        if (!match) {
            logError('Could not extract experiencesDatabase from file');
            testsFailed++;
            return false;
        }
        
        // Use eval in controlled environment (only for testing)
        experiencesDatabase = eval(match[1]);
        logSuccess('Successfully loaded experiences database');
        testsPassed++;
    } catch (error) {
        logError(`Failed to parse experiences-data.js: ${error.message}`);
        testsFailed++;
        return false;
    }
    
    // Test 3: Validate database is an array
    if (!Array.isArray(experiencesDatabase)) {
        logError('experiencesDatabase is not an array');
        testsFailed++;
        return false;
    }
    logSuccess(`experiencesDatabase is an array with ${experiencesDatabase.length} entries`);
    testsPassed++;
    
    // Test 4: Check minimum number of experiences
    const minExperiences = 5;
    if (experiencesDatabase.length < minExperiences) {
        logWarning(`Only ${experiencesDatabase.length} experiences found (expected at least ${minExperiences})`);
    } else {
        logSuccess(`Found ${experiencesDatabase.length} experiences (minimum: ${minExperiences})`);
        testsPassed++;
    }
    
    // Test 5: Validate each experience structure
    let experienceErrors = 0;
    experiencesDatabase.forEach((experience, index) => {
        const experienceName = experience.id || `Experience #${index + 1}`;
        
        // Check required fields
        for (const field of REQUIRED_FIELDS) {
            if (!experience[field]) {
                logError(`${experienceName}: Missing required field '${field}'`);
                experienceErrors++;
            }
        }
        
        // Check translations object
        if (experience.translations) {
            for (const lang of SUPPORTED_LANGUAGES) {
                if (!experience.translations[lang]) {
                    logWarning(`${experienceName}: Missing translation for language '${lang}'`);
                    experienceErrors++;
                    continue;
                }
                
                // Check translation fields
                for (const field of REQUIRED_TRANSLATION_FIELDS) {
                    if (!experience.translations[lang][field]) {
                        logError(`${experienceName}: Missing '${field}' in ${lang} translation`);
                        experienceErrors++;
                    }
                }
                
                // Check description length
                const description = experience.translations[lang].description || '';
                if (description.length < MIN_DESCRIPTION_LENGTH) {
                    logWarning(`${experienceName}: Description in ${lang} is too short (${description.length} chars, minimum ${MIN_DESCRIPTION_LENGTH})`);
                    experienceErrors++;
                }
                
                // Check for placeholder text
                if (description.toLowerCase().includes('lorem ipsum') || 
                    description.toLowerCase().includes('placeholder') ||
                    description.toLowerCase() === 'description') {
                    logError(`${experienceName}: Description in ${lang} contains placeholder text`);
                    experienceErrors++;
                }
            }
        }
        
        // Check ID format (should be kebab-case)
        if (experience.id && !/^[a-z0-9-]+$/.test(experience.id)) {
            logWarning(`${experienceName}: ID should be in kebab-case format`);
        }
    });
    
    if (experienceErrors === 0) {
        logSuccess('All experiences have valid structure and content');
        testsPassed++;
    } else {
        logError(`Found ${experienceErrors} issues in experience data`);
        testsFailed++;
    }
    
    // Test 6: Check experiences.html integration
    const experiencesHtmlPath = path.join(__dirname, '..', 'experiences.html');
    if (fs.existsSync(experiencesHtmlPath)) {
        const htmlContent = fs.readFileSync(experiencesHtmlPath, 'utf8');
        
        // Check if it loads experiences-data.js
        if (htmlContent.includes('experiences-data.js')) {
            logSuccess('experiences.html loads experiences-data.js');
            testsPassed++;
        } else {
            logError('experiences.html does not load experiences-data.js');
            testsFailed++;
        }
        
        // Check if it references experiencesDatabase
        if (htmlContent.includes('experiencesDatabase')) {
            logSuccess('experiences.html references experiencesDatabase');
            testsPassed++;
        } else {
            logError('experiences.html does not reference experiencesDatabase');
            testsFailed++;
        }
    } else {
        logWarning('experiences.html not found - skipping integration tests');
    }
    
    // Summary
    log('\n=== Test Summary ===\n', 'bright');
    logInfo(`Total tests run: ${testsPassed + testsFailed}`);
    logSuccess(`Tests passed: ${testsPassed}`);
    if (testsFailed > 0) {
        logError(`Tests failed: ${testsFailed}`);
    }
    
    if (testsFailed === 0) {
        log('\n✓ All smoke tests passed!\n', 'green');
        return true;
    } else {
        log('\n✗ Some tests failed. Please review the issues above.\n', 'red');
        return false;
    }
}

// Run tests
const success = runSmokeTests();
process.exit(success ? 0 : 1);
