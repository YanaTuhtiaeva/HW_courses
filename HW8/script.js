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
		var nameAndTime = document.querySelector('.nameAndTime');
		var temperature = document.querySelector('.temperature');
		var direct = document.querySelector('.direct');
		var speed = document.querySelector('.speed');

			
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
		var itemDivTime = document.createElement('div');
		var itemDivTemprt = document.createElement('div');
		itemDivTime.textContent = item.time;
		itemDivTemprt.innerHTML = Math.round(item.temperature - 273) + " C" + "&#176;";
		itemDiv.appendChild(itemDivTime);
		itemDiv.appendChild(itemDivTemprt);
		return itemDiv;
	}

		//функция вывода на элементов на экран

	function createMarkup() {
		var nameDiv = document.createElement('div');
		var timeDiv = document.createElement('div');
		var temprDiv = document.createElement('div');
		nameDiv.textContent = cityName +", "+"BY";
		timeDiv.textContent = arrWeather[0].time.slice(10,16);
		temprDiv.innerHTML = Math.round((arrWeather[0].temperature) - 273) + " C" + "&#176;";
		var switchWindDirection = arrWeather[0].windDirection;
		if (switchWindDirection >=180 && switchWindDirection <=270) {
			direct.textContent = "South";
		}
		else if (switchWindDirection >=271 && switchWindDirection <=360) {
			direct.textContent = "West";
		}

		else if (switchWindDirection >=0 && switchWindDirection <=90) {
			direct.textContent = "East";
		}
		else {
			direct.textContent = "North";
		}

		speed.textContent = Math.round(arrWeather[0].windSpeed) + " m/c";
		nameAndTime.appendChild(nameDiv);
		nameAndTime.appendChild(timeDiv);
		temperature.appendChild(temprDiv);
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


