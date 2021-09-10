var cookies = 0;
var cursors = 0;


function save(){
	var save = {
		cookies: cookies,
		cursors: cursors,
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.cookies != "undefined") cookies = savegame.cookies;
	if (typeof savegame.cursors != "undefined") cursors = savegame.cursors;
}

load();
save();


function cookieClick(number){
	cookies = cookies + number;
	document.getElementById("cookies").innerHTML = cookies;
};

function buyCursor(){
	var cursorCost = Math.floor(3 * Math.pow(1.2, cursors));
	if(cookies >= cursorCost){
		cursors = cursors + 1;
		cookies = cookies - cursorCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextCost = Math.floor(3 * Math.pow(1.2, cursors));
	document.getElementById('cursorCost').innerHTML = nextCost;
};


window.setInterval(function(){
	cookieClick(cursors);
	save();
}, 1000);



function deleteSave(){
	localStorage.removeItem("save");
	window.location.reload(true);
}

