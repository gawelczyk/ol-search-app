MapSearchApp.Views.MapView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#map-template"),

    render: function () {
        var html = this.template();
        this.$el.html(html);
        return this;
    }
});
