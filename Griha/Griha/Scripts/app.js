
var app = angular.module('griha', ['ui.bootstrap.modal', 'am-carousel']);

app.factory('Project', function ($q, $http) {
    var modelFolder = 'Model/'
    return {
        newListings: function () {
            var deferred = $q.defer();
            $http.get('Model/Projects.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject();
            });

            return deferred.promise;
        },

        getDetails: function (id) {
            return $http.get('Model/' + id + '.json');
        },
        getBanner: function () {
            return $http.get(modelFolder + 'Banner.json');
        }
    }
});
  

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', { templateUrl: 'Partials/Home.html', controller:projectCtrl}).
    when('/blog', { templateUrl: 'Partials/Blog.html' }).
    when('/projectDetail/:Id', { templateUrl: 'Partials/ProjectDetail.html', controller: projectDetailCtrl }).
    when('/modal', { templateUrl: 'Partials/Modal.html', controller: ModalDemoCtrl }).
    when('/image', { templateUrl: 'Partials/imageslider.html', controller: ModalDemoCtrl }).
    otherwise({ redirectTo: '/home' });
}]);



app.directive('googlemap', function () {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            //$(element).toolbar(scope.$eval(attrs.toolbarTip));
            var v = new Maplace({
                show_markers: true,
                map_div: '#' + attrs.id,
                locations: [{
                    lat: 10.120302,
                    lon: 76.386539,
                    zoom: 13
                }]
            });

            v.Load();
        }
    }
});


app.directive('amazingslider', function ($timeout) {
    return {
        restrict: 'A', 
        //scope: {ban : '='},
        link: function (scope, element, attrs) {
            initializeSlider();
        }
    }
});

