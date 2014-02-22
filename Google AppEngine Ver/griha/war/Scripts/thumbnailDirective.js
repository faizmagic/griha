
var app1 = angular.module('griha');

app1.directive('thumbnailview', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            Grid.init();
        }
    }
});