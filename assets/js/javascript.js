$(document).ready(function(){
    console.log("I'm ready!");
<<<<<<< HEAD
    $(".placeholder").on("click", function(weatherResults){
		var weatherURL = "https://api.wunderground.com/api/9e5b268d945691e1/conditions/weather";
=======
    $("#weatherResults").on("click", function(result){
    	console.log("Ok");
		var weatherURL = "https://api.wunderground.com/api/9e5b268d945691e1/conditions/q/CA/San_Francisco.json";
>>>>>>> 2486892adaedee3adac20909ee1273872617279b
		console.log(weatherURL);
		$.ajax({
			url: weatherURL,
			method: "GET"
<<<<<<< HEAD
=======
			dataType: "jsonp",
>>>>>>> 2486892adaedee3adac20909ee1273872617279b
		}).done(function(result){
			console.log(result);
    	}).fail(function(err){
    		throw err;
    		console.log(err);
    	});
    	var data = $("<weatherResults>");
    	data.attr("result".data)
<<<<<<< HEAD
    	$(#weatherResults).append(data)
    	$(document).on("click", ".button", weatherResults);

	});
});



var button = data target
   var alert = myAlert
   

var 
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})


$().alert()

$().alert('close')
=======
    	$("#weatherInput").append(data)
    	$(document).on("click", "button", weatherResults);
    	console.log(data);

	});
});
>>>>>>> 2486892adaedee3adac20909ee1273872617279b
