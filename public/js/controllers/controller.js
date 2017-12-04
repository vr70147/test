app.controller('createTaskCtrl', function( $scope, $http ) {

	$http.get('/all_family').then( response => {
		$scope.persons = response.data;
	});

	$scope.sendTask = () => {
		const task = $scope.task; 
		$http.put('/add_task', task).then( response => {
			
		});	
	};
});

app.controller('taskListCtrl', function($scope, $http ) {
	$http.get('/all_tasks').then( response => {
		$scope.tasks = response.data;
	})
});