var money = 0;
var cursors = 0;
var papers = 0;


function save(){
	var save = {
		money: money,
		cursors: cursors,
		papers: papers,
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.money != "undefined") money = savegame.money;
	if (typeof savegame.cursors != "undefined") cursors = savegame.cursors;
	if (typeof savegame.papers != "undefined") papers = savegame.papers;
}

load();
save();


function moneyClick(number){
	money += number;
	document.getElementById("money").innerHTML = money;
};

function buyCursor(){
	var cursorCost = Math.floor(3 * Math.pow(1.2, cursors));
	if(money >= cursorCost){
		cursors++;
		money -= cursorCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('money').innerHTML = money;
	};
	var nextCost = Math.floor(3 * Math.pow(1.2, cursors));
	document.getElementById('cursorCost').innerHTML = nextCost;
};

function buyPaper(){
	var paperCost = Math.floor(250 * Math.pow(1.2, papers));
	if(money >= paperCost){
		papers++;
		money -= paperCost;
		document.getElementById('papers').innerHTML = papers;
		document.getElementById('money').innerHTML = money;
	};
	var nextPaperCost = Math.floor(250 * Math.pow(1.2, papers));
	document.getElementById('paperCost').innerHTML = nextPaperCost;
};


window.setInterval(function(){
	moneyClick(cursors + (papers*5));
	save();
}, 1000);



function deleteSave(){
	localStorage.removeItem("save");
	window.location.reload(true);
}



