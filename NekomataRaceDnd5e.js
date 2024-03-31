/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

var iFileName = "NekomataRaceDnd5e.js";
RequiredSheetVersion("13.1.0");

SourceList[["HB", 0]]=
{
	name : "Nekomata",
	abbreviation : "HB",
	group : "Third Party",
	url : "https://www.dandwiki.com/wiki/Half-Tabaxi_(5e_Race)",
	date : "2024-03-02"
};

RaceList["Nekomata"] = 
{
	regExpSearch : /^(?=.*Nekomata).*$/i,
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
	
	weapons: ["Claws"],
	weaponOptions: 
	[
		{
			baseWeapon : "unarmed strike",
			regExpSearch: /^(?=.*\claws?\b).*$/i,
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

AddRacialVariant("Nekomata", "Nekomata, domesticated", {
  regExpSearch: /^(?=.*Nekomata)(?=.*domesticated).*$/i,
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

AddRacialVariant("Nekomata", "Nekomata, wild", {
  regExpSearch: /^(?=.*Nekomata)(?=.*wild).*$/i,
  name: "Nekomata, Wild",
  source: ["HB", 0],
  scores : [0, 0, 0, 1, 0, 0],
  plural: "Nekomata, Wild",
  skills: ["Stealth", "Nature"],
});

/* Nekomata
Physical Description
The Nekomatas are medium sized humanoids with cat ears, a tail that splits in two before reaching the body, and occasionally have whiskers. They are usually slender and lithe in build, and are also known to have a vast array of hair and eye color of almost any known combination.

History
Though similarly cat-like with the Tabaxi race, the Nekomata are vastly different to the Tabaxi and are a lot more human-like in appearance. Some historians even believe that the Nekomata, and Tabaxi have a common ancestral line that dates back to ancient times, but nothing as of now has been confirmed.

Half-Tabaxi Traits
Ability Score Increase. Your Dexterity score increases by 2, and one other ability scores of your choice increase by 1.
Age. Half-Tabaxi age at about the same rate as Humans.
Alignment. Half-Tabaxi tend towards chaos similarly to Tabaxi, but have no strong tendency towards good or evil.
Size. Half-Tabaxi are very similar in size to Humans, if not a bit slimmer. Your size is Medium
Speed. Your base walking speed is 30 feet.
Darkvision. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
Cat’s Talent. You gain proficiency in Perception, Stealth, and one other skill of your choice
Feline Agility. Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the tum. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.
Languages. You can speak, read, and write Common and one other language of your choice. */
