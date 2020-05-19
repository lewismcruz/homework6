/*============================================================
Lewis Cruz

Weather Watcher Dashboard JavaScript Code

==============================================================*/

// Looked at several API calls to try to implement. Note of different parameters for each.


// Classes to build dashboard layout
// Append elements using jQuery
// <div class="search-bar"></div>
// <div class="bluecard" id="5-day forecast"></div>
// <div class="cities"></div>
// <div class="main"></div>



//===================== AJAX Queries ======================

// This key finally worked
var APIKey = "4e24577c312ef05041659585b53aecfb";

// API URL to use for 5 day forecast 
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=Houston&units=imperial&appid=" + APIKey;

// Use jQuery to access the AJAX method
// Make sure jQuery 3.2.1 is referenced in index.html
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(queryURL);
    console.log(response);

    var city = response.city.name;
    console.log(city);
    var temp = response.list[0].main.temp;
    console.log("Temperature:" + temp + " °F");
    var humid = response.list[0].main.humidity;
    console.log("Humidity:" + humid + " %");
    var windSpeed = response.list[0].wind.speed;
    console.log("Windspeed:" + windSpeed + " MPH");
    var day1forecastTemp = response.list[1].main.temp;
    console.log("Temp: " + day1forecastTemp + "°F");
    var day1forecastHumid = response.list[1].main.humidity;
    console.log("Humidity: " + day1forecastHumid + "%");
    
    var weatherIcon1 = response.list[1].weather[0].icon;
    console.log("This is the weather icon" + weatherIcon1 + "Here.");
    
    var day2forecastTemp = response.list[2].main.temp;
    
    var day2forecastHumid = response.list[2].main.humidity;

    var weatherIcon2 = response.list[2].weather[0].icon;
    console.log("This is the weather icon" + weatherIcon2 + "Here.");


    var day3forecastTemp = response.list[3].main.temp;
    
    var day3forecastHumid = response.list[3].main.humidity;

    var weatherIcon3 = response.list[3].weather[0].icon;
    console.log("This is the weather icon" + weatherIcon3 + "Here.");


    var day4forecastTemp = response.list[4].main.temp;
    
    var day4forecastHumid = response.list[4].main.humidity;

    var weatherIcon4 = response.list[4].weather[0].icon;
    console.log("This is the weather icon" + weatherIcon4 + "Here.");



    var day5orecastTemp = response.list[5].main.temp;
    
    var day5forecastHumid = response.list[5].main.humidity;

    var weatherIcon5 = response.list[5].weather[0].icon;
    console.log("This is the weather icon" + weatherIcon5 + "Here.");


// Now to dynamically create and update html page with elements
// created here with jQuery and appended to DOM.


    $(".city").html(city);
    
    var tableRow = $("<tr>");
    
    //  Create a table row with jQuery
    var $tr = $("<tr>");
    var $tdTitle = $("<td>").text(city);
    //var $tdTitle = $("<td>").text(main);
    //var $tdTitle = $("<td>").text(humidity);
    //var $tdTitle = $("<td>").text(Windspeed);
    //var $tdTitle = $("<td>").text(uvi);
    //var $tdTitle = $("<td>").text(daily);

    // Append the td elements to the new table row
    $(tr).append($tdCity); //, $tdTemperature, $tdHumidity, $tdWindSpeed, $tdUVIndex);
    
    $("").append(tableRow);
 
});

//================ Second API Call ===========================================================
// Did a second API call using the One Call API here in order to pull UV Index value
// not available or found in forecast API.
// LAT and LON for Houston --- will have to hard code lat and lon for several cities
// Or create city lat/lon array and for loop through it to generate all calls for cities
// listed on dashboard.
var lat = 61.63028;
var lon = -149.818054;

var cityCardQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&appid=" + APIKey;

$.ajax({
    url: cityCardQueryURL,
    method: "GET"
}).then(function(response){
    console.log(cityCardQueryURL);
    console.log(response);

    var uvIndex = response.daily[0].uvi;
    console.log("UV Index " + uvIndex);

    // Need to create html elements here
    // and append with jQuery.


});
