const apiKey ="984262c070575130a252d56a647f8ad5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error"); 
async function getWeatherData(city) {

        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        if(response.status == 404) {
            error.style.display="block";
            weather.style.display="none";
            error.textContent="City not found!!";
        }
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%" ;
        document.querySelector(".windy").innerHTML=data.wind.speed +"km/h";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
        weather.style.display="block"
        error.textContent="";
    }

searchBtn.addEventListener("click", function() {
    getWeatherData(search.value);
})