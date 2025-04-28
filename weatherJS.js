let cityName = document.querySelector(".weather_city")
let dateTime = document.querySelector(".weather_date_time")
let w_forecast = document.querySelector(".weather_forecast")
let w_icon = document.querySelector(".weather_icon")
let w_temperature = document.querySelector(".weather_temperature")
let w_minTem = document.querySelector(".weather_min")
let w_maxTem = document.querySelector(".weather_max")
let w_feelsLike = document.querySelector(".weather_feelsLike")
let w_humidity = document.querySelector(".weather_humidity")
let w_wind = document.querySelector(".weather_wind")
let w_pressure = document.querySelector(".weather_pressure")

let citySeach = document.querySelector(".weather_search")



//used for full country name like INDIA instead of IN.
const getContryName = (code) => {
    return new Intl.DisplayNames([code], { type: "region" }).of(code)
}

//for get date and time
const getDateTime = (dt) => {
    const currdate = new Date(dt * 1000)
    console.log(currdate);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    const formatter = new Intl.DateTimeFormat("en-US", options)
    // console.log(formatter);

    const formatDate = formatter.format(currdate)
    return formatDate;

}

let city = "Ahmedabad" //by default we get ahmedabad

citySeach.addEventListener("submit",(e)=>{

    e.preventDefault()

    let cityName = document.querySelector(".city_name")
    console.log(cityName.value);
    
    city = cityName.value
    getWeatherData() //it is used bcz when we run this function then we get data4

    cityName.value =" "
})


const getWeatherData = async () => {
    const weatherApi = `https:://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=31a1e5be255cbcc07d660fe92556bae9`;
    try {
        const res = await fetch(weatherApi)
        const data = await res.json()
        // console.log(data);

        const { main, name, weather, wind, sys, dt } = data

        cityName.innerHTML = `${name} , ${getContryName(sys.country)}`

        dateTime.innerHTML = getDateTime(dt)

        w_forecast.innerHTML=`${weather[0].main}`

        w_icon.innerHTML=`<img src = "https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`

        w_temperature.innerHTML = `${main.temp}&#176`;

        w_minTem.innerHTML = `Min : ${main.temp_min.toFixed()}&#176`
        w_maxTem.innerHTML = `Max : ${main.temp_max.toFixed()}&#176`

        w_feelsLike.innerHTML = `${main.feels_like}&#176`
        w_humidity.innerHTML = `${main.humidity}%`
        w_wind.innerHTML = `${wind.speed} m/s`
        w_pressure.innerHTML=`${main.pressure} hPa`

    } catch (error) {
        console.log(error);

    }
}

window.addEventListener("load", getWeatherData);
// document.body.addEventListener("load",getWeatherData)
