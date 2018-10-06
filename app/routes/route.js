module.exports = function (app) {
    var api = app.api.apiGiphy;

    //config de rotas
    app.post('/api/trending', api.getTrendingGifs);
    app.post('/api/search', api.getSearchGifs);

};
