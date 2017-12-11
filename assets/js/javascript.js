$(document).ready(function(){
    console.log("I'm ready!");

    $("#weatherSearch").on("click", function(event){
    	event.preventDefault();
        console.log("Ok");
        var appID = "3c928fc95e9915807e894de66361755c";
        var apiURL = "https://api.openweathermap.org/data/2.5/weather?";
        var queryString = $.param({
            q: $("#weatherInput").val(),
            appid: appID
        });

        console.log(queryString);

        $.ajax({
            url: apiURL + queryString,
            method: "GET"
        }).done(function(response){
            console.log(response);
            $("#city").html("<h1>" + "City Name: " + response.name + "</h1>");
            $("#wind").text("Wind Speed: " + response.wind.speed);
            $("#humidity").text("Humidity: " + response.main.humidity);
            $("#temp").html("Temperature (F): " + response.main.temp + "&deg;")
            // SAMPLE RESPONSE for london,uk
            // GET http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
            // {
            //     "coord": {"lon": -0.13, "lat": 51.51},
            //     "weather": [{"id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d"}],
            //     "base": "stations",
            //     "main": {"temp": 280.32, "pressure": 1012, "humidity": 81, "temp_min": 279.15, "temp_max": 281.15},
            //     "visibility": 10000,
            //     "wind": {"speed": 4.1, "deg": 80},
            //     "clouds": {"all": 90},
            //     "dt": 1485789600,
            //     "sys": {"type": 1, "id": 5091, "message": 0.0103, "country": "GB", "sunrise": 1485762037, "sunset": 1485794875},
            //     "id": 2643743,
            //     "name": "London",
            //     "cod": 200
            // }
            // TODO: What dom/html do you want to append?
            // look at the data above and turn it into dom/html
        }).fail(function (error) {
            // log the error so we know when it doesn't work
            console.error(error);
            $("#error").text("Error. Please try again.")

        })
    });

});


