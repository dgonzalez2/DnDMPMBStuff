/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

var iFileName = "NekomataRaceDnd5e.js";
RequiredSheetVersion("13.1.0");

SourceList["HB", 0]=
{
	name : "Nekomata",
	abbreviation : "HB",
	group : "Third Party",
	url : "https://www.gmbinder.com/share/-M5_HqBZnv4VF9ZspaaC#:~:text=Felis%20Physiology,of%20almost%20any%20known%20combination.",
	
};

RaceList["nekomata"] = 
{
	regExpSearch : /^(?=.*nekomata).*$/i,
	name : "Nekomata",
	source : [["HB, 0"]],
	plural : "Nekomata",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 }
	},
	skills : ["Perception", "Acrobatics"],
	skillstxt : "Perception, Acrobatics",
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " reach adulthood in their late teens and live 150-200 years",
	height : " range from 4 to around 5 and a half feet tall (4'10\" + 2d10\")",
	weight : " weigh around 90-110 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	
	weaponsAdd: ["Claws"],
	weaponOptions: 
	[
		{
			baseWeapon : "unarmed strike",
			regExpSearch: /claws/i,
			name: "Claws",
			source: ["HB", 0],
			ability: 1,
			type: "Natural",
			damage: [1, 4, "slashing"],
			range: "Melee",
			description: "",
			abilitytodamage: true,
			monkweapon: true,
		},
	],
	features : 
	{
		"feline agility" : 
		{
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		},
		"Cat Shape":
		{
		     	name : "Cat Shape",
		      	minlevel : 3,
		      	usages : 1,
		      	recovery: "short rest",
			action : [["action", ""]],
		      	additional: "can turn into a saber tooth tiger at 7th level",
		},
		trait : "Nekomata (+2 Dexterity)"+
		"\n \u2022 Keen Sense: I have proficiency in Perception"+
		"\n \u2022 Feline Agility: When moving on my turn in combat, I can move double my speed. Once you use this trait, you can't use it again until you move O feet on one of your turns." +
	 	"\n \u2022 Feline Flexibility: You have proficiency in Acrobatics, and take half of any fall damage from heights from about 20 ft."
	}
};

AddRacialVariant("nekomata", "domesticated", {
  regExpSearch: /domesticated/i,
  name: "Nekomata, Domesticated",
  source: ["HB", 0],
  plural: "Nekomata, Domesticated",
  scores : [0, 0, 0, 0, 0, 1],
  skills: ["Persuasion"],
toolProfs : [
	"Choose 1",
],
  trait:
    "Fluffy Personality: With your sweet disposition, people tend to think the best of you. You gain proficiency in Persuasion. If you already have proficiency in Persuasion, you may choose to have proficiency in any other Charisma based skill.",
});

AddRacialVariant("nekomata", "wild", {
  regExpSearch: /wild/i,
  name: "Nekomata, Wild",
  source: ["HB", 0],
  scores : [0, 0, 0, 1, 0, 0],
  plural: "Nekomata, Wild",
  skills: ["Stealth", "Nature"],
});
