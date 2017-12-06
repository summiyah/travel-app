$(document).ready(function(){
    console.log("I'm ready!");
    $(".placeholder").on("click", function(weatherResults){
		var weatherURL = "https://api.wunderground.com/api/9e5b268d945691e1/conditions/weather";
		console.log(weatherURL);
		$.ajax({
			url: weatherURL,
			method: "GET"
		}).done(function(result){
			console.log(result);
    	}).fail(function(err){
    		throw err;
    		console.log(err);
    	});
    	var data = $("<weatherResults>");
    	data.attr("result".data)
    	$(#weatherResults).append(data)
    	$(document).on("click", ".button", weatherResults);

	});
});