function showCurrentWeather() {

    // Checking if browser supports Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        alert("Browser does not support geolocation.");
    }
}

function success(position) {
    // Obtaining current lat and lon
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    // Creating the API url to get JSON data
    var api = "https://api.openweathermap.org/data/2.5/";
    var weather = "weather?"
    var apiKey = "&appid=782baf5721afe320477b796dedba34f7";
    var units = "&units=metric";
    var urlWeather = api + weather + "lat=" + lat + "&lon=" + long + apiKey + units;

    // Show weather data from JSON
    $.getJSON(urlWeather, function (data) {
        $(".city").html("<p>" + data.name + "</p>");
        $(".temp").html("<p>" + data.main.temp + " &deg;C</p>");
        $(".icon").html("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $(".desc").html("<p>" + data.weather[0].description);
    });
}

showCurrentWeather();