var hidden = [];
var image = [];
var title = [];
var elements = [];
var spirit = [];
var level = [];
var maxLevel = [];
var locked = [];
var lockReq = [];
var requirement = [];
var info = [];
var text = [];

$(document).ready(function(){

	function loadPoints(){
	
		var params = location.href.split('#')[1];
		
		if(params){
			
			params = params.split('-');
	
			for(var i=0; i < params.length; i++){
				if( i <= 24 ){
					level[i] = params[i];
				}
				if( params[i] > 0 ){
					locked[i] = 0;
				}
			}
		
		}
	
	}

	function createRow(start, stop, skills){
	
		var store_info = "";
		var skill_text;
		var skill_icon;
		
		store_info = store_info + '<div id="skills_row">';
		
		for(i=start; i < stop; i++){
			store_info = store_info + '<div class="skill_box">' +
				'<div data-hidden="' + hidden[i] + '" data-title="' + title[i] + '" class="skill skill_' + i + '"></div>' +
				'<div class="point_box">' +
				'<div class="bar">' +
				'<span class="skill_text skill_text_' + i + '"></span></div>' +
				'<div data-hidden="' + hidden[i] + '" data-title="' + title[i] + '" class="minus dec_' + i + '"></div>' +
				'<div data-hidden="' + hidden[i] + '" data-title="' + title[i] + '" class="plus inc_' + i + '"></div>' +
				'</div></div>';
		}
		
		var right = document.getElementById("skills_right");
		right.innerHTML = right.innerHTML + store_info + '</div>';
		
		var skill_box = document.getElementsByClassName("skill_box");
		var skill_icon = document.getElementsByClassName("skill");
		var skill_text = document.getElementsByClassName("skill_text");
		
		for(i=start; i < stop; i++){
		
			if( hidden[i] == 0 ){
				
				skill_icon[i].style.backgroundImage = "url('./images/" + image[i] + ".png')";
				
				if( skill_text[i] != undefined ){
					skill_text[i].innerHTML = level[i] + "/" + maxLevel[i];
				}
				
				if( locked[i] ){
					skill_icon[i].style.filter = "brightness(20%)";
				}
				
				
			}else{
				if( skill_box[i] != undefined ){
					skill_box[i].style.opacity = 0;
				}
			}
		
		}
	
	}

	function createSkills(skills){
	
		var i, j;
		
		for(j=0; j < 24; j++){
			for(i=0; i < skills.length; i++){
				if(skills[j] && skills[j][i]){
					hidden.push(skills[j][i].hidden);
					image.push(skills[j][i].image);
					title.push(skills[j][i].title);
					spirit.push(skills[j][i].spirit);
					level.push(skills[j][i].level);
					elements.push(skills[j][i].elements);
					locked.push(skills[j][i].locked);
					lockReq.push(skills[j][i].lockReq);
					maxLevel.push(skills[j][i].maxLevel);
					requirement.push(skills[j][i].requirement);
					info.push(skills[j][i].info);
					text.push(skills[j][i].text);
				}
			}
		}
		
		loadPoints();
		
		createRow(0,6,skills);
		createRow(6,12,skills);
		createRow(12,18,skills);
		createRow(18,24,skills);
	
	}
	
	createSkills(Class_skills);

});

function setInfo(type){

		// Check if skill info exists
		function isUndefined(info){
		
			if( info == undefined ){ return "<p><span class='info_gray'>Skill information is missing!</span></p>" }
			
			return info;
		
		}

		var box = document.getElementById('info_box');

		var isHidden = event.target.dataset.hidden;
		if( isHidden == 1 ){ return; }
	
		if( event.pageY > 511 ){
			box.style.left = event.pageX + 6 + 'px';
			box.style.top = event.pageY - 350 + 12 + 'px';
		}else{
			box.style.left = event.pageX + 6 + 'px';
			box.style.top = event.pageY + 12 + 'px';
		}
		
		var info_title = event.target.dataset.title;
		$("#info_name > p").text(info_title);
		
		// Loop title's and compare it with data-title. When matched, add the information into the info_box.
		for(var i=0; i < title.length; i++){
		
			if( title[i] == info_title ){
			
				if( level[i] <= 0 && type == "minus" ){
					box.style.display = "none";
					return;
				}
				
				if( level[i] == maxLevel[i] && type == "plus" ){
					box.style.display = "none";
					return;
				}
			
				$(".info_spirit").text(spirit[i]);
				
				// Set element text
				$("#info_name").removeClass();
				if( elements[i] ){
					$("#info_name").addClass("element_" + elements[i].toLowerCase());
					$("#info_element > p").text(elements[i]);
				}else{
					$("#info_element > p").text("");
				}
				
				var info_level = event.target.dataset.level;
				var info_description_3 = document.getElementById("info_description_3");
				
				if( type == "skill" ){
					$(".info_level").text("Level " + parseInt( level[i]) );
					info_description_3.innerHTML = isUndefined(text[i][level[i]]);
				}else if( type == "plus" ){
					var newLevel = parseInt(level[i]) + 1;
					$(".info_level").text("Level " + newLevel);
					info_description_3.innerHTML = isUndefined(text[i][newLevel]);
				}else if( type == "minus" ){
					var newLevel = parseInt(level[i]) - 1;
					$(".info_level").text("Level " + newLevel );
					info_description_3.innerHTML = isUndefined(text[i][newLevel]);
				}
			
				var info_image = document.getElementById("info_image");
				info_image.style.backgroundImage = "url('./images/" + image[i] + ".png')";
			
				var info_description = document.getElementById("info_description");
				info_description.innerHTML = requirement[i];
			
				var info_description_2 = document.getElementById("info_description_2");
				info_description_2.innerHTML = info[i];
				
				break;
			
			}
		
		}
		
		box.style.display = "block";

}

/**
 * @description Sets the level of your pre-req skills to the levels defined in lockReq[].
 * @argument index The index of the skill to check the pre-reqs of.
 * @returns void
 * @author ChungHoward
 */
function levelUpAllPrereqSkills(index) {
	
	let skill_text = document.getElementsByClassName("skill_text");
	let prereqArray = lockReq[index].split('-');
	
	for (let i = 0; i < level.length; i++) {

		if (level[i] < prereqArray[i]) {

			level[i] = parseInt(prereqArray[i]);
			skill_text[i].innerHTML = (level[i]) + "/" + maxLevel[i];

		}

	}

}

$( window ).on( "load", function() {

	$(".skill, .plus, .minus").mousemove(function(event){
	
		var type = event.target.classList[0];
		setInfo(type);

	});
	
	$(".skill, .plus, .minus").mouseleave(function(event){

		var box = document.getElementById('info_box');
		box.style.display = "none";

	});
	
	$(".plus").mousedown(function(event){
	
		var info_title = event.target.dataset.title;
		var skill_text = document.getElementsByClassName("skill_text");
	
		for(var i=0; i < title.length; i++){
		
			if( title[i] == info_title ){
				
				if( level[i] < maxLevel[i] ){
				
					if( locked[i] == 1 ){
					
						levelUpAllPrereqSkills(i);
					
					}
				
					level[i] = parseInt(level[i]) + 1;
					skill_text[i].innerHTML = (level[i]) + "/" + maxLevel[i];
				
				}
				
			}
			
		}
		
		var type = event.target.classList[0];
		setInfo(type);
		setLocked();
		
	});
	
	$(".minus").mousedown(function(event){
	
		var info_title = event.target.dataset.title;
		var skill_text = document.getElementsByClassName("skill_text");
	
		for(var i=0; i < title.length; i++){
		
			if( title[i] == info_title ){
				
				if( level[i] > 0 ){
				
					level[i] = parseInt(level[i]) - 1;
					skill_text[i].innerHTML = (level[i]) + "/" + maxLevel[i];
				
				}
				
			}
			
		}
		
		var type = event.target.classList[0];
		setInfo(type);
		setLocked();
		
	});
	
	function setLocked(){
	
		var skill_icon = document.getElementsByClassName("skill");
	
		var req, j;
		for(var i=0; i < locked.length; i++){
		
			if( lockReq[i] != undefined ){
			
				var split = lockReq[i].split('-');
				var hasReq = true;
				
				for(j=0; j < split.length; j++){
				
					if( parseInt(split[j]) <= parseInt(level[j]) ){
						// Correct
					}else{
						hasReq = false;
						break;
					}
				
				}
				
				if( hasReq ){
					locked[i] = 0;
					skill_icon[i].style.filter = "brightness(100%)";
				}else{
					locked[i] = 1;
					skill_icon[i].style.filter = "brightness(20%)";
				}
			
			}
			
		}
	
		// Setting this part in a Timeout because it sometimes load faster than the plus/minus class content. Temp fix?
		setTimeout(function(){
		
			var skill_minus = document.getElementsByClassName("minus");
			var skill_plus = document.getElementsByClassName("plus");
		
			for(var i=0; i < Class_skills.length; i++){
			
				if( level[i] == 0 ){
					skill_minus[i].classList.add("minus_locked");
				}else{
					skill_minus[i].classList.remove("minus_locked");
				}
				
				if( level[i] == maxLevel[i] ){
					skill_plus[i].classList.add("plus_locked");
				}else{
					skill_plus[i].classList.remove("plus_locked");
				}
				
				if( locked[i] == 1 ){
					skill_minus[i].classList.add("minus_locked");
					skill_plus[i].classList.add("plus_locked");
				}
			
			}
		
		}, 100);
		
		// make url include skill numbers
		var str = "#";
		
		for(var i=0; i < level.length; i++){
			if( i == level.length -1 ){
				str = str + level[i];
			}else{
				str = str + level[i] + "-";
			}
		}
			
		location.href = location.href.split('#')[0] + str;
		
		// Get points used
		var pointsUsed = 0;
		var pointsMax = 53;
		
		for(var i=0; i < level.length; i++){
			pointsUsed = pointsUsed + parseInt(level[i]);
		}
		
		// Set points used
		$("#skill_points > p").text("Points used: " + pointsUsed + "/" + pointsMax);
	
	}

	setLocked();
	
});