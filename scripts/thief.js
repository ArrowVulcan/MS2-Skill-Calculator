var thief_skills = [
	column1 = [
		{
			"hidden": 0,
			"image": 96,
			"title": "Double Slash",
			"resource": "",
			"level": 1,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: One-handed Dagger, One-handed Dagger</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Quickly stab with your daggers, dealing <span class='info_blue'>31%</span> damage <span class='info_blue'>2</span> times to <span class='info_blue'>3</span> enemies up to <span class='info_blue'>3</span> m in front of you. Has a <span class='info_blue'>7%</span> chance to activate Cunning for <span class='info_blue'>5</span> sec when your attack hits. Movement speed increases by <span class='info_blue'>30%</span> while Cunning is active, and some skills are enhanced. The damage of each attack is affected by the weapon in each hand.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 97,
			"title": "Poison Edge",
			"element": "Toxic",
			"resource": "Spirit 10",
			"level": 1,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: One-handed Dagger, One-handed Dagger</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Swing your poison-coated daggers, dealing <span class='info_blue'>68%</span> poison damage to <span class='info_blue'>5</span> enemies up to <span class='info_blue'>3</span> m in front of you. Keep pressing the key to trigger a <span class='info_blue'>5-hit</span> combo. The fifth hit deals <span class='info_blue'>72%</span> poison damage and moves you <span class='info_blue'>3</span> m in the direction you select. When Cunning is active, this skill is empowered. Consumes <span class='info_blue'>10</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 98,
			"title": "Poison Vial",
			"element": "Toxic",
			"resource": "Spirit 15",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "3-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 16+</span></p><p><span class='info_red'>Double Slash [Level 3+]</span></p><p><span class='info_red'>Poison Edge [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Long Range / Physical</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Throw a vial of poison at the closest enemy up to <span class='info_blue'>7.5</span> m in front of you, dealing <span class='info_blue'>45%</span> poison damage. The vial breaks on impact, splashing a toxic liquid that poisons <span class='info_blue'>5</span> enemies within <span class='info_blue'>3</span> m and deals <span class='info_blue'>35%</span> poison damage every second for <span class='info_blue'>10</span> sec. Consumes <span class='info_blue'>15</span> spirit.</span></p>",
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
			"image": 99,
			"title": "Surprise Attack",
			"resource": "Cooldown 6 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "3-6-4-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 31+</span></p><p><span class='info_red'>Poison Edge [Level 6+]</span></p><p><span class='info_red'>Poison Vial [Level 4+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: One-handed Dagger, One-handed Dagger</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Stab <span class='info_blue'>3</span> enemies up to <span class='info_blue'>3</span> m in front of you, dealing <span class='info_blue'>101%</span> damage. If a target is afflicted with Poison Blow or Poison Vial, they'll take an additional <span class='info_blue'>313%</span> poison damage for each, and the poison will be removed. When Cunning is active, this skill is empowered.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 100,
			"title": "Ruthless Guile",
			"element": "Toxic",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "3-6-6-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 40+</span></p><p><span class='info_red'>Poison Vial [Level 6+]</span></p><p><span class='info_red'>Poison Edge [Level 6+]</span></p>",
			"info": "<p><span class='info_gray'>Passive</span></p><p><span class='info_gray'>Physical</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Prey on the weaknesses of your enemy to deal <span class='info_blue'>2%</span> additional poison damage to targets afflicted with Poison Blow or Poison Vial.</span></p>",
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
			"image": 101,
			"title": "Cunning Tactics",
			"resource": "Cooldown 23 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 19+</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Using the tricks of the trade, recover <span class='info_blue'>20</span> spirit and activate Cunning for <span class='info_blue'>5</span> sec. While Cunning is active, your movement speed increases by <span class='info_blue'>30%</span> and some skills can be empowered.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 102,
			"title": "Blade Dance",
			"resource": "Spirit 26",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 28+</span></p><p><span class='info_red'>Cunning Tactics [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: One-handed Dagger</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Spin with your daggers out, dealing <span class='info_blue'>42%</span>, then <span class='info_blue'>42%</span>, and then <span class='info_blue'>56%</span> damage to <span class='info_blue'>8</span> enemies within <span class='info_blue'>3</span> m. While Cunning is active, this skill is enhanced. Consumes <span class='info_blue'>26</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 103,
			"title": "Retaliation",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-2-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 37+</span></p><p><span class='info_red'>Blade Dance [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Passive</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Deftly dodge an attack and position yourself for a counterattack, which restores <span class='info_blue'>12</span> spirit, increases physical attack and magic attack by <span class='info_blue'>4.5%</span>, and increases evasion by <span class='info_blue'>6</span> for <span class='info_blue'>12</span> sec. This effect will not activate again for <span class='info_blue'>1</span> sec.</span></p>",
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
			"image": 104,
			"title": "Spirit Thief",
			"resource": "",
			"level": 1,
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Passive</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Steal from an enemy. When successful, attacks restore <span class='info_blue'>4</span> spirit on hit.</span></p>",
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
			"image": 105,
			"title": "Somersault Kick",
			"resource": "Cooldown 6 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 10+</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Perform a somersault kick to deal <span class='info_blue'>238%</span> damage to <span class='info_blue'>5</span> enemies up to <span class='info_blue'>3</span> m in front of you, breaking their stance and decreasing their movement speed by <span class='info_blue'>30%</span> and jump power by <span class='info_blue'>30%</span>. When Cunning is active, this skill is empowered.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 106,
			"title": "Quick Step",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 25+</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Swiftly move back <span class='info_blue'>3</span> m and recover <span class='info_blue'>1</span> spirit. Consumes <span class='info_blue'>40</span> stamina.</span></p>",
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
			"image": 128,
			"title": "Mesoguard Plus",
			"resource": "Cooldown 60 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 46+</span></p><p><span class='info_red'>Quick Step [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Spend <span class='info_blue'>777</span> mesos to create a meso shield that lasts <span class='info_blue'>4</span> sec, reducing damage taken by <span class='info_blue'>26%</span>. If Cunning is active, the skill costs no mesos, and Cunning will be removed.</span></p>",
			]
		}
	],
	column4 = [
		{
			"hidden": 0,
			"image": 107,
			"title": "Mind Stealer",
			"resource": "Cooldown 3 second(s)",
			"level": 1,
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Nimbly move forward <span class='info_blue'>4.5</span> m, dealing <span class='info_blue'>40%</span> damage to <span class='info_blue'>3</span> enemies in your path and absorbing their energy to restore <span class='info_blue'>10</span> spirit per target.</span></p>",
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
			"image": 108,
			"title": "Mind Breaker",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 0,
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 13+</span></p>",
			"info": "<p><span class='info_gray'>Passive</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Unlocks Empowered Mind Stealer, which increases the number of targets that can be hit by the skill to <span class='info_blue'>5</span> and the skill's damage by <span class='info_blue'>50%</span></span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 109,
			"title": "Vicious Cuts",
			"resource": "Spirit 28",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-2-0-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 22+</span></p><p><span class='info_red'>Somersault Kick [Level 2+]</span></p><p><span class='info_red'>Mind Breaker [Level 2+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Close Range / Physical</span></p><p><span class='info_gray'>Weapon Required: One-handed Dagger, One-handed Dagger</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Quickly stab with your daggers, dealing <span class='info_blue'>35%</span> damage <span class='info_blue'>5</span> times to <span class='info_blue'>3</span> enemies up to <span class='info_blue'>3</span> m in front of you. While Cunning is active, this skill is enhanced. The damage of each attack is affected by the weapon in each hand. Consumes <span class='info_blue'>28</span> spirit.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 110,
			"title": "Haste",
			"resource": "Cooldown 60 second(s)",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-5-3-0-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 34+</span></p><p><span class='info_red'>Mind Breaker [Level 5+]</span></p><p><span class='info_red'>Vicious Cuts [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Active</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Your movements mimic the wind. For <span class='info_blue'>60</span> sec, <span class='info_blue'>4</span> spirit is consumed in <span class='info_blue'>0.5</span> sec intervals to increase attack speed and movement speed by <span class='info_blue'>13%</span> and physical attack by <span class='info_blue'>8%</span>.</span></p>",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 111,
			"title": "Deft Combatant",
			"resource": "",
			"level": 0,
			"maxLevel": 10,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-5-5-3-0",
			"requirement": "<p><span class='info_gray'>[requirements]</span></p><p><span class='info_orange'>level 43+</span></p><p><span class='info_red'>Vicious Cuts [Level 5+]</span></p><p><span class='info_red'>Haste [Level 3+]</span></p>",
			"info": "<p><span class='info_gray'>Passive</span></p>",
			"texts": [
				"",
				"<p><span class='info_gray'>Intense training has honed your body, increasing the damage output of Vicious Cuts and Somersault Kick by <span class='info_blue'>1%</span>.</span></p>",
			]
		}
	]
]