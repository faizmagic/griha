
var app = angular.module('griha');

app.directive('bslider', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            jQuery('#banner-fade').bjqs({
                height: 320,
                width: 620,
                responsive: true
            });
        }
    }
});