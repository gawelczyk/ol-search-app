MapSearchApp.Collections.RealEstateList = Backbone.Collection.extend({

    model: MapSearchApp.Models.RealEstate,

    // TODO: observe models isSelected()
    initialize: function (params) {
        this.on("change:selected", function (ob1) {

//            //version 2
            if (ob1.isSelected()) {
                this.where({selected: true}).forEach(function (el) {
                    if (el !== ob1)
                        el.set('selected', false);
                });
            }

            //version 1
            //console.log('arguments', arguments);
//            if (ob1.isSelected()) {
//                this.each(function (el) {
//                    //console.log('el', el);
//                    if (el != ob1 && el.isSelected())
//                        el.set('selected', false);
//                });
//            }

        });
    }
});

function testRealEstateList() {
    var json = [
        {selected: false},
        {selected: false},
        {selected: false}
    ];
    var collection = new MapSearchApp.Collections.RealEstateList(json);

    var re = collection.at(1);
    re.toggleSelected();
    var selectedList = collection.pluck("selected");
    console.log(selectedList, "should be: F, T, F"); // => F, T, F

    re = collection.at(0);
    re.toggleSelected();
    selectedList = collection.pluck("selected");
    console.log(selectedList, "should be: T, F, F"); // => T, F, F

    re = collection.at(2);
    re.toggleSelected();
    selectedList = collection.pluck("selected");
    console.log(selectedList, "should be: F, F, T"); // => F, F, T
}
//testRealEstateList();

//
// TODO*: implement sortBy(attrName, reverse = false)
//collection.comparator = function(re1, re2) {
//  return re1.get("name") >= re2.get("name");
//};
//collection.sort();
