let apiKey = "5fef829fb0865a5d070cfde40c595fb9"

$(document).ready(function () {

    $("#city-input-btn").on("click", function (event) {
        event.preventDefault()
        let citySearch = $("#city-input").val()
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {



            console.log(response)


            function dayOne() {

                // $("#day-1-name").text(response.)
                $("#day-1-date").text("Date:" + response.list[2].dt_txt)
                $("#day-1-temp").text("Temp:" + response.list[2].main.temp)
                $("#day-1-humidity").text("Humidity:" + response.list[2].main.humidity)
                $("#day-1-wind").text("Windspeed:" + response.list[2].wind.speed + "km/hr")
                // $("#")
            }

            dayOne()

            
        });










    })


})
