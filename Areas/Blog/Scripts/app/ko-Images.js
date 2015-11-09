// Header image upload
function ImagesViewModel(Images) {
    var self = this;

    self.FeaturedImage = new Image(Images.FeaturedImage);
    self.HeaderImage = new Image(Images.HeaderImage);

};

function Image(data) {
    var self = this;

    self.isUploading = ko.observable(data.isUploading || false);
    self.imageUrl = ko.observable(data.imageUrl || '');
    self.upload = function (file) {
        self.isUploading(true);

        //perform the uplaod
        cwg.blog.admin.uploadImage(file, function (response) {
            //update the hidden field in our model with the url of the newly uploaded file
            console.log(response.Url);
            self.imageUrl(response.Url);

            self.isUploading(false);
        });
    };

    self.hasImage = ko.pureComputed(function () { return self.imageUrl().length > 1; });
};