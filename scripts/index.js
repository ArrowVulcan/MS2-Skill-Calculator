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
var Class_skills;
var attributePoints = 50;
var lockedsURL = [];
var levelsURL = [];
var npcList = {};

// changeJob - Change skills to another job
function changeJob(job, name){

	if( job == undefined ){ return; }

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
		if( params.slice(-2).replace("-","") == 0 ){ job = knight_skills; name = "Knight"; }
		if( params.slice(-2).replace("-","") == 1 ){ job = berserker_skills; name = "Berserker"; }
		if( params.slice(-2).replace("-","") == 2 ){ job = wizard_skills; name = "Wizard"; }
		if( params.slice(-2).replace("-","") == 3 ){ job = priest_skills; name = "Priest"; }
		if( params.slice(-2).replace("-","") == 4 ){ job = archer_skills; name = "Archer"; }
		if( params.slice(-2).replace("-","") == 5 ){ job = heavy_gunner_skills; name = "Heavy Gunner"; }
		if( params.slice(-2).replace("-","") == 6 ){ job = thief_skills; name = "Thief"; }
		if( params.slice(-2).replace("-","") == 7 ){ job = assassin_skills; name = "Assassin"; }
		if( params.slice(-2).replace("-","") == 8 ){ job = runeblade_skills; name = "Runeblade"; }
		if( params.slice(-2).replace("-","") == 9 ){ job = soul_binder_skills; name = "Soul Binder"; }
		if( params.slice(-2).replace("-","") == 10 ){ job = striker_skills; name = "Striker"; }
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
	
	storeInfo = storeInfo + '<div class="col-3">';
	
	for(let i=start; i < stop; i++){
		storeInfo = storeInfo + '<div class="skill_box">' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="skill skill_' + i + '"></div>' +
			'<div class="skillImage"></div>' +
			'<div class="point_box">' +
			'<div class="bar">' +
			'<span class="skill_text skill_text_' + i + '"></span></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="minus dec_' + i + ' skill_btn"></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="plus inc_' + i + ' skill_btn"></div>' +
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
		let offset = infoContent.offsetHeight;
	
		// Move the tooltip above the cursor to prevent text from going outside the screen
		if( event.pageY > 511 ){
		
			if( offset > 0 ){
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
				}else if( type == "min" ){
					let newLevel = 1;
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = isUndefined(texts[i][newLevel]);
					getResources(1 - parseInt(levels[i]));
				}else if( type == "max" ){
					let newLevel = parseInt(maxLevels[i]);
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = isUndefined(texts[i][newLevel]);
					getResources(parseInt(maxLevels[i]) - parseInt(levels[i]));
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
			if( i == 0 || i == 1) {
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
			if(i == 12 || i == 18 ){
				skillPlus[i].classList.add("plus_locked");
				skillPlus[i].classList.replace("min", "plus");
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
	if( Class_skills == archer_skills ){ job = 4; }
	if( Class_skills == heavy_gunner_skills ){ job = 5; }
	if( Class_skills == thief_skills ){ job = 6; }
	if( Class_skills == assassin_skills ){ job = 7; }
	if( Class_skills == runeblade_skills ){ job = 8; }
	if( Class_skills == soul_binder_skills ){ job = 9; }
	if( Class_skills == striker_skills ){ job = 10; }
	
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
		let pointsMax = 58 + 4; // 49 points from leveling + 9 points from trophies and quests + 4 base skills
		
		// Collect all the skill levels
		for(let i=0; i < levels.length; i++){
			pointsUsed += parseInt(levels[i]);
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
		if( i == 12 || i == 18 ){ continue; }
	
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
					if ( i == 0 || i == 1) {
						levels[i] = 1;
					} else {
						levels[i] = 0;
					}
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}
			
			}else{
			
				// Set skill level to max if you click on the {-} button at the minimum skill level
				// and prevent skill(0, 1) from being decreased lower than rank 1
				if( levels[i] == 0 || (levels[i] == 1 && i <= 1)){

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

$( window ).on( "load", function(){

	if( location.href.search("skills.html") == -1 ){ return; }

	// Set Default
	Class_skills = knight_skills;
	
	// Load url points
	loadUrlPoints();

	// Make window draggable
	//$("#window").draggable({ handle: "#drag_bar", containment: [0, 100, 1060, 1920] });
	
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

function createChat(image, title, text, buttonText){

	setTimeout(function(){
		$("#new_chat_avatar").css("background-image", "url(./images/" + image + ".png)");
		$("#new_chat_title").text(title);
		$("#new_chat_text").text(text);
		$("#new_chat_button_text").text(buttonText);
		$("#new_chat").css("opacity", 1);
		$("#new_chat").css("pointer-events", "auto");
	}, 1000);

}

$( window ).on( "load", function(){

	// Loader
	$(".new_loader").css("opacity", 0);

	// Show/Hide cookie alert
	let cAgree = getCookie("cookie");
	let cWelcome = getCookie("npc_welcome");
	
	if( cWelcome ){
		setCookie("npc_welcome", "1", 30, true);
	}
	
	if( cAgree == 0 ){

		npcList.cookie = function(){
			createChat("npc1", "Joddy", "This site uses cookies to remember some of your stuff.\nUsing this fansite means that you are okey with this.", "Accept");
		}
		
	}else{
		$("#new_chat").css("pointer-events", "none");
		if( !cWelcome ){
			
			setCookie("npc_welcome", "1", 30, true);
			
			npcList.welcomeback = function(){
				if( location.href.search("skills.html") != -1 ){
					createChat("npc5", "Katvan", "Welcome back, ready to make some new skill builds?", "Close");
				}
				
				if( location.href.search("fishing.html") != -1 ){
					createChat("npc3", "Terry", "Welcome back, let's catch something rare today!", "Close");
				}
				
				if( location.href.search("explore.html") != -1 ){
					createChat("npc4", "Lennon", "Welcome back, let's explore some new maps!", "Close");
				}
				
				if( location.href.search("index.html") != -1 ){
					createChat("npc2", "Growlie", "Welcome back.\nThe weather is nice today, let's have some fun!", "Close");
				}
			}
		}
	}
	
	$("#new_chat_button").mousedown(function(event){
	
		$("#new_chat").css("opacity", 0);
		$("#new_chat").css("pointer-events", "none");
	
		cAgree = getCookie("cookie");
		if( cAgree == 0 ){
			setCookie("cookie", "1", 30);
			setCookie("npc_welcome", "1", 30, true);
			
			npcList.welcome = function(){
				createChat("npc2", "Growlie", "Welcome to this MapleStory 2 fansite.\nThe site is still WIP but I hope you find something useful!", "Close");
			}
		}
		
		if( Object.keys(npcList).length > 0 ){
			Object.values(npcList)[0]();
			let firstKey = Object.keys(npcList)[0];
			delete npcList[firstKey];
		}
		
	});
	
	if( Object.keys(npcList).length > 0 ){
		Object.values(npcList)[0]();
		let firstKey = Object.keys(npcList)[0];
		delete npcList[firstKey];
	}
	
});

// if phone or pad
if( screen.width <= 768 ){
	window.location.replace("./mobile.html");
}