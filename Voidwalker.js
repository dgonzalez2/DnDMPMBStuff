/*	-INFORMATION-
	Subject:	Void Walker (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Void Walker Fighter.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"fighter", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"Void Walker", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*void)(?=.*walker).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Void Walker", //required; the name of the subclass

		source : ["Hombrew"], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 3415]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Void Walker Fighter", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		spellcastingFactor : 4, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Void Powered Weapon",
				source : ["Homebrew"],
				minlevel : 3,
                description : desc([ 
                                        "As a bonus action you can infuse one of your blades with void energy to empower your ",
                                        "attacks. Any attack made with the empowered weapon causes targets to hear hear their",
                                        "own voice across dimensions and deals an additional 1d4 psychic damage for",
                                        "the duration of this ability. This effect lasts for 1 minute until you complete a",
                                        "short or long restor if you aren’t holding the weapon at the end of your turn. ",
                                        "You can use this ability again equal to your WIS modifier",
                                        "This damage increases at 7th level, 10th level, and 15th level",

                                        ]),
                                        action : ["bonus action", "Void Emporewed Weapon"],

				additional : ["", "", "d4", "d4", "d4", "d4", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10"],
			},
			"subclassfeature3.1" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Voices from the Void",
				source : ["Homebrew"],
				minlevel : 3,
                description : desc([ 
                                        "In moments of high risk, your voice calls out to you from across dimensions to warn of",
                                        "incoming threats. These warnings give you a chance to dodge attacks made against",
                                        "you as you traverse the battlefield. As a result, any creature targeting",
                                        "you with an attack of opportunity has disadvantage on their attack roll.",
                                        "short or long restor if you aren’t holding the weapon at the end of your turn. ",
                                        "You can use this ability again equal to your WIS modifier",
                                        "This damage increases at 7th level, 10th level, and 15th level",
                                        ]),
			},
			"subclassfeature3.2" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Dimensional Pocket",
				source : ["Homebrew"],
				minlevel : 3,
                description : desc([ 
                                        "You’re in tune with world of void, as such you can safely make a pocket that",
                                        "can store your items if need be (default of 2). On an action you can summon a part",
                                        "of void and take a weapon or a bonus action to store. . In order to do this you must",
                                        "spend 1 hour to attune to your weapon or item. Upon attuning to a item/weapon to store",
                                        "that exceeds the amount the oldest item stored will be lost and replaced with the new",
                                        "item/weapon.",
                                        "The amount of items you can store increases at 7th level, 10th level, and at 15th level",
                                        "You are able to make the pocket big enough to fit up to 9 creatures of your choosing.",
                                        "The pocket can be fitted with a small tinted glass window to be able to look outside.",
                                        ]),
                                        action : ["bonus action", "Store Item"],
                                        action : ["action", "Take Item"],
				additional : ["", "", "2", "2", "2", "2", "3", "3", "3", "4", "4", "4", "4", "4", "4 and hut", "4 and hut", "4 and hut", "4 and hut", "4 and hut", "4 and hut"],
			},
			"subclassfeature3.3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Into the void",
				source : ["Homebrew"],
				minlevel : 3,
                description : desc([ 
                                        "Experience traveling through the void allows you to slip across dimensions",
                                        "and traverse the battlefield through a pocket dimension. As a bonus action,",
                                        "you can phase-out and teleport a distance equal to your movement speed.",
                                        "Phasing out of another creature’s range does not provoke an attack of opportunity.",
                                        ]),
                                        action : ["bonus action", "Phase-out"],
			},
            "subclassfeature7" : {
				name : "Dimensional Rift",
				source : ["Homebrew"],
                minlevel : 7,
                description : desc([
                    "By combining your action and your movement, you can create a pathway through the void by",
                    "placing a portal at each end. After linking the portals, you will be located adjacent",
                    "to the second portal placed and unable to move for the remainder of your turn.",
                    "Each portal occupies an oval shape with a 5 ft. width, 7 ft. height, and 1 in. depth.",
                    "You and your allies may use the rift as a means of instantaneous travel without using",
                    "any movement. Allies may traverse the portal once per turn. The rift remains active for",
                    "one minute. This feature can be used twice before a long rest.",
				]),
                action : ["action", "Dimensional Rift"],
			},
			"subclassfeature10" : {
				name : "Void Sense",
				source : ["Homebrew"],
				minlevel : 10,
                description : desc([
                              "The voices come to your aid again telling the best way to solve a problem.", 
                              "You can use a bonus action to gain 1d8 to any of your ability checks.",
                              "You can use this feature a number of times equal to your WIS modifier",
                              "You regain all expended uses when you finish a short or long rest.",
                              "At 18th level the die becomes a 1d12.",
							]),
			},
			"subclassfeature15" : {
				name : "Void Drop",
				source : ["Homebrew"],
				minlevel : 15,
                description : desc([
                              "As an action, you can open a portal below a single enemy within 60 ft.that would fit through the", 
                              "portal’s dimensions and an additional portal up to 30 ft. above the ground ",
                              "The creature falls through the portal and crashes to the ground below.",
                              "The creature must succeed on a CON saving throw equal to 8 + PROF + your CON modifier",
                              "or take 2d6+2 damage for every 10 ft. they drop and be knocked prone",
                              "On a successful save, the creature takes half damage and is not knocked prone",
                              "This feature can be used a number of times equal to your WIS modifier",
                              "You regain all expended uses when you finish a short or long rest.",
							  ]),
							  action : ["action", "Void Drop"],
            },
            "subclassfeature18" : {
				name : "Void Mastery",
				source : ["Homebrew"],
				minlevel : 18,
                description : desc([
                              "True mastery of the void through extensive training has granted the following", 
                              "improvements to your void manipulation abilities",
                              "Void Powered Blade: Two blades can be empowered by this effect. Uses a single bonus action.",
                              "Into the Void: You can now teleport a distance equal to twice full movement speed.",
                              "Dimensional Rift: Your movement speed is doubled while placing the portals, allowing the rift to be twice as long.",
                              ]),
			},
		}
	}
);