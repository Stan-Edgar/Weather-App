const para = document.getElementById('para');

        const show = () => {
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Belize%20City/today?unitGroup=metric&key=W2T8ERRJ9ANBDRECKCY3AJUWS&contentType=json' ,{mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response)

            const temp = response.currentConditions.temp;
            const humidity = response.currentConditions.humidity;
            const wind = response.currentConditions.windspeed;

            console.log(`Temperature: ${temp}, Humidity: ${humidity}, wind Speed: ${wind}`)
            para.innerHTML = `Temperature: ${temp}<br> Humidity: ${humidity}<br> wind Speed: ${wind}`;
        })
        .catch((response) => {
            console.error("Something failed and that shouldn't happen.....")
        })
    }