
function projectDetailCtrl($scope, $routeParams, $modal, Project) {
    
	Project.getDetails($routeParams.Id).success(function (response) {
        $scope.details = response;
    })

    $scope.open = function () {
       // $event.preventDefault();

        var modalInstance = $modal.open({
            templateUrl: 'Partials/imageslider.html'
            //controller: ModalInstanceCtrl
        });
    };
    
    initialiseModel();
    
    $scope.sendMail = function(){
    	Project.sendMail($scope.contactUs).success(function(response)
    	{
    		console.log(response);
    		$scope.displaySendMailConf = true;
    		$scope.displayContactForm = false;
    		$scope.contactUs.clear();
    		
    	}).error(function(response){
    		console.log('sendMail failed')
    	});
    }
    

    function initialiseModel()
    {
    	$scope.displayContactForm = true;
    	$scope.contactUs = {
				name : "",
				email: "",
				phone: "",
				message: "",
				propertyName: ""
			};
    	
    	$scope.contactUs.clear = function()
    	{
    		this.email = "";
    		this.name = "";
    		this.phone = "";
    		this.message = "";
    	}
    }
    
};

