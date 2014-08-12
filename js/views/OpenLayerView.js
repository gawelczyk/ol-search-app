MapSearchApp.Views.MapView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#map-template"),

    render: function () {
        var html = this.template();
        this.$el.html(html);

        var that = this;
        this.collection.each(function (el1) {
            var markerView = new MapSearchApp.Views.MarkerView({
                model: el1
            });
            markerView.render();
            that.$el.find('.map').append(markerView.$el);
        });

        return this;
    }
});
