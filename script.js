const para = document.getElementById('para');
const search = document.querySelector("#search");
const body = document.body;


const show = async () => {

    try {
const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}%20City/today?unitGroup=metric&key=W2T8ERRJ9ANBDRECKCY3AJUWS&contentType=json` ,{mode: 'cors'})
const json = await response.json();


    console.log(json)

    const temp = json.currentConditions.temp;
    const humidity = json.currentConditions.humidity;
    const wind = json.currentConditions.windspeed;

    if (temp > 32) {
        body.className = "warm";
    } else if (temp < 20) {
        body.className = "cold";
    } 

    console.log(`Temperature: ${temp}, Humidity: ${humidity}, wind Speed: ${wind}`)
    para.innerHTML = `Temperature (Farenheit): ${temp}<br> Temperature (Celsius): ${(temp - 32) * 5 / 9}<br> Humidity: ${humidity}%<br> wind Speed: ${wind} mph`;
} catch(error) {
    console.error("Something failed and that shouldn't happen.....")}
};