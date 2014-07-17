MapSearchApp.Views.MarkerView = Backbone.View.extend({

    initialize: function (params) {
        var that = this;
        //events on model
        this.model.on("change:selected", function (ob1) {
            this.render();
        }, this);
    },

    //use for events on this.$el
    events: {
        "click": "onClick"
    },

    onClick: function () {
        //console.log(this);
        this.model.toggleSelected();
    },

    template: MapSearchApp.Services.templates.get("#marker-template"),

    render: function () {
        var json = this.model.toJSON();
        var m1 = {x: json.lat * 6,
            y: json.lng * 4};
        var html = this.template(m1);
        this.$el.html(html);
        if (this.model.isSelected()) {
            this.$el.find('.marker').addClass("highlighted");
        }

        return this;
    }

});

// CSS class: "highlighted"
// $obj.addClass("css-class")
// $obj.removeClass("css-class")
