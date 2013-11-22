/*
    Copy the javascript to the function into a bookmark. Activate the bookmark once in the website.
*/
javascript: (function () { 
		 var css1 = '<link rel="stylesheet" type="text/css" href="https://googledrive.com/host/0B2D15HdwMCy1OUNuQkNNVHNBMUE/betaCSS6.css">" media="screen" />'; 
		 var js1 = '<script src="https://raw.github.com/IamBc/CandyWrapper/master/Candy%20Wrapper/candyCode.js" />';   
		 $("head").append(css1);
		 $("head").append(js1); 
		 $('body').append('<div class="cont2"><button class="btn btnSmall" onclick="hideDyn()">hide</button> <button class="btn" onclick="loadAbout()">About</button><button class="btn" onclick="saveLoad()">Save/Load</button> <button class="btn" onclick="modesBoosts()">Modes/Boosts</button><button class="btn" onclick="loadCreator()">Create</button></div><div id="dynamic"></div>');
 }())