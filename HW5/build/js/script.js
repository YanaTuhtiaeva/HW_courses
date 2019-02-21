document.addEventListener('DOMContentLoaded', function () {

	

	//Создаем глобальные переменные
	var animalForm = document.querySelector("form"),
		patName = document.querySelector("#petName"),
		petOwner = document.querySelector("#petOwner"),
		date = document.querySelector("#date"),
		time = document.querySelector("#time"),
		notes = document.querySelector("#notes");
		var error = document.querySelector(".error");

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
		printPet(itemPet);
	}

	
})

//создаем конструктор Pet
	function Pet(name, owner, date, time, notes) {
		this.name = name;
		this.owner = owner;
		this.date = date;
		this.time = time;
		this.notes = notes;
	}

	function printPet(pet){
		
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
			sectionList.appendChild(item);

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