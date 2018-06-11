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
var texts = [];
var Class_skills = knight_skills;
var attributePoints = 50;
var lockedsURL = [];
var levelsURL = [];

// changeJob - Change skills to another job
function changeJob(job, name){

	Class_skills = job;

	$('#skills_right').empty();
	createBase();
	setMouseTriggers();
	resetSkills();
	
	let infoRequirement = document.getElementById("jobName");
	infoRequirement.innerHTML = "<p>" + name + "</p>";

}

// loadUrlPoints - Grabs the url info and set points into the skills
function loadUrlPoints(){

	let params = location.href.split('#')[1];
	
	if(params){
	
		// Get job
		let job = knight_skills;
		let name = "";
		if( params.slice(-1) == 0 ){ job = knight_skills; name = "Knight"; }
		if( params.slice(-1) == 1 ){ job = berserker_skills; name = "Berserker"; }
		if( params.slice(-1) == 2 ){ job = wizard_skills; name = "Wizard"; }
		if( params.slice(-1) == 3 ){ job = priest_skills; name = "Priest"; }
		if( params.slice(-1) == 4 ){ job = ranger_skills; name = "Ranger"; }
		if( params.slice(-1) == 5 ){ job = heavy_gunner_skills; name = "Heavy Gunner"; }
		if( params.slice(-1) == 6 ){ job = thief_skills; name = "Thief"; }
		if( params.slice(-1) == 7 ){ job = assassin_skills; name = "Assassin"; }
		Class_skills = job;
		
		params = params.split('-');

		for(let i=0; i < (params.length - 1); i++){

			levelsURL[i] = params[i];
			if( params[i] > 0 ){
				lockedsURL[i] = 0;
			}else{
				lockedsURL[i] = 1;
			}

		}
		
		showSkills();
		
		let infoRequirement = document.getElementById("jobName");
		infoRequirement.innerHTML = "<p>" + name + "</p>";
	
	}

}

// createColumn - Create a column with skills
function createColumn(start, stop){

	let storeInfo = "";
	
	storeInfo = storeInfo + '<div class="col-3" id="skills_row">';
	
	for(let i=start; i < stop; i++){
		storeInfo = storeInfo + '<div class="skill_box">' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="skill skill_' + i + '"></div>' +
			'<div class="skillImage"></div>' +
			'<div class="point_box">' +
			'<div class="bar">' +
			'<span class="skill_text skill_text_' + i + '"></span></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="minus dec_' + i + '"></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="plus inc_' + i + '"></div>' +
			'</div></div>';
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
			skillIcons[i].style.backgroundImage = "url('./images/skills/" + images[i] + ".png')";
			
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
	texts = [];
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
				texts.push(skills[j][i].texts);
			}
		}
	}
	
	// Check for default unlocked abilities.
	for(let l=0; l < lockeds.length; l++){
		if( lockeds[l] == 0 ){
			lockedsURL[l] = 0;
		}
	}
	
	// If URL have info, Use it instead
	if( levelsURL.length > 0 && lockedsURL.length > 0 ){
		levels = levelsURL;
		lockeds = lockedsURL;
		levelsURL = [];
		lockedsURL = [];
	}

}

// setSkillInfo - Sets the skill info for the hover-tooltip
function setSkillInfo(type){

		// Check if skill info exists
		function isUndefined(info){
		
			if( info == undefined ){ return "<p><span class='info_gray'>Skill information is missing!</span></p>" }
			
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
		let offset = infoContent.offsetHeight;
	
		// Move the tooltip above the cursor to prevent text from going outside the screen
		if( event.pageY > 511 ){
		
			if( offset > 0){
				box.style.left = event.pageX + 25 + 'px';
				box.style.top = event.pageY - offset - 25 + 'px';
			}
			
		}else{
			box.style.left = event.pageX + 25 + 'px';
			box.style.top = event.pageY + 25 + 'px';
		}
		
		if( event.pageX > 960 ){
			box.style.left = event.pageX - 362 - 15 + 'px';
			if( event.pageY > 511 ){
			
				if( offset > 0){
					box.style.top = event.pageY - offset - 25 + 'px';
				}
			
			}else{
				box.style.top = event.pageY + 25 + 'px';
			}
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
				if( (i == 12 || i == 18) && type != "skill" ){
					box.style.display = "none";
					return;
				}
				
				// Prevent skill(0, 1) from showing tooltip on minus.
				if( (i == 0 || i == 1) && levels[i] <= 1 && type == "minus" ){
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
			
				if( type == "skill" ){
					if( levels[i] == 0 ){
						let newLevel = parseInt(levels[i]) + 1;
						$(".info_level").text("Level " + newLevel );
						infoDescription.innerHTML = isUndefined(texts[i][newLevel]);
						getResources(1);
					}else{
						$(".info_level").text("Level " + parseInt( levels[i]) );
						infoDescription.innerHTML = isUndefined(texts[i][levels[i]]);
						getResources(0);
					}
				}else if( type == "plus" ){
					let newLevel = parseInt(levels[i]) + 1;
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = isUndefined(texts[i][newLevel]);
					getResources(1);
				}else if( type == "minus" ){
					let newLevel = parseInt(levels[i]) - 1;
					$(".info_level").text("Level " + newLevel );
					infoDescription.innerHTML = isUndefined(texts[i][newLevel]);
					getResources(-1);
				}
			
				// Set tooltip image
				let infoImage = document.getElementById("info_image");
				infoImage.style.backgroundImage = "url('./images/skills/" + images[i] + ".png')";
				
				// Set tooltip requirement text
				let infoRequirement = document.getElementById("info_description");
				infoRequirement.innerHTML = requirements[i];
			
				// Set tooltip's first info text
				let infoDescription2 = document.getElementById("info_description_2");
				infoDescription2.innerHTML = infos[i];
				
				break;
			
			}
		
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
	setTimeout(function(){
	
		let skillMinus = document.getElementsByClassName("minus");
		let skillPlus = document.getElementsByClassName("plus");
	
		for(let i=0; i < Class_skills.length; i++){
		
			if( parseInt(levels[i]) == 0 ){
				skillMinus[i].classList.add("minus_locked");
			}else{
				skillMinus[i].classList.remove("minus_locked");
			}
			
			if( parseInt(levels[i]) == maxLevels[i] ){
				skillPlus[i].classList.add("plus_locked");
			}else{
				skillPlus[i].classList.remove("plus_locked");
			}
			
			// Locks locked skills but also skill(12, 18).
			if( lockeds[i] == 1 || i == 12 || i == 18 ){
				skillMinus[i].classList.add("minus_locked");
				skillPlus[i].classList.add("plus_locked");
			}
			
			// Locks base skills(0, 1) from having 0 points.
			if( (i == 0 || i == 1) && parseInt(levels[i]) == 1 ){
				skillMinus[i].classList.add("minus_locked");
			}
		
		}
	
	}, 100);

}

// setUrl - Sets the skillpoints into the url so that it can be linked
function setUrl(){

	// make url include skill numbers
	let str = "#";
	
	// Set Job id
	let job = 0;
	if( Class_skills == knight_skills ){ job = 0; }
	if( Class_skills == berserker_skills ){ job = 1; }
	if( Class_skills == wizard_skills ){ job = 2; }
	if( Class_skills == priest_skills ){ job = 3; }
	if( Class_skills == ranger_skills ){ job = 4; }
	if( Class_skills == heavy_gunner_skills ){ job = 5; }
	if( Class_skills == thief_skills ){ job = 6; }
	if( Class_skills == assassin_skills ){ job = 7; }
	
	for(let i=0; i < levels.length; i++){
		if( i == levels.length - 1 ){
			str = str + levels[i];
		}else{
			str = str + levels[i] + "-";
		}
	}
	
	// Check if job already exists if URL was loaded and add only if not
	if(str.split("-").length == 24){
		str = str + "-" + job;
	}
		
	location.href = location.href.split('#')[0] + str;

}

// resetSkills - Reset all the skillpoints
function resetSkills(){

	for (let i=0; i < levels.length; i++){
		
		if( i == 12 || i == 18 ){ continue; }
		
		if( i == 0 || i == 1 ){
			levels[i] = 1;
		}else{
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
		let pointsMax = 53 + 4; // Current max points + 4 base skills
		
		// Collect all the skill levels
		for(let i=0; i < levels.length; i++){
			pointsUsed = pointsUsed + parseInt(levels[i]);
		}
		
		return (pointsMax - pointsUsed);

}

// changeSkillPoints - Increase or decrease a skillpoint from a skill
function changeSkillPoints(event, value){

	let infoTitle = event.target.dataset.title;
	let skillTexts = document.getElementsByClassName("skill_text");

	for(let i=0; i < titles.length; i++){
	
		// Prevent skill(12, 18) to be increased/decreased
		if( i == 12 || i == 18 ){ continue; }
		
		// Prevent skill(0, 1) from being decreased lower than rank 1
		if( (value == -1) && (i == 0 || i == 1) && levels[i] <= 1 ){ continue; }
	
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
				
				}
			
			}else{
			
				// Decrease points
				if( levels[i] > 0 ){
				
					levels[i] = parseInt(levels[i]) - 1;
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];
				
				}
			
			}
			
		}
		
	}
	
	setPointsUsed();
	setUrl();
	
	let type = event.target.classList[0];
	
	setSkillInfo(type);
	setSkillLock();

}

// setPointsUsed - Set/Change the points used text to show how many points that the user have spent.
function setPointsUsed(){

	// Set text with current and max points
	$("#skill_points > #skillPointNumber").text( getSkillpoints() );

}

/**
 * @description Sets the level of your pre-req skills to the levels defined in lockReqs[].
 * @argument index The index of the skill to check the pre-reqs of.
 * @returns void
 * @author ChungHoward
 */
function levelUpAllPrereqSkills(index) {
	
	let skillTexts = document.getElementsByClassName("skill_text");
	let prereqArray = lockReqs[index].split('-');
	
	for (let i = 0; i < levels.length; i++) {

		if (levels[i] < prereqArray[i]) {

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
	if( Class_skills == ranger_skills ){ name = "ranger"; }
	if( Class_skills == heavy_gunner_skills ){ name = "heavy_gunner"; }
	if( Class_skills == thief_skills ){ name = "thief"; }
	if( Class_skills == assassin_skills ){ name = "assassin"; }

	// Set job skill lines
	$("#lines").css("background-image", "url(./images/lines/" + name + "_lines.png)");

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

function resetStats(){

	attributePoints = 50;
	
	let stats = document.getElementsByClassName("statsButton");

	for(let i=0; i < stats.length; i++){
		stats[i].innerHTML = "<p>" + stats[i].dataset.base + "</p>";
		stats[i].classList.remove("bonus");
	}
	
	// Set new points
	let points = document.getElementById("attributePoints");
	points.innerHTML = "<p>" + attributePoints + "</p>";

}

function setMouseTriggers(){

	// Mousemove for .skill, .plus and .minus
	$(".skill, .plus, .minus").mousemove(function(event){
	
		let type = event.target.classList[0];
		setSkillInfo(type);

	});
	
	// Mouseleave for .skill, .plus and .minus
	$(".skill, .plus, .minus").mouseleave(function(event){

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
	$("#blocker").hide();
	$("#window").css("z-index", 20);
	$("#window_2").css("z-index", 10);
	$("#window_3").css("z-index", 10);
}

function showStats(){
	$("#window_2").show();
	$("#blocker").hide();
	$("#window").css("z-index", 10);
	$("#window_2").css("z-index", 20);
}

function showStats_2(){
	$("#window_3").show();
	
	//Get window_2 position and width
	let top = parseInt($("#window_2").css("top").split('px')[0]);
	let left = parseInt($("#window_2").css("left").split('px')[0]);
	let width = parseInt($("#window_2").css("width").split('px')[0]);
	
	// Set window_3 right to window_2
	$("#window_3").css("top", top);
	
	if( left + width < 1513 ){
		$("#window_3").css("left", (left + width));
	}else{
		$("#window_3").css("left", 1513);
	}
}

function hideWindow(){
	$("#window").hide();
	
	//if( $("#window_2").is(":hidden") ){
		$("#blocker").show();
	//}
}

function hideWindow_2(){
	$("#window_2").hide();
	$("#window_3").hide();
	
	if( $("#window").is(":hidden") ){
		$("#blocker").show();
	}
}

function hideWindow_3(){
	$("#window_3").hide();
}

function startTime(){
	
    var d = new Date();
	var Time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'UTC' });
    document.getElementById('clock').innerHTML = "<p>" + Time + "</p>";
    var t = setTimeout(startTime, 500);

}

$( window ).on( "load", function(){

	// Set/Start timers
	startTime();

	// Load url points
	loadUrlPoints();

	// Make window draggable
	$("#window").draggable({ handle: "#drag_bar", containment: [15, 23, 1060, 1920] });
	//$("#window_2").draggable({ handle: "#drag_bar_2", containment: [15, 35, 1670, 1920] });
	//$("#window_3").draggable({ handle: "#drag_bar_3", containment: [15, 35, 1513, 1920] });
	
	// Set Attribute points
	//let points = document.getElementById("attributePoints");
	//points.innerHTML = "<p>" + attributePoints + "</p>";
	
	// Collect data, load url points, create columns, set points and skill locks.
	createBase();

	// Set Mouse triggers (mousemove, mouseleave, mousedown)
	setMouseTriggers();
	
	/* Stats windows that are currently taken out
	
	// Mousedown for statsButton
	$(".statsButton").mousedown(function(event){
	
		if( attributePoints <= 0 ){ return; }
	
		let stat = event.target.dataset.stat;
		let txt = event.target.innerHTML;
		
		txt = txt.replace("<p>", "").replace("</p>", "");
		
		event.target.innerHTML = "<p>" + (parseInt(txt)+1) + "</p>";
		
		attributePoints = attributePoints - 1;
	
		// Set new points
		let points = document.getElementById("attributePoints");
		points.innerHTML = "<p>" + attributePoints + "</p>";
		
		event.target.classList.add("bonus");

	});
	
	// Mousedown for #window_2
	$("#window_2").mousedown(function(event){
		$("#window_2").css("z-index", 20);
		$("#window").css("z-index", 10);
		$("#window_3").css("z-index", 10);
	});
	
	// Mousedown for #window_3
	$("#window_3").mousedown(function(event){
		$("#window_3").css("z-index", 20);
		$("#window").css("z-index", 10);
		$("#window_2").css("z-index", 10);
	});
	
	*/
	
	// Mousedown for #window
	$("#window").mousedown(function(event){
		$("#window").css("z-index", 20);
		$("#window_2").css("z-index", 10);
		$("#window_3").css("z-index", 10);
	});
	
});