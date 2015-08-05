'use strict';


angular.module('sportsStoreAdmin')
.constant('authUrl', 'http://localhost:9000/users/login')
.controller('authCtrl', ['$scope', '$http', '$location', 'auth',
    function ($scope, $http, $location, authUrl) {

        /**
         * authenticates a user with a pass
         * @param  {string} user is the user's name
         * @param  {pass} pass is the user's password
         */
        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            }).success(function(){
                $location.path('/main');
            }).error(function(error){
                $scope.authenticationError = error;
            });
        };
    }
]);
