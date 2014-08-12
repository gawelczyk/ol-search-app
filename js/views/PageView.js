MapSearchApp.Views.PageView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#page-template"),

    render: function () {
        // TODO render page view template

        var html = this.template();
        this.$el.html(html);

        // TODO for each: MapView, ListView, Details view do:
        // - create instance
        // - render
        // - print rendered html inside container

        var mapView = new MapSearchApp.Views.MapView({
            collection: this.collection
        });
        mapView.render();
        this.$el.find('.map-container').html(mapView.$el);
        //MapSearchApp.mapView = mapView;

        var listView = new MapSearchApp.Views.ListView({
            collection: this.collection
        });
        listView.render();
        this.$el.find('.list-container').html(listView.$el);

        var detailsView = new MapSearchApp.Views.DetailsView({
            collection: this.collection
        });
        detailsView.render();
        this.$el.find('.details-container').html(detailsView.$el);

        return this;

    }

});
