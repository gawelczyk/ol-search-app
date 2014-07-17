MapSearchApp.Views.ListView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#list-template"),

    render: function () {
        var html = this.template();
        this.$el.html(html);
        return this;
    }

});
