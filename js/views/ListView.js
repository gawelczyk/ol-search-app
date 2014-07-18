MapSearchApp.Views.ListView = Backbone.View.extend({

    template: MapSearchApp.Services.templates.get("#list-template"),
    initialize: function (params) {
        this.collection.on('sort', function () {
            this.render();
        }, this);
    },
    render: function () {
        var html = this.template();
        this.$el.html(html);
        var that = this;
        this.collection.each(function (ob) {
            var elementView = new MapSearchApp.Views.ListItemView({
                model: ob
            });
            elementView.render();
            that.$el.find('.items-container').append(elementView.$el);
        });

        return this;
    },
    events: {
        "click .js-selected": "onSortSelected",
        "click .js-street": "onSortStreet",
        "click .js-lng": "onSortLng",
        "click .js-lat": "onSortLat"
    },
    onSortSelected: function () {
        this.onSort('selected');
    },
    onSortStreet: function () {
        this.onSort('street');
    },
//    onSortStreet: function () {
//        console.log('onSortStreet');
//    },
    onSortLng: function () {
        this.onSort('lng');
    },
    onSortLat: function () {
        this.onSort('lat');
    },
    onSort: function (column) {
        if (this.collection.comparator == column) {
            this.collection.sort();
            console.log('onSort', 'desc');
        }
        else {
            this.collection.comparator = column;
            this.collection.sort();
        }
        console.log('onSort', arguments);
    }
})
;
