"use strict";
/*
 Write a program that takes temperature and
 check it. If it is cold then suggest the user
  to wear warm clothes and so on according to the weather.
*/
function suggestClothing(temperature) {
    if (temperature < 0) {
        return "It's very cold. Wear heavy winter clothes.";
    }
    else if (temperature < 10) {
        return "It's cold. Wear a jacket and layers.";
    }
    else if (temperature < 20) {
        return "It's cool. A sweater or light jacket should be enough.";
    }
    else if (temperature < 30) {
        return "It's warm. Wear light and breathable clothes.";
    }
    else {
        return "It's hot. Shorts and a T-shirt would be comfortable.";
    }
}
// Example usage
let currentTemperature = 15;
let clothingAdvice = suggestClothing(currentTemperature);
console.log(clothingAdvice);
