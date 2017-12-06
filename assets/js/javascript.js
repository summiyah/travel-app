$(document).ready(function(){
    console.log("I'm ready!");
    $("#weatherResults").on("click", function(result){
    	console.log("Ok");
		var weatherURL = "https://api.wunderground.com/api/9e5b268d945691e1/conditions/q/CA/San_Francisco.json";
		console.log(weatherURL);
		$.ajax({
			url: weatherURL,
			method: "GET"
			dataType: "jsonp",
		}).done(function(result){
			console.log(result);
    	}).fail(function(err){
    		throw err;
    		console.log(err);
    	});
    	var data = $("<weatherResults>");
    	data.attr("result".data)
    	$("#weatherInput").append(data)
    	$(document).on("click", "button", weatherResults);
    	console.log(data);

	});
});