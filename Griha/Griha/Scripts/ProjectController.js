
function projectCtrl($scope, $timeout, Project) {
    Project.newListings().then(function (response) {
        $scope.Listings = response;
    });

    Project.getBanner().success(function (data) {
        $scope.Banners = data;
        $scope.UpdateBanner = true;
        $scope.rendered = true;
        //$timeout(initializeSlider(), 0);
    });
}