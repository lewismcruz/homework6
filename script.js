/*============================================================
Lewis Cruz

Weather Watcher Dashboard JavaScript Code

==============================================================*/


// URL for single city === http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// Main Dashboard card
// id  --- for city
// dt --- time of data calc
// main.temp
// main.humidity
// wind.speed
// 


// Using One Call API === https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
// exclude=hourly,daily&appid={YOUR API KEY}
// 
// Main Dashboard card
// current.dt --- current time
// current.temp
// current.humidity
// current.wind_speed
// current.uvi



// Several city IDs call http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric
// List out id for each city in the group

// daily.uvi --- for uvindex
// daily.dt --- time of forecasted data
// daily.temp.day --- day temperature
// daily.humidity --- 




// Blue 5-Day Forecast cards
// 
// daily.dt
// daily.temp.day
// daily.weather.icon -- display sun on sunny days etc.
// daily.humidity
//



// Classes to build dashboard layout
// <div class="search-bar"></div>
// <div class="bluecard" id="5-day forecast"></div>
// <div class="cities"></div>
// <div class="main"></div>

// This code will show the first weather record on the dashboard.
var city = "Houston";
var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "fa539119e1c76c914dc9c6960ad2613d";

// Use jQuery to access the AJAX method
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    var city = response.City;
    var temp = response.Temperature;
    var humid = response.Humidity;
    var windSpeed = response.Windspeed;
    var uvIndex = response.uvi;
    var day1Forecast = response.daily.temp.day  // daily.dt for day 1
    var day2Forecast = response.daily.temp.day  // daily.dt for day 2
    var day3Forecast = response.daily.temp.day  // daily.dt for day 3
    var day4Forecast = response.daily.temp.day  // daily.dt for day 4
    var day5Forecast = response.daily.temp.day  // daily.dt for day 5

    //  Create a table row with jQuery
    var $tr = $("<tr>");
    var $tdTitle = $("<td>").text(city);
    var $tdTitle = $("<td>").text(temperature);
    var $tdTitle = $("<td>").text(humidity);
    var $tdTitle = $("<td>").text(Windspeed);
    var $tdTitle = $("<td>").text(uvi);
    var $tdTitle = $("<td>").text(daily);

    // Append the td elements to the new table row
    $(tr).append($tdCity, $tdTemperature, $tdHumidity, $tdWindSpeed, $tdUVIndex);
    
    $("").append(tableRow);

});