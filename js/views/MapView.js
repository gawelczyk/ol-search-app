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
        this.map = new OpenLayers.Map({
            projection: "EPSG:3857",
            theme: null,
            layers: [new OpenLayers.Layer.OSM(undefined, undefined, { buffer: 1 })],
            center: myLocation.getBounds().getCenterLonLat(), zoom: 10
        });
    },

    render: function () {
        var html = this.template();

        this.$el.html(html);

        this.map.render(this.$el.find("#map")[0]);
        //this.map.render(this.el);
        //var that = this;
        //this.collection.each(function (el1) {
        //    var markerView = new MapSearchApp.Views.MarkerView({
        //        model: el1
        //    });
        //    markerView.render();
        //    that.$el.find('.map').append(markerView.$el);
        //});
        return this;
    },

    afterRender: function () {
        this.map.render(this.$el.find("#map")[0]);
        console.log("afterrender");
    }
});
