app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        //Routing home view
        .state('home', {
            url: '/',
            views: {
                "body": {
                    templateUrl: '../views/gallery/gallery.html',
                    controller: 'LoginController'
                },
                "navbar": { templateUrl: '../views/navbar.html' }
            }
        })

});