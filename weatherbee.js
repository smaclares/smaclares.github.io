var farenheitTemp;
var celsiusTemp;
var currentTemp;
var currentDegrees = "Farenheit";

$(function(){

  $.get("http://ipinfo.io", function(response) {
      var location = " " + response.city + ", " + response.country;
      $('#location').text(location);

      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + response.city + ',' + response.country + '&APPID=561f3915ea0e4d336c664269b16ca0fd&units=imperial', function(response) {
          var temp = response.main.temp;
          temp = parseInt(temp);
          currentTemp = temp;
          var skyConditions = response.weather[0].description;
          $('#temp').text(temp + ' oF');
          $('#sky-conditions').text(skyConditions);

          function getIcon(skyConditions){
              var condition = skyConditions.toUpperCase();
              var iconName = null;

              switch (condition) {
                case 'SUNNY':
                  iconName='fa fa-sun-o';
                  break;
                case 'THUNDERSTORM':
                  iconName='fa fa-bolt';
                  break;
                case 'CLOUDY':
                  iconName='fa fa-cloud';
                  break;
                case 'RAINING':
                  iconName='fa fa-tint';
                  break;
                default:
                  iconName= 'fa fa-cloud';
                }

               $('#sky-icon').addClass(iconName);

            }getIcon(skyConditions);

      }, "jsonp");
    }, "jsonp");

    $('#temp-change').click(function(){

      celsiusTemp = (currentTemp - 32) * (5/9);
      farenheitTemp = (celsiusTemp * (9/5)) + 32;

      if (currentDegrees == "Farenheit"){
        $('#temp').text(Math.floor(celsiusTemp) + ' oC');
        currentDegrees = "Celsius";
      } else {
        $('#temp').text(farenheitTemp + ' oF');
        currentDegrees = "Farenheit";
      }

    });

});
