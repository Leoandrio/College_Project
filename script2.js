function previewDocument(event) {
    const inputFile = event.target.files[0];
    const previewMessage = document.getElementById("preview-message");
    const previewContainer = document.getElementById("preview-container");

    if (!inputFile) {
        previewMessage.style.display = "block";
        previewMessage.textContent = "No document selected.";
        return;
    }

    previewMessage.style.display = "block";
    previewMessage.textContent = "Preview not available for documents.";
}

function convertDocument() {
    const inputFile = document.getElementById("input_file").files[0];
    const formatSelect = document.getElementById("format-select");
    const format = formatSelect.options[formatSelect.selectedIndex].value;

    if (!inputFile) {
        alert("Please select a document to convert.");
        return;
    }

    // Add the document conversion logic here based on the selected format.
    // You may need to use a third-party library or API for document conversion.
    // Update the code accordingly based on the chosen solution.
    alert(`Conversion logic for ${format} not implemented.`);
}
