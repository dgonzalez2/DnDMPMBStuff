var iFileName = "ShadowmancerRogue.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used

AddSubClass(
  "rogue",
  "Shadowmancer",
  {
    regExpSearch : /^(?=.*shadowmancer).*$/i,
    subname : "Shadowmancer",

    source : [["HB", 0]],

    fullname : "Shadowmancer Rogue",
  
    features : {
      "subclassfeature3" : {
        name : "Shadow Trinkets",
        source : ["HB", 0],
				minlevel : 3,
        description : "\n   " + "As a Bonus Action you can create objects of hardened shadow, these objects can take the form of thieves tools, a dagger, or short sword." + "\n " + " Objects made with this feature fade back into shadow upon leaving the person's hand. Upon reaching Level 9 you areallowed to form a shortbow and arrows",
        additional : ["", "", "", "", "", "", "", "", "Create Shortbow", "", "", "", "", "", "", "", "", "", "", ""],
        action : ["bonus action", "Create Weapon"],
        
      },

      "subclassfeature3.1" : {
        name : "Shadow Movement",
        source : ["HB", 0],
				minlevel : 3,
        description : "\n   " + " You can teleport to a space you can see within 60ft that is in dim light or darkness as a bonus action",
        action : ["bonus action", "Shadow Movement"],
      },
      "subclassfeature9" : {
        name : "Umbral Sight",
        source : ["HB", 0],
        limfeaname : "Darkness",
				minlevel : 9,
        description : "\n   " + "I can cast Darkness Spell equal to my proficiency modifier",
        usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
        recovery : "long rest",
      },
      "subclassfeature9.1" : {
        name : "Gone with the Darkness",
        source : ["HB", 0],
				minlevel : 9,
        description : "\n   " + "I can remove dead bodies with shadows. The process takes 1 minute per body",
      },
      "subclassfeature13" : {
        name : "Projection",
        source : ["HB", 0],
				minlevel : 13,
        description : "\n   " + "I can create a black sillhouette of a non descript person at any point you can withihn 60ft equal to my proficiency modifier." + "\n " + "The silhouette lasts 1 minute and fades away if messed with",
        usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
        action: ["action", "Projection"]
      },
         "subclassfeature17" : {
        name : "Multi Target",
        source : ["HB", 0],
				minlevel : 17,
        description : "\n   " + "When you deal sneak attack damage to the target, you can teleport up to your movement speed to 2 different targets and deal sneak attack damage equal to the first to them" + "\n " + "I can not hit the same target with this feature",
      },
    }
  }
)
