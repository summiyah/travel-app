$(document).ready(function() {
    console.log("I'm ready!");
    $(".placeholder").on("click", function(weatherResults) {
        var weatherURL = "https://api.wunderground.com/api/9e5b268d945691e1/conditions/weather";
        $("#weatherResults").on("click", function(result) {
            console.log("Ok");
            var weatherURL = "https://api.wunderground.com/api/9e5b268d945691e1/conditions/q/CA/San_Francisco.json";
            console.log(weatherURL);
            $.ajax({
                url: weatherURL,
                method: "GET"
                dataType: "jsonp",
            }).done(function(result) {
                console.log(result);
            }).fail(function(err) {
                throw err;
                console.log(err);
            });
            var data = $("<weatherResults>");
            data.attr("result".data)
            $(#weatherResults).append(data)
            $(document).on("click", ".button", weatherResults);
        });
    });
    var button = data target
    var alert = myAlert
    var $('#myAlert').on('closed.bs.alert', function() {
        // do something…
    })
    $().alert()
    $().alert('close')
    $("#weatherInput").append(data)
    $(document).on("click", "button", weatherResults);
    console.log(data);
});

// // Add user Google Maps search request link to html
// google maps search request documentation (protocol and parametersgenerated, just add api key)
// https://maps.googleapis.com/maps/api/place/textsearch/output?parameters