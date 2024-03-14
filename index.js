document.getElementById('upload').addEventListener('change', function() {
    var files = this.files;
    for (var i = 0; i < files.length; i++) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var image = new Image();
            image.src = e.target.result;
            document.getElementById('gallery').appendChild(image);
        };
        reader.readAsDataURL(files[i]);
    }
});
