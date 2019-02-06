
var img = document.getElementsByTagName("img");
var wripper = document.getElementById("wripper");

function backgroundImg() {
	var src = this.src;
	wripper.style.background = "url("+ src +")";
	wripper.style.backgroundRepeat = "no-repeat";
	wripper.style.backgroundSize = "cover";
}

for (var i = 0; i < img.length; i++) {
	img[i].addEventListener("click", backgroundImg, true);
}
	