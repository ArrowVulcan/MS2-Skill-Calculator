var knight_skills = [
	column1 = [
		{
			"hidden": 0,
			"image": 0,
			"title": "Cross Cut",
			"resource": "",
			"level": 1,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Main Hand Longsword</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>A swing of your sword deals <span class='info_blue'>79%</span> damage <span class='info_blue'>2</span> times to <span class='info_blue'>5</span> enemies up to <span class='info_blue'>3</span> m in front of you.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 1,
			"title": "Tornado Slash",
			"resource": "Spirit 12",
			"level": 1,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Main Hand Longsword</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Perform a spin slash, dealing <span class='info_blue'>81%</span> damage <span class='info_blue'>3</span> times to <span class='info_blue'>8</span> enemies within <span class='info_blue'>3</span> m and pulling them in <span class='info_blue'>1</span> m. Consumes <span class='info_blue'>12</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 4,
			"title": "Divine Strike",
			"element": "Holy",
			"resource": "Cooldown 8 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "2-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 13+</span></p><p><span class='info_red'>Tornado Slash [Level 2+]</span></p><p><span class='info_red'>Cross Cut [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Main Hand Longsword</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Gathers light and smashes it down, creating a shockwave that deals <span class='info_blue'>501%</span> holy damage to <span class='info_blue'>8</span> enemies and knocks them back <span class='info_blue'>2</span> m. Enemy attacks will not push you back while this skill is active.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 5,
			"title": "Stinging Flurry",
			"resource": "Spirit 13",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "5-2-5-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 28+</span></p><p><span class='info_red'>Cross Cut [Level 5+]</span></p><p><span class='info_red'>Divine Strike [Level 5+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Main Hand Longsword</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Captain Allon's special skill stabs quickly, dealing <span class='info_blue'>83%</span> damage <span class='info_blue'>3</span> times to <span class='info_blue'>3</span> enemies up to <span class='info_blue'>3</span> m in front of you. The skill lasts while the skill key is held down. Consumes <span class='info_blue'>13</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 6,
			"title": "Drill Thrust",
			"resource": "Cooldown 8 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "2-2-6-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 37+</span></p><p><span class='info_red'>Divine Strike [Level 6+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Main Hand Longsword</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Strike forth with your weapon, moving you <span class='info_blue'>4.5</span> m and creating a whirlwind. You pierce enemies in your path, dealing <span class='info_blue'>412%</span> damage on up to <span class='info_blue'>8</span> enemies.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 15,
			"title": "Longsword Mastery",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "6-2-6-0-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 43+</span></p><p><span class='info_red'>Cross Cut [Level 6+]</span></p><p><span class='info_red'>Drill Thrust [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Passive</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>1%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>1.6%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>2.2%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>2.8%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>3.4%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>4%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>4.6%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>5.2%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>5.8%</span> when you have a longsword equipped.</span></p>",
				"<p><span class='info_gray'>Captain Allon's secret training improves your swordsmanship, increasing weapon attack by <span class='info_blue'>6.4%</span> when you have a longsword equipped.</span></p>",
			]
		}
	],
	column2 = [
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],[
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 7,
			"title": "Typhoon Slash",
			"resource": "Spirit 50",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 19+</span></p><p><span class='info_red'>Tornado Slash [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Main Hand Longsword</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Spin with your weapon out, dealing <span class='info_blue'>147%</span> damage <span class='info_blue'>5</span> times to <span class='info_blue'>8</span> enemies within <span class='info_blue'>3</span> m. Each hit pulls them in <span class='info_blue'>1</span> m. During the attack, press a direction key to move <span class='info_blue'>4.5</span> m. Consumes <span class='info_blue'>50</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 8,
			"title": "Shield Toss",
			"resource": "Spirit 16",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-3-0-0-0-0-0-0-4-0-0-0-0-0-4-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 25+</span></p><p><span class='info_red'>Iron Shield [Level 4+]</span></p><p><span class='info_red'>Typhoon Slash [Level 4+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Long Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Toss your shield <span class='info_blue'>7.5</span> m forward like a boomerang, dealing <span class='info_blue'>60%</span> damage <span class='info_blue'>2</span> times to <span class='info_blue'>8</span> enemies and reducing their defense by <span class='info_blue'>1%</span> for <span class='info_blue'>12</span> sec. Consumes <span class='info_blue'>16</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],[
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],
	column3 = [
		{
			"hidden": 0,
			"image": 2,
			"title": "Iron Defense",
			"resource": "Cooldown 5 second(s)",
			"level": 1,
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Adopt a knightly defensive stance, restoring <span class='info_blue'>4</span> spirit every <span class='info_blue'>0.3</span> sec and decreasing damage taken by <span class='info_blue'>10%</span>, but also reducing physical and magic attack by <span class='info_blue'>25%</span>. Press the skill key again to toggle the stance.</span></p>",
			]
		}
	],[
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 9,
			"title": "Iron Shield",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 10+</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>25%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>30%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>35%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>40%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>45%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>50%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>55%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>60%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>65%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
				"<p><span class='info_gray'>Adopt a defensive stance with your shield, reducing incoming damage by <span class='info_blue'>70%</span>. The skill lasts while the skill key is held down, although powerful attacks may break the skill early. This skill can cancel other skills. In PvP zones, the damage reduction is halved.</span></p>",
			]
		}
	],[
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 10,
			"title": "Shield Mastery",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-4-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 31+</span></p><p><span class='info_red'>Iron Shield [Level 4+]</span></p>",
			"info": "<p><span class='info_gray'>Passive</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>9</span> and perfect guard chance by <span class='info_blue'>5%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>40%</span> chance to increase your damage by <span class='info_blue'>3%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>12</span> and perfect guard chance by <span class='info_blue'>6%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>44%</span> chance to increase your damage by <span class='info_blue'>4%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>15</span> and perfect guard chance by <span class='info_blue'>7%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>48%</span> chance to increase your damage by <span class='info_blue'>5%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>18</span> and perfect guard chance by <span class='info_blue'>8%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>52%</span> chance to increase your damage by <span class='info_blue'>6%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>21</span> and perfect guard chance by <span class='info_blue'>9%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>56%</span> chance to increase your damage by <span class='info_blue'>7%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>24</span> and perfect guard chance by <span class='info_blue'>10%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>60%</span> chance to increase your damage by <span class='info_blue'>8%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>27</span> and perfect guard chance by <span class='info_blue'>11%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>64%</span> chance to increase your damage by <span class='info_blue'>9%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>30</span> and perfect guard chance by <span class='info_blue'>12%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>68%</span> chance to increase your damage by <span class='info_blue'>10%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>33</span> and perfect guard chance by <span class='info_blue'>13%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>72%</span> chance to increase your damage by <span class='info_blue'>11%</span> for <span class='info_blue'>10</span> sec.</span></p>",
				"<p><span class='info_gray'>Your fervent desire to protect other increases your shield mastery, increasing critical evasion by <span class='info_blue'>36</span> and perfect guard chance by <span class='info_blue'>14%</span> when you have a shield equipped when using Iron Shield. Blocking an attack grants a <span class='info_blue'>76%</span> chance to increase your damage by <span class='info_blue'>12%</span> for <span class='info_blue'>10</span> sec.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 129,
			"title": "Shield Booster",
			"resource": "Cooldown 16 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-4-0-2-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 46+</span></p><p><span class='info_red'>Shield Mastery [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Lift <span class='info_blue'>5</span> enemies up to <span class='info_blue'>2</span> m in front of you with your shield, dealing <span class='info_blue'>190%</span>. Increases physical and magical resistance by <span class='info_blue'>450</span>. For <span class='info_blue'>10</span> sec, has a chance to trigger counter when hit. Also increases your counterattack damage by an additional <span class='info_blue'>3%</span>.</span></p>",
			]
		}
	],
	column4 = [
		{
			"hidden": 0,
			"image": 3,
			"title": "Shield Charge",
			"resource": "Stamina 40",
			"level": 1,
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Physical</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Charge forward <span class='info_blue'>4.5</span> m, dealing <span class='info_blue'>70%</span> damage to <span class='info_blue'>5</span> enemies and knocking them back <span class='info_blue'>3</span> m. While charging, you cannot be knocked back. This skill can cancel other skills. Consume <span class='info_blue'>40</span> stamina.</span></p>",
			]
		}
	],[
		{
			"hidden": 1,
			"image": 0,
			"title": "",
			"resource": 0,
			"level": 0,
			"maxLevel": 0,
			"locked": 1,
			"requirement": "",
			"info": "",
			"texts": [
				"",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 11,
			"title": "Shield Wall",
			"element": "Holy",
			"resource": "Cooldown 45 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 16+</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>90</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>120</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>150</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>180</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>210</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>240</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>270</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>300</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>330</span>.</span></p>",
				"<p><span class='info_gray'>Create a <span class='info_blue'>3</span> m holy field around you for <span class='info_blue'>10</span> sec, increasing the physical resistance and magic resistance of <span class='info_blue'>10</span> allies, including yourself, by <span class='info_blue'>360</span>.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 12,
			"title": "Warhorn",
			"resource": "Spirit 40 / Cooldown 30 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 22+</span></p><p><span class='info_red'>Shield Wall [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>4</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>3%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>5</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>4%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>6</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>5%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>7</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>6%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>8</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>7%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>9</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>8%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>10</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>9%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>11</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>10%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>12</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>11%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
				"<p><span class='info_gray'>Shout to raise morale, increasing the physical attack and magic attack of <span class='info_blue'>13</span> allies within <span class='info_blue'>3</span> m, plus yourself, by <span class='info_blue'>12%</span> for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>40</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 13,
			"title": "Bulwark",
			"element": "Holy",
			"resource": "Cooldown 130 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-4-3-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 34+</span></p><p><span class='info_red'>Shield Wall [Level 4+]</span></p><p><span class='info_red'>Warhorn [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>4</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>5</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>6</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>7</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>8</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>9</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>10</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>11</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>12</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Create a protective barrier for <span class='info_blue'>3</span> sec to make <span class='info_blue'>13</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 14,
			"title": "Defender of the Faith",
			"element": "Holy",
			"resource": "Cooldown 130 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-4-3-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 40+</span></p><p><span class='info_red'>Shield Wall [Level 4+]</span></p><p><span class='info_red'>Warhorn [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Weapon Required: Off-hand Shield</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>4</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>5</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>6</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>7</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>8</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>9</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>10</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>11</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>12</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
				"<p><span class='info_gray'>Dash to the nearest ally within <span class='info_blue'>8</span> m to create a protective barrier that lasts <span class='info_blue'>3</span> sec and makes <span class='info_blue'>13</span> allies, including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.</span></p>",
			]
		}
	]
]