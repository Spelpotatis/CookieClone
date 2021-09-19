var money = 0;
var cursors = 0;
var papers = 0;
var computers = 0;


function save(){
	var save = {
		money: money,
		cursors: cursors,
		papers: papers,
		computers: computers,
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.money != "undefined") money = savegame.money;
	if (typeof savegame.cursors != "undefined") cursors = savegame.cursors;
	if (typeof savegame.papers != "undefined") papers = savegame.papers;
	if (typeof savegame.computers != "undefined") computers = savegame.computers;
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

function buyComputer(){
	var computerCost = Math.floor(1000 * Math.pow(1.2, computers));
	if(money >= computerCost){
		computers++;
		money -= computerCost;
		document.getElementById('computers').innerHTML = computers;
		document.getElementById('money').innerHTML = money;
	};
	var nextComputerCost = Math.floor(1000 * Math.pow(1.2, computers));
	document.getElementById('computerCost').innerHTML = nextComputerCost;
};


window.setInterval(function(){
	moneyClick(cursors + (papers*5) + (computers*50));
	document.getElementById('money').innerHTML = money;
	document.getElementById('cursors').innerHTML = cursors;
	document.getElementById('papers').innerHTML = papers;
	document.getElementById('computers').innerHTML = computers;
	save();
}, 1000);



function deleteSave(){
	localStorage.removeItem("save");
	window.location.reload(true);
}


