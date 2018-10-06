angular.module('dojo').controller('GalleryController', function ($scope, $http, giphy_global) {

    $scope.gifs = [];
    $scope.request = {};
    $scope.getTrending = getTrending; 
    $scope.buscar = buscar;
    $scope.inputbusca = "";

    init();

    function init() {
        getTrending();
    };

    function getTrending() {
        $scope.request.data = giphy_global.id_giphy;
        var promise = $http.post('api/trending', $scope.request);
        promise.then(function (res) {
            console.log(res);
            $scope.gifs = res.data.data;
        }).catch(function (erro) {
            console.log(erro);
        });
    };

    function buscar(){
        $scope.request.data.id = giphy_global.id_giphy;
        $scope.request.data.search = $scope.inputbusca;

        var promise = $http.post('api/search', $scope.request);
        promise.then(function (res) {
            console.log(res);
            $scope.gifs = res.data.data;
        }).catch(function (erro) {
            console.log(erro);
        });
    }
});
