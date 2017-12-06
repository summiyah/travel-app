$(document).ready(function(){
    console.log("I'm ready!");

    $(".placeholder").on("click", function(){
		var weatherURL = "https://wunderground.com/search?y=" + weather + fahreinheit + celsius + temperature + precipitation + "=&plot=short&apikey=9e5b268d945691e1";

		$.ajax({
			url: weatherURL,
			method: "GET"
		}).done(function(result){
			console.log(result);
    	}).fail(function(err){
    		throw err;
    		console.log(err);
    	});
	});

});