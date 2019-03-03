document.addEventListener('DOMContentLoaded',function(){

var board = document.querySelector('.board');
var btnAddNotes = document.querySelector('.btnAddNotes');
var deleteBtn = document.querySelector('.deleteBtn');

var notesArr = [];
var dragNote;
var dragObj;
var deltaX;
var deltaY;


// конструктор
function Note(textArea){
    this.posX = 70;
    this.posY = 50;
    this.textArea = textArea;
}

// создание разметки для одного элемента
function createOneNoteMarkup(item, index){
    var tempNote = document.createElement('div');
    var saveBtn = document.createElement('div');
    var deleteBtn = document.createElement('div');
    var textArea = document.createElement("textarea");
    textArea.className = "textArea";
    saveBtn.className = "saveBtn";
    deleteBtn.className = "deleteBtn";
    saveBtn.textContent = "Save";
    deleteBtn.textContent = "Х";
    tempNote.appendChild(saveBtn);
    tempNote.appendChild(deleteBtn);
    tempNote.className = 'note';
    tempNote.style.left = item.posX + 'px';
    tempNote.style.top = item.posY + 'px';

    if(item.textArea != undefined) {
        textArea.textContent = item.textArea;
        tempNote.appendChild(textArea);
        textArea.style.fontWeight = "bold";
        textArea.style.border = "none";
    }

     deleteBtn.onclick = function () {
        notesArr.splice(index, 1);
        updateMarkup();
    }

    tempNote.ondblclick = function addTextArea() {
	   	if(tempNote.querySelectorAll("textarea").length != 0) {
    	return;
    }
	else {
        tempNote.appendChild(textArea);
        textArea.style.display = "block";
	}  
	saveBtn.onclick = function () {
		var textAreaValue = textArea.value;
		if (textAreaValue != "") {
			item.textArea = textAreaValue;
			textArea.style.fontWeight = "bold";
            textArea.style.border = "none";
		}
		else{
			textArea.style.borderColor = "red";
		}
	}
}
    return tempNote;
}
// функция благодаря которой работает перетягивание
function getMouse(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    // запись координат в стили
    dragNote.style.left = (mouseX - deltaX)  + 'px';
    dragNote.style.top = (mouseY - deltaY) + 'px';
    // запись координат в свойства объекта
    dragObj.posX = mouseX - deltaX;
    dragObj.posY = mouseY - deltaY;
}

function updateMarkup(){
    board.innerHTML = '';
   
    notesArr.map(function(item,index){
        var newNote = createOneNoteMarkup(item,index);
 		
        newNote.onmousedown = function(e){
            // добавить событие перетягивания 
            document.addEventListener('mousemove',getMouse);
            dragNote = newNote;
            dragObj = item;
            // высчитать позицию курсора в заметке
            deltaX = e.pageX - newNote.offsetLeft;
            deltaY = e.pageY - newNote.offsetTop;
        }
        newNote.onmouseup = function(){
            // убрать событие перетягивания
            document.removeEventListener('mousemove',getMouse);
        }

        board.appendChild(newNote);
    });
}


btnAddNotes.onclick = function(e){
    notesArr.push(new Note());
    updateMarkup();
}



});