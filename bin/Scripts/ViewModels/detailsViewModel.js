(function () {
    detailsViewModel = function (data) {
        var self = this;
        self.Name = ko.observable(data.Name);
        self.CouponCode = ko.observable(data.CouponCode);
        self.AltCouponCode = ko.observable(data.AltCouponCode);
        self.ImageUrl = ko.observable(data.ImageUrl);
        self.Description = ko.observable(data.Description);
        self.Terms = ko.observable(data.Terms);
        self.AltTerms = ko.observable(data.AltTerms);
    }
}
)();