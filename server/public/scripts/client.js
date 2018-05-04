var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function ($routeProvider, $locationProvider) { 
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'PostController as pc',
        })
        .when('/gallery', {
            templateUrl: '/views/templates/gallery.html',
            controller: 'PostController as pc',
        })
    .otherwise({
        redirectTo: 'home'
    });
});