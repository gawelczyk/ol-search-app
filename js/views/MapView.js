MapSearchApp.Views.MapView = Backbone.View.extend({
    map: null,

    template: MapSearchApp.Services.templates.get("#map-template"),

    initialize: function () {
        this.createOL();

        MapSearchApp.on('afterRender', function () {
            this.afterRender();
        }, this);
    },

    createOL: function () {
        var myLocation = new OpenLayers.Geometry.Point(10.2, 48.9).transform('EPSG:4326', 'EPSG:3857');
        myLocation = new OpenLayers.Geometry.Point(MapSearchApp.Krakow.lon, MapSearchApp.Krakow.lat).transform('EPSG:4326', 'EPSG:3857');
        var osm = new OpenLayers.Layer.OSM(undefined, undefined, { buffer: 1 });
        this.map = new OpenLayers.Map({
            //projection:'EPSG:4326',
            projection: "EPSG:3857",
            //projection: new OpenLayers.Projection("EPSG:102113"),
            theme: null,
            layers: [osm],
            center: myLocation.getBounds().getCenterLonLat(),
            zoom: 10
        });

        //this.map.addLayer(osm);
        this.map.addControl(new OpenLayers.Control.MousePosition({ displayProjection: new OpenLayers.Projection("EPSG:4326") }));
        MapSearchApp.map = this.map;
    },

    render: function () {
        var html = this.template();

        this.$el.html(html);

        this.map.render(this.$el.find("#map")[0]);

        var mapLayer = new OpenLayers.Layer.Vector("estates", {
            //projection: "EPSG:4326",
            eventListeners: {
                'featureselected': function (evt) {
                    log("selected", arguments);
                },
                'featureclick': function (evt) {
                    log("click", arguments)
                },
                'loadend': function (evt) {
                    log("loadend", arguments);
                }
            }
        });

        var that = this;
        var ff = [];
        this.collection.each(function (el1) {
            //var markerView = new MapSearchApp.Views.MarkerView({
            //    model: el1
            //});
            //markerView.render();
            //that.$el.find('.map').append(markerView.$el);
            var g = new OpenLayers.Geometry.Point(el1.attributes.lng, el1.attributes.lat);
            g = g.transform('EPSG:4326', that.map.getProjection())
            ff.push(new OpenLayers.Feature.Vector(g, { street: el1.attributes.street, id: el1.attributes.id }));
        });
        mapLayer.addFeatures(ff)
        this.map.addLayer(mapLayer);
        return this;
    },

    afterRender: function () {
        this.map.render(this.$el.find("#map")[0]);
        console.log("afterrender");
    }
});
