MapSearchApp.Views.ListItemView = Backbone.View.extend({

    tagName: "tr",
    className: "list-item",

    initialize: function (params) {
        var that = this;
        //events on model
        this.model.on("change:selected", function (ob1) {
            that.render();
        });
    },

    template: MapSearchApp.Services.templates.get("#list-item-template"),

    render: function () {
        var json = this.model.toJSON();
        json.checked = json.selected ? 'checked' : '';
        var html = this.template(json);
        this.$el.html(html);
        if (this.model.isSelected()) {
            this.$el.addClass('highlighted');
        } else {
            this.$el.removeClass('highlighted');
        }
        return this;
    },
    events: {
        "click input:checkbox": "onSelection"
        //"click td": "onSelection"
    },
    onSelection: function () {
        this.model.toggleSelected();
    }

});

// CSS class: "highlighted"
// $checkbox.prop("checked", true/false);
