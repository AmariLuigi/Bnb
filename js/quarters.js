/**
 * Quarters Dynamic Content Loader
 * 
 * This script manages the dynamic loading of quarter-specific content from a centralized
 * data source (data/quarters.json). It enables easy maintenance by allowing updates to
 * all quarter pages through a single JSON file.
 * 
 * ARCHITECTURE:
 * - Centralized data in data/quarters.json
 * - Each HTML page (albergheria.html, capo.html, kalsa.html, loggia.html) uses this script
 * - The script detects which quarter page is loaded and renders appropriate content
 * 
 * HOW TO UPDATE QUARTERS:
 * 1. Edit data/quarters.json to add/modify/remove attractions
 * 2. Follow the existing structure for each quarter:
 *    {
 *      "quarters": {
 *        "quarter-id": {
 *          "id": "quarter-id",
 *          "title": "Quarter Display Name",
 *          "attractions": ["Attraction 1", "Attraction 2", ...]
 *        }
 *      }
 *    }
 * 
 * FUTURE INTERNATIONALIZATION SUPPORT:
 * To add multi-language support in the future:
 * 1. Restructure data/quarters.json to include language codes:
 *    {
 *      "en": { "quarters": { ... } },
 *      "it": { "quarters": { ... } },
 *      "fr": { "quarters": { ... } }
 *    }
 * 2. Add language detection/selection logic in this file
 * 3. Modify loadQuarterData() to accept a language parameter
 * 4. Update renderQuarterContent() to use language-specific data
 * 
 * DEPENDENCIES:
 * - QRCode library (js/qrcode.min.js) for generating QR codes
 * - Modern browser with fetch API support
 */

/**
 * Detects which quarter page is currently loaded based on the URL
 * 
 * @returns {string|null} The quarter ID (e.g., "albergheria", "capo", "kalsa", "loggia") or null if not a quarter page
 */
function detectQuarter() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    
    // Extract quarter name from filename (e.g., "albergheria.html" -> "albergheria")
    const match = filename.match(/^(albergheria|capo|kalsa|loggia)\.html$/);
    return match ? match[1] : null;
}

/**
 * Loads quarter data from the centralized JSON file
 * 
 * @returns {Promise<Object>} Promise that resolves to the quarters data object
 * @throws {Error} If the data file cannot be loaded or parsed
 */
async function loadQuarterData() {
    try {
        const response = await fetch('data/quarters.json');
        if (!response.ok) {
            throw new Error(`Failed to load quarters data: ${response.status}`);
        }
        const data = await response.json();
        return data.quarters;
    } catch (error) {
        console.error('Error loading quarter data:', error);
        throw error;
    }
}

/**
 * Renders the quarter-specific content into the page
 * 
 * @param {string} quarterId - The ID of the quarter to render (e.g., "albergheria")
 * @param {Object} quarterData - The data object for this specific quarter
 */
function renderQuarterContent(quarterId, quarterData) {
    // Update page title in header
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.textContent = quarterData.title;
    }
    
    // Update document title
    document.title = `${quarterData.title} - Sant'Agostino BnB Palermo Map`;
    
    // Render attractions list
    const attractionsList = document.getElementById('attractions-list');
    if (attractionsList) {
        // Clear existing content
        attractionsList.innerHTML = '';
        
        // Populate with attractions from data
        quarterData.attractions.forEach(attraction => {
            const li = document.createElement('li');
            li.textContent = attraction;
            attractionsList.appendChild(li);
        });
    }
}

/**
 * Generates a QR code for the current page URL
 * Requires the QRCode library to be loaded
 */
function generateQRCode() {
    const qrElement = document.getElementById('page-qrcode');
    if (qrElement && typeof QRCode !== 'undefined') {
        const currentUrl = window.location.href;
        new QRCode(qrElement, {
            text: currentUrl,
            width: 200,
            height: 200
        });
    }
}

/**
 * Escapes HTML special characters to prevent XSS attacks
 * 
 * @param {string} str - The string to escape
 * @returns {string} The escaped string safe for HTML insertion
 */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Sets up the print QR code functionality
 * 
 * @param {string} quarterTitle - The title of the quarter for the print page
 */
function setupPrintQRCode(quarterTitle) {
    const printButton = document.getElementById('printQR');
    if (!printButton) return;
    
    printButton.addEventListener('click', function() {
        const qrImage = document.getElementById('page-qrcode').querySelector('img');
        if (!qrImage) {
            console.error('QR code image not found');
            return;
        }
        
        // Escape user-controlled content to prevent XSS
        const safeTitle = escapeHtml(quarterTitle);
        const safeImageSrc = escapeHtml(qrImage.src);
        
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.write(`
            <html>
            <head>
                <title>QR Code for ${safeTitle}</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; }
                    .qr-container { margin: 20px auto; }
                    h1 { margin-bottom: 30px; }
                </style>
            </head>
            <body>
                <h1>${safeTitle} - Sant'Agostino BnB</h1>
                <div class="qr-container">
                    <img src="${safeImageSrc}" alt="QR Code for ${safeTitle}">
                    <p>Scan to explore the ${safeTitle} of Palermo</p>
                </div>
            </body>
            </html>
        `);
        
        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    });
}

/**
 * Main initialization function
 * Automatically runs when the DOM is fully loaded
 */
async function initQuarterPage() {
    // Detect which quarter page we're on
    const quarterId = detectQuarter();
    
    if (!quarterId) {
        console.error('Could not detect quarter from URL');
        return;
    }
    
    try {
        // Load all quarters data
        const quarters = await loadQuarterData();
        
        // Get data for the current quarter
        const quarterData = quarters[quarterId];
        
        if (!quarterData) {
            throw new Error(`No data found for quarter: ${quarterId}`);
        }
        
        // Render the content
        renderQuarterContent(quarterId, quarterData);
        
        // Generate QR code
        generateQRCode();
        
        // Setup print functionality
        setupPrintQRCode(quarterData.title);
        
    } catch (error) {
        console.error('Failed to initialize quarter page:', error);
        
        // Fallback: show error message to user
        const attractionsList = document.getElementById('attractions-list');
        if (attractionsList) {
            attractionsList.innerHTML = '<li style="color: red;">Error loading attractions. Please refresh the page.</li>';
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuarterPage);
} else {
    // DOM already loaded
    initQuarterPage();
}
