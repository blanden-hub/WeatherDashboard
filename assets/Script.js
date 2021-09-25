let apiKey = "5fef829fb0865a5d070cfde40c595fb9"
let city = "Detroit"
let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"

$(document).ready(function () {



    $.ajax({
        method: "GET",
        url: queryURL





})