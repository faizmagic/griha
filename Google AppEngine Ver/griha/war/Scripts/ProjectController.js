
function projectCtrl($scope, Project) {
    Project.newListings().then(function (response) {
        $scope.Listings = response;
    });
    
    $scope.myInterval = 5000;
    var slides = $scope.slides = [{
                                    image: 'http://www.slidesjs.com/img/example-slide-350-1.jpg',
                                    text:'example 1'
    },
    {
        image: 'http://www.slidesjs.com/img/example-slide-350-2.jpg',
        text:'example 2'
    },
    {
        image: 'http://www.slidesjs.com/img/example-slide-350-3.jpg',
        text:'example 3'
    }
    ];

    //$scope.addSlide = function() {
    //  var newWidth = 600 + slides.length;
    //  slides.push({
    //    image: 'http://placekitten.com/' + newWidth + '/300',
    //    text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    //      ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //  });
    //};
    //for (var i=0; i<4; i++) {
    //    $scope.addSlide();
    //  }
}