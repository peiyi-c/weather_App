import "./scss/style.scss"

const apiKey = process.env.apiKey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

const error = document.querySelector('.error')
const weather = document.querySelector('.weather')
const weatherIcon = document.querySelector('.weather-icon')

const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

// Functions //
async function checkWeather(inputValue) {
  const response = await fetch(apiUrl + inputValue + `&appid=${apiKey}`);
  if (response.status === 404) {
    hideWeather()
    error.innerHTML = `<p>Cannot find "${inputValue}" : ( </p>`
  } else {
    let data = await response.json()
    displayWeather(data)
  }
  searchBox.value = ''
}
function hideWeather() {
  // error.style.display = 'block'
  error.style.opacity = '1'
  error.style.height = 'auto'
  //weather.style.display = 'none'
  weather.style.opacity = '0'
  weather.style.height = '0'
}
function displayWeather(data) {
  city.textContent = data.name;
  temp.textContent = Math.round(data.main.temp) + ' °C'
  humidity.textContent = data.main.humidity + ' %'
  wind.textContent = data.wind.speed + ' km/h'

  let weatherIcons = ['clear', 'clouds', 'drizzle', 'mist', 'rain', 'snow']
  if (weatherIcons.includes(data.weather[0].main)) {
    weatherIcon.src = 'images/' + data.weather[0].main + '.png'
  }

  //error.style.display = 'none'
  error.style.opacity = '0'
  error.style.height = '0'
  //weather.style.display = 'block'
  weather.style.opacity = '1'
  weather.style.height = 'auto'


}

// Event Listeners //
searchBtn.addEventListener('click', () => {
  //e.preventDefault()
  checkWeather(searchBox.value)
})
searchBox.addEventListener('keyup', searchByEnter)
function searchByEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault()
    searchBtn.click();
  }
}

