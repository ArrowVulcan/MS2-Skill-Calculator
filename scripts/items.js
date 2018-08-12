var items_list = [
	ShadowAltar = [
		{
			"id": 0,
			"image": "chest.png",
			"name": "Chaotic Extreme Top",
			"stars": 6,
			"rarity": "iLegendary",
			"defenseType": "Defense",
			"defense": 1175,
			"gearScore": 800,
			"requiredLevel": 50,
			"location": "Legendary Top",
			"job": "Thief",
			"randomAttributes": "4",
		},
		{
			"id": 1,
			"image": "boots.png",
			"name": "Chaotic Extreme Shoes",
			"stars": 6,
			"rarity": "iLegendary",
			"defenseType": "Defense",
			"defense": 219,
			"gearScore": 150,
			"requiredLevel": 50,
			"location": "Legendary Shoes",
			"job": "Thief",
			"randomAttributes": "4",
		},
		{
			"id": 2,
			"image": "swallowedDarknessRogueGloves.png",
			"name": "Swallowed Darkness Rogue Gloves",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Defense",
			"defense": 127,
			"gearScore": 69,
			"requiredLevel": 50,
			"location": "Epic Gloves",
			"job": "Thief, Assassin",
			"randomAttributes": "4",
		},
		{
			"id": 3,
			"image": "shinyFerocityRing.png",
			"name": "Shiny Ferocity Ring",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Magic Resistance",
			"defense": 53,
			"gearScore": 103,
			"requiredLevel": 50,
			"location": "Epic Ring",
			"job": "",
			"randomAttributes": "4",
		},
		{
			"id": 4,
			"image": "crueltyGreatsword.png",
			"name": "Cruelty Greatsword",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Weapon Attack",
			"defense": "1131~1382",
			"gearScore": 1110,
			"requiredLevel": 50,
			"location": "Epic Two-handed Greatsword",
			"job": "",
			"randomAttributes": "5",
		},
		{
			"id": 5,
			"image": "shinyPointedGreatsword.png",
			"name": "Shiny Pointed Greatsword",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Weapon Attack",
			"defense": "2061~2280",
			"gearScore": 1030,
			"requiredLevel": 50,
			"location": "Epic Two-handed Greatsword",
			"job": "",
			"randomAttributes": "5",
		},
		{
			"id": 6,
			"image": "shinyFerocityCape.png",
			"name": "Shiny Ferocity Cape",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Physical Resistance",
			"defense": "36",
			"gearScore": 103,
			"requiredLevel": 50,
			"location": "Epic Cape",
			"job": "",
			"randomAttributes": "4",
		},
		{
			"id": 7,
			"image": "shinyFerocityNecklace.png",
			"name": "Shiny Ferocity Necklace",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Physical Resistance",
			"defense": "52",
			"gearScore": 103,
			"requiredLevel": 50,
			"location": "Epic Necklace",
			"job": "",
			"randomAttributes": "4",
		},
		{
			"id": 8,
			"image": "shinyWarriorsFerocityShoes.png",
			"name": "Shiny Warrior's Ferocity Shoes",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Defense",
			"defense": "87",
			"gearScore": 61,
			"requiredLevel": 50,
			"location": "Epic Shoes",
			"job": "Knight, Berserker",
			"randomAttributes": "5",
		},
		{
			"id": 9,
			"image": "shinyWarriorsFerocityBottoms.png",
			"name": "Shiny Warrior's Ferocity Bottoms",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Defense",
			"defense": "433",
			"gearScore": 309,
			"requiredLevel": 50,
			"location": "Epic Bottom",
			"job": "Knight, Berserker",
			"randomAttributes": "5",
		},
		{
			"id": 10,
			"image": "shinyWarriorsFerocityTop.png",
			"name": "Shiny Warrior's Ferocity Top",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Defense",
			"defense": "462",
			"gearScore": 329,
			"requiredLevel": 50,
			"location": "Epic Top",
			"job": "Knight, Berserker",
			"randomAttributes": "5",
		},
		{
			"id": 11,
			"image": "shinyWarriorsFerocityHeadgear.png",
			"name": "Shiny Warrior's Ferocity Headgear",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Defense",
			"defense": "304",
			"gearScore": 216,
			"requiredLevel": 50,
			"location": "Epic Headgear",
			"job": "Knight, Berserker",
			"randomAttributes": "5",
		},
		{
			"id": 12,
			"image": "shinyFerocityBelt.png",
			"name": "Shiny Ferocity Belt",
			"stars": 4,
			"rarity": "iEpic",
			"defenseType": "Defense",
			"defense": "52",
			"gearScore": 206,
			"requiredLevel": 50,
			"location": "Epic Belt",
			"job": "",
			"randomAttributes": "4",
		},
	]
];

// Mousemove
$("#items img").mousemove(function(event){

	// Find item that is hover:ed
	for( let i=0; i < items_list[0].length; i++ ){
		if( event.target.dataset.id == items_list[0][i].id ){
			
			// Remove previous rarities
			$("#info_name p").removeClass("iEpic");
			$("#info_name p").removeClass("iLegendary");
			$(".iStars").removeClass("iEpic");
			$(".iStars").removeClass("iLegendary");
			$(".iStars").removeClass("starShow");
			$("#iDefense").removeClass("iEpic");
			$("#iDefense").removeClass("iLegendary");
			
			// Set new information
			$("#info_name p").text( items_list[0][i].name );
			$("#info_name p").addClass( items_list[0][i].rarity );
			$(".iStars").addClass( items_list[0][i].rarity );
			$("#iImage").attr('src', "./images/items/" + items_list[0][i].image );
			$("#iDefenseText").text( items_list[0][i].defenseType );
			$("#iDefense").text( items_list[0][i].defense );
			$("#iDefense").addClass( items_list[0][i].rarity );
			$("#iGearscore").text( "Gear Score " + items_list[0][i].gearScore );
			$("#iRequires").text( "Required Level " + items_list[0][i].requiredLevel );
			$("#iType").text( items_list[0][i].location );
			if( items_list[0][i].job == "" ){
				$("#iJob").hide();
			}else{
				$("#iJob").show();
				$("#iJob").text( "Job: " + items_list[0][i].job );
			}
			$("#iRandomAttribute").text( "Random Attributes: " + items_list[0][i].randomAttributes );
			
			let getStars = document.getElementsByClassName("iStars");
			for(let j=0; j < items_list[0][i].stars; j++){
				$(getStars[j]).addClass("starShow");
			}
			
			break;
		}
	}

	let box = document.getElementById('info_box');
	
	// Make the tooltip visible
	box.style.display = "block";
	
	let infoContent = document.getElementById("info_box");
	let offset = infoContent.offsetHeight;
	
	box.style.left = event.pageX + 20 + 'px';
	box.style.top = event.pageY - 50 + 'px';

});

// Mouseleave
$("#items img").mouseleave(function(event){

	let box = document.getElementById('info_box');
	box.style.display = "none";
	
});