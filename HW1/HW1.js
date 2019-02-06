// Объявить переменную "numberCount", записать в нее любое число. 
// Далее написать код, который будет считать сумму чисел от 0 до "numberCount", результат выводим с помощью alert();


var numberCount = 54,
	count = 0;

for (var i = 0; i < numberCount; i++) {
	count += i;
}

alert('Сумма чисел от 0 до '+ numberCount +' равна: ' + count);