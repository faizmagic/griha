
function projectDetailCtrl($scope, $routeParams, $modal, Project) {
    Project.getDetails($routeParams.Id).success(function (response) {
        $scope.details = response;
    })

    //$scope.open = function () {
    //   // $event.preventDefault();

    //    var modalInstance = $modal.open({
    //        templateUrl: 'Partials/imageslider.html'
    //        //controller: ModalInstanceCtrl
    //    });
    //};

    Project.getBanner().success(function (data) {
        $scope.Banners = data;
    });
};