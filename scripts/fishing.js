// ::::: INITIALIZE :::::
var state = 0;
var texts = ["You cast your line into the water.", "Fish are nipping around the float.", "Fish are beginning to gather.", "Something has appeared near the float.", "Some unusual ripples have appeared around the float."];
var randTimer;
var timeoutTimer;
var disableDropping = false;
var disableTimer;
var disableTime = 0;
var cought = false;

// List of Fishes
var fishNames = ["Crucian Carp", "Piranha", "Ricefish", "Axolotl", "Mantis Shrimp"];
var fishNamesGold = ["Golden Lobster", "Golden Ricefish", "Golden Seaweed"];
var fishCollected = [0, 0, 0, 0, 0, 0, 0, 0];

// List of Numbers
var fishAmount = 0;
var fishGoldAmount = 0;
var fishBigAmount = 0;
var fishSucceed = 0;
var fishFailed = 0;

// List of Trophies
var fishAmount_List = [10, 25, 50, 100];
var fishAmount_List_Collected = [0, 0, 0, 0];
var fishAmount_List_Text = ["Amateur Angler", "Veteran Angler", "Expert Angler", "Master Angler"];

var fishSucceed_List = [1, 10, 25, 50, 100];
var fishSucceed_List_Collected = [0, 0, 0, 0, 0];
var fishSucceed_List_Text = ["Catch of the Day I", "Catch of the Day II", "Catch of the Day III", "Catch of the Day IV", "Catch of the Day V"];

var fishFailed_List = [1, 10, 25, 50, 100];
var fishFailed_List_Collected = [0, 0, 0, 0, 0];
var fishFailed_List_Text = ["Aimless Angler I", "Aimless Angler II", "Aimless Angler III", "Aimless Angler IV", "Aimless Angler V"];

var fishGoldAmount_List = [1, 10, 25, 50, 100];
var fishGoldAmount_List_Collected = [0, 0, 0, 0, 0];
var fishGoldAmount_List_Text = ["The Golden Reel I", "The Golden Reel II", "The Golden Reel III", "The Golden Reel IV", "The Golden Reel V"];

var fishBigAmount_List = [1, 10, 25, 50, 100];
var fishBigAmount_List_Collected = [0, 0, 0, 0, 0];
var fishBigAmount_List_Text = ["The Big One I", "The Big One II", "The Big One III", "The Big One IV", "The Big One V"];

// Book
var rank_exp = 0;
var rank_name = ["Beginner I", "Beginner II", "Amateur I", "Amateur II", "Expert I"];
var currentRank = 0;
var expToLevel = [10, 20, 30, 40, 50];

// ::::: FUNCTIONS :::::
function start(){
	$("#start").css("opacity", 0);
	$("#start").css("left", "-20px");
	$("#bar").css("opacity", 1);
	$("#bar2").css("width", "376px");
	$("#bar2").css("transition", "width 15000ms linear");
	$("#bar_shine2").css("left", "300px");
	$("#bar_shine2").css("background-position", "-2000px 0px");
	$("#bar_shine2").css("transition", "left 15000ms linear, background-position 15000ms linear");
	$("#bar2").css("background", "url(./images/fishing/yellow_bar.png)");
	
	let rand = Math.floor((Math.random() * texts.length));
	$("#bar_text").text(texts[rand]);
	
	randTimer = Math.floor((Math.random() * 16) + 2);
	if( randTimer > 15 ){ randTimer = 15; }
	
	// Reset stuff
	setTimeout(function(){
		
		reset();
		
		if( randTimer == 15 ){
			
			cought = false;
			start3();
			
		}else{
			
			state = 2;
			
			setTimeout(function(){
				
				cought = false;
				start2();
				
				timeoutTimer = setTimeout(function(){
					
					let getTop = Number($("#rod_drop").css("top").split("px")[0]);
					if( getTop >= 55 && getTop <= 100 ){
						cought = true;
					}
					
					reset();
					
					setTimeout(function(){
						state = 3;
						start3();
					}, 50);
					
				}, 4950);
				
			}, 50);
			
		}
		
	}, randTimer * 1000);
	
}

function start2(){
	$("#bar").css("opacity", 1);
	$("#bar2").css("width", "376px");
	$("#bar2").css("transition", "width 5000ms linear");
	$("#bar_shine2").css("left", "300px");
	$("#bar_shine2").css("background-position", "-2000px 0px");
	$("#bar_shine2").css("transition", "left 5000ms linear, background-position 5000ms linear");
	$("#bar2").css("background", "url(./images/fishing/blue_bar.png)");
	$("#bar_text").text("Use the action key to center the float.");
	$("#rod").css("opacity", 1);
	$("#rod_alert").css("visibility", "visible");
}

function start3(){

	let fishSelection;

	// Roll rarity
	let rarity = Math.floor((Math.random() * 100) + 1);
	
	if( rarity <= 2 ){
		fishSelection = fishNamesGold;
	}else{
		fishSelection = fishNames;
	}
	
	// Set fish
	let rand2 = Math.floor((Math.random() * fishSelection.length));

	// Set fish image
	$("#fish_image").css("background", "url(./images/fishing/" + fishSelection[rand2].replace(" ", "_") + ".png)");
	
	// Set fish length
	let rand = Math.floor((Math.random() * 120) + 1);
	$("#fish_size").text( rand + " cm");
	
	fishAmount += 1;

	if( cought ){
	
		// Add to book
		if( fishSelection == fishNamesGold ){
			fishCollected[fishNames.length + rand2] = 1;
		}else{
			fishCollected[rand2] = 1;
		}
	
		$("#fish_text").text("You caught " + fishSelection[rand2] + ".");
		$("#fish_text").removeClass("fish_failed");
		$("#fish_bg").css("visibility", "visible");
		$("#fish_image_shine").css("visibility", "visible");
		$("#fish_bg_shine").css("visibility", "visible");
		fishSucceed += 1;
		
		if( fishSelection == fishNamesGold ){
			fishGoldAmount += 1;
		}
		
		if( rand >= 100 ){
			fishBigAmount += 1;
		}
		
		rank_exp += 2;
		
		if( rank_exp >= expToLevel[currentRank] ){
			rank_exp = rank_exp - expToLevel[currentRank];
			currentRank += 1;
		}
		let calcExp = ( 371 / expToLevel[currentRank] ) * rank_exp;
		$("#fish_exp_bar").css("width", calcExp + "px");
		
	}else{
		$("#fish_text").text("Failed to catch " + fishSelection[rand2] + ".");
		$("#fish_text").addClass("fish_failed");
		$("#fish_bg").css("visibility", "hidden");
		$("#fish_image_shine").css("visibility", "hidden");
		$("#fish_bg_shine").css("visibility", "hidden");
		fishFailed += 1;
	}

	$("#rod_alert").css("visibility", "hidden");
	$("#fish").css("opacity", 1);
	$("#fish_image_shine").css("opacity", 0);
	$("#fish_image_shine").css("transform", "scale(1)");
	$("#fish_bg").css("opacity", 0);
	$("#fish_bg_shine").css("opacity", 0);
	$("#fish_bg_shine").css("transform", "scaleX(3)");

	setTimeout(function(){

		$("#fish_image").css("transform", "scale(1.25)");
		$("#fish").css("opacity", "0");
	
		//$("#start").css("opacity", 1);
		//$("#start").css("left", "0px");
		
		state = 4;
		checkTrophy();
		
		setTimeout(function(){
			$("#fish_image_shine").css("opacity", 1);
			$("#fish_image_shine").css("transform", "scale(1.5)");
			$("#fish_bg").css("opacity", 1);
			$("#fish_bg_shine").css("opacity", 1);
			$("#fish_bg_shine").css("transform", "scaleX(1)");
			$("#fish_image").css("transform", "scale(1)");
		}, 600);
		
	}, 3000);
	
}

function getTrophies(num){

	let trophyList;
	let trophyAmount;
	let trophyText;
	let trophyCollected;
	
	if( num == 1 ){ trophyCollected = fishGoldAmount_List_Collected; trophyList = fishGoldAmount_List; trophyAmount = fishGoldAmount; trophyText = fishGoldAmount_List_Text; }
	if( num == 2 ){ trophyCollected = fishSucceed_List_Collected; trophyList = fishSucceed_List; trophyAmount = fishSucceed; trophyText = fishSucceed_List_Text; }
	if( num == 3 ){ trophyCollected = fishAmount_List_Collected; trophyList = fishAmount_List; trophyAmount = fishAmount; trophyText = fishAmount_List_Text; }
	if( num == 4 ){ trophyCollected = fishFailed_List_Collected; trophyList = fishFailed_List; trophyAmount = fishFailed; trophyText = fishFailed_List_Text; }
	if( num == 5 ){ trophyCollected = fishBigAmount_List_Collected; trophyList = fishBigAmount_List; trophyAmount = fishBigAmount; trophyText = fishBigAmount_List_Text; }
	
	// Check for Trophies
	for(let i=0; i < trophyList.length; i++){
		if( trophyAmount == trophyList[i] && trophyCollected[i] == 0 ){
			trophyCollected[i] = 1;
			$("#trophy_text2").text(trophyText[i]);
			return true;
		}
	}
	
	return false;
	
}

function checkTrophy(){

	// FishGoldAmount Trophy
	if( state == 4 && getTrophies(1) ){
		state = 4.1;
		Trophy();
		return;
	}
	
	// fishSucceed Trophy
	if( state <= 4.1 && getTrophies(2) ){
		state = 4.2;
		Trophy();
		return;
	}
	
	// fishAmount Trophy
	if( state <= 4.2 && getTrophies(3) ){
		state = 4.3;
		Trophy();
		return;
	}
	
	// fishFailed Trophy
	if( state <= 4.3 && getTrophies(4) ){
		state = 4.4;
		Trophy();
		return;
	}

	// fishBig Trophy
	if( state <= 4.4 && getTrophies(5) ){
		state = 4.5;
		Trophy();
		return;
	}
	
	$("#start").css("opacity", 1);
	$("#start").css("left", "0px");
	state = 0;
	return;
	
}

function Trophy(){

	$("#trophy").css("opacity", 1);
	$("#trophy_image_shine").css("opacity", 0);
	$("#trophy_image_shine").css("transform", "scale(1)");
	$("#trophy_bg").css("opacity", 0);
	$("#trophy_bg_shine").css("opacity", 0);
	$("#trophy_bg_shine").css("transform", "scaleX(3)");

	$("#trophy_bg").css("visibility", "visible");
	$("#trophy_image_shine").css("visibility", "visible");
	$("#trophy_bg_shine").css("visibility", "visible");
	
	setTimeout(function(){

		$("#trophy_image").css("transform", "scale(1.25)");
		$("#trophy").css("opacity", "0");

		setTimeout(function(){
			$("#trophy_image_shine").css("opacity", 1);
			$("#trophy_image_shine").css("transform", "scale(1.5)");
			$("#trophy_bg").css("opacity", 1);
			$("#trophy_bg_shine").css("opacity", 1);
			$("#trophy_bg_shine").css("transform", "scaleX(1)");
			$("#trophy_image").css("transform", "scale(1)");
			
			setTimeout(function(){
				checkTrophy();
			}, 1200);
			
		}, 600);
		
	}, 3000);

}

function reset(){
	$("#bar").css("opacity", 0);
	$("#bar2").css("width", "0px");
	$("#bar2").css("transition", "width 1ms linear");
	$("#bar_shine2").css("left", "-80px");
	$("#bar_shine2").css("transition", "left 1ms linear, background-position 1ms linear");
	$("#bar_shine2").css("background-position", "0px 0px");
	$("#rod_drop").css("top", "3px");
	$("#rod").css("opacity", 0);
}

$("body").keydown(function(event){

	if( event.keyCode == 32 ){ event.preventDefault(); } // Stop space from scrolling page

	// If space is pressed
	if( event.keyCode == 32 && state == 0){
	
		state = 1;
		start();
		
	}
	
	// If esc is pressed
	if( event.keyCode == 27 ){
		$("#book").hide();
	}
	
	if( event.keyCode == 32 && state == 2){
		
		disableDropping = true;
		
		// If drop is at middle
		let getTop = Number($("#rod_drop").css("top").split("px")[0]);
		if( getTop >= 55 && getTop <= 100 ){
			$("#rod_bar").css("background", "url(./images/fishing/bar_blue.png)");
		}else{
			$("#rod_bar").css("background", "url(./images/fishing/bar_red.png)");
		}
		
		clearInterval(disableTimer);
		disableTime = 0;
		
		disableTimer = setInterval(function(){
		
			if( disableTime == 10 ){
				disableDropping = false;
				clearInterval(disableTimer);
				disableTime = 0;
				return false;
			}
		
			let getTop = Number($("#rod_drop").css("top").split("px")[0]);
			if( getTop > 13 ){
				$("#rod_drop").css("top", (getTop-2) + "px");
			}
			disableTime += 1;
			
		}, 25);
	
	}

});

setInterval(function(){

	if( state == 2 && disableDropping == false ){

		let getTop = Number($("#rod_drop").css("top").split("px")[0]);
		$("#rod_drop").css("top", (getTop+1) + "px");
	
		// If drop is at middle
		if( getTop >= 55 && getTop <= 100 ){
			$("#rod_bar").css("background", "url(./images/fishing/bar_blue.png)");
		}else{
			$("#rod_bar").css("background", "url(./images/fishing/bar_red.png)");
		}
	
		// If drop is at bottom (fail)
		if( getTop >= 150 ){
		
			state = 3;
			
			clearTimeout(timeoutTimer);
			
			reset();
			
			setTimeout(function(){
				cought = false;
				start3();
			}, 50);
		}
	
	}
	
}, 10);

function openBook(){

	$("#book").toggle();
	
	// Clean list
	$('#fish_list').empty();
	
	$("#fish_select").hide();
	$("#fish_big_image").css("background", "");
	$("#fish_name").text("");
	
	let fullFishList = fishNames.concat(fishNamesGold);
	
	for(let i=0; i < fullFishList.length; i++){
		let fish_list = document.getElementById("fish_list");
		
		if( fishCollected[i] == 1 ){
			fish_list.innerHTML += '<div class="fish_box fish-' + i + '" data-id=' + i + '></div>';
		}else{
			fish_list.innerHTML += '<div class="fish_box fish-' + i + ' fish_locked" data-id=' + i + '></div>';
		}
		
		$(".fish-" + i).css("background", "url(./images/fishing/" + fullFishList[i].replace(" ", "_") + ".png)");
		$(".fish-" + i).css("background-size", "contain");
	}

}

$("#book").on("mousedown", ".fish_box", function(event){

	let fullFishList = fishNames.concat(fishNamesGold);
	let fishId = event.target.dataset.id;
	
	// Set image to fish image
	$("#fish_big_image").css("background", "url(./images/fishing/" + fullFishList[fishId].replace(" ", "_") + ".png)");
	
	if( fishCollected[fishId] == 0 ){
		$("#fish_big_image").addClass("fish_locked");
		$("#fish_name").text("??????");
	}else{
		$("#fish_big_image").removeClass("fish_locked");
		$("#fish_name").text(fullFishList[fishId]);
	}
	
	$("#fish_select").show();
	
	let baseTop = 191;
	let baseLeft = 29;

	let top = baseTop + parseInt(event.target.offsetTop) - 3;
	let left = baseLeft + parseInt(event.target.offsetLeft) - 3;
	
	$("#fish_select").css("top", top + "px");
	$("#fish_select").css("left", left + "px");

});

$("#fish_exp_container").hover(function(event){
	$("#fish_exp").text( rank_exp + " / " + expToLevel[currentRank] );
}, function(event){
	$("#fish_exp").text( rank_name[currentRank] );
});