// const fetchMe = () =>{
//     let url ='https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=705303948810324980db093f63a51039&units=metric'
// https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=a2ef408b7ffa3e6ddae7454da5345409&units=metric
//     fetch(url).then(response => response.json())
//     .then((convertedResponse) => {
//         console.log(convertedResponse);
//         convertedResponse.map((user) => {
//             show.innerHTML +=`
//             <div class="col-3 shadow-sm">
//             <h3>${user.artistName}</h3>
//             <p>${user.songTitle}</p>
//             <img src='${user.songImage}' alt='image' width='300' height="300" /> </audio><br>
//             <audio src='${user.songUrl}' controls>
//             </div>
//             `
//         })
        
//     })
// } 

// -mpd4PNvCPsxy-g
const date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year =date.getFullYear();
let currentDate = `${day}.${month}.${year}`;
newDate.innerHTML = currentDate

const search = () =>{
    let city = document.getElementById('cityName').value
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=705303948810324980db093f63a51039&units=metric`
    fetch(url).then(response => response.json())
    .then((convertedResponse) => {
        console.log(convertedResponse);
     let mySpeed =(convertedResponse.wind.speed)
     let myGust =(convertedResponse.wind.gust)
     let myWind =Math.round(Number(mySpeed+myGust))
     temp.innerHTML =`${Math.round(convertedResponse.main.temp)}⁰C`
     wind.innerHTML =`${myWind}km/h`
     humidity.innerHTML =`${convertedResponse.main.humidity}%`
     pressure.innerHTML =`${convertedResponse.main.pressure}mb`
     feels.innerHTML =`${convertedResponse.main.feels_like}⁰C`
     description.innerHTML =`${convertedResponse.weather[0].description}`
     scription.innerHTML =`${convertedResponse.weather[0].description}`
     des.innerHTML =`${convertedResponse.weather[0].main}`
     desName.innerHTML =`${convertedResponse.name}`
     temp_max.innerHTML =`${convertedResponse.main.temp_max}⁰C`
     temp_min.innerHTML =`${convertedResponse.main.temp_min}⁰C`
     icon.innerHTML =`${convertedResponse.weather[0].icon}`
     country.innerHTML =`${convertedResponse.data.sys.country}`
     document.getElementById('cityName').value = ""
        
    })
       
} 