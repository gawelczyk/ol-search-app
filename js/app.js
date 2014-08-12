MapSearchApp.init = function() {
	var realEstates = MapSearchApp.Repositories.realEstateRepository.getAll();
	var pageView = new MapSearchApp.Views.PageView({
		collection : realEstates
	});
	pageView.render();
	$(".js-app").html(pageView.$el);
};

Map.init = function() {
};

$(function() {
	MapSearchApp.init();
});
