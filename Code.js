
/**
 * Cashier Report System – Google Apps Script
 * Serves the POS web application.
 */
function doGet() {
    return HtmlService.createTemplateFromFile('index')
        .evaluate()
        .setTitle('Cashier Report System')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Include helper – used inside HTML templates as:
 *   <?!= include('filename'); ?>
 * The filename must match an HTML file in the Apps Script project
 * (no extension needed – GAS strips it automatically).
 */
function include(filename) {
    // Instead of createHtmlOutputFromFile, we use createTemplateFromFile
    // This forces Apps Script to look for and execute ANY tags inside the included files
    return HtmlService.createTemplateFromFile(filename).evaluate().getContent();
}