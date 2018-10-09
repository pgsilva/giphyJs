angular.module('dojo').controller('GalleryController', function ($scope, $http, giphy_global, $rootScope) {

    $scope.gifs = [];
    $scope.request = {};
    $scope.requestSearch = {
        data: {}
    };
    $scope.getTrending = getTrending;
    $scope.buscar = buscar;
    $scope.teste = teste;

    $scope.inputbusca = "";
    $scope.cont = 0;
    $scope.valida = 20;
    $scope.gifsGlobal = [];
    $scope.loading = true;

    init();

    function init() {
        $scope.request.data = giphy_global.id_giphy;
        var promise = $http.post('api/trending', $scope.request);
        promise.then(function (res) {
            $scope.gifsGlobal = res.data.data;
            console.log($scope.gifsGlobal);
            $scope.loading = false;
        }).catch(function (erro) {
            console.log(erro);
        });
    };

    function getTrending() {

        $scope.gifs = [];
        for (i = $scope.cont; i < $scope.valida; i++) {
            if ($scope.gifsGlobal[i]) {
                $scope.gifs.push($scope.gifsGlobal[i]);
            }
        }
        $scope.valida += 20;
        $scope.cont += 20;
    };

    function buscar() {

        $scope.loading = true;
        $scope.gifs = [];

        $scope.requestSearch.data.id = giphy_global.id_giphy;
        $scope.requestSearch.data.search = $scope.inputbusca;

        var promise = $http.post('api/search', $scope.requestSearch);
        promise.then(function (res) {
          
            console.log(res);
            $scope.loading = false;
        }).catch(function (erro) {
            console.log(erro);
        });
    }

    function teste() {
        console.log("salve");
    };
});
