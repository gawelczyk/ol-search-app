MapSearchApp.Views.DetailsView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#details-template"),

    initialize: function (params) {
        var that = this;
        //events on model
        this.collection.on("change:selected", function (ob1) {
            this.render();
        }, this);
    },

    render: function () {

        var json;
        this.collection.where({selected: true}).forEach(function (el) {
            json = el.toJSON();
        });

        var html = this.template();
        this.$el.html(html);
        if (json) {
            this.$el.find('.details').html(json.toSource());
        }

        return this;
    }

});
