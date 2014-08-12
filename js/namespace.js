
var MapSearchApp = (function () {

    var app = {
        Models: {},
        Collections: {},
        Views: {},
        Services: {},
        Repositories: {},
        Krakow: { lat: 50.060, lon: 19.959 },
        KrakowArea: {
            ll: { lat: 49.9797, lon: 19.8285 },
            ur: { lat: 50.1111, lon: 20.0331 }
        }
    };

    _.extend(app, Backbone.Events);

    return app;

})();
