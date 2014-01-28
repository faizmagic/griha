
function projectCtrl($scope, Project) {
    Project.newListings().then(function (response) {
        $scope.Listings = response;
    });
}