const temperatureField = document.querySelector(".temp");
const humidityField = document.querySelector(".humidity");





let tar = 'Mumbai'

const fetchResult =  async (target)=>{

    let url = `http://api.weatherapi.com/v1/current.json?key=b28d3f9d7f6d42dfa7f180626242212&q=${target}&aqi=no`

    const res  = await fetch(url)
    const data = await res.json()
    console.log(data)
    let loname = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let humidity = data.current.humidity
    let wind = data.current.wind_mph
    let condition = data.current.condition.text
    let icon = data.current.condition.icon
    
}
fetchResult(tar)