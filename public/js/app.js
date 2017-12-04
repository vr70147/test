const app = angular.module('app', ["ngRoute"]);
 
app.config( $routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl : "task-list.html"
    })
    .when("/addtask", {
        templateUrl : "create-task.html",
        controller : "createTaskCtrl"
    })
    .when("/tasklist", {
        templateUrl : "task-list.html",
        controller : "taskListCtrl"
    });
});