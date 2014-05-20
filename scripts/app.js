angular.module('myApp', [])
.controller('mainController', function($scope){
	$scope.formData.name = 'Yo';
	$scope.formData.dirty_task = 'doing laundry';
	$scope.formData.obnoxious_celebrity = 'Paris Hilton';
	$scope.formData.job_title = 'CEO';
	$scope.formData.celebrity = 'Matt Damon';
	$scope.formData.huge_number = 1000000;
	$scope.formData.tedious_task = 'debugging';
	$scope.formData.useless_skill = 'investing';
	$scope.formData.adjective = 'beautiful';

	$scope.gender = 'male';
	if($scope.gender === 'male') {
		$scope.name_sub = 'he';
		$scope.name_obj = 'him';
		$scope.name_pos = 'his';
	} else if($scope.gender === 'female') {
		$scope.name_sub = 'she';
		$scope.name_obj = 'her';
		$scope.name_pos = 'hers';
	}

	function init_pgview(goto_page) {
		if (goto_page === 1) {
			$scope.page1 = true;
			$scope.page2 = false;
			$scope.submitted = false;
		} else if (goto_page === 2) {
			$scope.page1 = false;
			$scope.page2 = true;
			$scope.submitted = true;			
		}
 	}

	init_pgview(1);

	$scope.validate = function() {
		if($scope.madlibs_form.$valid) {
			init_pgview(2);
		}
	};

	$scope.reset = function() {
		
		init_pgview(1);

		$scope.formData = {};
		
	};
});