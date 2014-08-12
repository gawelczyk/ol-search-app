MapSearchApp.Repositories.realEstateRepository = (function () {

    var STREETS = _(["Rzeckiego", "Jaspisowa", "Nowy Swiat", "Balcera", "Naleczowska"]);
    var REAL_ESTATES_DATA = [];

    var gen1 = function () {
        for (var i = 0; i < 10; i++) {
            REAL_ESTATES_DATA.push({
                id: 100 + i,
                street: STREETS.sample() + " " + Math.floor(randomBetween(1, 90)),
                lat: randomBetween(1, 100),
                lng: randomBetween(1, 100)
            });
        }
    };

    var genKr = function () {
        for (var i = 0; i < 50; i++) {
            REAL_ESTATES_DATA.push({
                id: 100 + i,
                street: STREETS.sample() + " " + Math.floor(randomBetween(1, 90)),
                lat: randomBetween(MapSearchApp.KrakowArea.ll.lat, MapSearchApp.KrakowArea.ur.lat),
                lng: randomBetween(MapSearchApp.KrakowArea.ll.lon, MapSearchApp.KrakowArea.ur.lon)
            });
        }
    };

    genKr();
    var realEstatesList = new MapSearchApp.Collections.RealEstateList(REAL_ESTATES_DATA);

    function getAll() {
        return realEstatesList;
    }

    return {
        getAll: getAll
    };
})();
