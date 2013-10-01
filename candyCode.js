// Variables used in the Booster Creator
var perSec = 0;
var cOwned = 0;
var cEaten = 0;
var cThrown = 0;
var lOwned = 0;
var lStock = 0;

//Updates the Booster Creator variables
function updateVars() {
    perSec = document.getElementById("perSec").value;
    cOwned = document.getElementById("cOwned").value;
    cEaten = document.getElementById("cEaten").value;
    cThrown = document.getElementById("cThrown").value;
    lOwned = document.getElementById("lOwned").value;
    lStock = document.getElementById("lStock").value;
}

//Clears all the Booster Creator variables
function clearAll() {
    perSec = 0;
    cOwned = 0;
    cEaten = 0;
    cThrown = 0;
    lOwned = 0;
    lStock = 0;
    document.getElementById("perSec").value = 0;
    document.getElementById("cOwned").value = 0;
    document.getElementById("cThrown").value = 0;
    document.getElementById("lOwned").value = 0;
    document.getElementById("lOwned").value = 0;
    document.getElementById("lStock").value = 0;
}

//Updates the string which is used to activate the custom Boosters
function updateStr() {
    var middle = "";
    if (document.getElementById("perSec").value != 0) {
        middle += "candies.candiesPerSecond = " + perSec.toString();
    }
    if (document.getElementById("cOwned").value != 0) {
        middle += "; candies.nbrOwned +=" + cOwned.toString();
    }
    if (document.getElementById("cEaten").value != 0) {
        middle += "; candies.nbrEaten +=" + cEaten.toString();
    }
    if (document.getElementById("cThrown").value != 0) {
        middle += "; candies.nbrThrown +=" + cThrown.toString();
    }
    if (document.getElementById("lOwned").value != 0) {
       middle += "; lollipops.nbrOwned +=" + lOwned.toString();
    }
    if (document.getElementById("lStock").value != 0) {
        "; lollipops.nbrOwned =" + lStock.toString();
    }

    document.getElementById("link").href = "javascript: (function () {" + middle + ";updateGui();}())";
}

function updateGui() {
    document.getElementById('candies_eaten').innerHTML = 'You have eaten  ' + candies.nbrEaten + 'candies!';
    document.getElementById('candies_thrown').innerHTML = 'You threw    ' + candies.nbrThrown + 'candies on the ground :(';
    document.getElementById('lollipops').innerHTML = 'You have    ' + lollipops.nbrOwned + ' lollipops';
}

//=============== The next few functions are used to update the app with the respective section
//Loads the About section 
function loadAbout() {
    document.getElementById("dynamic").innerHTML = ' <div class="cont">This is a plug in for the game candy box <a href="http://candies.aniwey.net/" target="_blank">(clicky)</a> <br /> ' +
	'<br />It offers a custom save/load system; a few modes of play; resource boosters and more <br /><br /><br /><span style="margin-left:15px;">-Bc</span><a style="float:right;" href="https://github.com/IamBc/CandyWrapper" target="_blank">Git</a></div>';
}

//Loads the Booster Creator
function loadCreator() {

    document.getElementById("dynamic").innerHTML = ' <div class="cont">' +
    '<span class="label">Candies per second:</span>' +
    '<input id="perSec"  type="number" value="0"  /> <br />' +
   ' <span class="label">Candies owned:</span>' +
    '<input id="cOwned"  type="number" value="0" /> <br />' +
  '  <span class="label">Candies eaten:</span>' +
    '<input id="cEaten"  type="number"  value="0"/> <br />' +
   ' <span  class="label">Candies thrown:</span>' +
 '   <input id="cThrown" type="number"  value="0"/> <br />' +
  '  <span  class="label">Lolipops owned:</span>' +
 '   <input id="lOwned" type="number" value="0" /> <br />' +
 '   <span class="label">Lolipops Stock: (set to high numbers, use only if you plan on buying over 1000)</span>' +
    '   <input id="lStock"  type="number"  value="0"/> <br />' +
  ' <span  class="label">Name of Link:</span>' +
 '   <input id="linktxt" type="text"  value="Drag me to bookmarks."/> <br />' +
   '   <button onclick="clearAll()">Clear all</button><br /><br />' +
 '    <p style="display:block;text-align:center;"><a id="link" style="font-size: 32px;display:inline-block;" ondragstart="(function(){ updateVars();updateStr();}())" onclick="" href="javascript: (function () {    candies.candiesPerSecond = 1000;}());">Drag me to bookmarks</a></b>' +
 '  </div>';
    window.setInterval(function () { changeLinktxt(); updateVars(); updateStr(); }, 300);
}

//Loads the Save/Load section
function saveLoad() {
    document.getElementById('dynamic').innerHTML = "<div class='cont'><a id='A1' style='font-size: 21px;float:left;' href='javascript: (function() {saveLoc();}())'>SAVE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
'<a id="A2" style="font-size: 21px;float:right;" href="javascript: (function () {loadLoc();}())">LOAD</a></div>';
}

//Loads the Modes/Boosters section
function modesBoosts() {
    document.getElementById("dynamic").innerHTML = "<div class='cont'> <p> Modes</p>" +
                                                     "<ul>" +
                                                     "<li><a href='(function(){candies.candiesPerSecond = 3; candies.nbrOwned += 2000}())'>Fast</a></li>" +
                                                     "<li><a href='(function(){ candies.candiesPerSecond = 0.3;}())'>Hard</a></li>" +
                                                     "<li><a href='(function(){ candies.nbrOwned = 3000; termCandies();}())'>Very hard</a></li>" +
                                                     "</ul>" +
                                                     "<p>boosters</p> " +
                                                     "<ul>" +
                                                     "<li><a href='javascript: (function () {candies.nbrOwned +=500;}())'>+500 candies</a></li>" +
                                                     "<li><a href='javascript: (function () {candies.nbrOwned +=5000;}())'>+5000 candies</a></li>" +
                                                     "<li><a href='javascript: (function(){candies.candiesPerSecond = 1;}())'>1 candy per sec(default)</a></li>" +
													 "<li><a href='javascript: (function(){candies.candiesPerSecond = 3;}())'>3 candies per sec</a></li>" +
                                                     "<li><a href='javascript: (function(){candies.candiesPerSecond = 15;}())'>15 candies per sec</a></li></ul></div>";
}

// hides the main section of the app
function hideDyn() {
    document.getElementById("dynamic").innerHTML = "";
}

//Updates the draggable url's name
function changeLinktxt() {
    document.getElementById("link").innerHTML = document.getElementById("linktxt").value;
}



//Saves the character 
function saveLoc() {
    save();
    localStorage.code = code;
    localStorage.code = code;
    localStorage.code = code;
}

//Loads the loaded character
function loadLoc() {
    var url = "http://candies.aniwey.net/index.php?pass=" + localStorage.code; var win = window.open(url, "_self");
    win.focus();
}

//Loads the initial page of the app
loadAbout();