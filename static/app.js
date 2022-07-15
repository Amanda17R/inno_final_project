<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
	<style>
	body {
		padding: 25px;
		background-color: white;
		color: black;
		font-size: 25px;
	}
	.dark-mode {
		background-color: black;
		color: white;
	}
	.light-mode {
		background-color: white;
		color: black;
	}
	</style>
</head>
<body>

	<h3 id="DarkModetext">Dark Mode is OFF</h3>
	<button onclick="darkMode()">Darkmode</button>
	<button onclick="lightMode()">LightMode</button>
	<script>
	function darkMode() {
		var element = document.body;
		var content = document.getElementById("DarkModetext");
		element.className = "dark-mode";
		content.innerText = "Dark Mode is ON";
	}
	function lightMode() {
		var element = document.body;
		var content = document.getElementById("DarkModetext");
		element.className = "light-mode";
		content.innerText = "Dark Mode is OFF";
	}
	</script>
</body>
</html>

<h3 id="DarkModetext">Dark Mode is OFF</h3>
<button onclick="darkMode()">Darkmode</button>
<button onclick="lightMode()">LightMode</button>
<script>
  function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }
</script>