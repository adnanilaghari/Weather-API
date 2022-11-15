
function weather (){
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=&appid=(use your own api key)&units=metric") 

    .then(response => {
        return response.json()})
	.then(data => {console.log(data)
        // document.write(`${data.main.temp} <br> ${data.main.humidity} <br> ${data.wind.speed} `)
        document.getElementById("temp").innerHTML = "Temp: " +`${data.main.temp}`
        document.getElementById("description").innerHTML = "Description: " +`${data.clouds.all}`
        document.getElementById("wind").innerHTML = "Wind speed: " + `${data.wind.speed}`
        document.getElementById("humidity").innerHTML = "Humidity: " + `${data.main.humidity}`
    
    })
	.catch(err => console.error(err));
}
function search1 () {
   
    let a = document.getElementById("search").value;
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=(use your own api key)&units=metric`) 

    .then(response => {
        return response.json()})
	.then(data => {console.log(data)
        // document.write(`${data.main.temp} <br> ${data.main.humidity} <br> ${data.wind.speed} `)
        document.getElementById("city").innerHTML =`${data.name}`
        document.getElementById("temp").innerHTML = "Temp: " +`${data.main.temp}`
        document.getElementById("description").innerHTML = "Description: " +`${data.clouds.all}`
        document.getElementById("wind").innerHTML = "Wind speed: " + `${data.wind.speed}`
        document.getElementById("humidity").innerHTML = "Humidity: " + `${data.main.humidity}`
    
    })
	.catch(err => console.error(err));
}
