document.addEventListener('DOMContentLoaded', function () {

	// создаем массив
	var linksArr = [
		'https://www.onliner.by/',
		'https://www.youtube.com/', 
		'https://vk.com/',
		'https://www.google.by/', 
		'https://yandex.by/' 
	];

	//создаем функцию, создающую массив из ссылок
	function createLinkMarkup(elem,link, index) {
		var a = document.createElement("a"); // создаем элемент ссылки
		a.setAttribute("href", link); // присваеваем ей атрибут  
		var img = document.createElement("img"); // создаем элемент img
		img.setAttribute("src", "img/"+ (index+1)+ ".png"); //присваеваем атрибут src
		a.appendChild(img); 
		elem.appendChild(a);
	}

	// создаем главную функцию пострания нового элемента
	function createMarkup(itemsArr) {
		var wripperDiv = document.createElement("div");
		wripperDiv.className = "wripper";

		for (var i = 0; i < itemsArr.length; i++) {

			createLinkMarkup(wripperDiv, itemsArr[i], i);
			
		}

		document.body.appendChild(wripperDiv);

	};

		createMarkup(linksArr);


})