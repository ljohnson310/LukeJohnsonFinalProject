let requestURL = "api.openweathermap.org/data/2.5/weather?q=omaha&appid=63bda46293d1b935d14f9f58d6ce3d3d&weather&units=imperial"

function onXHRLoad () {
  let apiData = JSON.parse(this.responseText)
  //console.log(apiData)
  lblTemp.textContent = apiData.main.temp + ' degrees F'
  lblWind.textContent = apiData.wind.speed + ' mph'
  lblHumidity.textContent = apiData.main.humidity + ' % humidity'
}
  
function callAPI(URL) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
  xhttp.addEventListener('load', onXHRLoad)
  xhttp.send()
}

btnWeather.onclick=function(){
  callAPI(requestURL)
}


btnRecommend.onclick=function(){
  let temp = inptRecommend.value
  let clothing = `With a temperature of ${temp}, wear `
  if (temp < 50) {
  lblRecommend.textContent = clothing + 'a windbreaker and pants on the course.'
  } else if (temp < 65 && temp >= 50) {
  lblRecommend.textContent = clothing + 'a long sleeve shirt and pants on the course.'
  } else if (temp < 75 && temp>= 65) {
  lblRecommend.textContent = clothing + 'a short sleeve shirt and pants on the course.'
  } else if (temp >= 75) {
  lblRecommend.textContent = clothing + 'a short sleeve shirt and shorts on the course.'
  }
}
btnToTeeTimes.onclick=function(){
  ChangeForm(clndrTeeTimes)
}
