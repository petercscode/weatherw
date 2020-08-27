/* Készíts egy JavaScript fájlt, amelyben egy globális tömb típusú
változóban eltárolod a hét hőmérsékleti adatait! */
let TemperaturesOfWeek = [7, 16, 38, 0.2, 22, 10, -12];

/* Írj egy olyan függvényt, amely kiolvassa a legördülő listából a kiválasztott
értéket, és ez alapján megjeleníti az adott napi hőmérsékletet!
Ahhoz, hogy működjön, a gomb lenyomására futtasd le a függvényt!
A gombban állítsd be az onclick attribútum értékének a függvényed nevét
zárójelekkel! (Például ha a függvényed neve weatherWidget, akkor a HTML fájlban
     a gombba ez kerül: onclick="weatherWidget()".)
 */

function getTemperatures() {
  let day = document.querySelector("#DaysOfWeek").value;
  let temperatureDiv = document.querySelector("#Temperature");
  temperatureDiv.innerHTML = TemperaturesOfWeek[day] + "&deg;C";
}

/* Ez egy másik megoldás: az onclick helyett addEventListener-rel:

document.querySelector("#WeatherButton").addEventListener("click", getTemperature);
function getTemperatures() {
    let day = document.querySelector("#DaysOfWeek");
    let valueSelectedDay = parseInt(day.options[day.selectedIndex].value);
    let temperatureDiv = document.querySelector("#Temperature");
    temperatureDiv.innerHTML = TemperaturesOfWeek[valueSelectedDay]+ '&deg;C'; 
}
*/

/* Következő feladat: Egészítsd ki az időjárás widgetet úgy, hogy hőmérséklettől
függően különböző ajánlatokat is jelenítsen meg! A hamburgerező úgy döntött,
hogy hőmérséklettől függően minden nap más ajánlattal várja a vendégeket.
Ezek a következők:
0 °C alatt: forró csoki
0 °C - 15 °C: meleg tea
15 °C - 20 °C: finom süti
20 °C - 25 °C: fagyi
25 °C-tól: jéghideg limonádé

1. Vegyél fel két új tömböt a JavaScript fájlodba!
Az első tartalmazza a hőmérséklet kategóriák felső határait,
a második a megjelenítendő ajánlatokat.
Ez utóbbiakat tedd vendégcsalogató mondatokba! */

let upperLimitOfTemperatures = [0, 15, 20, 25, 100];
let offers = [
  "Térjen be hozzánk egy finom forró csokira!",
  "Ilyen hűvös időben a legjobb egy átmelegítő tea!",
  "Tízóraira egyen sütit!",
  "Fagyizzon nálunk!",
  "Ajánljuk különleges limonádéinkat sok jéggel!",
];

/* 2. A hőmérséklet alatt jelenítsd meg az adott napi hőmérséklethez
tartozó ajánlatot! */

document
  .querySelector("#WeatherButton")
  .addEventListener("click", showOfferOfTheDay);

let offer = document.querySelector("#offerOfTheDay");
function showOfferOfTheDay() {
    let day = document.querySelector("#DaysOfWeek").value;
  for (let i = 0; i < upperLimitOfTemperatures.length; i++) {
    if (TemperaturesOfWeek[day]<upperLimitOfTemperatures[i]) {
      offer.innerHTML = offers[i];
      break;
    }
  }
}

//3. Jelenjen meg a heti minimum, maximum és átlag hőmérséklet: 3 külön függvény
