var hiddens = [];
var images = [];
var titles = [];
var elements = [];
var resources = [];
var levels = [];
var maxLevels = [];
var lockeds = [];
var lockReqs = [];
var requirements = [];
var infos = [];
var Class_skills;
var pointsMax = 69 + 9 + 4; // 59 points from leveling + 9 points from trophies + 4 base skills
var pointsMax2 = 16 + 1; // 14 points from leveling + 1 base skill
var lockedsURL = [];
var levelsURL = [];
var awakening = false;
var page1 = {};
var page2 = {};
var currentPage = 1;
var lastAcceptedDrop;
var lapenURL = "_0-0-0-0-0-0-0-0-0-0-0-0";

function lapenDrag(event){
	
	event.dataTransfer.setData("text", event.target.id);
	
	$(".lapen_level_box").hide();
	
}

function lapenAllowDrop(event){
	
	event.preventDefault();
	
	let box = document.getElementById('info_box');
	box.style.display = "none";
	
	if( event.target.dataset.dropzone == "true" ){
		
		if( event.target.dataset.used != "true" ){

			if( event.target.dataset && event.target.dataset.color != undefined ){
			
				lastAcceptedDrop = event.target;
			
			}
			
		}
		
	}

}

function setLapenUrl(zone, lap, lvl){
	
	if( zone == undefined ){
	
		let url = location.href.split("#")[1].split("_")[2];
		let list = url.split("-");

		for(let i=0; i < list.length; i+=2){

			if( list[i] == lap ){
				
				list[i] = 0;
				list[i+1] = 0;
				
				list = list.join("-");
				lapenURL = "_" + list;
				
				setUrl();
				
				break;
			
			}
		
		}
	
		return;
	}
	
	if( location.href.split("#")[1] == undefined || location.href.split("#")[1].split("_")[2] == undefined ){

		setUrl();
	
	}
	
	let url = location.href.split("#")[1].split("_")[2];
	
	let list = url.split("-");
	
	let pos = [0,2,4,6,8,10];
	
	list[ pos[zone-1] ] = lap;
	list[ pos[zone-1]+1 ] = lvl;
	
	list = list.join("-");
	
	lapenURL = "_" + list;
	
	setUrl();
	
}

function lapenDrop(event){
	
	event.preventDefault();
	
	if( !lastAcceptedDrop ){ return };
	
	var data = event.dataTransfer.getData("text");
	let lapen = document.getElementById(data);
	
	if( lapen.dataset.color != lastAcceptedDrop.dataset.color && lastAcceptedDrop.dataset.color != "base" ){
		return;
	}
	
	if( lastAcceptedDrop.dataset.color != "base" && lapen.dataset.inslot == "true" ){ return; }
	
	lastAcceptedDrop.appendChild( lapen );
	
	let dropZones = document.getElementsByClassName("drop_zone");
	for(let i=0; i < dropZones.length; i++){
		
		if( dropZones[i].childElementCount == 0 ){
			dropZones[i].dataset.used = "false";
		}else{
			dropZones[i].dataset.used = "true";
		}
		
	}
	
	if( lastAcceptedDrop.dataset.color == "base" ){
		lapen.dataset.inslot = "false";
	}else{
		lapen.dataset.inslot = "true";
	}
	
	let lapenLevel = lapen.firstElementChild.innerText.replace("+","");
	setLapenUrl(lastAcceptedDrop.dataset.id, lapen.dataset.id, lapenLevel);
	
}

function lapenshardSetup(){
	
	function setLapenLevel(obj, newLevel){

		let txt = obj.firstElementChild;
		if( newLevel > 10 ){ level = 10; }
		if( newLevel < 1 ){ level = 1; }
		txt.innerHTML = "<p>+" + newLevel + "</p>";
	
	}

	// Check if href can be split
	if( location.href.split("#") == undefined ){ return; }
	if( location.href.split("#")[1] == undefined || location.href.split("#")[1].split("_")[2] == undefined ){ return; }
	
	let str = location.href.split("#")[1].split("_")[2];
	
	let lapens = str.split("-");
	
	let dropZones = 1;
	for(let i=0; i < lapens.length; i+=2){

		let lap = document.getElementById("lapen_item_draggable_" + lapens[i]);
		
		if( lap ){

			let dropZone = document.getElementById("drop_zone_"+ dropZones);
			dropZone.appendChild(lap);
			dropZone.dataset.used = "true";
			lap.dataset.inslot = "true";
			
			setLapenLevel(lap, lapens[i+1]);
		
		}
		
		dropZones++;
		
	}
	
}

function moveLapenshard(event){

	event.preventDefault();
	
	if( $(event.target).hasClass("lapen_item_box") || $(event.target.parentElement).hasClass("lapen_item_box") ){

		let box = document.getElementById('info_box');
		box.style.display = "none";
		$(".lapen_level_box").hide();

		let shard;

		if( $(event.target).hasClass("lapen_item_box") ){ shard = event.target; }
		if( $(event.target.parentElement).hasClass("lapen_item_box") ){ shard = event.target.parentElement; }
		
		if( shard.dataset.inslot == "true" ){

			let curr_zone = shard.parentElement;
			curr_zone.dataset.used = "false";

			let zone = document.getElementById("lapen_list");
			zone.appendChild(shard);
			shard.dataset.inslot = "false";
			
			setLapenUrl(null, shard.dataset.id);

			return;
		
		}

		let zones = document.getElementsByClassName("drop_zone");
		for(let i=0; i < zones.length; i++){
			
			if( zones[i].dataset.used == "false" && (zones[i].dataset.color == shard.dataset.color) ){
				
				zones[i].appendChild(shard);
				zones[i].dataset.used = "true";
				shard.dataset.inslot = "true";
				
				let lvl = shard.firstElementChild.innerText.replace("+","");
				setLapenUrl(zones[i].dataset.id, shard.dataset.id, lvl);
				
				break;
			
			}
			
		}
		
				
		let dropZones = document.getElementsByClassName("drop_zone");
		for(let i=0; i < dropZones.length; i++){
			
			if( dropZones[i].childElementCount == 0 ){
				dropZones[i].dataset.used = "false";
			}else{
				dropZones[i].dataset.used = "true";
			}
			
		}
	
	}
	
}

function createLapenshards(){
	
	$("#lapenshard_box").show();
	
	let list = document.getElementById("lapen_list");
	list.innerHTML = "";
	
	let dropZones = document.getElementsByClassName("drop_zone");
	for(let i=0; i < dropZones.length; i++){

		dropZones[i].innerHTML = "";
		
	}
	
	let shards = lapenshard[0];
	
	let k = 0;
	for(let i=0; i < 7; i++){

		for(let j=0; j < 4; j++){
			
			if( shards[k] == undefined ){ continue; }
			
			if( shards[k].title != "" ){
				list.innerHTML += '<div oncontextmenu="moveLapenshard(event)" data-color="' + shards[k].color + '" data-inslot="false" id="lapen_item_draggable_' + k + '" data-id="' + k + '" draggable="true" ondragstart="lapenDrag(event)" class="lapen_item_box">' + '<div id="lapen_level"><p>+1</p></div>' + '<div class="lapen_level_box"> <div class="lapen_level_dec"><p>-</p></div>' + '<div class="lapen_level_inc"><p>+</p></div> </div>' + '<div data-textbasic="' + shards[k].textbasic + '" data-jobskills="' + shards[k].jobskills + '" data-title="' + shards[k].title + '" data-requirement="' + shards[k].requirement + '" data-skillinfo="' + shards[k].skillinfo + '" class="lapen_item" style="background-position: ' + (48 * -j) + 'px ' + (56 * -i) + 'px;"></div>' + '</div>';
			}
			
			k++;

		}
	
	}
	
	$(".lapen_item").mousemove(function(event){
	
		let type = event.target.classList[0];
		setSkillInfo(event, type);
		
		let box = event.target.parentElement.children[1];
		$(box).show();
	
	});
	
	$(".lapen_item").mouseleave(function(event){

		let box = document.getElementById('info_box');
		box.style.display = "none";
		
		//$(".lapen_level_box").hide();
		
	});
	
	$(".lapen_item_box").mouseleave(function(event){

		$(".lapen_level_box").hide();
		
	});
	
	$(".lapen_level_inc").click(function(event){
		
		let txt = event.target.parentElement.parentElement.parentElement.firstElementChild;
		level = parseInt(txt.innerText.replace("+","")) + 1;
		if( level > 10 ){ level = 10; }
		txt.innerHTML = "<p>+" + level + "</p>";
		
		let lap = event.target.parentElement.parentElement.parentElement.dataset.id;
		let zone = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
		
		setLapenUrl(zone, lap, level);
		
	});
	
	$(".lapen_level_dec").click(function(event){
		
		let txt = event.target.parentElement.parentElement.parentElement.firstElementChild;
		level = parseInt(txt.innerText.replace("+","")) - 1;
		if( level < 1 ){ level = 1; }
		txt.innerHTML = "<p>+" + level + "</p>";
		
		let lap = event.target.parentElement.parentElement.parentElement.dataset.id;
		let zone = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
		
		setLapenUrl(zone, lap, level);
		
	});
	
	lapenshardSetup();

}

function closeLapenshardMenu(){
	
	$("#lapenshard_box").hide();
	
}

// changeRank - Change rank to second skill tree or lapenshard
function changeRank(numb, jobName){
	
	if( numb == 3 ){ createLapenshards(); return; }
	
	$("#rbi1").removeClass("selected");
	$("#rbi2").removeClass("selected");
	$("#rbi3").removeClass("selected");
	
	if( numb == 1 ){ awakening = false; $("#rbi1").addClass("selected"); $("#rank2_bg").hide(); }
	if( numb == 2 ){ awakening = true; $("#rbi2").addClass("selected"); $("#rank2_bg").show(); }
	
	let jobName2 = document.getElementById("jobName");
	name = jobName || jobName2.innerText;
	
	if( !awakening ){
		$(".levels_bar_text").css("margin-bottom", "100px");
		$(".levels_bar_text:first-child").css("margin-bottom", "208px");
		$("#levels_bar_1").text("Level 1");
		$("#levels_bar_2").text("Level 10");
		$("#levels_bar_3").text("Level 20");
		$("#levels_bar_4").text("Level 30");
		$("#levels_bar_5").text("Level 40");
		$("#levels_bar_6").text("Level 50");
	}else{
		$(".levels_bar_text").css("margin-bottom", "95px");
		$(".levels_bar_text:first-child").css("margin-bottom", "92px");
		$("#levels_bar_1").text("Level 60");
		$("#levels_bar_2").text("Level 62");
		$("#levels_bar_3").text("Level 64");
		$("#levels_bar_4").text("Level 66");
		$("#levels_bar_5").text("Level 68");
		$("#levels_bar_6").text("Level 70");
	}
	
	let job;
	
	if( name == "Knight" ){ job = awakening ? knight_skills_awakening : knight_skills; }
	if( name == "Berserker" ){ job = awakening ? berserker_skills_awakening : berserker_skills; }
	if( name == "Wizard" ){ job = awakening ? wizard_skills_awakening : wizard_skills; }
	if( name == "Priest" ){ job = awakening ? priest_skills_awakening : priest_skills; }
	if( name == "Archer" ){ job = awakening ? archer_skills_awakening : archer_skills; }
	if( name == "Heavy Gunner" ){ job = awakening ? heavy_gunner_skills_awakening : heavy_gunner_skills; }
	if( name == "Thief" ){ job = awakening ? thief_skills_awakening : thief_skills; }
	if( name == "Assassin" ){ job = awakening ? assassin_skills_awakening : assassin_skills; }
	if( name == "Runeblade" ){ job = awakening ? runeblade_skills_awakening : runeblade_skills; }
	if( name == "Soul Binder" ){ job = awakening ? soul_binder_skills_awakening : soul_binder_skills; }
	if( name == "Striker" ){ job = awakening ? striker_skills_awakening : striker_skills; }
	
	changeJob(job, name, numb);
	
}

// changeJob - Change skills to another job
function changeJob(job, name, numb){
	
	if( numb == undefined ){ changeRank(1, name); };
	
	if( job == undefined ){ return; }

	if( name == "Knight" ){ job = awakening ? knight_skills_awakening : knight_skills; }
	if( name == "Berserker" ){ job = awakening ? berserker_skills_awakening : berserker_skills; }
	if( name == "Wizard" ){ job = awakening ? wizard_skills_awakening : wizard_skills; }
	if( name == "Priest" ){ job = awakening ? priest_skills_awakening : priest_skills; }
	if( name == "Archer" ){ job = awakening ? archer_skills_awakening : archer_skills; }
	if( name == "Heavy Gunner" ){ job = awakening ? heavy_gunner_skills_awakening : heavy_gunner_skills; }
	if( name == "Thief" ){ job = awakening ? thief_skills_awakening : thief_skills; }
	if( name == "Assassin" ){ job = awakening ? assassin_skills_awakening : assassin_skills; }
	if( name == "Runeblade" ){ job = awakening ? runeblade_skills_awakening : runeblade_skills; }
	if( name == "Soul Binder" ){ job = awakening ? soul_binder_skills_awakening : soul_binder_skills; }
	if( name == "Striker" ){ job = awakening ? striker_skills_awakening : striker_skills; }

	Class_skills = job;

	let switched = false;
	if( numb == undefined ){
		numb = 2;
		switched = true;
	}else{
		loadUrlPoints();
	}

	$('#skills_right').empty();
	createBase();
	setMouseTriggers();
	
	setTimeout(function(){
		
		resetSkills(numb, switched);
		
	}, 10);
	
	let infoRequirement = document.getElementById("jobName");
	infoRequirement.innerHTML = "<p>" + name + "</p>";

}

// loadUrlPoints - Grabs the url info and set points into the skills
function loadUrlPoints(){
	
	if( currentPage != 2 ){ return; };

	let params = location.href.split('#')[1];
	
	if( params && !isNaN(params[0]) ){
	
		// Get job
		let job = knight_skills;
		let name = "";
		
		if( params.includes("_") ){
			
			if( params.split("_")[0].slice(-1) == 0 ){ job = awakening ? knight_skills_awakening : knight_skills; name = "Knight"; }
			if( params.split("_")[0].slice(-1) == 1 ){ job = awakening ? berserker_skills_awakening : berserker_skills; name = "Berserker"; }
			if( params.split("_")[0].slice(-1) == 2 ){ job = awakening ? wizard_skills_awakening : wizard_skills; name = "Wizard"; }
			if( params.split("_")[0].slice(-1) == 3 ){ job = awakening ? priest_skills_awakening : priest_skills; name = "Priest"; }
			if( params.split("_")[0].slice(-1) == 4 ){ job = awakening ? archer_skills_awakening : archer_skills; name = "Archer"; }
			if( params.split("_")[0].slice(-1) == 5 ){ job = awakening ? heavy_gunner_skills_awakening : heavy_gunner_skills; name = "Heavy Gunner"; }
			if( params.split("_")[0].slice(-1) == 6 ){ job = awakening ? thief_skills_awakening : thief_skills; name = "Thief"; }
			if( params.split("_")[0].slice(-1) == 7 ){ job = awakening ? assassin_skills_awakening : assassin_skills; name = "Assassin"; }
			if( params.split("_")[0].slice(-1) == 8 ){ job = awakening ? runeblade_skills_awakening : runeblade_skills; name = "Runeblade"; }
			if( params.split("_")[0].slice(-1) == 9 ){ job = awakening ? soul_binder_skills_awakening : soul_binder_skills; name = "Soul Binder"; }
			if( params.split("_")[0].slice(-2) == 10 ){ job = awakening ? striker_skills_awakening : striker_skills; name = "Striker"; }
		}else{
		
			if( params.slice(-2).replace("-","") == 0 ){ job = awakening ? knight_skills_awakening : knight_skills; name = "Knight"; }
			if( params.slice(-2).replace("-","") == 1 ){ job = awakening ? berserker_skills_awakening : berserker_skills; name = "Berserker"; }
			if( params.slice(-2).replace("-","") == 2 ){ job = awakening ? wizard_skills_awakening : wizard_skills; name = "Wizard"; }
			if( params.slice(-2).replace("-","") == 3 ){ job = awakening ? priest_skills_awakening : priest_skills; name = "Priest"; }
			if( params.slice(-2).replace("-","") == 4 ){ job = awakening ? archer_skills_awakening : archer_skills; name = "Archer"; }
			if( params.slice(-2).replace("-","") == 5 ){ job = awakening ? heavy_gunner_skills_awakening : heavy_gunner_skills; name = "Heavy Gunner"; }
			if( params.slice(-2).replace("-","") == 6 ){ job = awakening ? thief_skills_awakening : thief_skills; name = "Thief"; }
			if( params.slice(-2).replace("-","") == 7 ){ job = awakening ? assassin_skills_awakening : assassin_skills; name = "Assassin"; }
			if( params.slice(-2).replace("-","") == 8 ){ job = awakening ? runeblade_skills_awakening : runeblade_skills; name = "Runeblade"; }
			if( params.slice(-2).replace("-","") == 9 ){ job = awakening ? soul_binder_skills_awakening : soul_binder_skills; name = "Soul Binder"; }
			if( params.slice(-2).replace("-","") == 10 ){ job = awakening ? striker_skills_awakening : striker_skills; name = "Striker"; }
		
		}
		
		Class_skills = job;
		
		if( !awakening ){
			params = params.split("_")[0].split('-');
		}else{
			params = params.split("_")[1].split('-');
		}
		
		if( params.length <= 1 ){
			params = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0"];
		}

		if( awakening ){
			
			for(let i=0; i < (params.length); i++){

				levelsURL[i] = params[i];
				if( params[i] > 0 ){
					lockedsURL[i] = 0;
				}else{
					lockedsURL[i] = 1;
				}

			}
			
		}else{
			
			for(let i=0; i < (params.length - 1); i++){

				levelsURL[i] = params[i];
				if( params[i] > 0 ){
					lockedsURL[i] = 0;
				}else{
					lockedsURL[i] = 1;
				}

			}
			
		}
		
		if( !location.href.split("#")[1].includes("_") ){
			location.href = location.href.split('#')[0] + "#" + location.href.split('#')[1] + "_0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" + lapenURL;
		}
		
		showSkills();
		
		let infoRequirement = document.getElementById("jobName");
		infoRequirement.innerHTML = "<p>" + name + "</p>";
		
	}

}

// createColumn - Create a column with skills
function createColumn(start, stop){

	let storeInfo = "";
	
	storeInfo = storeInfo + '<div class="col-3">';
	
	let _i = 0;
	let _j = 0;
	for(let i=start; i < stop; i++){
		
		if( i == 6 ){ _j = 1; }
		if( i == 12 ){ _j = 2; }
		if( i == 18 ){ _j = 3; }
		
		storeInfo = storeInfo + '<div class="skill_box">' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="skill skill_' + i + (awakening ? "_noSP" : "") + '"></div>' +
			'<div class="skillImage" style="background-position: ' + (_j * -43) + 'px ' + (_i * -50) +'px"></div>' +
			'<div class="point_box">' +
			'<div class="bar">' +
			'<span class="skill_text skill_text_' + i + '"></span></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="minus dec_' + i + ' skill_btn"></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="plus inc_' + i + ' skill_btn"></div>' +
			'</div></div>';
			
		_i++;
		
	}
	
	// Add columns to the right side of the skill window
	let rightMenu = document.getElementById("skills_right");
	rightMenu.innerHTML = rightMenu.innerHTML + storeInfo + '</div>';

	let skillBoxes = document.getElementsByClassName("skill_box");
	let skillIcons = document.getElementsByClassName("skillImage");
	let skillTexts = document.getElementsByClassName("skill_text");
	
	for(let i=start; i < stop; i++){
	
		// Check if skill is not hidden
		if( hiddens[i] == 0 ){
			
			// Set skill icon
			//skillIcons[i].style.backgroundImage = "url('./images/skills/" + images[i] + ".png')";
			let jobName = document.getElementById("jobName");
			jobName = jobName.innerText || "Knight";
			if( awakening ){ jobName = jobName + "_awakening"; }
			skillIcons[i].style.backgroundImage = "url('./images/skills/" + jobName.toLowerCase() + ".png')";
			
			// Check if the skill text is available and set level/maxlevel text
			if( skillTexts[i] != undefined ){
				skillTexts[i].innerHTML = levels[i] + "/" + maxLevels[i];
			}
			
		}else{
			
			// If skill is hidden, check if it exists and set it's opacity to 0
			if( skillBoxes[i] != undefined ){
				skillBoxes[i].style.opacity = 0;
			}
			
		}
	
	}

}

// storeData - stores the classes .js info into arrays
function storeData(){

	// Clean arrays
	hiddens = [];
	images = [];
	titles = [];
	elements = [];
	resources = [];
	maxLevels = [];
	lockReqs = [];
	requirements = [];
	infos = [];
	levels = [];
	lockeds = [];
	
	// Class_skills are the .js stuff
	let skills = Class_skills;
	
	// Amount of skills (includes hidden) 6 skills per column, 4 columns.
	let skillAmount = 24;
	
	// Loop that pushes the .js info into the arrays
	for(let j=0; j < skillAmount; j++){
		for(let i=0; i < skills.length; i++){
			if(skills[j] && skills[j][i]){
				hiddens.push(skills[j][i].hidden);
				images.push(skills[j][i].image);
				titles.push(skills[j][i].title);
				resources.push(skills[j][i].resource);
				levels.push(skills[j][i].level);
				elements.push(skills[j][i].element);
				lockeds.push(skills[j][i].locked);
				lockReqs.push(skills[j][i].lockReq);
				maxLevels.push(skills[j][i].maxLevel);
				requirements.push(skills[j][i].requirement);
				infos.push(skills[j][i].info);
			}
		}
	}
	
	// Check for default unlocked abilities.
	for(let l=0; l < lockeds.length; l++){
		if( lockeds[l] == 0 ){
			lockedsURL[l] = 0;
		}
	}
	
	if( awakening ){
		page2.levelsURL = levelsURL;
		page2.lockedsURL = lockedsURL;
	}else{
		page1.levelsURL = levelsURL;
		page1.lockedsURL = lockedsURL;
	}
	
	if( awakening ){
		levelsURL = page2.levelsURL;
		lockedsURL = page2.lockedsURL;
	}else{
		levelsURL = page1.levelsURL;
		lockedsURL = page1.lockedsURL;		
	}
	
	// If URL have info, Use it instead
	if( levelsURL.length > 0 && lockedsURL.length > 0 ){
		levels = levelsURL;
		lockeds = lockedsURL;
		levelsURL = [];
		lockedsURL = [];
	}

}

/**
 * Sets the skill info for the hover-tooltip
 * @param {Event} event
 * @param {string} type - The class of the element. Can be: skill, plus, minus, min, max
 */
function setSkillInfo(event, type){

		// Check if skill info exists
		function isUndefined(info){
		
			if( info == undefined ){ return "<p><span class='info_gray'>Skill information is missing!</span></p>"; }
			
			return info;
		
		}

		// Check if skill is hidden
		let isHidden = event.target.dataset.hidden;
		if( isHidden == 1 ){ return; }
		
		let box = document.getElementById('info_box');
		
		// Make the tooltip visible
		box.style.display = "block";
	
		// Get tooltip offsetHeight
		let infoContent = document.getElementById("info_content");
		//let offset = infoContent.offsetHeight;

		// Get window dimensions
		let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	
		let info = document.getElementById("info_box");
		let offset = info.offsetHeight;
		let offset2 = info.offsetWidth;
		let infoWidth = 350;
		
		if( event.pageY - 70 + offset >= windowHeight ){
			
			info.style.top = (windowHeight - offset - 10) + "px";
			
		}else if( event.pageY + 60 - offset/2 <= 0 ){
			
			info.style.top = 60 + "px";
			
		}else{
			
			info.style.top = event.pageY - 80 + "px";
			
		}
		
		if( event.pageX - offset2 - 30 <= 0 ){
			
			info.style.left = 10 + "px";
			
		}else{
		
			info.style.left = event.pageX - infoWidth - 20 + "px";
		
		}
		
		let infoTitle = event.target.dataset.title;
		$("#info_name > p").text(infoTitle);
		
		// Loop titles and compare it with data-title. When matched, add the information into the info_box.
		for(let i=0; i < titles.length; i++){
		
			if( titles[i] == infoTitle ){
			
				// Hide tooltip for minus button if skill is at 0
				if( levels[i] <= 0 && type == "minus" ){
					box.style.display = "none";
					return;
				}
				
				// Hide tooltip for plus button if skill is at max
				if( levels[i] == maxLevels[i] && type == "plus" ){
					box.style.display = "none";
					return;
				}
				
				// Prevent skill(12, 18) from showing tooltip on plus/minus.
				if( ( (!awakening && i == 12 || i == 18) || (awakening && i == 18) ) && type != "skill" ){
					box.style.display = "none";
					return;
				}
				
				// Prevent skill(0, 1) from showing tooltip on minus.
				if( (!awakening && i == 0 || i == 1) && levels[i] <= 1 && type == "minus" ){
					box.style.display = "none";
					return;
				}
				
				// Set element text
				$("#info_name").removeClass();
				if( elements[i] ){
					$("#info_name").addClass("element_" + elements[i].toLowerCase());
					$("#info_element > p").text(elements[i]);
				}else{
					$("#info_element > p").text("");
				}
				
				let infoDescription = document.getElementById("info_description_3");
				
				// Get/Set Resources text
				let isArray = Array.isArray(resources[i]);
				
				function getResources(changes){
					
					let newLevel = parseInt(levels[i]) + changes;
					
					if( isArray ){
						$(".info_resource").text(resources[i][newLevel]);
					}else{
						$(".info_resource").text(resources[i]);
					}

				}
				
					
				function getOptiInfo(lvl){
					
					if( lvl == 0 ){ return ""; }
					
					let o_text = Class_skills;
					let n_txt = o_text[i][0].skillinfo.split("<span class='info_blue'></span>");
					
					let _txt = "";
					for(let j=0; j < n_txt.length; j++){
						
						if( j != n_txt.length-1 ){
							_txt = _txt + n_txt[j] + "<span class='info_blue'>" + o_text[i][0].skilltext[lvl].split(",")[j] + "</span>";
						}else{
							_txt = _txt + n_txt[j];
						}
					
					}
					
				
					return _txt;
				}
				
				if( type == "skill" ){
					if( levels[i] == 0 ){
						let newLevel = parseInt(levels[i]) + 1;
						$(".info_level").text("Level " + newLevel );
						infoDescription.innerHTML = "<p><span class='info_gray'>" + getOptiInfo(newLevel) + "</span></p>";
						getResources(1);
					}else{
						$(".info_level").text("Level " + parseInt( levels[i]) );
						infoDescription.innerHTML = "<p><span class='info_gray'>" + getOptiInfo(levels[i]) + "</span></p>";
						getResources(0);
					}
				}else if( type == "plus" ){
					let newLevel = parseInt(levels[i]) + 1;
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = "<p><span class='info_gray'>" + getOptiInfo(newLevel) + "</span></p>";
					getResources(1);
				}else if( type == "minus" ){
					let newLevel = parseInt(levels[i]) - 1;
					$(".info_level").text("Level " + newLevel );
					infoDescription.innerHTML = "<p><span class='info_gray'>" + getOptiInfo(newLevel) + "</span></p>";
					getResources(-1);
				}else if( type == "min" ){
					let newLevel = 1;
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = "<p><span class='info_gray'>" + getOptiInfo(newLevel) + "</span></p>";
					getResources(1 - parseInt(levels[i]));
				}else if( type == "max" ){
					let newLevel = parseInt(maxLevels[i]);
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = "<p><span class='info_gray'>" + getOptiInfo(newLevel) + "</span></p>";
					getResources(parseInt(maxLevels[i]) - parseInt(levels[i]));
				}

			
				// Set tooltip image
				let infoImage = document.getElementById("info_image");
				//infoImage.style.backgroundImage = "url('./images/skills/" + images[i] + ".png')";
				let jobName = document.getElementById("jobName");
				jobName = jobName.innerText || "Knight";
				if( awakening ){ jobName = jobName + "_awakening"; }
				let skillIcons = document.getElementsByClassName("skillImage");
				infoImage.style.backgroundPosition = skillIcons[i].style.backgroundPosition;
				infoImage.style.backgroundImage = "url('./images/skills/" + jobName.toLowerCase() + ".png')";
				
				// Set tooltip requirement text
				let infoRequirement = document.getElementById("info_description");
				infoRequirement.innerHTML = "<p><span class='info_gray'>" + requirements[i] + "</span></p>";
			
				// Set tooltip's first info text
				let infoDescription2 = document.getElementById("info_description_2");
				infoDescription2.innerHTML = "<p><span class='info_gray'>" + infos[i] + "</span></p>";
				
				break;
			
			}
		
		}
		
		if( type == "lapen_item" ){
			
			let infoTitle = event.target.dataset.title;
			$("#info_name > p").html("<span class='info_lightblue'>" + infoTitle + "</span>");
				
			$("#info_name").removeClass();
			$("#info_element > p").text("");
			$(".info_level").text("");
			$(".info_resource").text("");
			let infoDescription2 = document.getElementById("info_description_2");
			infoDescription2.innerHTML = "";
			
			let linebreak = document.getElementsByClassName("info_linebreak");
			linebreak[0].style.display = "none";

			let infoRequirement = document.getElementById("info_description");
			let jobName = document.getElementById("jobName").innerText;
			if( infoTitle.includes("Blue") ){
				infoRequirement.innerHTML = "<p><span class='info_gray'>" + event.target.dataset.requirement + "<p><span class='info_gray'>Job: " + jobName + "</span></p>" + "</span></p>";
			}else{
				infoRequirement.innerHTML = "<p><span class='info_gray'>" + event.target.dataset.requirement + "</span></p>";
			}
			
			function getLapenInfo(event, lvl){
				
				let o_text = lapenshard;
				let l_id = 0;
				
				for(let g=0; g < o_text[0].length; g++){
					
					if( o_text[0][g].title == event.target.dataset.title ){
						l_id = g;
						break;
					}
				}
				
				let n_txt = event.target.dataset.skillinfo.split("<span class='info_blue'></span>");
				
				let _txt = "";
				for(let j=0; j < n_txt.length; j++){
					
					if( j != n_txt.length-1 ){
						_txt = _txt + n_txt[j] + "<span class='info_blue'>" + o_text[0][l_id].skilltext[lvl].split(",")[j] + "</span>";
					}else{
						_txt = _txt + n_txt[j];
					}
				
				}
				
			
				return _txt;
			}
			
			let infoDescription = document.getElementById("info_description_3");
			let skillLevel = parseInt( event.target.parentElement.firstChild.innerText.replace("+","") );
			
			let skill = event.target.dataset.jobskills;
			let skillBasic = event.target.dataset.textbasic;
			if( skillBasic == "undefined" ){ skillBasic = "" }else{ skillBasic = "<p><span class='info_gray'>" + skillBasic + "</span></p>"; }
			if( infoTitle.includes("Blue") ){
				skill = skill.split( jobName.toUpperCase() )[1].split("|")[1].split(",")[0];
			}else{
				skill = "";
			}
			
			infoDescription.innerHTML = skillBasic + "<p><span class='info_gray'>" + skill + " " + getLapenInfo(event, skillLevel - 1) + " The lapenshard's power is reduced when paired with gear exceeding the lapenshard's level.</span></p>";
			
			let infoImage = document.getElementById("info_image");
			infoImage.style.backgroundPosition = event.target.style.backgroundPosition;
			infoImage.style.backgroundImage = "url('./images/lapenshards.png')";
			infoImage.style.width = "48px";
			infoImage.style.height = "56px";
			infoImage.style.transform = "scale(0.8)";
			infoImage.style.top = "-6px";

			let infoImageBox = document.getElementById("info_image_box");
			infoImageBox.style.width = "54px";
			
		}else{
			
			let linebreak = document.getElementsByClassName("info_linebreak");
			linebreak[0].style.display = "block";
			
			let infoImage = document.getElementById("info_image");
			infoImage.style.width = "43px";
			infoImage.style.height = "50px";
			infoImage.style.transform = "scale(0.9)";
			infoImage.style.top = "-3px";
			
			let infoImageBox = document.getElementById("info_image_box");
			infoImageBox.style.width = "50px";
			
		}

}

// setSkillLock - Lock/Unlock skills that doesn't have the needed points
function setSkillLock(){

	let skillIcons = document.getElementsByClassName("skillImage");

	
	for(let i=0; i < lockeds.length; i++){
	
		if( lockReqs[i] != undefined ){
		
			let split = lockReqs[i].split('-');
			let hasReq = true;
			
			for(let j=0; j < split.length; j++){
			
				if( parseInt(split[j]) <= parseInt(levels[j]) ){
					// Correct
				}else{
					hasReq = false;
					break;
				}
			
			}
			
			if( hasReq ){
				lockeds[i] = 0;
				skillIcons[i].style.filter = "brightness(100%)";
				$(skillIcons[i].parentElement).removeClass("locked");
			}else{
				lockeds[i] = 1;
				skillIcons[i].style.filter = "brightness(20%)";
				$(skillIcons[i].parentElement).addClass("locked");
				
				// Skills that doesn't fill it's skill requirements have their points removed.
				if( levels[i] > 0 ){
					levels[i] = 0;
					let skillTexts = document.getElementsByClassName("skill_text");
					skillTexts[i].innerHTML = levels[i] + "/" + maxLevels[i];
					setPointsUsed();
				}
				
			}
		
		}
		
	}

	// Setting this part in a Timeout because it sometimes load faster than the plus/minus class content. Temp fix?
	// Sets the class/images on the skill plus and minus buttons
	setTimeout(function(){
	
		let skillBtns = Array.from(document.getElementsByClassName("skill_btn"));
		let skillPlus = skillBtns.filter(skillBtn => 
			skillBtn.classList.contains('plus') || skillBtn.classList.contains('min')
		);
		let skillMinus = skillBtns.filter(skillBtn => 
			skillBtn.classList.contains('max') || skillBtn.classList.contains('minus')
		);
	
		for(let i=0; i < Class_skills.length; i++){

			if( parseInt(levels[i]) == 0 ){
				skillMinus[i].classList.replace("minus", "max"); // remove minus, add max
			} else {
				skillMinus[i].classList.replace("max", "minus");
			}

			// Locks base skills(0, 1) from having 0 points.
			if( !awakening && (i == 0 || i == 1) ){
				if (parseInt(levels[i]) == 1) {
					skillMinus[i].classList.replace("minus", "max");
				} else {
					skillMinus[i].classList.replace("max", "minus");
				}
			}

			if( parseInt(levels[i]) == maxLevels[i] ){
				skillPlus[i].classList.replace("plus", "min");
				if (skillMinus[i].classList.contains("max")) {
					skillMinus[i].classList.add("max_locked");
				}
			}else{
				skillPlus[i].classList.replace("min", "plus");
				skillMinus[i].classList.remove("max_locked");
			}

			// If out of skill points, show the lock icon
			if ( getSkillpoints() == 0 ) {
				if ( skillPlus[i].classList.contains("plus") ) {
					skillPlus[i].classList.add("plus_locked");
				}
				if ( skillMinus[i].classList.contains("max")) {
					skillMinus[i].classList.add("max_locked");
				}
			} else {
				skillPlus[i].classList.remove("plus_locked");
				skillMinus[i].classList.remove("max_locked");
			}

			// Locks sp and movement skill(12, 18)
			if( (!awakening && i == 12 || i == 18) || (awakening && i == 18)){
				skillPlus[i].classList.add("plus_locked");
				skillPlus[i].classList.replace("min", "plus");
				skillMinus[i].classList.add("minus_locked");
			}
		
		}
	
	}, 100);

}

// setUrl - Sets the skillpoints into the url so that it can be linked
function setUrl(){

	//if( awakening ){ return; }

	// make url include skill numbers
	let str = "#";
	if( awakening ){ str = ""; };
	
	// Set Job id
	let job = 0;
	if( Class_skills == knight_skills || Class_skills == knight_skills_awakening ){ job = 0; }
	if( Class_skills == berserker_skills || Class_skills == berserker_skills_awakening ){ job = 1; }
	if( Class_skills == wizard_skills || Class_skills == wizard_skills_awakening ){ job = 2; }
	if( Class_skills == priest_skills || Class_skills == priest_skills_awakening ){ job = 3; }
	if( Class_skills == archer_skills || Class_skills == archer_skills_awakening ){ job = 4; }
	if( Class_skills == heavy_gunner_skills || Class_skills == heavy_gunner_skills_awakening ){ job = 5; }
	if( Class_skills == thief_skills || Class_skills == thief_skills_awakening ){ job = 6; }
	if( Class_skills == assassin_skills || Class_skills == assassin_skills_awakening ){ job = 7; }
	if( Class_skills == runeblade_skills || Class_skills == runeblade_skills_awakening ){ job = 8; }
	if( Class_skills == soul_binder_skills || Class_skills == soul_binder_skills_awakening ){ job = 9; }
	if( Class_skills == striker_skills || Class_skills == striker_skills_awakening ){ job = 10; }
	
	for(let i=0; i < levels.length; i++){
		if( i == levels.length - 1 ){
			str = str + levels[i];
		}else{
			str = str + levels[i] + "-";
		}
	}
	
	if( !awakening ){
		// Check if job already exists if URL was loaded and add only if not
		if(str.split("-").length == 24){
			str = str + "-" + job;
		}
	}
	
	if( !awakening ){
		if( !location.href.includes("#") || !location.href.split("#")[1].includes("_") ){
			str = str + "_0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" + lapenURL;
		}else{
			str = str + "_" + location.href.split("#")[1].split("_")[1] + lapenURL;
		}
	}else{
		if( location.href.split('#')[1] != undefined && !isNaN( location.href.split('#')[1][0] ) ){
			str = "#" + location.href.split("#")[1].split("_")[0] + "_" + str + lapenURL;
		}else{
			str = "#1-1-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-" + job + "_" + str + lapenURL;
		}
	}
	
	location.href = location.href.split('#')[0] + str;

}

// resetSkills - Reset all the skillpoints
function resetSkills(numb, switched){
	
	if( switched == false ){ return; }

	for (let i=0; i < levels.length; i++){
		
		if( !awakening ){
		
			if( i == 12 || i == 18 ){ continue; }
			
			if( i == 0 || i == 1 ){
				levels[i] = 1;
			}else{
				levels[i] = 0;
			}
			
		}else{

			if( i == 18 ){ continue; }
			levels[i] = 0;
		
		}
		
		let skillTexts = document.getElementsByClassName("skill_text");
		if( skillTexts[i] != undefined ){
			skillTexts[i].innerHTML = levels[i] + "/" + maxLevels[i];
		}
		setPointsUsed();
		
	}

	setSkillLock();
	setUrl();

}

// getSkillpoints - Get remaining skillpoints
function getSkillpoints(){

		let pointsUsed = 0;
		
		// Collect all the skill levels
		for(let i=0; i < levels.length; i++){
			pointsUsed += parseInt(levels[i]);
		}
		
		if( awakening ){
			return (pointsMax2 - pointsUsed);
		}
		
		return (pointsMax - pointsUsed);

}

/**
 * Increase or decrease a skillpoint from a skill
 * @param {Event} event - Used to get the skill name of the click target
 * @param {number} value - 1 or -1 to increase or decrease a skill point
 */
function changeSkillPoints(event, value){

	let infoTitle = event.target.dataset.title;
	let skillTexts = document.getElementsByClassName("skill_text");

	for(let i=0; i < titles.length; i++){
	
		// Prevent skill(12, 18) to be increased/decreased
		if( (!awakening && i == 12 || i == 18) || (awakening && i == 18) ){ continue; }
	
		if( titles[i] == infoTitle ){
			
			// Check if points should increase or decrease
			if( value == 1 ){
			
				// Increase points
				if( levels[i] < maxLevels[i] && getSkillpoints() > 0 ){
				
					// If a locked skill is increased, add pre-required skills
					if( lockeds[i] == 1 ){ 
						levelUpAllPrereqSkills(i);
					}
				
					levels[i] = parseInt(levels[i]) + 1;
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];
				
				}else if( levels[i] == maxLevels[i] ){
					
					// if you click on the {+} button at max skill level, set your starter skills to lv1
					if (!awakening && (i == 0 || i == 1)) {
						levels[i] = 1;
					} else {
						levels[i] = 0;
					}
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}
			
			}else{
			
				// Set skill level to max if you click on the {-} button at the minimum skill level
				// and prevent skill(0, 1) from being decreased lower than rank 1
				if( (levels[i] == 0) || (levels[i] == 1 && (!awakening && i <= 1)) ){

					if( lockeds[i] == 1 ){ 
						levelUpAllPrereqSkills(i);
					}

					if( getSkillpoints() >= maxLevels[i] ) {
						levels[i] = maxLevels[i];
					}else{
						levels[i] = getSkillpoints();
					}

					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}else if( levels[i] > 0 ){
					// Decrease points
					levels[i] = parseInt(levels[i]) - 1;
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}
			
			}
			
		}
		
	}
	
	setPointsUsed();
	setUrl();
	
	let type = event.target.classList[0];
	
	setSkillInfo(event, type);
	setSkillLock();

}

// setPointsUsed - Set/Change the points used text to show how many points that the user have spent.
function setPointsUsed(){

	// Set text with current and max points
	$("#skill_points > #skillPointNumber").text( getSkillpoints() );

}

/**
 * Sets the level of your pre-req skills to the levels defined in lockReqs[].
 * @param {number} index The index of the skill to check the pre-reqs of.
 */
function levelUpAllPrereqSkills(index) {
	let skillTexts = document.getElementsByClassName("skill_text");
	if( lockReqs[index] == undefined ){ return; }
	let prereqArray = lockReqs[index].split('-');
	
	for (let i = 0; i < levels.length; i++) {
		if (levels[i] < prereqArray[i] && getSkillpoints() >= parseInt(prereqArray[i])) {
			levels[i] = parseInt(prereqArray[i]);
			skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];
		}
	}
}

function setJobLines(){

	// Get job names
	let name = "knight";
	if( Class_skills == knight_skills ){ name = "knight"; }
	if( Class_skills == berserker_skills ){ name = "berserker"; }
	if( Class_skills == wizard_skills ){ name = "wizard"; }
	if( Class_skills == priest_skills ){ name = "priest"; }
	if( Class_skills == archer_skills ){ name = "archer"; }
	if( Class_skills == heavy_gunner_skills ){ name = "heavy_gunner"; }
	if( Class_skills == thief_skills ){ name = "thief"; }
	if( Class_skills == assassin_skills ){ name = "assassin"; }
	if( Class_skills == runeblade_skills ){ name = "runeblade"; }
	if( Class_skills == soul_binder_skills ){ name = "soul_binder"; }
	if( Class_skills == striker_skills ){ name = "striker"; }

	// Set job skill lines
	if( awakening ){
		$("#lines").css("background-image", "none");
	}else{
		$("#lines").css("background-image", "url(./images/lines/" + name + "_lines.png)");
	}

}

function createBase(){
	
	// Store all the classes .js data inside arrays
	storeData();
	
	// Set job lines
	setJobLines();
	
	// Create 4 columns for the skills
	createColumn(0,6);
	createColumn(6,12);
	createColumn(12,18);
	createColumn(18,24);
	
	// Set points used
	setPointsUsed();
	
	// Set lock on skills that aren't unlocked yet
	setSkillLock();

}

function setMouseTriggers(){

	$(".skill, .plus, .minus, .max, .min").mousemove(function(event){
	
		let type = event.target.classList[0];
		setSkillInfo(event, type);

	});
	
	// Mouseleave for .skill, .plus and .minus
	$(".skill, .plus, .minus, .max, .min").mouseleave(function(event){

		let box = document.getElementById('info_box');
		box.style.display = "none";
		
	});
	
	// Mousedown for .plus
	$(".plus").mousedown(function(event){
	
		// Add point to skill
		changeSkillPoints(event, 1);
		
	});
	
	// Mousedown for .minus
	$(".minus").mousedown(function(event){
	
		// Remove point from skill
		changeSkillPoints(event, -1);
		
	});

}

function showSkills(){
	$("#window").show();
	$("#window").css("z-index", 20);
}

function setCurrentPage(num){
	currentPage = num;
	if( currentPage == 2 ){
		$('#skills_right').empty();
		loadUrlPoints();
		createBase();
		setMouseTriggers();
		//resetSkills(currentPage, true);
	}
}

$( window ).on( "load", function(){
	
	let params = location.href.split('#')[1];
	if( params != undefined && params.length > 1 ){
		if( params.includes("-") ){
			currentPage = 2;
		}else{
			currentPage = 1;
		}
	}

	// Set Default
	Class_skills = knight_skills;
	
	// Load url points
	loadUrlPoints();
	
	// Collect data, load url points, create columns, set points and skill locks.
	createBase();

	// Set Mouse triggers (mousemove, mouseleave, mousedown)
	setMouseTriggers();
	
});

function setCookie(cname,cvalue,exdays,cexpire) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "";
	if( !cexpire ){
		expires = "expires=" + d.toGMTString();
	}
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

$( window ).on( "load", function(){

	// Show/Hide cookie alert
	let cAgree = getCookie("cookie");
	
	if( cAgree == 0 ){
		$("#cookies").show();
	}
	
	$("#cookies_button").mousedown(function(event){
		$("#cookies").hide();
		setCookie("cookie", "1", 3650);
	});

});