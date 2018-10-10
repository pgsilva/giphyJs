angular.module('dojo').controller('NavbarController', function ($scope, $http, $window,  giphy_global, $rootScope) {

    $scope.teste = teste;

    function teste() {
        console.log("salve");
        $window.location.href = 'https://giphynodejs.herokuapp.com/';
        //$window.location.href = 'http://localhost:3000/';
    };
});
