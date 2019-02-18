document.addEventListener('DOMContentLoaded', function () {

//создаем функцию-конструктор
function Car(title, maxSpeed, horsePower, engineVolume) {
	this.title = title;
	this.maxSpeed = maxSpeed;
	this.horsePower = horsePower;
	this.engineVolume = engineVolume;
}

//создаем объекты

var car1 = new Car ("BMW", 300, 4, 4);
var car2 = new Car ("Opel", 200, 2, 2);
var car3 = new Car ("Audi", 250, 3, 3);

//функция-сравнение

function compare(itemCar1, itemCar2, param) {
	if(itemCar1.param < itemCar2.param) {
		console.log("параметры равны!")

	}
	else if(itemCar1.param > itemCar2.param) {
		console.log("данный параметр " + itemCar1.title + " больше, чем " + itemCar2.title)
	}
	else{
		console.log("данный параметр " + itemCar2.title + " больше, чем " + itemCar1.title)
	}
}

	compare(car2,car3, Car.horsePower);

})