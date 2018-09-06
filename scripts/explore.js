var latestStar;
var mapID;
var currentMap;

function snackBar(txt) {
	// Get the snackbar DIV
	var x = document.getElementById("snackbar");
	
	x.innerHTML = txt;
	
	// Check if already exist and do nothing to prevent bug.
	if( x.className == "show" ){
		return;
	}

	// Add the "show" class to DIV
	x.className = "show";

	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function getMapName(name){
	switch (name) {
		case "RoyalRoadPlaza": return RoyalRoadPlaza;
		case "SouthRoyalRoad": return SouthRoyalRoad;
		case "Hushwood": return Hushwood;
		case "CrookedCanyon": return CrookedCanyon;
		case "NorthRoyalRoad": return NorthRoyalRoad;
		case "LudibriumCrater": return LudibriumCrater;
		case "RevoldicDam": return RevoldicDam;
		case "KerningInterchange": return KerningInterchange;
		case "GoldenTower8F": return GoldenTower8F;
		case "SylvanWoodsTrail": return SylvanWoodsTrail;
		case "KerningJunkyard": return KerningJunkyard;
		case "FairyTreeLake": return FairyTreeLake;
		case "BarrotaShore": return BarrotaShore;
		case "Lavaworks": return Lavaworks;
		case "Beachway111": return Beachway111;
		case "BoulderwhiteMountains": return BoulderwhiteMountains;
		case "NoxiousGrotto": return NoxiousGrotto;
		case "BarrotaPort": return BarrotaPort;
		case "Frostheart": return Frostheart;
		case "FloraAvenue": return FloraAvenue;
		case "SufferingWasteland": return SufferingWasteland;
		case "Woodward": return Woodward;
		case "EnigmaArcade": return EnigmaArcade;
		case "LoggersHill": return LoggersHill;
		case "AbandonedCharnelHouse": return AbandonedCharnelHouse;
		case "Spectrumwood": return Spectrumwood;
		case "FellowstoneConstruction": return FellowstoneConstruction;
		case "Mounthill": return Mounthill;
		case "GoldusPharmaceuticals": return GoldusPharmaceuticals;
		case "NeuronDNAResearchSite": return NeuronDNAResearchSite;
		case "ShadowGate": return ShadowGate;
		case "AndreaBarony": return AndreaBarony;
		case "TrinianCrossing": return TrinianCrossing;
		case "EllinGrove": return EllinGrove;
		case "EllbosHollow": return EllbosHollow;
		case "MajoreLakePark": return MajoreLakePark;
		case "TorharaSpring": return TorharaSpring;
		case "TrinketWoods": return TrinketWoods;
		case "HotottotRiver": return HotottotRiver;
		case "LavaEyeNest": return LavaEyeNest;
		case "PrismFalls": return PrismFalls;
		case "RazedForest": return RazedForest;
		case "MistyTemple": return MistyTemple;
		case "StoneQuarry": return StoneQuarry;
		case "StonehillDigSite": return StonehillDigSite;
		case "ParuvanPlateau": return ParuvanPlateau;
		case "BonebridgeWorksite": return BonebridgeWorksite;
		case "WindsongRavine": return WindsongRavine;
		case "BaumTree": return BaumTree;
		case "WestWatchtower": return WestWatchtower;
		case "ForgottenKeep": return ForgottenKeep;
		case "MoltenHourglass": return MoltenHourglass;
		case "AntTunnelEntrance": return AntTunnelEntrance;
		case "WestWindHill": return WestWindHill;
		case "PicchuPicchuGardens": return PicchuPicchuGardens;
		case "HenesysDocks": return HenesysDocks;
		case "PrecipiceFortress": return PrecipiceFortress;
		case "Sweetskirts": return Sweetskirts;
		case "ForestofLostMemories": return ForestofLostMemories;
		case "AntTunnelPlaza": return AntTunnelPlaza;
		case "GreenoCrossing": return GreenoCrossing;
		case "SweetToothValley": return SweetToothValley;
		case "VerdantHeights": return VerdantHeights;
		case "CoronaLake": return CoronaLake;
		case "LavaSprings": return LavaSprings;
		case "GiantEllinTrees": return GiantEllinTrees;
		case "MoonglowForest": return MoonglowForest;
		case "ForestofLife": return ForestofLife;
		case "Godspring": return Godspring;
		case "SandDunes": return SandDunes;
		case "BesherelMagicLibrary": return BesherelMagicLibrary;
		case "BreezyHills": return BreezyHills;
		case "ElluaForestPath": return ElluaForestPath;
		case "EllinRuins": return EllinRuins;
		case "GreeniaFalls": return GreeniaFalls;
		case "ElluaRiverside": return ElluaRiverside;
		case "FungeeburgStump": return FungeeburgStump;
		case "ReflectionCastle": return ReflectionCastle;
		case "TwilightMoonCastle": return TwilightMoonCastle;
		case "SilentFerry": return SilentFerry;
		case "CausticGarden": return CausticGarden;
		case "RainbowMountain": return RainbowMountain;
		case "Ellosylva": return Ellosylva;
		case "LudibriumCrevasse": return LudibriumCrevasse;
		case "TidepoolCliffs": return TidepoolCliffs;
		case "CheliskaBay": return CheliskaBay;
		case "OvertopBeanstalk": return OvertopBeanstalk;
		case "BarbosaBeach": return BarbosaBeach;
		case "ClockTowerSquare": return ClockTowerSquare;
		case "RoseCastle": return RoseCastle;
		case "TortugaSeasideCliff": return TortugaSeasideCliff;
		case "Slumberland": return Slumberland;
		case "MurosMediaPark": return MurosMediaPark;
		case "RedWall": return RedWall;
		case "WhistlerCliffs": return WhistlerCliffs;
		case "PigmingTribeAltar": return PigmingTribeAltar;
		case "WolfclawCanyon": return WolfclawCanyon;
		case "LudiStation": return LudiStation;
		case "HighcliffTemple": return HighcliffTemple;
		case "KerningTechnoValley": return KerningTechnoValley;
		case "KolopuaCrag": return KolopuaCrag;
		case "LudiFantasia": return LudiFantasia;
		case "MacaroonAcres": return MacaroonAcres;
		case "RaptorDivePass": return RaptorDivePass;
		case "ChronoffTrainStation": return ChronoffTrainStation;
		case "FrostbunnyPark": return FrostbunnyPark;
		case "FracturedCanyon": return FracturedCanyon;
		case "MagmaResearchStation": return MagmaResearchStation;
		case "SkyreachPass": return SkyreachPass;
		case "BerrysweetCastle": return BerrysweetCastle;
		case "HarrotHill": return HarrotHill;
		case "LudiArcade": return LudiArcade;
		case "CelimentalTestBunker": return CelimentalTestBunker;
		case "KarnifsFang": return KarnifsFang;
		case "MSLElectronicsInstitute": return MSLElectronicsInstitute;
		case "MSLFactory": return MSLFactory;
		case "AntTunnelPassage": return AntTunnelPassage;
		case "FrostpeakMountains": return FrostpeakMountains;
		case "KernelEnergyResearch": return KernelEnergyResearch;
		case "FrostemberVoid": return FrostemberVoid;
		case "SnowscarfHaven": return SnowscarfHaven;
		case "MSLRobotDevCenter": return MSLRobotDevCenter;
		case "LavalunaCave": return LavalunaCave;
		case "LuditionCarnival": return LuditionCarnival;
		case "CaveofEternity": return CaveofEternity;
		case "LavaCrest": return LavaCrest;
		case "Steamerbrook": return Steamerbrook;
		case "Frozencrest": return Frozencrest;
		case "WaterSupplyCenter": return WaterSupplyCenter;
		case "CrystalfrostWall": return CrystalfrostWall;
		case "MagmaGorge": return MagmaGorge;
		case "WailingMine": return WailingMine;
		case "IglooHill": return IglooHill;
		case "MagmaTrail": return MagmaTrail;
		case "PhantomaCyborgCenter": return PhantomaCyborgCenter;
		case "KabriumBasin": return KabriumBasin;
		case "ChekartaChemicals": return ChekartaChemicals;
		case "BlackoutExpanse": return BlackoutExpanse;
		case "OccupiedFellowstone": return OccupiedFellowstone;
		case "DarkCellVirusCenter": return DarkCellVirusCenter;
		case "Picardiv": return Picardiv;
		case "TorravaRiver": return TorravaRiver;
		case "VanishedRuins": return VanishedRuins;
		case "SavageCrossroads": return SavageCrossroads;
		case "DebloonRanch": return DebloonRanch;
		case "Stormville": return Stormville;
		case "VictoriaLiner": return VictoriaLiner;
		case "NorthSidianRoad": return NorthSidianRoad;
		case "SouthSidianRoad": return SouthSidianRoad;
		case "Wallowville": return Wallowville;
		case "BittersValley": return BittersValley;
		case "PiercingWindHills": return PiercingWindHills;
		case "StormyHills": return StormyHills;
		case "Demonsprings": return Demonsprings;
		case "BlackForest": return BlackForest;
		case "Calamitysnare": return Calamitysnare;
		case "MoldyHollow": return MoldyHollow;
		case "OutlawsOverlook": return OutlawsOverlook;
		case "BurningRazedForest": return BurningRazedForest;
		case "InfernoTree": return InfernoTree;
	}
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function mapSearch() {
	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myMenu");
	li = ul.getElementsByTagName("li");

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function map(name, id){

	$('[data-toggle="tooltip"]').tooltip();

	// Clean old stars and objects
	$("img").remove(".star");
	$("img").remove(".object");

	currentMap = name;
	let image = document.getElementById("map");

	mapID = id;
	
	image.src = "";
	$(".loader").show();
	
	image.onload  = function(){
		stars();
		$(".loader").hide();
	}
	
	image.onerror  = function(){
		image.src = "./images/notfound.jpg";
	}
	
	image.src = "./images/maps/" + currentMap + ".png";
	$("#map").css("visibility", "visible");
}

function stars(){

	function createObject(x, y, image, width, height){
	
		var img = document.createElement("IMG");
	
		img.setAttribute("src", "./images/" + image);
		img.setAttribute("width", width); // 17
		img.setAttribute("height", height); // 18
		img.setAttribute("alt", "object");
		img.setAttribute("class", "object");
		img.setAttribute('draggable', false);
		
		img.style.position = 'absolute';
		img.style.zIndex = '100';
		img.style.display = 'block';
		
		img.style.left = x + 'px';
		img.style.top = y + 'px';
		
		right = document.getElementById("right");
		right.prepend(img);
		
	}

	function createStar(x, y, image, star, video){
	
		let starList = getCookie(currentMap);
		
		if( starList != "" ){
			starList = starList.split(",");
		}
	
		var img = document.createElement("IMG");
		
		let found = false;
		for(let i=0; i < starList.length; i++){
			if( starList[i] == star ){
				found = true;
				break;
			}
		}
		
		if( found ){
			img.setAttribute("src", "./images/gold_chest.png");
		}else{
			img.setAttribute("src", "./images/gold_chest_gray.png");
		}
		
		img.setAttribute("width", "40");
		img.setAttribute("height", "40");
		img.setAttribute("alt", "star");
		img.setAttribute("class", "star");
		img.setAttribute("data-image", image);
		img.setAttribute("data-star", star);
		img.setAttribute("data-video", video);
		img.setAttribute('draggable', false);
		
		img.style.position = 'absolute';
		img.style.zIndex = '100';
		img.style.display = 'block';
		
		img.style.left = x + 'px';
		img.style.top = y + 'px';
		
		right = document.getElementById("right");
		right.prepend(img);
		
	}
	
	let cMap = getMapName(currentMap);
	
	if( cMap ){
	
		for(let i=0; i < cMap.length; i++){
			if( cMap[i].star ){
				createStar( cMap[i].x, cMap[i].y, cMap[i].image, cMap[i].star, cMap[i].video );
			}else{
				createObject( cMap[i].x, cMap[i].y, cMap[i].image, cMap[i].width, cMap[i].height );
			}
		}
	
	}

}

function loadURL(){

	let params = location.href.split('#')[1];
	
	let mapName = document.getElementsByClassName("mapName");
	for( let i=0; i < mapName.length; i++ ){
		let name = mapName[i].innerHTML.split("(")[0].replace(/\s/g, "");
		if( name == params ){
			mapName[i].onclick();
			return;
		}
	}

}

$( window ).on( "load", function(){

	loadURL();

	let mapName = document.getElementsByClassName("mapName");
	for( let i=0; i < mapName.length; i++ ){
		let name = mapName[i].innerHTML.split("(")[0].replace(/\s/g, "");
		
		let counter = getCookie(name);
		if( counter != "" ){
			counter = counter.split(",");
		}
		mapName[i].innerHTML = mapName[i].innerHTML.split("(")[0] + "(" + counter.length + "/" + mapName[i].innerHTML.split("/")[1];
	}
	
	$( window ).mousedown(function(event){
	
		if( $(event.target).hasClass("star") ){
		
			latestStar = event.target;
			
			// Open star menu
			let menu = $("#menu_list");
			
			// Hide/Show Dropdowns
			if( latestStar.dataset.image != "undefined" ){
				$(".drop_image").show();
			}else{
				$(".drop_image").hide();
			}
			
			if( latestStar.dataset.video != "undefined" ){
				$(".drop_video").show();
			}else{
				$(".drop_video").hide();
			}
			
			// Make the tooltip visible
			menu.css("display", "block");
			
			// Set star position
			menu.css("top", event.pageY + 0 + 'px');
			menu.css("left", event.pageX + 15 + 'px');
		}else if( $(event.target).hasClass("drop_image") ){
			
			if( latestStar.dataset.image != "undefined" ){
			
				// Show blocker
				let blocker = $("#blocker");
				$("#blocker_image").css("display", "block");
				blocker.css("display", "block");
			
				let image = document.getElementById("blocker_image");
			
				image.src = "./images/chests/" + latestStar.dataset.image + ".jpg";
			}else{
				snackBar("No image available!");
			}
		
			closeMenu();
		}else if( $(event.target).hasClass("drop_video") ){
				
			if( latestStar.dataset.video != "undefined" ){
				window.open("https://www.youtube.com/watch?v=" + latestStar.dataset.video);
			}else{
				snackBar("No video available!");
			}
			
			closeMenu();
		}else if( $(event.target).hasClass("drop_mark") ){
			// Change mark/unmark
			
			if( latestStar ){
				if( $(latestStar).attr("src") == "./images/gold_chest_gray.png"){
					$(latestStar).attr("src", "./images/gold_chest.png");
					
					let starList = getCookie(currentMap);
					
					if( starList != "" ){
						starList = starList.split(",");
					}
					
					let found = false;
					for(let i=0; i < starList.length; i++){
						if( starList[i] == latestStar.dataset.star ){
							found = true;
							break;
						}
					}
					
					if( !found ){
						if( starList != "" ){
							starList = starList + "," + latestStar.dataset.star;
						}else{
							starList = starList + latestStar.dataset.star;
						}
					}
					
					setCookie(currentMap, starList, 30);
				}else{
					$(latestStar).attr("src", "./images/gold_chest_gray.png");
					let starList = getCookie(currentMap);
					
					if( starList != "" ){
						starList = starList.split(",");
					}
					
					let found = false;
					for(let i=0; i < starList.length; i++){
						if( starList[i] == latestStar.dataset.star ){
							starList.splice(i, 1);
							starList.join(",");
							break;
						}
					}

					setCookie(currentMap, starList, 30);
				}
			}
			
			// Count stars marked
			let counter = 0;
			let mapStars = document.getElementsByClassName("star");
			for(let i=0; i < mapStars.length; i++){
				if( $(mapStars[i]).attr("src") == "./images/gold_chest.png" ){
					counter++;
				}
			}

			// Set collected numbers on map
			let mapName = document.getElementsByClassName("mapName");
			
			let mID;
			for(let i=0; i < mapName.length; i++){
				if( mapName[i].dataset.id == mapID ){
					mID = i;
					break;
				}
			}
			
			let name = mapName[mID].innerHTML;
			name = name.split("(");
			mapName[mID].innerHTML = name[0] + "(" + counter + "/" + name[1].split("/")[1];
				
			closeMenu();
		}else{
			closeMenu();
		}
		
		function closeMenu(){
			// Close menu
			let menu = $("#menu_list");
			menu.css("display", "none");
		}
		
	});
	
	$("#blocker").mousedown(function(event){
		// Close blocker
		let blocker = $("#blocker");
		blocker.css("display", "none");
	});
	
	$("#myMenu li a").mousedown(function(event){
		$("#myMenu li a").removeClass("active");
		$(this).addClass("active");
	});
	
});