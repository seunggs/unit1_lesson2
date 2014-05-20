angular.module('myApp', [])
.controller('mainController', function($scope){
	$scope.name = 'Yo';
	$scope.dirty_task = 'doing laundry';
	$scope.obnoxious_celebrity = 'Paris Hilton';
	$scope.job_title = 'CEO';
	$scope.celebrity = 'Matt Damon';
	$scope.huge_number = 1000000;
	$scope.tedious_task = 'debugging';
	$scope.useless_skill = 'investing';
	$scope.adjective = 'beautiful';

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

		$scope.name = '';
		$scope.dirty_task = '';
		$scope.obnoxious_celebrity = '';
		$scope.job_title = '';
		$scope.celebrity = '';
		$scope.huge_number = 0;
		$scope.tedious_task = '';
		$scope.useless_skill = '';
		$scope.adjective = '';
		
	};
});