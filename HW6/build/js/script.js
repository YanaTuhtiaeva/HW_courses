

document.addEventListener('DOMContentLoaded', function () {

	//Создаем массив объектов
	var arrPets = [];

	//Создаем глобальные переменные
	var animalForm = document.querySelector("form"),
		patName = document.querySelector("#petName"),
		petOwner = document.querySelector("#petOwner"),
		date = document.querySelector("#date"),
		time = document.querySelector("#time"),
		notes = document.querySelector("#notes"),
		error = document.querySelector(".error"),
		search = document.querySelector(".search input"),
		select = document.querySelector("select");


	//создаем конструктор Pet
	function Pet(name, owner, date, time, notes) {
		this.name = name;
		this.owner = owner;
		this.date = date;
		this.time = time;
		this.notes = notes;
	}

	

	//TODO delete
	var date = new Date(2011, 0, 1);
	var h, m, s;
	h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();
	var correct_date = h + ':' + m + ':' + s;
	var date2 = new Date(2001, 0, 1);
	var date3 = new Date(2012, 3, 1);
	var testItemPet = new Pet('шарик',
								'valuePetOwner',
								date,
								correct_date,
								'valueNotes');
	var testItemPet2 = new Pet('шар',
								'Vitia',
								date2,
								correct_date,
								'valueNotes');
	var testItemPet3 = new Pet('шулег',
								'Max',
								date3,
								correct_date,
								'valueNotes');
	var testItemPet4 = new Pet('олег',
								'Oleg',
								date,
								correct_date,
								'valueNotes');
	var testItemPet5 = new Pet('оля',
								'valuePetOwner',
								date2,
								correct_date,
								'valueNotes');
	arrPets.push(testItemPet, testItemPet2, testItemPet3,testItemPet4,testItemPet5 );

	createListPets(arrPets);


	// Обрабатываем отправку формы
	animalForm.onsubmit = function(e){
		e.preventDefault();
		error.textContent = "";
		var result = validationForm(animalForm);
		if(!result){return}
		

		var valuePatName = patName.value;
		var valuePetOwner = petOwner.value;
		var valueDate = date.value;
		var valueTime = time.value;
		var valueNotes = notes.value;

		clearForm();

		var itemPet = new Pet(valuePatName,valuePetOwner,valueDate,valueTime,valueNotes);
		arrPets.push(itemPet);

		createListPets(arrPets);
	}

	//функция поиска
	// search.oninput = function getSearch() {
	// 	var searchValue = search.value.trim();
	// 	if (searchValue == "") {
	// 		createListPets(arrPets);
	// 		return;	
	// 	}
	// 	var newArrPets = arrPets.filter(function(temp){
	// 		if (isNameContains(searchValue.toLowerCase(), temp.name.toLowerCase())) {
	// 			return temp;
	// 		}
			
	// 	});

	// 	createListPets(newArrPets);
	// }

	search.onkeyup = function() {
		var searchValue = search.value;
		var newArrPets = arrPets.filter(function(item){
			if (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1 ||
			item.owner.toLowerCase().indexOf(searchValue.toLowerCase()) != -1 ) {
				return true;
			}
			
		});

		createListPets(newArrPets);
	}


	//сравнение 
	// function isNameContains(fromInput, fromName){
	// 	var result = false;
	// 	for (var i = 0; i < fromInput.length; i++) {
	// 		if (fromInput[i] == fromName[i]) {
	// 			result = true;
	// 		}
	// 		else{
	// 			return false
	// 		}
	// 	}
	// 	return result;
	// }

	//выводит объекты
	function createListPets(arrayPets) {
		var sectionList = document.querySelector(".list .wripper");
		sectionList.textContent = "";

		arrayPets.map(function(pet, index) {
			var itemPet = createListItem(pet, index);
			sectionList.appendChild(itemPet);
		});
	}


	//выводит один объект
	function createListItem(pet, index){
		
			var sectionList = document.querySelector(".list .wripper");
			var item = document.createElement("div");
			item.className="item";
			var cross = document.createElement("div");
			cross.className="cross";
			cross.textContent = "x";
			var mainBlock = document.createElement("div");
			mainBlock.className="mainBlock";
			var nameH3 = document.createElement("h3");
			nameH3.textContent = pet.name;
			var ownerDiv = document.createElement("div");
			ownerDiv.className="owner";
			var ownerSpanTitle = document.createElement("span");
			ownerSpanTitle.className="title";
			ownerSpanTitle.textContent = "Owner: ";
			var ownerSpanName = document.createElement("span");
			ownerSpanName.className="ownerName";
			ownerSpanName.textContent = pet.owner;
			var ownerSpanText = document.createElement("span");
			ownerSpanText.className="textarea";
			ownerSpanText.textContent = pet.notes;
			var date = document.createElement("div");
			var time = document.createElement("span");
			time.className = "date";
			date.className="dateAndTime";
			time.textContent = " " +pet.time;
			date.textContent = pet.date;
			date.appendChild(time);
			ownerDiv.appendChild(ownerSpanTitle);
			ownerDiv.appendChild(ownerSpanName);
			ownerDiv.appendChild(ownerSpanText);
			mainBlock.appendChild(nameH3);
			mainBlock.appendChild(ownerDiv);
			item.appendChild(cross);
			item.appendChild(mainBlock);
			item.appendChild(date);		

			cross.onclick = function(){
				arrPets.splice(index,1);
			 	createListPets(arrPets);
			};
		return item;
	}

	//функция очистки формы
	function clearForm() {
		var input = document.querySelectorAll(".main input");

		for (i = 0; i <input.length; i++) {
			if (input[i].getAttribute("type") != "submit") {
				input[i].value = "";
			}
		}
		notes.value = "";
	}

	//функция валидации
	function validationForm(form) {
		var inputs = form.querySelectorAll("input");

		var error = document.querySelector(".error");
		var isValid = true;
		for (i = 0; i < inputs.length; i++) {
			if(inputs[i].value == "" || inputs[i].value == undefined) {
				var typeInputName = inputs[i].getAttribute("name");
				error.innerHTML += "The Field"  + " " + "<b>" +typeInputName+ "</b>"+" "+ "Must Not Be Empty" + "<br>";
				isValid = false;
			}
		}
		return isValid;
	}



select.onchange = function(event){
		// собственная функция для сортировки массива объектов
       var selectParam = select.options[select.selectedIndex].value;
		function compareObj(a,b) {
			if (a[selectParam].toLowerCase() > b[selectParam].toLowerCase()) return 1;
			else return -1;
		}
        // сортировка массива по собственной функции
        arrPets.sort(compareObj);
        createListPets(arrPets);
    }

})
