var ModalDemoCtrl = function ($scope, $modal, $log) {

    

    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'Partials/imageslider.html'
            //controller: ModalInstanceCtrl
        });
    };
};

//var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

//    $scope.items = items;
//    $scope.selected = {
//        item: $scope.items[0]
//    };

//    $scope.ok = function () {
//        $modalInstance.close($scope.selected.item);
//    };

//    $scope.cancel = function () {
//        $modalInstance.dismiss('cancel');
//    };
//};