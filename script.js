function previewImage(event) {
    const inputFile = event.target.files[0];
    const previewImage = document.getElementById("preview-image");
    const previewContainer = document.getElementById("preview-container");

    if (!inputFile) {
        previewImage.style.display = "none";
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = "block";
    };
    reader.readAsDataURL(inputFile);
}

function convertImage() {
    const inputFile = document.getElementById("input_file").files[0];
    const formatSelect = document.getElementById("format-select");
    const format = formatSelect.options[formatSelect.selectedIndex].value;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = URL.createObjectURL(inputFile);
    image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const dataURL = canvas.toDataURL(`image/${format}`);
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `converted-image.${format}`;
        link.click();
    };
}
