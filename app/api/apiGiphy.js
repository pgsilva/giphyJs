var request = require('request'); // "Request" library
var querystring = require('querystring');

var api = {};


api.getTrendingGifs = function (req, res) {
    console.log("get Trendings " + req.body.data);

    var api_key = req.body.data;

    var options = {
        url: 'https://api.giphy.com/v1/gifs/trending?api_key=' + api_key + '&limit=35&rating=G',
        //headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };

    console.log(options.url);
    // use the access token to access the Spotify Web API
    request.get(options, function (error, response, body) {
        res.json(body);
    });
};

api.getSearchGifs = function (req, res) {   
    var api_key = req.body.data.id;
    var search = req.body.data.search;

    var options = {
        url: 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + search + '&limit=35&offset=0&rating=G&lang=en',
        //headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };

    console.log(options.url);
    // use the access token to access the Spotify Web API
    request.get(options, function (error, response, body) {
        
        res.json(body);
    });
};


module.exports = api;