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
	let realMap;
	
	if( name == "RoyalRoadPlaza" ){ realMap = RoyalRoadPlaza }
	if( name == "SouthRoyalRoad" ){ realMap = SouthRoyalRoad }
	if( name == "Hushwood" ){ realMap = Hushwood }
	if( name == "CrookedCanyon" ){ realMap = CrookedCanyon }
	if( name == "NorthRoyalRoad" ){ realMap = NorthRoyalRoad }
	if( name == "LudibriumCrater" ){ realMap = LudibriumCrater }
	if( name == "RevoldicDam" ){ realMap = RevoldicDam }
	if( name == "KerningInterchange" ){ realMap = KerningInterchange }
	if( name == "GoldenTower8F" ){ realMap = GoldenTower8F }
	if( name == "SylvanWoodsTrail" ){ realMap = SylvanWoodsTrail }
	if( name == "KerningJunkyard" ){ realMap = KerningJunkyard }
	if( name == "FairyTreeLake" ){ realMap = FairyTreeLake }
	if( name == "BarrotaShore" ){ realMap = BarrotaShore }
	if( name == "Lavaworks" ){ realMap = Lavaworks }
	if( name == "Beachway111" ){ realMap = Beachway111 }
	if( name == "BoulderwhiteMountains" ){ realMap = BoulderwhiteMountains }
	if( name == "NoxiousGrotto" ){ realMap = NoxiousGrotto }
	if( name == "BarrotaPort" ){ realMap = BarrotaPort }
	if( name == "Frostheart" ){ realMap = Frostheart }
	if( name == "FloraAvenue" ){ realMap = FloraAvenue }
	if( name == "SufferingWasteland" ){ realMap = SufferingWasteland }
	if( name == "Woodward" ){ realMap = Woodward }
	if( name == "EnigmaArcade" ){ realMap = EnigmaArcade }
	if( name == "LoggersHill" ){ realMap = LoggersHill }
	if( name == "AbandonedCharnelHouse" ){ realMap = AbandonedCharnelHouse }
	if( name == "Spectrumwood" ){ realMap = Spectrumwood }
	if( name == "FellowstoneConstruction" ){ realMap = FellowstoneConstruction }
	if( name == "Mounthill" ){ realMap = Mounthill }
	if( name == "GoldusPharmaceuticals" ){ realMap = GoldusPharmaceuticals }
	if( name == "NeuronDNAResearchSite" ){ realMap = NeuronDNAResearchSite }
	if( name == "ShadowGate" ){ realMap = ShadowGate }
	if( name == "AndreaBarony" ){ realMap = AndreaBarony }
	if( name == "TrinianCrossing" ){ realMap = TrinianCrossing }
	if( name == "EllinGrove" ){ realMap = EllinGrove }
	if( name == "EllbosHollow" ){ realMap = EllbosHollow }
	if( name == "MajoreLakePark" ){ realMap = MajoreLakePark }
	if( name == "TorharaSpring" ){ realMap = TorharaSpring }
	if( name == "TrinketWoods" ){ realMap = TrinketWoods }
	if( name == "HotottotRiver" ){ realMap = HotottotRiver }
	if( name == "LavaEyeNest" ){ realMap = LavaEyeNest }
	if( name == "PrismFalls" ){ realMap = PrismFalls }
	if( name == "RazedForest" ){ realMap = RazedForest }
	if( name == "MistyTemple" ){ realMap = MistyTemple }
	if( name == "StoneQuarry" ){ realMap = StoneQuarry }
	if( name == "StonehillDigSite" ){ realMap = StonehillDigSite }
	if( name == "ParuvanPlateau" ){ realMap = ParuvanPlateau }
	if( name == "BonebridgeWorksite" ){ realMap = BonebridgeWorksite }
	if( name == "WindsongRavine" ){ realMap = WindsongRavine }
	if( name == "BaumTree" ){ realMap = BaumTree }
	if( name == "WestWatchtower" ){ realMap = WestWatchtower }
	if( name == "ForgottenKeep" ){ realMap = ForgottenKeep }
	if( name == "MoltenHourglass" ){ realMap = MoltenHourglass }
	if( name == "AntTunnelEntrance" ){ realMap = AntTunnelEntrance }
	if( name == "WestWindHill" ){ realMap = WestWindHill }
	if( name == "PicchuPicchuGardens" ){ realMap = PicchuPicchuGardens }
	if( name == "HenesysDocks" ){ realMap = HenesysDocks }
	if( name == "PrecipiceFortress" ){ realMap = PrecipiceFortress }
	if( name == "Sweetskirts" ){ realMap = Sweetskirts }
	if( name == "ForestofLostMemories" ){ realMap = ForestofLostMemories }
	if( name == "AntTunnelPlaza" ){ realMap = AntTunnelPlaza }
	if( name == "GreenoCrossing" ){ realMap = GreenoCrossing }
	if( name == "SweetToothValley" ){ realMap = SweetToothValley }
	if( name == "VerdantHeights" ){ realMap = VerdantHeights }
	if( name == "CoronaLake" ){ realMap = CoronaLake }
	if( name == "LavaSprings" ){ realMap = LavaSprings }
	if( name == "GiantEllinTrees" ){ realMap = GiantEllinTrees }
	if( name == "MoonglowForest" ){ realMap = MoonglowForest }
	if( name == "ForestofLife" ){ realMap = ForestofLife }
	if( name == "Godspring" ){ realMap = Godspring }
	if( name == "SandDunes" ){ realMap = SandDunes }
	if( name == "BesherelMagicLibrary" ){ realMap = BesherelMagicLibrary }
	if( name == "BreezyHills" ){ realMap = BreezyHills }
	if( name == "ElluaForestPath" ){ realMap = ElluaForestPath }
	if( name == "EllinRuins" ){ realMap = EllinRuins }
	if( name == "GreeniaFalls" ){ realMap = GreeniaFalls }
	if( name == "ElluaRiverside" ){ realMap = ElluaRiverside }
	if( name == "FungeeburgStump" ){ realMap = FungeeburgStump }
	if( name == "ReflectionCastle" ){ realMap = ReflectionCastle }
	if( name == "TwilightMoonCastle" ){ realMap = TwilightMoonCastle }
	if( name == "SilentFerry" ){ realMap = SilentFerry }
	if( name == "CausticGarden" ){ realMap = CausticGarden }
	if( name == "RainbowMountain" ){ realMap = RainbowMountain }
	if( name == "Ellosylva" ){ realMap = Ellosylva }
	if( name == "LudibriumCrevasse" ){ realMap = LudibriumCrevasse }
	if( name == "TidepoolCliffs" ){ realMap = TidepoolCliffs }
	if( name == "CheliskaBay" ){ realMap = CheliskaBay }
	if( name == "OvertopBeanstalk" ){ realMap = OvertopBeanstalk }
	if( name == "BarbosaBeach" ){ realMap = BarbosaBeach }
	if( name == "ClockTowerSquare" ){ realMap = ClockTowerSquare }
	if( name == "RoseCastle" ){ realMap = RoseCastle }
	if( name == "TortugaSeasideCliff" ){ realMap = TortugaSeasideCliff }
	if( name == "Slumberland" ){ realMap = Slumberland }
	if( name == "MurosMediaPark" ){ realMap = MurosMediaPark }
	if( name == "RedWall" ){ realMap = RedWall }
	if( name == "WhistlerCliffs" ){ realMap = WhistlerCliffs }
	if( name == "PigmingTribeAltar" ){ realMap = PigmingTribeAltar }
	if( name == "WolfclawCanyon" ){ realMap = WolfclawCanyon }
	if( name == "LudiStation" ){ realMap = LudiStation }
	if( name == "HighcliffTemple" ){ realMap = HighcliffTemple }
	if( name == "KerningTechnoValley" ){ realMap = KerningTechnoValley }
	if( name == "KolopuaCrag" ){ realMap = KolopuaCrag }
	if( name == "LudiFantasia" ){ realMap = LudiFantasia }
	if( name == "MacaroonAcres" ){ realMap = MacaroonAcres }
	if( name == "RaptorDivePass" ){ realMap = RaptorDivePass }
	if( name == "ChronoffTrainStation" ){ realMap = ChronoffTrainStation }
	if( name == "FrostbunnyPark" ){ realMap = FrostbunnyPark }
	if( name == "FracturedCanyon" ){ realMap = FracturedCanyon }
	if( name == "MagmaResearchStation" ){ realMap = MagmaResearchStation }
	if( name == "SkyreachPass" ){ realMap = SkyreachPass }
	if( name == "BerrysweetCastle" ){ realMap = BerrysweetCastle }
	if( name == "HarrotHill" ){ realMap = HarrotHill }
	if( name == "LudiArcade" ){ realMap = LudiArcade }
	if( name == "CelimentalTestBunker" ){ realMap = CelimentalTestBunker }
	if( name == "KarnifsFang" ){ realMap = KarnifsFang }
	if( name == "MSLElectronicsInstitute" ){ realMap = MSLElectronicsInstitute }
	if( name == "MSLFactory" ){ realMap = MSLFactory }
	if( name == "AntTunnelPassage" ){ realMap = AntTunnelPassage }
	if( name == "FrostpeakMountains" ){ realMap = FrostpeakMountains }
	if( name == "KernelEnergyResearch" ){ realMap = KernelEnergyResearch }
	if( name == "FrostemberVoid" ){ realMap = FrostemberVoid }
	if( name == "SnowscarfHaven" ){ realMap = SnowscarfHaven }
	if( name == "MSLRobotDevCenter" ){ realMap = MSLRobotDevCenter }
	if( name == "LavalunaCave" ){ realMap = LavalunaCave }
	if( name == "LuditionCarnival" ){ realMap = LuditionCarnival }
	if( name == "CaveOfEtenrity" ){ realMap = CaveOfEtenrity }
	if( name == "LavaCrest" ){ realMap = LavaCrest }
	if( name == "Steamerbrook" ){ realMap = Steamerbrook }
	if( name == "Frozencrest" ){ realMap = Frozencrest }
	if( name == "WaterSupplyCenter" ){ realMap = WaterSupplyCenter }
	if( name == "CrystalforstWall" ){ realMap = CrystalforstWall }
	if( name == "MagmaGorge" ){ realMap = MagmaGorge }
	if( name == "WailingMine" ){ realMap = WailingMine }
	if( name == "IglooHill" ){ realMap = IglooHill }
	if( name == "MagmaTrail" ){ realMap = MagmaTrail }
	if( name == "PhantomaCyborgCenter" ){ realMap = PhantomaCyborgCenter }
	if( name == "KabriumBasin" ){ realMap = KabriumBasin }
	if( name == "ChekartaChemicals" ){ realMap = ChekartaChemicals }
	if( name == "BlackoutExpanse" ){ realMap = BlackoutExpanse }
	if( name == "OccupiedFellowstone" ){ realMap = OccupiedFellowstone }
	if( name == "DarkCellVirusCenter" ){ realMap = DarkCellVirusCenter }
	if( name == "Picardiv" ){ realMap = Picardiv }
	if( name == "TorravaRiver" ){ realMap = TorravaRiver }
	if( name == "VanishedRuins" ){ realMap = VanishedRuins }
	if( name == "SavageCrossroads" ){ realMap = SavageCrossroads }
	if( name == "DebloonRanch" ){ realMap = DebloonRanch }
	if( name == "Stormville" ){ realMap = Stormville }
	if( name == "VictoriaLiner" ){ realMap = VictoriaLiner }
	if( name == "NorthSidianRoad" ){ realMap = NorthSidianRoad }
	if( name == "SouthSidianRoad" ){ realMap = SouthSidianRoad }
	if( name == "Wallowville" ){ realMap = Wallowville }
	if( name == "BittersValley" ){ realMap = BittersValley }
	if( name == "PiercingWindHills" ){ realMap = PiercingWindHills }
	if( name == "StormyHills" ){ realMap = StormyHills }
	if( name == "Demonsprings" ){ realMap = Demonsprings }
	if( name == "BlackForest" ){ realMap = BlackForest }
	if( name == "Calamitysnare" ){ realMap = Calamitysnare }
	if( name == "MoldyHollow" ){ realMap = MoldyHollow }
	if( name == "OutlawsOverlook" ){ realMap = OutlawsOverlook }
	if( name == "BurningRazedForest" ){ realMap = BurningRazedForest }
	if( name == "InfernoTree" ){ realMap = InfernoTree }

	return realMap;
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
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
	
	image.onload  = function(){
		stars();
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