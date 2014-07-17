MapSearchApp.Views.DetailsView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#details-template"),

    render: function () {
        var html = this.template();
        this.$el.html(html);
        return this;
    }

});
