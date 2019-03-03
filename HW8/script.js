document.addEventListener('DOMContentLoaded', function () {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=03fb54ebf904aeecf7fbb0e169f0c7ad',true);
	// var name = document.querySelector(".name");
	// var time = document.querySelector(".time");
	// var temperature = document.querySelector(".temperature");

	xhr.onload = function() {
		console.log(xhr.response);
		var cityName = xhr.response.city.name;
		var bodyWeather = document.querySelector('.bodyWeather');
			
		arrWeather = [];
		for (var i = 0; i< xhr.response.list.length; i +=8) {
			arrWeather.push(new WeatherItem(xhr.response.list[i].dt_txt, xhr.response.list[i].main.temp, xhr.response.list[i].wind.deg,
			xhr.response.list[i].wind.speed));
		}

		createMarkup();
		//console.log(arrWeather);

		//функция создания одного дня погоды

	function createItemWeather(item) {
		var itemDiv = document.createElement('div');
		itemDiv.className = "item";
		var time = item.time;
		var temprt = item.temperature;
		itemDiv.textContent = time + " " + temprt;
		return itemDiv;
	}

		//функция вывода на элементов на экран

	function createMarkup() {
		arrWeather.map(function(item, index){
		var itemWeather = createItemWeather(item);
		bodyWeather.appendChild(itemWeather);
	})
	}
	
	}

	xhr.onerror = function() {
		alert(xhr.status);
	}

	xhr.responseType = "json";
	xhr.send();
})

//constructor
function WeatherItem(time, temperature, windDirection, windSpeed) {
	this.time = time;
	this.temperature = temperature;
	this.windDirection = windDirection;
	this.windSpeed = windSpeed;
}


