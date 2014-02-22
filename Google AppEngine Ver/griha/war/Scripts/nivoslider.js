
var app = angular.module('griha');

app.directive('nivoslider', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            jQuery("#nivoslider-30").nivoSlider({
                effect: "fade",
                slices: 10,
                boxCols: 10,
                boxRows: 10,
                animSpeed: 600,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNav: true,
                controlNavThumbs: false,
                pauseOnHover: false,
                manualAdvance: false
            });
        }
    }
});