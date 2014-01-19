
function tabCtrl($scope) {

    $scope.displayTab1 = true;
    $scope.displayTab2 = false;
    $scope.displayTab3 = false;

    $scope.showTab = function (tab) {
        switch (tab) {

            case 'tab1':
                $scope.displayTab1 = true;
                $scope.displayTab2 = false;
                $scope.displayTab3 = false;
                break;
            case 'tab2':
                $scope.displayTab1 = false;
                $scope.displayTab2 = true;
                $scope.displayTab3 = false;
                break;
            case 'tab3':
                $scope.displayTab1 = false;
                $scope.displayTab2 = false;
                $scope.displayTab3 = true;
                break;
            default:
                $scope.displayTab1 = true;
                $scope.displayTab2 = false;
                $scope.displayTab3 = false;
                break;
        }
    }
}