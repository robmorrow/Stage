(function () {
    cashierViewModel = function (data) {
        var self = this;

        self.depositMethods = ko.observableArray(data.depositMethods);
        self.withdrawalMethods = ko.observableArray(data.withdrawalMethods);

        self.largestMinimum = ko.computed(function () {
            var largest = 0;
            for (i = 0; i < self.depositMethods().length; i++) {
                largest = Math.max(self.depositMethods()[i].MinAmountValue, largest);
            }
            for (i = 0; i < self.withdrawalMethods().length; i++) {
                largest = Math.max(self.withdrawalMethods()[i].MinAmountValue, largest);
            }
            return largest;
        },this);

        self.largestMaximum = ko.computed(function () {
            var largest = 0;
            for (i = 0; i < self.depositMethods().length ; i++) {
                largest = Math.max(self.depositMethods()[i].MaxAmountValue, largest);
            }
            for (i = 0; i < self.withdrawalMethods().length; i++) {
                largest = Math.max(self.withdrawalMethods()[i].MaxAmountValue, largest);
            }
            return largest;
        }, this);

        self.calculateMinimumPercentage = function (data) {
            return (Math.log(data) / Math.log(self.largestMinimum()))*100;
        }

        self.calculateMaximumPercentage = function (data) {
            return (Math.log(data) / Math.log(self.largestMaximum())) * 100;
        }
    }
}
)();