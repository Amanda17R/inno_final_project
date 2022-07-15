function darkMode(){
	let element = document.body;
	let mainBox = document.getElementsByClassName("main-Box")
	let state = localStorage.getItem("state")
	element.classList.toggle("dark-mode")

	for (const i of mainBox) {
		i.classList.toggle("dark-mode")
	}

if (state !=="dark") {
	localStorage.setItem("state", "dark")
} else {
	localStorage.setItem("state","light")
}
} 

function darkCheck(){
	let element = document.body
	let mainBox = document.getElementsByClassName("main-box")
	let state = localStorage.getItem("state")

	if (state =="dark") {
	element.classList.toggle("dark-mode") 
	}
	for (const i of mainBox) {
		i.classList.toggle("dark-mode")
	}
}








// 	function darkMode() {
// 		var element = document.body;
// 		var content = document.getElementById("DarkModetext");
// 		element.className = "dark-mode";
// 		content.innerText = "Dark Mode is ON";
// 	}
// 	function lightMode() {
// 		var element = document.body;
// 		var content = document.getElementById("DarkModetext");
// 		element.className = "light-mode";
// 		content.innerText = "Dark Mode is OFF";
// 	}


//   function darkMode() {
//     var element = document.body;
//     var content = document.getElementById("DarkModetext");
//     element.className = "dark-mode";
//     content.innerText = "Dark Mode is ON";
//   }
// function lightMode() {
//     var element = document.body;
//     var content = document.getElementById("DarkModetext");
//     element.className = "light-mode";
//     content.innerText = "Dark Mode is OFF";
// }
