angular.module('myApp', ['ngAnimate'])
.controller('mainController', function($scope){

	$scope.formData = {};

	$scope.formData.name = 'Yo';
	$scope.formData.dirty_task = 'doing laundry';
	$scope.formData.obnoxious_celebrity = 'Paris Hilton';
	$scope.formData.job_title = 'CEO';
	$scope.formData.celebrity = 'Matt Damon';
	$scope.formData.huge_number = 1000000;
	$scope.formData.tedious_task = 'debugging';
	$scope.formData.useless_skill = 'investing';
	$scope.formData.adjective = 'beautiful';
	$scope.formData.gender = 'male';

	if($scope.formData.gender === 'male') {
		$scope.formData.name_sub = 'he';
		$scope.formData.name_obj = 'him';
		$scope.formData.name_pos = 'his';
	} else if($scope.formData.gender === 'female') {
		$scope.formData.name_sub = 'she';
		$scope.formData.name_obj = 'her';
		$scope.formData.name_pos = 'hers';
	}

	function init_pgview(goto_page) {
		if (goto_page === 1) {
			$scope.page1 = true;
			$scope.page2 = false;
			$scope.submitted = false;
			$scope.formData.gender = 'male';
		} else if (goto_page === 2) {
			$scope.page1 = false;
			$scope.page2 = true;
			$scope.submitted = true;
			$scope.formData.gender = 'male';
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