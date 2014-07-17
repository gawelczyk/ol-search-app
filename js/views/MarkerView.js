MapSearchApp.Views.MarkerView = Backbone.View.extend({

    initialize: function (params) {

        this.model.on("change:selected", function (ob1) {
            if (this.model.isSelected()) {
                this.$el.addClass("highlighted");
            } else {
                this.$el.removeClass("highlighted");
            }
        });

    },

    template: MapSearchApp.Services.templates.get("#marker-template"),

    render: function () {
        var json = this.model.toJSON();
        var m1 = {x: json.lat * 6,
            y: json.lng * 4};
        var html = this.template(m1);
        this.$el.html(html);
        if (this.model.isSelected()) {
            this.$el.addClass("highlighted");
        }

        return this;
    }

});

// CSS class: "highlighted"
// $obj.addClass("css-class")
// $obj.removeClass("css-class")
