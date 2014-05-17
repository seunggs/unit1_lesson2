angular.module('myApp', [])
.controller('mainController', function($scope){
	$scope.name = 'Yo';
	$scope.dirty_task = 'doing laundry';
	$scope.obnoxious_celebrity = 'Paris Hilton';
	$scope.job_title = 'CEO';
	$scope.celebrity = 'Matt Damon';
	$scope.huge_number = 'gazillion';
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
});