(function() {

    var app = angular.module("githubViewer");//declare module

    var UserController = function($scope, github, $routeParams) {//declare controller

        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data.";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);

    };

    app.controller("UserController", UserController);//UserController

}());
