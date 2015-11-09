window.cwg = window.cwg || {};

window.cwg.blog = window.cwg.blog || {};

window.cwg.blog.admin = function ($) {
    var $editor;

    var initHtmlEditor = function (selector) {
        $editor = $(selector).summernote({
            onImageUpload: function (files) {
                uploadImage(files[0], function (response) {
                    $editor.summernote('editor.insertImage', response.Url);
                });
            }
        });
    };

    var uploadImage = function (file, callback) {
        var data = new FormData();
        data.append("image", file);
        $.ajax({
            data: data,
            type: "POST",
            url: "/admin/blog/image-admin/create",
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                callback(response);
            }
        });
    };

    return {
        initHtmlEditor: initHtmlEditor,
        uploadImage: uploadImage
    };

}(jQuery);