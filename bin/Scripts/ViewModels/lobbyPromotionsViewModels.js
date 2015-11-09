(function () {
    lobbyPromotionsViewModel = function (data) {
        var self = this;

        self.selectedPromotion = ko.observable('Welcome');
        self.promotions = ko.observableArray(data.Promotions);

        //Added for compatibility with IE7
        self.apply = function () { return; };
    }
})();