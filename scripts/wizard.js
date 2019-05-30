// TODO: Focus Seal
var wizard_skills = [
	column1 = [
		{
			"hidden": 0,
			"image": 133,
			"title": "Phantom Claw",
			"resource": "",
			"level": 1,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Slash the air with sharp magical claws, dealing <span class='info_blue'></span> damage <span class='info_blue'></span> times to <span class='info_blue'></span> enemies up to <span class='info_blue'></span> m in front of you.",
			"skilltext": [
				"",
				"71%,2,3,8",
				"77%,2,3,8",
				"83%,2,3,8",
				"89%,2,3,8",
				"95%,2,3,8",
				"101%,2,3,8",
				"107%,2,3,8",
				"113%,2,3,8",
				"119%,2,3,8",
				"125%,2,3,8",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 33,
			"title": "Arcane Blast",
			"resource": "Cooldown 6 second(s)",
			"level": 1,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "",
			"info": "Active</span></p><p><span class='info_gray'>Close Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Focus a magical aura on a spot <span class='info_blue'></span> m in front of you, creating an explosion of energy that deals <span class='info_blue'></span> damage to enemies within <span class='info_blue'></span> m and knocks them back <span class='info_blue'></span> m.",
			"skilltext": [
				"",
				"4.5,260%,3,1",
				"4.5,279%,3,1",
				"4.5,298%,3,1",
				"4.5,317%,3,1",
				"4.5,336%,3,1",
				"4.5,355%,3,1",
				"4.5,374%,3,1",
				"4.5,393%,3,1",
				"4.5,412%,3,1",
				"4.5,431%,3,1",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 34,
			"title": "Flame Wave",
			"element": "Fire",
			"resource": "Spirit 20",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 10+",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Gather fire energy in your staff to fling a flame wave up to <span class='info_blue'></span> m in front of you, dealing <span class='info_blue'></span> fire damage to enemies caught in it and setting them on fire, which deals an additional <span class='info_blue'></span> every second for <span class='info_blue'></span> sec. Consumes <span class='info_blue'></span> spirit. ",
			"skilltext": [
				"",
				"8,175%,21%,10,20",
				"8,188%,23%,10,20",
				"8,201%,25%,10,20",
				"8,214%,27%,10,20",
				"8,227%,29%,10,20",
				"8,240%,31%,10,20",
				"8,253%,33%,10,20",
				"8,266%,35%,10,20",
				"8,279%,37%,10,20",
				"8,292%,39%,10,20",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 35,
			"title": "Flame Tornado",
			"element": "Fire",
			"resource": "Spirit 40 / Cooldown 16 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-4-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 22+</span></p><p><span class='info_red'>Flame Wave [Level 4+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Gather fire energy from your surroundings to create a huge flame whirlwind <span class='info_blue'></span> m in front of you. The flame whirlwind lasts for <span class='info_blue'></span> sec, dealing <span class='info_blue'></span> fire damage to <span class='info_blue'></span> enemies within <span class='info_blue'></span> m every <span class='info_blue'></span> sec. Consumes <span class='info_blue'></span> spirit. ",
			"skilltext": [
				"",
				"4.5,1.5,142%,8,3,0.3,40",
				"4.5,1.5,152%,8,3,0.3,40",
				"4.5,1.5,162%,8,3,0.3,40",
				"4.5,1.5,172%,8,3,0.3,40",
				"4.5,1.5,182%,8,3,0.3,40",
				"4.5,1.5,192%,8,3,0.3,40",
				"4.5,1.5,202%,8,3,0.3,40",
				"4.5,1.5,212%,8,3,0.3,40",
				"4.5,1.5,222%,8,3,0.3,40",
				"4.5,1.5,232%,8,3,0.3,40",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 36,
			"title": "Pyromancy",
			"element": "Fire",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-5-5-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 34+</span></p><p><span class='info_red'>Flame Wave [Level 5+]</span></p><p><span class='info_red'>Flame Tornado [Level 5+]",
			"info": "Passive",
			"skillinfo": "An advanced fire technique taught to only the top students of the Ellinel Magic Academy. Increases all fire damage by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"3%",
				"4%",
				"5%",
				"6%",
				"7%",
				"8%",
				"9%",
				"10%",
				"11%",
				"12%",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 32,
			"title": "Mana Claw",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 46+</span></p><p><span class='info_red'>Arcane Blast [Level 3+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Shoot a sphere of condensed mana at the nearest enemy up to <span class='info_blue'></span> m in front of you, dealing <span class='info_blue'></span> damage. Keep pressing the key to trigger a <span class='info_blue'></span> combo. The first and second strikes have the same effect, but the third strike deals <span class='info_blue'></span> damage and is always critical. Consumes <span class='info_blue'></span> spirit.",
			"skilltext": [
				"",
				"9,149%,3-hit,246%,15",
				"9,159%,3-hit,263%,15",
				"9,169%,3-hit,280%,15",
				"9,179%,3-hit,297%,15",
				"9,189%,3-hit,314%,15",
				"9,199%,3-hit,331%,15",
				"9,209%,3-hit,348%,15",
				"9,219%,3-hit,365%,15",
				"9,229%,3-hit,382%,15",
				"9,239%,3-hit,399%,15",
			]
		}
	],
	column2 = [
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 37,
			"title": "Ice Spear",
			"element": "Ice",
			"resource": "Spirit 20",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 13+",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Gather ice from the moisture in the air to fling at the closest enemy up to <span class='info_blue'></span> m in front of you. The spear of ice breaks on impact, its shards dealing <span class='info_blue'></span> ice damage to <span class='info_blue'></span> enemies within <span class='info_blue'></span> m and decreasing movement speed by <span class='info_blue'></span>for <span class='info_blue'></span> sec. This cold effect can stack up to <span class='info_blue'></span> times. Enemies at max stacks are frozen for <span class='info_blue'></span> sec. Consumes <span class='info_blue'></span> spirit.",
			"skilltext": [
				"",
				"8,171%,8,2.5,10%,3,6,1,20",
				"8,184%,8,2.5,10%,3,6,1,20",
				"8,197%,8,2.5,10%,3,6,1,20",
				"8,210%,8,2.5,10%,3,6,1,20",
				"8,223%,8,2.5,10%,3,6,1,20",
				"8,236%,8,2.5,10%,3,6,1,20",
				"8,249%,8,2.5,10%,3,6,1,20",
				"8,262%,8,2.5,10%,3,6,1,20",
				"8,275%,8,2.5,10%,3,6,1,20",
				"8,288%,8,2.5,10%,3,6,1,20",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 38,
			"title": "Ice Storm",
			"element": "Ice",
			"resource": "Spirit 30 / Cooldown 12 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-4-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 25+</span></p><p><span class='info_red'>Ice Spear [Level 4+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Blast <span class='info_blue'></span> ice crystals toward enemies up to <span class='info_blue'></span> m in front of you, surrounding the targets with a cold front that generates a giant shard of ice. The shard deals <span class='info_blue'></span> ice damage to <span class='info_blue'></span> enemies within <span class='info_blue'></span> m. Consumes <span class='info_blue'></span> spirit.",
			"skilltext": [
				"",
				"4,8,152%,8,2.5,30",
				"4,8,163%,8,2.5,30",
				"4,8,174%,8,2.5,30",
				"4,8,185%,8,2.5,30",
				"4,8,196%,8,2.5,30",
				"4,8,207%,8,2.5,30",
				"4,8,218%,8,2.5,30",
				"4,8,229%,8,2.5,30",
				"4,8,240%,8,2.5,30",
				"4,8,251%,8,2.5,30",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 39,
			"title": "Cryomancy",
			"element": "Ice",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-5-5-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 37+</span></p><p><span class='info_red'>Ice Spear [Level 5+]</span></p><p><span class='info_red'>Ice Storm [Level 5+]",
			"info": "Passive",
			"skillinfo": "An advanced ice technique taught to only the top students of the Ellinel Magic Academy. Increases all ice damage by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"3%",
				"4%",
				"5%",
				"6%",
				"7%",
				"8%",
				"9%",
				"10%",
				"11%",
				"12%",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],
	column3 = [
		{
			"hidden": 0,
			"image": 40,
			"title": "Mana Font",
			"resource": "",
			"level": 1,
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "Passive",
			"skillinfo": "Your fine control over your magical powers allows you to recover <span class='info_blue'></span> spirit every <span class='info_blue'></span> sec at will.",
			"skilltext": [
				"",
				"1,0.3",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 41,
			"title": "Chain Lightning",
			"element": "Electric",
			"resource": "Spirit 15",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 16+",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Release an intense electric load that deals <span class='info_blue'></span> electric damage to <span class='info_blue'></span> enemies up to <span class='info_blue'></span> m in front of you. Enemies hit with this skill <span class='info_blue'></span> times pulse with electric energy, attracting a bolt that deals an additional <span class='info_blue'></span> electric damage. Consumes <span class='info_blue'></span> spirit.",
			"skilltext": [
				"",
				"62%,8,8,5,288%,15",
				"66%,8,8,5,308%,15",
				"70%,8,8,5,328%,15",
				"74%,8,8,5,348%,15",
				"78%,8,8,5,368%,15",
				"82%,8,8,5,388%,15",
				"86%,8,8,5,408%,15",
				"90%,8,8,5,428%,15",
				"94%,8,8,5,448%,15",
				"98%,8,8,5,468%,15",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 42,
			"title": "Thunderbolt",
			"element": "Electric",
			"resource": "Spirit 40 / Cooldown 16 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-4-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 28+</span></p><p><span class='info_red'>Chain Lightning [Level 4+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Gather a bolt of electricity to throw at the closest enemy up to <span class='info_blue'></span> m in front of you, dealing <span class='info_blue'></span> electric damage. The bolt bounces up to <span class='info_blue'></span> times within <span class='info_blue'></span> m, but won't hit the same target twice in a row. Consumes <span class='info_blue'></span> spirit.",
			"skilltext": [
				"",
				"8,611%,8,5,40",
				"8,656%,8,5,40",
				"8,701%,8,5,40",
				"8,746%,8,5,40",
				"8,791%,8,5,40",
				"8,836%,8,5,40",
				"8,881%,8,5,40",
				"8,926%,8,5,40",
				"8,971%,8,5,40",
				"8,1016%,8,5,40",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 43,
			"title": "Electromancy",
			"element": "Electric",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-5-5-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 40+</span></p><p><span class='info_red'>Chain Lightning [Level 5+]</span></p><p><span class='info_red'>Thunderbolt [Level 5+]",
			"info": "Passive",
			"skillinfo": "An advanced electric technique taught to only the top students of the Ellinel Magic Academy. Increases all electric damage by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"3%",
				"4%",
				"5%",
				"6%",
				"7%",
				"8%",
				"9%",
				"10%",
				"11%",
				"12%",
			]
		}
	],
	column4 = [
		{
			"hidden": 0,
			"image": 44,
			"title": "Teleport",
			"resource": "",
			"level": 1,
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "Active",
			"skillinfo": "Warp yourself <span class='info_blue'></span> m forward. This skill can cancel other skills. You will be immune to knockback while this skill is active. Consumes <span class='info_blue'></span> stamina.",
			"skilltext": [
				"",
				"4.5,40",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 45,
			"title": "Magic Armor",
			"resource": "Cooldown 45 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 19+",
			"info": "Active",
			"skillinfo": "Envelop your body with a magical aura, creating a barrier that absorbs damage up to <span class='info_blue'></span> of your max health for <span class='info_blue'></span> sec. Cannot be combined with other barrier effects.",
			"skilltext": [
				"",
				"6%,10",
				"8%,10",
				"10%,10",
				"12%,10",
				"14%,10",
				"16%,10",
				"18%,10",
				"20%,10",
				"22%,10",
				"24%,10",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 46,
			"title": "Focus Seal",
			"resource": "Cooldown 45 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-4-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 31+</span></p><p><span class='info_red'>Magic Armor [Level 4+]",
			"info": "Active",
			"skillinfo": "Imbue the earth with your magical power, creating a seal that reaches <span class='info_blue'></span> tiles around you. The seal lasts for <span class='info_blue'></span> sec and increases the physical attack and magic attack of allies who absorb it by <span class='info_blue'></span> for <span class='info_blue'></span> sec. Focus Seal also increases physical and magic attack by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"5,20,1%,180,0.5%",
				"5,20,1.4%,180,0.7%",
				"5,20,1.8%,180,0.9%",
				"5,20,2.2%,180,1.1%",
				"5,20,2.6%,180,1.3%",
				"5,20,3%,180,1.5%",
				"5,20,3.4%,180,1.7%",
				"5,20,3.8%,180,1.9%",
				"5,20,4.2%,180,2.1%",
				"5,20,4.6%,180,2.3%",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 47,
			"title": "Elemental Master",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 43+",
			"info": "Passive",
			"skillinfo": "Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic. Increases fire, ice, and electric damage by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"1%",
				"2%",
				"3%",
				"4%",
				"5%",
				"6%",
				"7%",
				"8%",
				"9%",
				"10%",
			]
		}
	]
];

var wizard_skills_awakening = [
	column1 = [
		{
			"hidden": 0,
			"image": 205,
			"title": "Dual Cast",
			"element": "Electric",
			"resource": "Spirit 15",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 60+",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Cast spells of electricity and ice at the same time.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Cast Handy Lightning and Ice Shot at the same time.</span></p><br><p><span class='info_gray'>Handy Lightning deals <span class='info_blue'></span> damage and places a status effect on the target. At <span class='info_blue'></span> stacks, the Handy Lightning effect detonates, dealing an additional <span class='info_blue'></span> damage.</span></p><br><p><span class='info_gray'>Ice Shot Deals <span class='info_blue'></span> damage.</span></p><br><p><span class='info_gray'>Permanently enhances Ice Spear.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>Ice Spear costs no spiritand inflicts Frost. Enemies suffering from Frost take an additional <span class='info_blue'></span> damage from Handy Lightning.",
			"skilltext": [
				"",
				"69%,5,234%,76%,37%",
				"76%,5,261%,84%,41%",
				"83%,5,288%,92%,45%",
				"90%,5,315%,100%,49%",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 206,
			"title": "Ice Cream Time",
			"element": "Ice",
			"resource": "Spirit 40 / Cooldown: 20 Sec",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"lockReq": "3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 62+</span></p><p><span class='info_orange'>Dual Cast [Level 3+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Make ice cream with ice magic to give your foes some serious brain freeze.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Deals <span class='info_blue'></span> damage. Inflicts a stack of Chill every second. Hit affected enemies with Thunderbolt to trigger Electric Ice Cream. Deals <span class='info_blue'></span> damage when the skill is used again or the duration ends.</span></p><br><p><span class='info_gray'>Permanently enhances Ice Storm</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>Chill decreases movement speed by <span class='info_blue'></span> per stack. Targets are unable to act at <span class='info_blue'></span> stacks. Electric Ice Cream deals <span class='info_blue'></span> damage per sec for <span class='info_blue'></span> sec.</span></p><p><span class='info_gray'>Increases Ice Storm damage by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"298%,371%,15%,6,114%,10,37%",
				"338%,414%,15%,6,126%,10,41%",
				"378%,457%,15%,6,138%,10,45%",
				"418%,500%,15%,6,150%,10,49%",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 207,
			"title": "Lodestone Field",
			"element": "Electric",
			"resource": "Cooldown: 30 Sec",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"lockReq": "3-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 64+</span></p><p><span class='info_orange'>Ice Cream Time [Level 2+]",
			"info": "Active",
			"skillinfo": "Fill the air with magnetic charge to augment your attacks.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Grants a stack of Lightning Charge.</span></p><br><p><span class='info_gray'>If you already have Lightning Charge, consume all stacks and cast Call Lightning instead, dealing <span class='info_blue'></span> damage, plus an additional <span class='info_blue'></span> damage per stacks.</span></p><br><p><span class='info_gray'>Permanently enhances Thunderbolt.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>When Lightning Charge stacks, inflicts <span class='info_blue'></span> damage to nearby enemies and increases evasion by <span class='info_blue'></span> per stacks. Gain stacks by casting Handy Lightning or Electric Ice Cream, or by getting hit.</span></p><p><span class='info_gray'>Increases Thunderbolt damage by <span class='info_blue'></span>.",
			"skilltext": [
				"",
				"260%,36%,76%,10%,37%",
				"290%,40%,84%,10%,41%",
				"320%,44%,92%,10%,45%",
				"350%,48%,100%,10%,49%",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 208,
			"title": "Perfect Storm",
			"element": "Electric",
			"resource": "Spirit 5 / Cooldown: 40 Sec",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"lockReq": "3-3-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 68+</span></p><p><span class='info_orange'>Ice Cream Time [Level 3+]</span></p><p><span class='info_orange'>Lodestone Field [Level 3+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Attack with a perfect blend of ice and electricity.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Summon a bolt of ice and a bolt of electrictiy, each dealing <span class='info_blue'></span> damage. Hold down the skill key to unleash a fused attack that deals <span class='info_blue'></span> damage.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'> After casting Perfect Storm, temporarily increase electric and ice attack by <span class='info_blue'></span> and reset the cooldowns for Thunderbolt and Ice Storm.",
			"skilltext": [
				"",
				"187%,593%,8%",
				"208%,662%,16%",
				"229%,731%,24%",
				"250%,800%,32%",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],
	column2 = [
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],
	column3 = [
		{
			"hidden": 0,
			"image": 209,
			"title": "Ember",
			"element": "Fire",
			"resource": "Spirit 20",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 60+",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Launch a small fireball to start a big fire.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Deals <span class='info_blue'></span> damage and inflicts Ember. Prioritizes enemies already suffering from Ember or Kindling.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>Ember deals <span class='info_blue'></span> damage per sec. When a new stack is added, deals <span class='info_blue'></span> area damage and inflicts Spreading Embers and Kindling.</span></p><p><span class='info_gray'>Kindling deals <span class='info_blue'></span> damage per sec. When Ember is inflicted, deals <span class='info_blue'></span> area damage and inflicts Spreading Embers.</span></p><p><span class='info_gray'>Spreading Embers deals an additional <span class='info_blue'></span> damage when hit by Flame Wave.",
			"skilltext": [
				"",
				"246%,31%,298%,37%,371%,37%",
				"274%,35%,332%,41%,414%,41%",
				"302%,39%,366%,45%,457%,45%",
				"330%,43%,400%,49%,500%,49%",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 210,
			"title": "Barbecue Party",
			"element": "Fire",
			"resource": "Spirit 40 / Cooldown: 8 Sec",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 62+</span></p><p><span class='info_orange'>Ember [Level 3+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Grill your enemies with magical flames.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Deals <span class='info_blue'></span> damage <span class='info_blue'></span> times and inflicts Deep Fried.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>Deep Fried deals <span class='info_blue'></span> damage per sec and deals <span class='info_blue'></span> area damage when Arcane Blast hits.",
			"skilltext": [
				"",
				"411%,3,44%,407%",
				"458%,3,49%,454%",
				"505%,3,54%,501%",
				"552%,3,59%,548%",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 0,
			"image": 211,
			"title": "Playing with Fire",
			"element": "Fire",
			"resource": "",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-3-3-0-0-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 66+</span></p><p><span class='info_orange'>Barbecue Party [Level 3+]",
			"info": "Passive</span></p><p><span class='info_gray'>Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "You've befriended a mischievous fire spirit.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Permanently grants Dancing Flames. Casting Flame Tornado temporarily grants Flame Imp.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>Dancing Flames removes the spirit cost of Flame Wave and increases Flame Tornado damage by <span class='info_blue'></span>.</span></p><br><p><span class='info_gray'>Flame Imp lasts for <span class='info_blue'></span> sec, guaranteeing a critical when Ember hits and granting a <span class='info_blue'></span> chance to trigger Party Time on critical hit.</span></p><p><span class='info_gray'>Party Time resets Barbecue Party's cooldown and allows it to be cast instantly.",
			"skilltext": [
				"",
				"111%,10,27%",
				"124%,10,27%",
				"137%,11,27%",
				"150%,11,27%",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 212,
			"title": "Little Meteor",
			"element": "Fire",
			"resource": "Spirit 60 / Cooldown: 30 Sec",
			"level": 0,
			"maxLevel": 4,
			"locked": 0,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-3-3-0-3-0-0-0-0-0-0-0-0",
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 68+</span></p><p><span class='info_orange'>Playing with Fire [Level 3+]",
			"info": "Active</span></p><p><span class='info_gray'>Long Range / Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Summon a meteor to strike enemies. Sometimes summons something else by mistake.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Deals <span class='info_blue'></span> damage and grants Enlightenment. Deals an additional <span class='info_blue'></span> damage to targets hit with Flame Tornado.</span></p><br><p><span class='info_orange'>[Bonus Effects]</span></p><p><span class='info_gray'>Enlightenment causes Ember to strike twice, dealing <span class='info_blue'></span> damage and then <span class='info_blue'></span> damage at no spirit cost.",
			"skilltext": [
				"",
				"1484%,148%,253%,260%",
				"1656%,165%,282%,290%",
				"1828%,182%,311%,320%",
				"2000%,199%,340%,350%",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],
	column4 = [
		{
			"hidden": 0,
			"image": 213,
			"title": "Mana Control",
			"resource": "Spirit 10 / Cooldown: 60 Sec",
			"level": 1,
			"maxLevel": 1,
			"locked": 1,
			"requirement": "[requirements]</span></p><p><span class='info_orange'>level 60+",
			"info": "Active</span></p><p><span class='info_gray'>Magic</span></p><p><span class='info_gray'>Weapon Required: Two-handed Staff",
			"skillinfo": "Bend mana to your will.</span></p><br><p><span class='info_orange'>[Primary Effects]</span></p><p><span class='info_gray'>Permanently increase Intelligence by <span class='info_blue'></span>. Using a skill grants Mana Control, which increases movement speed by <span class='info_blue'></span>, increases magic attack by <span class='info_blue'></span> when spirit is <span class='info_blue'></span> or higher, restores spirit by <span class='info_blue'></span>, and decreases spirit cost by half when spirit is less than <span class='info_blue'></span>.</span></p>",
			"skilltext": [
				"",
				"40,35%,20%,50%,50%,50%",
			]
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	],[
		{
			"hidden": 1,
			"level": 0,
		}
	]
];