
var app = angular.module('am-carousel', []);

app.directive('amCarousel', function () {
    return {
        restrict:'E',
        scope: {Update: '='},
        transclude: true,
        templateUrl:'template/amazingSlider/am-carousel.html',
        link: function (scope, element, attrs) {
            scope.$watch('Update', function (newValue) {
                    if (newValue) {
                        initializeSlider();
                    }
                }, true);
        }
    }
    
});

app.directive('amSlide', function ($timeout) {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        templateUrl: 'template/amazingSlider/am-slide.html',
        link: function (scope, element, attrs) {
            //console.log(element.html());
            if (scope.$last) {
                $timeout(initializeSlider(), 0);
                //scope.$evalAsync(initializeSlider(element));
                
            }

        }

    }

});
