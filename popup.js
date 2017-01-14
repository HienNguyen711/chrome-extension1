//app.js: declare routes
(function(){

    var app = angular.module("githubViewer", ["ngRoute"]);//inject ngRoute

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"});
    });

}());

//end here
document.addEventListener('DOMContentLoaded', function () {
  dumpBookmarks();
});
