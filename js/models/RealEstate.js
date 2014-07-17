MapSearchApp.Models.RealEstate = Backbone.Model.extend({
    // TODO add methods:
    // isSelected()
    // toggleSelected()

    initialize: function (params) {
        params = params || {};
        this.set('selected', !!params.selected);
    },

    isSelected: function () {
        return this.get('selected');
    },

    toggleSelected: function () {
        this.set('selected', !this.get('selected'));
    }
});

// TODO: comment out
function testRealEstate() {
    var re = new MapSearchApp.Models.RealEstate();
    console.log(re.isSelected(), "should be false"); // false
    re.toggleSelected();
    console.log(re.isSelected(), "should be true"); // true
    re.toggleSelected();
    console.log(re.isSelected(), "should be false"); // false
}
//testRealEstate();
