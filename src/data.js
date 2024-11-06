import runt from './runt.jpg'
import frozen from './frozen.jpg'
import hide from './hidin.jpg'
import doom from './doom.jpg'
import rhm from './rhm.jpg'
import best from './true.jpg'  

export let path = {
  "0NNN01": {
    "code" : "0NNN01",
    "ballNum" : 0,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You are shook awake by some brief turbulence; it must be Wailord waking everyone. This is your first day on board the Kanto Agents and Officers floating Wailord.",
    "text2" : "You suppose Sgt. Sarge is waiting...",
    "opt" : [
      ["Get Up", "0NNN02"],
      ["5 More Minutes", "0NNN03"],
    ]
  },
  "0NNN02": { //starter selection
    "code" : "0NNN02",
    "ballNum" : 0,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You exit the Agents tent and stand in line with the other cadets. 'Morning Cadets, as it's your first day, you will each get to choose a Pokémon to train alongside you.",
    "text2" : "Pick a pokeball:",
    "opt" : [
      ["Sobble", "1NNN01"],
      ["Nincada", "2NNN01"],
      ["Ditto", "3NNN01"]
    ]
  },
  "0NNN03": { //sleeping in
    "code" : "0NNN03",
    "ballNum" : 0,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Sarge catches you sleeping in and commands you to get up. As punishment he makes you choose your Pokémon last.",
    "text2" : "You watch the other 2 agents swiftly grab their Pokémon before you finally pick up your own.",
    "opt" : [
      ["Throw Pokéball", "3NNN01"],
    ]
  },


// -- STARTER BATTLES --


  //sobble
  "1NNN01": { 
    "code" : "1NNN01",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'Each of you will fight another cadet with your new Pokémon, only winners shall stay.' Sarge declares.",
    "text2" : "Your opponents sends out their Ditto as you send out Sobble What do you do?",
    "opt" : [
      ["Use water gun", "1NNN02"],
      ["Use growl", "1NNN03"],
    ]
  },
  "1NNN02": { //1
    "code" : "1NNN02",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Their Ditto transforms into a Sobble to resist your attack before neutralising you.",
    "text2" : null,
    "opt" : [
      ["Continue", "E-RUNT"]
    ]
  },
  "1NNN03": { //2
    "code" : "1NNN03",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "It transforms to a Sobble but its attacks are weakened, giving you the edge to win the battle.",
    "text2" : null,
    "opt" : [
      ["Continue", "1NNN04"],
    ]
  },

  //nincada
  "2NNN01": { 
    "code" : "2NNN01",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'Each of you will fight another cadet with your new Pokémon, only winners shall stay.' Sarge declares. 'Since there's 3 of you, your opponent will be me.'",
    "text2" : "Sarge sends out a Frogadier...",
    "opt" : [
      ["Call him out", "2NNN02"],
      ["Use scratch", "2NNN03"],
      ["Use sand attack", "2NNN04"]
    ]
  },
  "2NNN02": { //1
    "code" : "2NNN02",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You complain about the disparity of the battles, Sarge retaliates 'Life isn't fair! Especially on our missions.'",
    "text2" : "Since you can't handle that, I suggest you pack your bags. ",
    "opt" : [
      ["Continue", "E-RUNT"],
    ]
  },
  "2NNN03": { //2
    "code" : "2NNN03",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You send out Nincada and command it to use scratch. Sadly Frogadier outspeeds and KOs Nincada. A sense of fear washes over you.",
    "text2" : "'You lost, badly, but you stuck it out til the very end. Thats a win in my book.'",
    "opt" : [
      ["Continue", "2NNN05"]
    ]
  },
  "2NNN04": { //3
    "code" : "2NNN04",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You send out Nincada and command it to use sand attack. Frogadier tries to attack but can't land a move, allowing you to take it out",
    "text2" : "'Hm, impressive.'",
    "opt" : [
      ["Continue", "2NNN05"]
    ]
  },

  //ditto
  "3NNN01": { 
    "code" : "3NNN01",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You instantly send out Ditto and Sarge is quick to criticise your lack of caution.",
    "text2" : "'Each of you will fight another cadet with your new Pokémon, only winners shall stay.' Sarge declares. Your opponent sends out Sobble.",
    "opt" : [
      ["Use transform", "3NNN02"],
      ["Taunt the cadet", "3NNN03"],
    ]
  },
  "3NNN02": { //1
    "code" : "3NNN02",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Ditto's only move is transform; childsplay for an opponent to predict.",
    "text2" : "Sobble uses several pounds to end the fight",
    "opt" : [
      ["Continue", "E-RUNT"]
    ]
  },
  "3NNN03": { //2
    "code" : "3NNN03",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Your words get the better of him and he hastily uses water gun, which you now-transformed Ditto resists. You use you health lead to win the fight.",
    "text2" : null,
    "opt" : [
      ["Continue", "3NNN04"]  
    ]
  },


// -- MAP SELECTION -- 


  //sobble
  "1NNN04": { //where to go
    "code" : "1NNN04",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Sarge informs you that he's received multiple tips on the resurgence of an old criminal organisation in Kanto: Team Rocket. He lets you choose amongst the two of you left who goes where to get intel on their plans.",
    "text2" : "Team Rocket's last outing was over a decade ago, how could they be back? You have to stop them: where do you go?",
    "opt" : [
      ["Pallet Town", "1NNN05"],
      ["Cerulean City", "1NNN14"]
    ]
  },

  //nincada
  "2NNN05": { //where to go
    "code" : "2NNN05",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Sarge informs you that he's received multiple tips on the resurgence of an old criminal organisation in Kanto: Team Rocket. He lets you choose amongst the two of you left who goes where to get intel on their plans.",
    "text2" : "Where do you go?",
    "opt" : [
      ["Pallet Town", "2NNN06"],
      ["Cerulean City", "2NNN15"]
    ]
  },

  //ditto
  "3NNN04": { //where to go
    "code" : "3NNN04",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Sarge informs you that he's received multiple tips on the resurgence of an old criminal organisation in Kanto: Team Rocket. He lets you choose amongst the two of you left who goes where to get intel on their plans.",
    "text2" : "Where do you go?",
    "opt" : [
      ["Pallet Town", "3NNN05"],
      ["Cerulean City", "3NNN14"]
    ]
  },


// -- PALLET TOWN -- 


  //sobble
  "1NNN05": { 
    "code" : "1NNN05",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'I can't imagine there's much over there. Off you Go.'",
    "text2" : "A stationed Charizard flys you across the reigon to Pallet Town. As you near your location and lower in altitude, you can see the variety of Pokémon now in the reigon; much more than the old 151.",
    "opt" : [
      ["Continue", "1NNN06"]
    ]
  },
  "1NNN06": { //1
    "code" : "1NNN06",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You land at southern-most point of Pallet Town. Theres not much here, which makes some unusually dresssed individuals stand out even moreso. But what would Team Rocket want in some random house?",
    "text2" : null,
    "opt" : [
      ["Investigate", "1NNN07"],
      ["Visit the Professor", "1NNN08"]
    ]
  },
  "1NNN07": { //2
    "code" : "1NNN07",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "As you reach the house you catch the mysterious people on their way out. Their disguises may fool a regular citizen, but not you, they're clearly Team Rocket grunts. On their way out, you hear one mumble to the other 'So he really disappeared and-' before noticing you and swiftly leaving",
    "text2" : "They're too quick to chase, not like it's much use: there's likely not much left to learn here.",
    "opt" : [
      ["Visit the Professor", "1NNN08"]
    ]
  },
  "1NNN08": { //3
    "code" : "1NNN08",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You walk into Professor Oak's lab, the once fabled professor now sittingly contently at his desk. He notices your serious demeanour and asks what you want.",
    "text2" : null,
    "opt" : [
      ["'Who were those grunts after?'", "1NNN09"],
      ["'Whos house is that?'", "1NNN09"]
    ]
  },
  "1NNN09": { //4
    "code" : "1NNN09",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "He explains that this was once the home of Red, the legendary champion and original thwarter of Team Rocket. But he goes on to say that ever since he completed the original digitised Pokédex he left Kanto and hasn't returned in 14 years, his last sighting coming from Gold atop Mt Silver, who too hasn't returned since.",
    "text2" : "Oak clatters as you leave 'My grandson might have more information on Red, and maybe Gold as well!'.",
    "opt" : [
      ["Leave", "1NNN10"]
    ]
  },
  "1NNN10": { // -- whiscash pallet
    "code" : "1NNN10",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "Charizard is almost in reach when a wild Whiscash appears out of the water. You send out Sobble in defense.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN11"],
      ["Ball", "1NNN12"],
      ["Run", "1NNN13"]
    ]
  },
  "1NNN11": { //f1
    "code" : "1NNN11",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "Sobble deals solid damage and is met with an amnesia from Whiscash. Now seems like a good time to throw a ball...",
    "text2" : "What do you do?",
    "opt" : [
      ["Ball", "1WNN01"],
      ["Run", "1NNN13"]
    ]
  },
  "1NNN12": { //b1
    "code" : "1NNN12",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  ..It broke out, You'll have to try something else.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN11"],
      ["Run", "1NNN13"]
    ]
  },
  "1NNN13": { //r
    "code" : "1NNN13",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You got away safely onto Charizard and set course for the KAO Wailord.",
    "text2" : null,
    "opt" : [
      ["Continue", "1NNN22"]
    ]
  },
  "1WNN01": { //b2
    "code" : "1WNN01",
    "ballNum" : 2,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  3...  Congratulations! You caught a Whiscash!",
    "text2" : "Your Sobble also gained enough experience and evolved into a Drizzile! Time to Report back to Sarge.",
    "opt" : [
      ["Continue", "1WNN03"]
    ]
  },

  //nincada
  "2NNN06": { //Pallet Town
    "code" : "2NNN06",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'I can't imagine there's much over there. Off you Go.'",
    "text2" : "A stationed Charizard flys you across the reigon to Pallet Town. As you near your location and lower in altitude, you can see the variety of Pokémon now in the reigon; much more than the old 151.",
    "opt" : [
      ["Continue", "2NNN07"]
    ]
  },
  "2NNN07": { //1
    "code" : "2NNN07",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You land at southern-most point of Pallet Town. Theres not much here, which makes some unusually dresssed individuals stand out even moreso. But what would Team Rocket want in some random house?",
    "text2" : null,
    "opt" : [
      ["Investigate", "2NNN08"],
      ["Visit the Professor", "2NNN09"]
    ]
  },
  "2NNN08": { //2
    "code" : "2NNN08",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "As you reach the house you catch the mysterious people on their way out. Their disguises may fool a regular citizen, but not you, they're clearly Team Rocket grunts. On their way out, you hear one mumble to the other 'So he really disappeared and-' before noticing you and swiftly leaving",
    "text2" : "They're too quick to chase, not like it's much use: there's likely not much left to learn here.",
    "opt" : [
      ["Visit the Professor", "2NNN09"]
    ]
  },
  "2NNN09": { //3
    "code" : "2NNN09",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You walk into Professor Oak's lab, the once fabled professor now sittingly contently at his desk. He notices your serious demeanour and asks what you want.",
    "text2" : null,
    "opt" : [
      ["'Who were those grunts after?'", "2NNN10"],
      ["'Whos house is that?'", "2NNN10"]
    ]
  },
  "2NNN10": { //4
    "code" : "2NNN10",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "He explains that this was once the home of Red, the legendary champion and original thwarter of Team Rocket. But he goes on to say that ever since he completed the original digitised Pokédex he left Kanto and hasn't returned in 14 years, his last sighting coming from Gold atop Mt Silver, who too hasn't returned since.",
    "text2" : "Oak clatters as you leave 'My grandson might have more information on Red, and maybe Gold as well!'.",
    "opt" : [
      ["Leave", "2NNN11"]
    ]
  },
  "2NNN11": { // -- whiscash pallet
    "code" : "2NNN11",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "Charizard is almost in reach when a wild Whiscash appears out of the water. You send out Nincada in defense.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN12"],
      ["Ball", "2NNN13"],
      ["Run", "2NNN14"]
    ]
  },
  "2NNN12": { //f
    "code" : "2NNN12",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "Nincada deals impressive damage and is met with an amnesia from Whiscash. Now seems like a good time to throw a ball...",
    "text2" : "What do you do?",
    "opt" : [
      ["Ball", "2WNN01"],
      ["Run", "2NNN14"]
    ]
  },
  "2NNN13": { //b1
    "code" : "2NNN13",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  ..It broke out, You'll have to try something else.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN12"],
      ["Run", "2NNN14"]
    ]
  },
  "2NNN14": { //r
    "code" : "2NNN14",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You got away safely onto Charizard and set course for the KAO Wailord.",
    "text2" : null,
    "opt" : [
      ["Continue", "2NNN23"]
    ]
  },
  "2WNN01": { //b2
    "code" : "2WNN01",
    "ballNum" : 3,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  3...  Congratulations! You caught a Whiscash!",
    "text2" : "Your Nincada also gained enough experience and evolved into a Ninjask and Shedinja! Time to Report back to Sarge.",
    "opt" : [
      ["Continue", "2WNN03"]
    ]
  },

  //ditto
  "3NNN05": { //Pallet Town
    "code" : "3NNN05",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'I can't imagine there's much over there. Off you Go.'",
    "text2" : "A stationed Charizard flys you across the reigon to Pallet Town. As you near your location and lower in altitude, you can see the variety of Pokémon now in the reigon; much more than the old 151.",
    "opt" : [
      ["Continue", "3NNN06"]
    ]
  },
  "3NNN06": { //1
    "code" : "3NNN06",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You land at southern-most point of Pallet Town. Theres not much here, which makes some unusually dresssed individuals stand out even moreso. But what would Team Rocket want in some random house?",
    "text2" : null,
    "opt" : [
      ["Investigate", "3NNN07"],
      ["Visit the Professor", "3NNN08"]
    ]
  },
  "3NNN07": { //2
    "code" : "3NNN07",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "As you reach the house you catch the mysterious people on their way out. Their disguises may fool a regular citizen, but not you, they're clearly Team Rocket grunts. On their way out, you hear one mumble to the other 'So he really disappeared and-' before noticing you and swiftly leaving",
    "text2" : "They're too quick to chase, not like it's much use: there's likely not much left to learn here.",
    "opt" : [
      ["Visit the Professor", "3NNN09"]
    ]
  },
  "3NNN08": { //3
    "code" : "3NNN08",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You walk into Professor Oak's lab, the once fabled professor now sittingly contently at his desk. He notices your serious demeanour and asks what you want.",
    "text2" : null,
    "opt" : [
      ["'Who were those grunts after?'", "3NNN09"],
      ["'Whos house is that?'", "3NNN09"]
    ]
  },
  "3NNN09": { //4
    "code" : "3NNN09",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "He explains that this was once the home of Red, the legendary champion and original thwarter of Team Rocket. But he goes on to say that ever since he completed the original digitised Pokédex he left Kanto and hasn't returned in 14 years, his last sighting coming from Gold atop Mt Silver, who too hasn't returned since.",
    "text2" : "Oak clatters as you leave 'My grandson might have more information on Red, and maybe Gold as well!'.",
    "opt" : [
      ["Leave", "3NNN10"]
    ]
  },
  "3NNN10": { // -- whiscash pallet
    "code" : "3NNN10",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "Charizard is almost in reach when a wild Whiscash appears out of the water. You send out Sobble in defense.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN11"],
      ["Ball", "3NNN12"],
      ["Run", "3NNN13"]
    ]
  },
  "3NNN11": { //f1
    "code" : "3NNN11",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "Sobble deals solid damage and is met with an amnesia from Whiscash. Now seems like a good time to throw a ball...",
    "text2" : "What do you do?",
    "opt" : [
      ["Ball", "3WNN01"],
      ["Run", "3NNN13"]
    ]
  },
  "3NNN12": { //b1
    "code" : "3NNN12",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  ..It breaks out and uses rest.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN11"],
      ["Ball", "3NNN12"],
      ["Run", "3NNN13"]
    ]
  },
  "3NNN13": { //r
    "code" : "3NNN13",
    "ballNum" : 1,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You got away safely onto Charizard and set course for the KAO Wailord.",
    "text2" : null,
    "opt" : [
      ["Continue", "3NNN22"]
    ]
  },
  "3WNN01": { //b2
    "code" : "3WNN01",
    "ballNum" : 2,
    "area" : "Pallet Town",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  3...  Congratulations! You caught a Whiscash!",
    "text2" : null,
    "opt" : [
      ["Continue", "3WNN03"]
    ]
  },


// -- CERULEAN CITY -- 


  //sobble
  "1NNN14": { 
    "code" : "1NNN14",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "Cerulean City is bubbling—everything is normal aside from some activity at Cerulean Cave in the west.",
    "text2" : null,
    "opt" : [
      ["Investigate", "1NNN15"],
      ["Go to the gym", "1NNN16"]
    ]
  },
  "1NNN15": { //1
    "code" : "1NNN15",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "The entrance to the cave is blocked by two Team Rocket grunts leaving. They look disheveled, however one grunt reassures the other, saying 'We'll get that stone, Boss gets what Boss wants'.",
    "text2" : "What could they be talking about?",
    "opt" : [
      ["Go in the cave", "1NNN17"]
    ]
  },
  "1NNN16": { //2
    "code" : "1NNN16",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "The ocean's empire, the Cerulean gym holds the strongest water type trainer in all of Kanto. It appears she's out right now though, maybe she's dealing with the ruckus at Cerulean Cave.",
    "text2" : null,
    "opt" : [
      ["Go to the cave", "1NNN15"]
    ]
  },
  "1NNN17": { //3
    "code" : "1NNN17",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "You are greeted near the entrance by Misty - the gym leader - who, much like you, went to investigate the commotion. She then mentions how Cerulean cave has always had a powerful energy feild that creates and attracts powerful artifacts and Pokémon. Misty states she caught them mining the walls looking for some kind of gemstone - a rare one for sure - but she doesn't know what. ",
    "text2" : "After hearing her out, you thank Misty for the information.",
    "opt" : [
      ["Leave", "1NNN18"]
    ]
  },
  "1NNN18": { // -- whiscash ceru
    "code" : "1NNN18",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "Charizard is almost in reach when a wild Whiscash appears out of the water. You send out Sobble in defense.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN19"],
      ["Ball", "1NNN20"],
      ["Run", "1NNN21"]
    ]
  },
  "1NNN19": { //f1
    "code" : "1NNN19",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "Sobble deals solid damage and is met with an amnesia from Whiscash. Now seems like a good time to throw a ball...",
    "text2" : "What do you do?",
    "opt" : [
      ["Ball", "1WNN02"],
      ["Run", "1NNN21"]
    ]
  },
  "1NNN20": { //b1
    "code" : "1NNN20",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  ..It breaks out and uses rest.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN19"],
      ["Ball", "1NNN20"],
      ["Run", "1NNN21"]
    ]
  },
  "1NNN21": { //r
    "code" : "1NNN21",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You got away safely onto Charizard and set course for the KAO Wailord.",
    "text2" : null,
    "opt" : [
      ["Continue", "1NNN22"]
    ]
  },
  "1WNN02": { //b2
    "code" : "1WNN02",
    "ballNum" : 2,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  3...  Congratulations! You caught a Whiscash!",
    "text2" : "Your Sobble also gained enough experience and evolved into a Drizzile! Time to Report back to Sarge.",
    "opt" : [
      ["Continue", "1WNN03"]
    ]
  },

  //nincada
  "2NNN15": { 
    "code" : "2NNN15",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "Cerulean City is bubbling—everything is normal aside from some activity at Cerulean Cave in the west.",
    "text2" : null,
    "opt" : [
      ["Investigate", "2NNN16"],
      ["Go to the gym", "2NNN17"]
    ]
  },
  "2NNN16": { //1
    "code" : "2NNN16",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "The entrance to the cave is blocked by two Team Rocket grunts leaving. They look disheveled, however one grunt reassures the other, saying 'We'll get that stone, Boss gets what Boss wants'.",
    "text2" : "What could they be talking about?",
    "opt" : [
      ["Go in the cave", "2NNN18"]
    ]
  },
  "2NNN17": { //2
    "code" : "2NNN17",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "The ocean's empire, the Cerulean gym holds the strongest water type trainer in all of Kanto. It appears she's out right now though, maybe she's dealing with the ruckus at Cerulean Cave.",
    "text2" : null,
    "opt" : [
      ["Go to the cave", "2NNN16"]
    ]
  },
  "2NNN18": { //3
    "code" : "2NNN18",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "You are greeted near the entrance by Misty - the gym leader - who, much like you, went to investigate the commotion. She then mentions how Cerulean cave has always had a powerful energy feild that creates and attracts powerful artifacts and Pokémon. Misty states she caught them mining the walls looking for some kind of gemstone - a rare one for sure - but she doesn't know what. ",
    "text2" : "After hearing her out, you thank Misty for the information.",
    "opt" : [
      ["Leave", "2NNN19"]
    ]
  },
  "2NNN19": { // -- whiscash ceru
    "code" : "2NNN19",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "Charizard is almost in reach when a wild Whiscash appears out of the water. You send out Nincada in defense.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN20"],
      ["Ball", "2NNN21"],
      ["Run", "2NNN22"]
    ]
  },
  "2NNN20": { //f1
    "code" : "2NNN20",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "Sobble deals solid damage and is met with an amnesia from Whiscash. Now seems like a good time to throw a ball...",
    "text2" : "What do you do?",
    "opt" : [
      ["Ball", "2WNN02"],
      ["Run", "2NNN22"]
    ]
  },
  "2NNN21": { //b1
    "code" : "2NNN21",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  ..It breaks out and uses rest.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN20"],
      ["Ball", "2NNN21"],
      ["Run", "2NNN22"]
    ]
  },
  "2NNN22": { //r
    "code" : "2NNN22",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You got away safely onto Charizard and set course for the KAO Wailord.",
    "text2" : null,
    "opt" : [
      ["Continue", "2NNN23"]
    ]
  },
  "2WNN02": { //b2
    "code" : "2WNN02",
    "ballNum" : 3,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  3...  Congratulations! You caught a Whiscash!",
    "text2" : "Your Nincada also gained enough experience and evolved into a Ninjask and Shedinja! Time to Report back to Sarge.",
    "opt" : [
      ["Continue", "2WNN03"]
    ]
  },

  //ditto
  "3NNN14": { 
    "code" : "3NNN14",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "Cerulean City is bubbling—everything is normal aside from some activity at Cerulean Cave in the west.",
    "text2" : null,
    "opt" : [
      ["Investigate", "3NNN15"],
      ["Go to the gym", "3NNN16"]
    ]
  },
  "3NNN15": { //1
    "code" : "3NNN15",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "The entrance to the cave is blocked by two Team Rocket grunts leaving. They look disheveled, however one grunt reassures the other, saying 'We'll get that stone, Boss gets what Boss wants'.",
    "text2" : "What could they be talking about?",
    "opt" : [
      ["Go in the cave", "3NNN17"]
    ]
  },
  "3NNN16": { //2
    "code" : "3NNN16",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "The ocean's empire, the Cerulean gym holds the strongest water type trainer in all of Kanto. It appears she's out right now though, maybe she's dealing with the ruckus at Cerulean Cave.",
    "text2" : null,
    "opt" : [
      ["Go to the cave", "3NNN15"]
    ]
  },
  "3NNN17": { //3
    "code" : "3NNN17",
    "ballNum" : 1,
    "area" : "Cerulean City",
    "image" : null,
    "text1" : "You are greeted near the entrance by Misty - the gym leader - who, much like you, went to investigate the commotion. She then mentions how Cerulean cave has always had a powerful energy feild that creates and attracts powerful artifacts and Pokémon. Misty states she caught them mining the walls looking for some kind of gemstone - a rare one for sure - but she doesn't know what. ",
    "text2" : "After hearing her out, you thank Misty for the information.",
    "opt" : [
      ["Leave", "3NNN18"]
    ]
  },
  "3NNN18": { // -- whiscash ceru
    "code" : "3NNN18",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "Charizard is almost in reach when a wild Whiscash appears out of the water. You send out Ditto in defense.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN19"],
      ["Ball", "3NNN20"],
      ["Run", "3NNN21"]
    ]
  },
  "3NNN19": { //f1
    "code" : "3NNN19",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "Sobble deals solid damage and is met with an amnesia from Whiscash. Now seems like a good time to throw a ball...",
    "text2" : "What do you do?",
    "opt" : [
      ["Ball", "3WNN02"],
      ["Run", "3NNN21"]
    ]
  },
  "3NNN20": { //b1
    "code" : "3NNN20",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  ..It breaks out and uses rest.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN19"],
      ["Ball", "3NNN20"],
      ["Run", "3NNN21"]
    ]
  },
  "3NNN21": { //r
    "code" : "3NNN21",
    "ballNum" : 1,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You got away safely onto Charizard and set course for the KAO Wailord.",
    "text2" : null,
    "opt" : [
      ["Continue", "3NNN22"]
    ]
  },
  "3WNN02": { //b2
    "code" : "3WNN02",
    "ballNum" : 2,
    "area" : "Creulean City",
    "image" : null,
    "text1" : "You throw an Ultra Ball at the Whiscash...  1...  2...  3...  Congratulations! You caught a Whiscash!",
    "text2" : null,
    "opt" : [
      ["Continue", "3WNN03"]
    ]
  },


// -- BACK AT HQ YES WHISCASH --


  //sobble
  "1WNN03": { 
    "code" : "1WNN03",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You tell Sarge all the information you gathered. 'Hm, interesting..' He remarks 'Team Rocket is back, that's for sure, and they're taking every measure to ensure no one gets in their way this time.' He ponders for a moment before ordering another agent to check on Blue, Oak's grandson, in Viridian City.",
    "text2" : "The Seargant asks if you want to help brainstorm through the night on Team Rocket's plans.",
    "opt" : [
      ["Accept", "1WNN04"],
      ["Refuse", "1WNN05"]
    ]
  },
  "1WNN04": { //accept
    "code" : "1WNN04",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The sun goes down as you and Sarge talk in depth about what everyone found out.",
    "text2" : null,
    "opt" : [
      ["Continue", "1WNN06"]
    ]
  },
  "1WNN05": { //refuse
    "code" : "1WNN05",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You reply that you'd rather rest up for tomorrows mission.",
    "text2" : "'Very well, rest up cadet.'",
    "opt" : [
      ["Continue", "1WNN06"]
    ]
  },
  "1WNN06": { //morn
    "code" : "1WNN06",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The night passes. You wake up and emerge from your tent to find Sarge waiting for you",
    "text2" : "'I've thought about it some more, I'm confident that Team Rocket intends to take over the Indigo Plateau. Blue is as clueless as us on his rivals whereabouts, but I fear we need as many champions on our side as possible. Lance is already stationed there waiting, but I need you to find Red and Gold; Mt Silver was where they were seen last.'",
    "opt" : [
      ["'On it!'", "1WNN08"],
      ["'Why me?'", "1WNN07"]
    ]
  },
  "1WNN07": { //why
    "code" : "1WNN07",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'The other agents are out or sleeping like babies, you're our best bet.'",
    "text2" : null,
    "opt" : [
      ["'On it!'", "1WNN08"]
    ]
  },
  
  //nincada
  "2WNN03": { 
    "code" : "2WNN03",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You tell Sarge all the information you gathered. 'Hm, interesting..' He remarks 'Team Rocket is back, that's for sure, and they're taking every measure to ensure no one gets in their way this time.' He ponders for a moment before ordering another agent to check on Blue, Oak's grandson, in Viridian City.",
    "text2" : "The Seargant asks if you want to help brainstorm through the night on Team Rocket's plans.",
    "opt" : [
      ["Accept", "2WNN04"],
      ["Refuse", "2WNN05"]
    ]
  },
  "2WNN04": { //accept
    "code" : "2WNN04",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The sun goes down as you and Sarge talk in depth about what everyone found out.",
    "text2" : null,
    "opt" : [
      ["Continue", "2WNN06"]
    ]
  },
  "2WNN05": { //refuse
    "code" : "2WNN05",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You reply that you'd rather rest up for tomorrows mission.",
    "text2" : "'Very well, rest up cadet.'",
    "opt" : [
      ["Continue", "2WNN06"]
    ]
  },
  "2WNN06": { //morn
    "code" : "2WNN06",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The night passes. You wake up and emerge from your tent to find Sarge waiting for you",
    "text2" : "'I've thought about it some more, I'm confident that Team Rocket intends to take over the Indigo Plateau. Blue is as clueless as us on his rivals whereabouts, but I fear we need as many champions on our side as possible. Lance is already stationed there waiting, but I need you to find Red and Gold; Mt Silver was where they were seen last.'",
    "opt" : [
      ["'On it!'", "2WNN08"],
      ["'Why me?'", "2WNN07"]
    ]
  },
  "2WNN07": { //why
    "code" : "2WNN07",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'The other agents are out or sleeping like babies, you're our best bet.'",
    "text2" : null,
    "opt" : [
      ["'On it!'", "2WNN08"]
    ]
  },

  //ditto
  "3WNN03": { 
    "code" : "3WNN03",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You tell Sarge all the information you gathered. 'Hm, interesting..' He remarks 'Team Rocket is back, that's for sure, and they're taking every measure to ensure no one gets in their way this time.' He ponders for a moment before ordering another agent to check on Blue, Oak's grandson, in Viridian City.",
    "text2" : "The Seargant asks if you want to help brainstorm through the night on Team Rocket's plans.",
    "opt" : [
      ["Accept", "3WNN04"],
      ["Refuse", "3WNN05"]
    ]
  },
  "3WNN04": { //accept
    "code" : "3WNN04",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The sun goes down as you and Sarge talk in depth about what everyone found out.",
    "text2" : null,
    "opt" : [
      ["Continue", "3WNN06"]
    ]
  },
  "3WNN05": { //refuse
    "code" : "3WNN05",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You reply that you'd rather rest up for tomorrows mission.",
    "text2" : "'Very well, rest up cadet.'",
    "opt" : [
      ["Continue", "3WNN06"]
    ]
  },
  "3WNN06": { //morn
    "code" : "3WNN06",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The night passes. You wake up and emerge from your tent to find Sarge waiting for you",
    "text2" : "'I've thought about it some more, I'm confident that Team Rocket intends to take over the Indigo Plateau. Blue is as clueless as us on his rivals whereabouts, but I fear we need as many champions on our side as possible. Lance is already stationed there waiting, but I need you to find Red and Gold; Mt Silver was where they were seen last.'",
    "opt" : [
      ["'On it!'", "3WNN08"],
      ["'Why me?'", "3WNN07"]
    ]
  },
  "3WNN07": { //why
    "code" : "3WNN07",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'The other agents are out or sleeping like babies, you're our best bet.'",
    "text2" : null,
    "opt" : [
      ["'On it!'", "3WNN08"]
    ]
  },


// -- BACK AT HQ NO WHISCASH -- 


  //sobble
  "1NNN22": { 
    "code" : "1NNN22",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You tell Sarge all the information you gathered. 'Hm, interesting..' He remarks 'Team Rocket is back, that's for sure, and they're taking every measure to ensure no one gets in their way this time.' He ponders for a moment before ordering another agent to check on Blue, Oak's grandson, in Viridian City.",
    "text2" : "The Seargant asks if you want to help brainstorm for a while on Team Rocket's plans.",
    "opt" : [
      ["Accept", "1NNN23"],
      ["Refuse", "1NNN24"]
    ]
  },
  "1NNN23": { //accept
    "code" : "1NNN23",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The sun goes down as you and Sarge talk in depth about what everyone found out.",
    "text2" : null,
    "opt" : [
      ["Continue", "1NNN25"]
    ]
  },
  "1NNN24": { //refuse
    "code" : "1NNN24",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You reply that you'd rather rest up for tomorrows mission.",
    "text2" : "'Very well, rest up cadet.'",
    "opt" : [
      ["Continue", "1NNN25"]
    ]
  },
  "1NNN25": { //morn
    "code" : "1NNN25",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The night passes. You wake up and emerge from your tent to find Sarge waiting for you",
    "text2" : "'I've thought about it some more, I'm confident that Team Rocket intends to take over the Indigo Plateau. Blue is as clueless as us on his rivals whereabouts, but I fear we need as many champions on our side as possible. Lance is already stationed there waiting, but I need you to find Red and Gold; Mt Silver was where they were seen last.'",
    "opt" : [
      ["'On it!'", "1NNN27"],
      ["'Why me?'", "1NNN26"]
    ]
  },
  "1NNN26": { //why
    "code" : "1NNN26",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'The other agents are out or sleeping like babies, you're our best bet.'",
    "text2" : null,
    "opt" : [
      ["'On it!'", "1NNN27"]
    ]
  },

  //nincada
  "2NNN23": { 
    "code" : "2NNN23",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You tell Sarge all the information you gathered. 'Hm, interesting..' He remarks 'Team Rocket is back, that's for sure, and they're taking every measure to ensure no one gets in their way this time.' He ponders for a moment before ordering another agent to check on Blue, Oak's grandson, in Viridian City.",
    "text2" : "The Seargant asks if you want to help brainstorm for a while on Team Rocket's plans.",
    "opt" : [
      ["Accept", "2NNN24"],
      ["Refuse", "2NNN25"]
    ]
  },
  "2NNN24": { //accept
    "code" : "2NNN24",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The sun goes down as you and Sarge talk in depth about what everyone found out.",
    "text2" : null,
    "opt" : [
      ["Continue", "2NNN26"]
    ]
  },
  "2NNN25": { //refuse
    "code" : "2NNN25",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You reply that you'd rather rest up for tomorrows mission.",
    "text2" : "'Very well, rest up cadet.'",
    "opt" : [
      ["Continue", "2NNN26"]
    ]
  },
  "2NNN26": { //morn
    "code" : "2NNN26",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The night passes. You wake up and emerge from your tent to find Sarge waiting for you",
    "text2" : "'I've thought about it some more, I'm confident that Team Rocket intends to take over the Indigo Plateau. Blue is as clueless as us on his rivals whereabouts, but I fear we need as many champions on our side as possible. Lance is already stationed there waiting, but I need you to find Red and Gold; Mt Silver was where they were seen last.'",
    "opt" : [
      ["'On it!'", "2NNN28"],
      ["'Why me?'", "2NNN27"]
    ]
  },
  "2NNN27": { //why
    "code" : "2NNN27",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'The other agents are out or sleeping like babies, you're our best bet.'",
    "text2" : null,
    "opt" : [
      ["'On it!'", "2NNN28"]
    ]
  },

  //ditto
  "3NNN22": { 
    "code" : "3NNN22",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You tell Sarge all the information you gathered. 'Hm, interesting..' He remarks 'Team Rocket is back, that's for sure, and they're taking every measure to ensure no one gets in their way this time.' He ponders for a moment before ordering another agent to check on Blue, Oak's grandson, in Viridian City.",
    "text2" : "The Seargant asks if you want to help brainstorm for a while on Team Rocket's plans.",
    "opt" : [
      ["Accept", "3NNN23"],
      ["Refuse", "3NNN24"]
    ]
  },
  "3NNN23": { //accept
    "code" : "3NNN23",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The sun goes down as you and Sarge talk in depth about what everyone found out.",
    "text2" : null,
    "opt" : [
      ["Continue", "3NNN25"]
    ]
  },
  "3NNN24": { //refuse
    "code" : "3NNN24",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "You reply that you'd rather rest up for tomorrows mission.",
    "text2" : "'Very well, rest up cadet.'",
    "opt" : [
      ["Continue", "3NNN25"]
    ]
  },
  "3NNN25": { //morn
    "code" : "3NNN25",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "The night passes. You wake up and emerge from your tent to find Sarge waiting for you",
    "text2" : "'I've thought about it some more, I'm confident that Team Rocket intends to take over the Indigo Plateau. Blue is as clueless as us on his rivals whereabouts, but I fear we need as many champions on our side as possible. Lance is already stationed there waiting, but I need you to find Red and Gold; Mt Silver was where they were seen last.'",
    "opt" : [
      ["'On it!'", "3NNN27"],
      ["'Why me?'", "3NNN26"]
    ]
  },
  "3NNN26": { //why
    "code" : "3NNN26",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "'The other agents are out or sleeping like babies, you're our best bet.'",
    "text2" : null,
    "opt" : [
      ["'On it!'", "3NNN27"]
    ]
  },


// -- MOUNT SILVER YES WHISCASH--


  //sobble
  "1WNN08": { //houndoom
    "code" : "1WNN08",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Mt silver is home to some of the rarest and more powerful Pokémon. As you climb to the peak, a Houndoom jumps out at you.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1WNN09"],
      ["Ball", "1WNN10"],
      ["Run", "1WNN11"]
    ]
  },
  "1WNN11": { //r
    "code" : "1WNN11",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is focused and won't let you get escape.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1WNN09"],
      ["Ball", "1WNN10"]
    ]
  },
  "1WNN09": { //f1
    "code" : "1WNN09",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Drizzile severely weakens it and it retaliates with a crunch that KOs. You send out Whiscash. ",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1WNN12"],
      ["Ball", "1WHN01"],
      ["Run", "1WNN13"]
    ]
  },
  "1WNN10": { //b1
    "code" : "1WNN10",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You throw an Ultra Ball but Houndoom is too agile and moves out of the way before KO-ing Drizzile with a crunch. You send out Whiscash.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1WNN12"],
      ["Ball", "1WHN01"],
      ["Run", "1WNN13"]
    ]
  },
  "1WNN13": { //r2 -> frozen
    "code" : "1WNN13",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is as focused as ever, you try and run, forgetting your Whiscash and letting it be KOed.",
    "text2" : "You escaped the Houndoom, but with no Pokémon you're at a loss for hope. You fall down at a nearby cave entrance as the cold slowly gets to you...  and you freeze.",
    "opt" : [
      ["Continue", "E-FROZ"]
    ]
  },
  "1WNN12": { //f2
    "code" : "1WNN12",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Whiscash easily lands a water pulse and Houndoom Faints. Shame, it would've been a strong ally.",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "1WNN14"]
    ]
  },
  "1WHN01": { //b2
    "code" : "1WHN01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You adjust your aim and throw an Ultra Ball...  1...  2...  3...  Congratulations! You caught a Houndoom!",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "1WHN02"]
    ]
  },
  "1WNN14": { //no houndoom
    "code" : "1WNN14",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "1WNG01"],
      ["Walk away", "1WNN15"]
    ]
  },
  "1WNG01": { //fight
    "code" : "1WNG01",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Drizzile manages to finish off Gold's Machamp, evolving it into an Inteleon; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "1WNG02"]
    ]
  },
  "1WNN15": { //leave
    "code" : "1WNN15",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "1WNN16"]
    ]
  },
  "1WHN02": { //yes houndoom
    "code" : "1WHN02",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "1WHG01"],
      ["Walk away", "1WHN03"]
    ]
  },
  "1WHG01": { //fight
    "code" : "1WHG01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Drizzile manages to finish off Gold's Machamp, evolving it into an Inteleon; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "1WHG02"]
    ]
  },
  "1WHN03": { //leave
    "code" : "1WHN03",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "1WHN04"]
    ]
  },

  //nincada
  "2WNN08": { //houndoom
    "code" : "2WNN08",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Mt silver is home to some of the rarest and more powerful Pokémon. As you climb to the peak, a Houndoom jumps out at you.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2WNN09"],
      ["Ball", "2WNN10"],
      ["Run", "2WNN11"]
    ]
  },
  "2WNN11": { //r
    "code" : "2WNN11",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is focused and won't let you get escape.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2WNN09"],
      ["Ball", "2WNN10"]
    ]
  },
  "2WNN09": { //f1
    "code" : "2WNN09",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Ninjask severely weakens it and it retaliates with a crunch that KOs. You send out Whiscash. ",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2WNN12"],
      ["Ball", "2WHN01"],
      ["Run", "2WNN13"]
    ]
  },
  "2WNN10": { //b1
    "code" : "2WNN10",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You throw an Ultra Ball but Houndoom is too agile and moves out of the way before KO-ing Ninjask with a crunch. You send out Whiscash.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2WNN12"],
      ["Ball", "2WHN01"],
      ["Run", "2WNN13"]
    ]
  },
  "2WNN13": { //r2 -> frozen
    "code" : "2WNN13",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is as focused as ever, you try and run, forgetting your Whiscash and letting it be KOed.",
    "text2" : "You escaped the Houndoom, but with only Shedinja at your side, who'll easily faint long before you get back, you're at a loss for hope. You fall down at a nearby cave entrance as the cold slowly gets to you...  and you freeze.",
    "opt" : [
      ["Continue", "E-FROZ"]
    ]
  },
  "2WNN12": { //f2
    "code" : "2WNN12",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Whiscash easily lands a water pulse and Houndoom Faints. Shame, it would've been a strong ally.",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "2WNN14"]
    ]
  },
  "2WHN01": { //b2
    "code" : "2WHN01",
    "ballNum" : 4,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You adjust your aim and throw an Ultra Ball...  1...  2...  3...  Congratulations! You caught a Houndoom! Your Nincada should've evolved by now, right?",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "2WHN02"]
    ]
  },
  "2WNN14": { //no houndoom
    "code" : "2WNN14",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words...",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "2WNG01"],
      ["Walk away", "2WNN15"]
    ]
  },
  "2WNG01": { //fight
    "code" : "2WNG01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your final Pokémon manages to finish off Gold's Machamp; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "2WNG02"]
    ]
  },
  "2WNN15": { //leave
    "code" : "2WNN15",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "2WNN16"]
    ]
  },
  "2WHN02": { //yes houndoom
    "code" : "2WHN02",
    "ballNum" : 4,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "2WHG01"],
      ["Walk away", "2WHN03"]
    ]
  },
  "2WHG01": { //fight
    "code" : "2WHG01",
    "ballNum" : 4,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your final Pokémon manages to finish off Gold's Machamp; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "2WHG02"]
    ]
  },
  "2WHN03": { //leave
    "code" : "2WHN03",
    "ballNum" : 4,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "2WHN04"]
    ]
  },

  //ditto
  "3WNN08": { //houndoom
    "code" : "3WNN08",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Mt silver is home to some of the rarest and more powerful Pokémon. As you climb to the peak, a Houndoom jumps out at you.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3WNN09"],
      ["Ball", "3WNN10"],
      ["Run", "3WNN11"]
    ]
  },
  "3WNN11": { //r
    "code" : "3WNN11",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is focused and won't let you get escape.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3WNN09"],
      ["Ball", "3WNN10"]
    ]
  },
  "3WNN09": { //f1
    "code" : "3WNN09",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Ditto severely weakens it and it retaliates with a crunch that KOs. You send out Whiscash. ",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3WNN12"],
      ["Ball", "3WHN01"],
      ["Run", "3WNN13"]
    ]
  },
  "3WNN10": { //b1
    "code" : "3WNN10",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You throw an Ultra Ball but Houndoom is too agile and moves out of the way before KO-ing Ditto with a crunch. You send out Whiscash.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3WNN12"],
      ["Ball", "3WHN01"],
      ["Run", "3WNN13"]
    ]
  },
  "3WNN13": { //r2 -> frozen
    "code" : "3WNN13",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is as focused as ever, you try and run, forgetting your Whiscash and letting it be KOed.",
    "text2" : "You escaped the Houndoom, but with no Pokémon you're at a loss for hope. You fall down at a nearby cave entrance as the cold slowly gets to you...  and you freeze.",
    "opt" : [
      ["Continue", "E-FROZ"]
    ]
  },
  "3WNN12": { //f2
    "code" : "3WNN12",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Whiscash easily lands a water pulse and Houndoom Faints. Shame, it would've been a strong ally.",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "3WNN14"]
    ]
  },
  "3WHN01": { //b2
    "code" : "3WHN01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You adjust your aim and throw an Ultra Ball...  1...  2...  3...  Congratulations! You caught a Houndoom!",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "3WHN02"]
    ]
  },
  "3WNN14": { //no houndoom
    "code" : "3WNN14",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "3WNG01"],
      ["Walk away", "3WNN15"]
    ]
  },
  "3WNG01": { //fight
    "code" : "3WNG01",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your final Pokémon manages to finish off Gold's Machamp; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "3WNG02"]
    ]
  },
  "3WNN15": { //leave
    "code" : "3WNN15",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "3WNN16"]
    ]
  },
  "3WHN02": { //yes houndoom
    "code" : "3WHN02",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "3WHG01"],
      ["Walk away", "3WHN03"]
    ]
  },
  "3WHG01": { //fight
    "code" : "3WHG01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your final Pokémon manages to finish off Gold's Machamp; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "3WHG02"]
    ]
  },
  "3WHN03": { //leave
    "code" : "3WHN03",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "3WHN04"]
    ]
  },


  // -- MOUNT SILVER NO WHISCASH --


  //sobble
  "1NNN27": { //houndoom
    "code" : "1NNN27",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Mt silver is home to some of the rarest and more powerful Pokémon. As you climb to the peak, a Houndoom jumps out at you.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN28"],
      ["Ball", "1NNN29"],
      ["Run", "1NNN30"]
    ]
  },
  "1NNN30": { //r
    "code" : "1NNN30",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is focused and won't let you get escape.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN28"],
      ["Ball", "1NNN29"]
    ]
  },
  "1NNN28": { //f1
    "code" : "1NNN28",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Sobble severely weakens Houndoom and it retaliates with a howl to boost its attack. End the fight before it's too late. ",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN31"],
      ["Ball", "1NHN01"],
      ["Run", "1NNN32"]
    ]
  },
  "1NNN29": { //b1
    "code" : "1NNN29",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You throw an Ultra Ball but Houndoom is too agile and moves out of the way before missing a deadly thunder fang.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN31"],
      ["Ball", "1NHN01"],
      ["Run", "1NNN32"]
    ]
  },
  "1NNN32": { //r2 -> frozen
    "code" : "1NNN32",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is as focused as ever, you try and run, forgetting your Sobble and letting it be KOed.",
    "text2" : "You escaped the Houndoom, but with no Pokémon you're at a loss for hope. You fall down at a nearby cave entrance as the cold slowly gets to you...  and you freeze.",
    "opt" : [
      ["Continue", "E-FROZ"]
    ]
  },
  "1NNN31": { //f2
    "code" : "1NNN31",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Sobble easily lands a water pulse and Houndoom Faints. Shame, it would've been a strong ally.",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "1NNN33"]
    ]
  },
  "1NHN01": { //b2
    "code" : "1NHN01",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You adjust your aim and throw an Ultra Ball...  1...  2...  3...  Congratulations! You caught a Houndoom!",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "1NHN02"]
    ]
  },
  "1NNN33": { //no houndoom
    "code" : "1NNN33",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "1NNG01"],
      ["Walk away", "1NNN34"]
    ]
  },
  "1NNG01": { //fight
    "code" : "1NNG01",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Sobble manages to finish off Gold's Machamp, evolving it into a Drizzile; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "1NNG02"]
    ]
  },
  "1NNN34": { //leave
    "code" : "1NNN34",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "1NNN35"]
    ]
  },
  "1NHN02": { //yes houndoom
    "code" : "1NHN02",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "1NHG01"],
      ["Walk away", "1NHN03"]
    ]
  },
  "1NHG01": { //fight
    "code" : "1NHG01",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Sobble manages to finish off Gold's Machamp, evolving it into an Drizzile; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "1NHG02"]
    ]
  },
  "1NHN03": { //leave
    "code" : "1NHN03",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "1NHN04"]
    ]
  },

  //nincada
  "2NNN28": { //houndoom
    "code" : "2NNN28",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Mt silver is home to some of the rarest and more powerful Pokémon. As you climb to the peak, a Houndoom jumps out at you.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN29"],
      ["Ball", "2NNN30"],
      ["Run", "2NNN31"]
    ]
  },
  "2NNN31": { //r
    "code" : "2NNN31",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is focused and won't let you get escape.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN29"],
      ["Ball", "2NNN30"]
    ]
  },
  "2NNN29": { //f1
    "code" : "2NNN29",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Nincada severely weakens it and it retaliates with a thunder fang - thank god you're immune.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN32"],
      ["Ball", "2NHN01"],
      ["Run", "2NNN33"]
    ]
  },
  "2NNN30": { //b1
    "code" : "2NNN30",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You throw an Ultra Ball but Houndoom is too agile and moves out of the way before howling to boost its attack. You feel the tension rise.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN32"],
      ["Ball", "2NHN01"],
      ["Run", "2NNN33"]
    ]
  },
  "2NNN33": { //r2 -> frozen
    "code" : "2NNN33",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is as focused as ever, you try and run, forgetting your Nincada and letting it be KOed.",
    "text2" : "You escaped the Houndoom, but with no Pokémon you're at a loss for hope. You fall down at a nearby cave entrance as the cold slowly gets to you...  and you freeze.",
    "opt" : [
      ["Continue", "E-FROZ"]
    ]
  },
  "2NNN32": { //f2
    "code" : "2NNN32",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Nincada puts all its might into a dig and Houndoom Faints. Shame, it would've been a strong ally.",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "2NNN34"]
    ]
  },
  "2NHN01": { //b2
    "code" : "2NHN01",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You adjust your aim and throw an Ultra Ball...  1...  2...  3...  Congratulations! You caught a Houndoom! Your Nincada should've evolved by now, right?",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "2NHN02"]
    ]
  },
  "2NNN34": { //no houndoom
    "code" : "2NNN34",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words...",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "2NNG01"],
      ["Walk away", "2NNN35"]
    ]
  },
  "2NNG01": { //fight
    "code" : "2NNG01",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Nincada manages to finish off Gold's Machamp, causing it to evolve into a Ninjask and a Shedinja; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "2NNG02"]
    ]
  },
  "2NNN35": { //leave
    "code" : "2NNN35",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "2NNN36"]
    ]
  },
  "2NHN02": { //yes houndoom
    "code" : "2NHN02",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "2NHG01"],
      ["Walk away", "2NHN03"]
    ]
  },
  "2NHG01": { //fight
    "code" : "2NHG01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Nincada manages to finish off Gold's Machamp, causing it to evolve into a Ninjask and a Shedinja; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "2NHG02"]
    ]
  },
  "2NHN03": { //leave
    "code" : "2NHN03",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "2NHN04"]
    ]
  },

  //ditto
  "3NNN27": { //houndoom
    "code" : "3NNN27",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Mt silver is home to some of the rarest and more powerful Pokémon. As you climb to the peak, a Houndoom jumps out at you.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN28"],
      ["Ball", "3NNN29"],
      ["Run", "3NNN30"]
    ]
  },
  "3NNN30": { //r
    "code" : "3NNN30",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is focused and won't let you get escape.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN28"],
      ["Ball", "3NNN29"]
    ]
  },
  "3NNN28": { //f1
    "code" : "3NNN28",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "Ditto severely weakens it and it retaliates with a resisted flamethrower.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN31"],
      ["Ball", "3NHN01"],
      ["Run", "3NNN32"]
    ]
  },
  "3NNN29": { //b1
    "code" : "3NNN29",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You throw an Ultra Ball but Houndoom is too agile and moves out of the way, it tries to attack Ditto but is uncoordinated and misses.",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN31"],
      ["Ball", "3NHN01"],
      ["Run", "3NNN32"]
    ]
  },
  "3NNN32": { //r2 -> frozen
    "code" : "3NNN32",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "The Houndoom is as focused as ever, you try and run, forgetting your Ditto and letting it be KOed.",
    "text2" : "You escaped the Houndoom, but with no Pokémon you're at a loss for hope. You fall down at a nearby cave entrance as the cold slowly gets to you...  and you freeze.",
    "opt" : [
      ["Continue", "E-FROZ"]
    ]
  },
  "3NNN31": { //f2
    "code" : "3NNN31",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You command Ditto to use thunder fang and Houndoom Faints. Shame, it would've been a strong ally.",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "3NNN33"]
    ]
  },
  "3NHN01": { //b2
    "code" : "3NHN01",
    "ballNum" : 3,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You adjust your aim and throw an Ultra Ball...  1...  2...  3...  Congratulations! You caught a Houndoom!",
    "text2" : "As you reach the summit you see a silhouette through the blizzard..",
    "opt" : [
      ["Continue", "3NHN02"]
    ]
  },
  "3NNN33": { //no houndoom
    "code" : "3NNN33",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "3NNG01"],
      ["Walk away", "3NNN34"]
    ]
  },
  "3NNG01": { //fight
    "code" : "3NNG01",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Ditto manages to finish off Gold's Machamp; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "3NNG02"]
    ]
  },
  "3NNN34": { //leave
    "code" : "3NNN34",
    "ballNum" : 1,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "3NNN35"]
    ]
  },
  "3NHN02": { //yes houndoom
    "code" : "3NHN02",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You encounter a trainer who looks used to his surroundings, yet out of place at the same time. You only have a decade old description to go off of, but you're confident you're face to face with the legendary Gold, and the look he gives you tells you he's not one for words..",
    "text2" : "It says leave, or fight.",
    "opt" : [
      ["Fight", "3NHG01"],
      ["Walk away", "3NHN03"]
    ]
  },
  "3NHG01": { //fight
    "code" : "3NHG01",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "You feel like you're wittling away at a brick wall, blows dealt left and right to little avail. At last second, your Ditto manages to finish off Gold's Machamp; he has a look in his eyes of.. surprise? Pride? Satisfaction? You can't quite tell but nevertehless the battle is over and your loss is indubitable.",
    "text2" : "He graciously heals your party but you know it's for the sole purpose of you getting back safely, without him. As you depart Gold looks at you as if to say 'You're ready for him'.",
    "opt" : [
      ["Leave", "3NHG02"]
    ]
  },
  "3NHN03": { //leave
    "code" : "3NHN03",
    "ballNum" : 2,
    "area" : "Mount Silver",
    "image" : null,
    "text1" : "It feels wrong to turn back now, but you can tell there's no convincing him except to do the impossible.",
    "text2" : "You put your faith in Lance, after all, you have to.",
    "opt" : [
      ["Continue", "3NHN04"]
    ]
  },


// -- HQ INTERMISSION --
  //--ALL WHISCASH

  //sobble
  "1WHG02": { //houndoom gold
    "code" : "1WHG02",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1WHG03"]
    ]
  },
  "1WHN04": { //houndoom 
    "code" : "1WHN04",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1WHN05"]
    ]
  },
  "1WNG02": { //gold
    "code" : "1WNG02",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1WNG03"]
    ]
  },
  "1WNN16": { //none
    "code" : "1WNN16",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1WNN17"]
    ]
  },

  //nincada
  "2WHG02": { //houndoom gold
    "code" : "2WHG02",
    "ballNum" : 4,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2WHG03"]
    ]
  },
  "2WHN04": { //houndoom 
    "code" : "2WHN04",
    "ballNum" : 4,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2WHN05"]
    ]
  },
  "2WNG02": { //gold
    "code" : "2WNG02",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2WNG03"]
    ]
  },
  "2WNN16": { //none
    "code" : "2WNN16",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2WNN17"]
    ]
  },

  //ditto
  "3WHG02": { //houndoom gold
    "code" : "3WHG02",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3WHG03"]
    ]
  },
  "3WHN04": { //houndoom 
    "code" : "3WHN04",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3WHN05"]
    ]
  },
  "3WNG02": { //gold
    "code" : "3WNG02",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3WNG03"]
    ]
  },
  "3WNN16": { //none
    "code" : "3WNN16",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3WNN17"]
    ]
  },

  //--NO WHISCASH

  //sobble
  "1NHG02": { //houndoom gold
    "code" : "1NHG02",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1NHG03"]
    ]
  },
  "1NHN04": { //houndoom 
    "code" : "1NHN04",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1NHN05"]
    ]
  },
  "1NNG02": { //gold
    "code" : "1NNG02",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1NNG03"]
    ]
  },
  "1NNN35": { //none
    "code" : "1NNN35",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "1NNN36"]
    ]
  },

  //nincada
  "2NHG02": { //houndoom gold
    "code" : "2NHG02",
    "ballNum" : 3,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2NHG03"]
    ]
  },
  "2NHN04": { //houndoom 
    "code" : "2NHN04",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2NHN05"]
    ]
  },
  "2NNG02": { //gold
    "code" : "2NNG02",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2NNG03"]
    ]
  },
  "2NNN36": { //none
    "code" : "2NNN36",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "2NNN37"]
    ]
  },

  //ditto
  "3NHG02": { //houndoom gold
    "code" : "3NHG02",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3NHG03"]
    ]
  },
  "3NHN04": { //houndoom 
    "code" : "3NHN04",
    "ballNum" : 2,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3NHN05"]
    ]
  },
  "3NNG02": { //gold
    "code" : "3NNG02",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks—you just lost to the one supposed to save us—but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3NNG03"]
    ]
  },
  "3NNN35": { //none
    "code" : "3NNN35",
    "ballNum" : 1,
    "area" : "Wailord",
    "image" : null,
    "text1" : "Returning to Wailord, you can't shake off a sense of hopelessness. One no lessened by Sarge who informs you that Red hasn't been found anywhere in Kanto or even Johto. Reluctanty, you recall your time on Mount Silver; leading Sarge to a halt before turning to you and bluntly stating: 'We don't know who's heading for the Indigo Plateau, but if Lance cannot stop him, YOU must defeat them or we are all lost.'",
    "text2" : "No fibre in you thinks you can do what he asks, but the glimour in Sarge's eyes speaks that he believes in you. For that, you have to try.",
    "opt" : [
      ["Set off", "3NNN36"]
    ]
  },


// -- INDIGO PLATEAU -- 
  //--WITHOUT HOUNDOOM

  //sobble none
  "1NNN36": { 
    "code" : "1NNN36",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1NNN37"],
      ["Continue", "1NNN38"]
    ]
  },
  "1NNN37": { //hiders ending
    "code" : "1NNN37",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Sobble at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1NNN38": { 
    "code" : "1NNN38",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Sobble", "1NNN39"]
    ]
  },
  "1NNN39": { //battle
    "code" : "1NNN39",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni's old age has lost his once cold demeanor as he cackles 'Is THAT ALL you have!? One Sobble, not even evolved. What kind of fool are you. Surrender now.. or prepare to die.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNN40"],
      ["Surrender", "1NNN41"]
    ]
  },
  "1NNN40": { //f - armageddon ending
    "code" : "1NNN40",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Sobble falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "1NNN41": { //hider ending
    "code" : "1NNN41",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Sobble and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Sobble as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //nincada none
  "2NNN37": { 
    "code" : "2NNN37",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2NNN38"],
      ["Continue", "2NNN39"]
    ]
  },
  "2NNN38": { //hiders ending
    "code" : "2NNN38",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Nincada at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2NNN39": { 
    "code" : "2NNN39",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Nincada", "2NNN40"]
    ]
  },
  "2NNN40": { //battle
    "code" : "2NNN40",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni's old age has lost his once cold demeanor as he cackles 'Is THAT ALL you have!? One Nincada, not even evolved. What kind of fool are you. Surrender now.. or prepare to die.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "2NNN41"],
      ["Surrender", "2NNN42"]
    ]
  },
  "2NNN41": { //f - armageddon ending
    "code" : "2NNN41",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Nincada falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "2NNN42": { //hider ending
    "code" : "2NNN42",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Nincada and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Nincada as your only company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //ditto none
  "3NNN36": { 
    "code" : "3NNN36",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3NNN37"],
      ["Continue", "3NNN38"]
    ]
  },
  "3NNN37": { //hiders ending
    "code" : "3NNN37",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with sobble at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3NNN38": { 
    "code" : "3NNN38",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Ditto", "3NNN39"]
    ]
  },
  "3NNN39": { //battle
    "code" : "3NNN39",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni's old age has lost his once cold demeanor as he cackles 'Is THAT ALL you have!? One Ditto, how weak. What kind of fool are you. Surrender now.. or prepare to die.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNN40"],
      ["Surrender", "3NNN41"]
    ]
  },
  "3NNN40": { //f - armageddon ending
    "code" : "3NNN40",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Ditto falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "3NNN41": { //hider ending
    "code" : "3NNN41",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //sobble gold
  "1NNG03": { 
    "code" : "1NNG03",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1NNG04"],
      ["Continue", "1NNG05"]
    ]
  },
  "1NNG04": { //hiders ending
    "code" : "1NNG04",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with sobble at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1NNG05": { 
    "code" : "1NNG05",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Drizzile", "1NNG06"]
    ]
  },
  "1NNG06": { //battle
    "code" : "1NNG06",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni's old age has lost his once cold demeanor as he cackles 'Is THAT ALL you have!? One Drizzile, not even fully evolved. What kind of fool are you. Surrender now.. or prepare to die.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "1NNG07"],
      ["Surrender", "1NNG08"]
    ]
  },
  "1NNG07": { //f - armageddon ending
    "code" : "1NNG07",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Drizzile falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "1NNG08": { //hider ending
    "code" : "1NNG08",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Drizzile and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Drizzile as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //nincada gold
  "2NNG03": { 
    "code" : "2NNG03",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2NNG04"],
      ["Continue", "2NNG05"]
    ]
  },
  "2NNG04": { //hiders ending
    "code" : "2NNG04",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with sobble at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2NNG05": { 
    "code" : "2NNG05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Ninjask", "2NNG06"]
    ]
  },
  "2NNG06": { //battle
    "code" : "2NNG06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni declares 'Ninjask? It's a battle of speedsters then.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2NNG07"],
      ["Use acrobatics", "2NNG07"],
      ["Surrender", "2NNG08"]
    ]
  },
  "2NNG08": { //s
    "code" : "2NNG08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You still have some hope in you. You have to fight.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2NNG07"],
      ["Use acrobatics", "2NNG07"]
    ]
  },
  "2NNG07": { 
    "code" : "2NNG07",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You deal half the Persian's hp. 'I expected so much more.'",
    "text2" : "Persian retaliates with a power gem that ends your Ninjask.",
    "opt" : [
      ["Send out Shedinja", "2NNG10"]
    ]
  },
  "2NNG10": { //shed
    "code" : "2NNG10",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "2NNG11"],
      ["Surrender", "2NNG12"]
    ]
  },
  "2NNG11": { //f
    "code" : "2NNG11",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Fine, have it your way..'",
    "text2" : "Another power gem comes your way, gemstones piercing through Shedinja before you can react. It falls to the ground, now more of a husk than it ever was...",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "2NNG12": { //hider ending
    "code" : "2NNG12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Shedinja and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Shedinja as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //ditto gold
  "3NNG03": { 
    "code" : "3NNG03",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3NNG04"],
      ["Continue", "3NNG05"]
    ]
  },
  "3NNG04": { //hiders ending
    "code" : "3NNG04",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with sobble at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3NNG05": { 
    "code" : "3NNG05",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Ditto", "3NNG06"]
    ]
  },
  "3NNG06": { //battle
    "code" : "3NNG06",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni's old age has lost his once cold demeanor as he cackles 'Is THAT ALL you have!? One Ditto, how weak. What kind of fool are you. Surrender now.. or prepare to die.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Fight", "3NNG07"],
      ["Surrender", "3NNG08"]
    ]
  },
  "3NNG07": { //f - armageddon ending
    "code" : "3NNG07",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Ditto falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "3NNG08": { //hider ending
    "code" : "3NNG08",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //sobble whiscash
  "1WNN17": { 
    "code" : "1WNN17",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1WNN18"],
      ["Continue", "1WNN19"]
    ]
  },
  "1WNN18": { //hiders ending
    "code" : "1WNN18",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Drizzile and Whiscash at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1WNN19": { 
    "code" : "1WNN19",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Whiscash", "1WNN20"]
    ]
  },
  "1WNN20": { //battle
    "code" : "1WNN20",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast. 'A Whiscash I see. Not bad but, not the best.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "1WNN21"],
      ["Use amnesia", "1WNN22"]
    ]
  },
  "1WNN21": { //water pulse
    "code" : "1WNN21",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your water pulse deals a third of its hp, but it doesn't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Drizzile", "1WNN23"]
    ]
  },
  "1WNN22": { //amnesia
    "code" : "1WNN22",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your amnesia boosts Whiscash's special defense, but something tells me it won't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Drizzile", "1WNN23"]
    ]
  },
  "1WNN23": { //drizzile
    "code" : "1WNN23",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Drizzile hits the field. 'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "1WNN24"],
      ["Surrender", "1WNN25"]
    ]
  },
  "1WNN24": { //f - armageddon ending
    "code" : "1WNN24",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Drizzile falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "1WNN25": { //hider ending
    "code" : "1WNN25",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Drizzile and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Drizzile as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //nincada whiscash
  "2WNN17": { 
    "code" : "2WNN17",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2WNN18"],
      ["Continue", "2WNN19"]
    ]
  },
  "2WNN18": { //hiders ending
    "code" : "2WNN18",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your Pokémon at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2WNN19": { 
    "code" : "2WNN19",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Whiscash", "2WNN20"]
    ]
  },
  "2WNN20": { //battle
    "code" : "2WNN20",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast. 'A Whiscash I see. Not bad but, not the best.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "2WNN21"],
      ["Use amnesia", "2WNN22"]
    ]
  },
  "2WNN21": { //water pulse
    "code" : "2WNN21",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your water pulse deals a third of its hp, but it doesn't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ninjask", "2WNN23"]
    ]
  },
  "2WNN22": { //amnesia
    "code" : "2WNN22",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your amnesia boosts Whiscash's special defense, but something tells me it won't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ninjask", "2WNN23"]
    ]
  },
  "2WNN23": { //battle
    "code" : "2WNN23",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni declares 'Ninjask? It's a battle of speedsters then.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2WNN24"],
      ["Use acrobatics", "2WNN24"],
      ["Surrender", "2WNN25"]
    ]
  },
  "2WNN25": { //s
    "code" : "2WNN25",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You still have some hope in you. You have to fight.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2WNN24"],
      ["Use acrobatics", "2NNG24"]
    ]
  },
  "2WNN24": { 
    "code" : "2WNN24",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You deal half the Persian's hp. 'I expected so much more.'",
    "text2" : "Persian retaliates with a power gem that ends your Ninjask.",
    "opt" : [
      ["Send out Shedinja", "2WNN26"]
    ]
  },
  "2WNN26": { //shed
    "code" : "2WNN26",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "2WNN27"],
      ["Surrender", "2WNN28"]
    ]
  },
  "2WNN27": { //f
    "code" : "2WNN27",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Fine, have it your way..'",
    "text2" : "Another power gem comes your way, gemstones piercing through Shedinja before you can react. It falls to the ground, now more of a husk than it ever was...",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "2WNN28": { //hider ending
    "code" : "2WNN28",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Shedinja and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Shedinja as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  
  //ditto whiscash
  "3WNN17": { 
    "code" : "3WNN17",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3WNN18"],
      ["Continue", "3WNN19"]
    ]
  },
  "3WNN18": { //hiders ending
    "code" : "3WNN18",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Ditto and Whiscash at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3WNN19": { 
    "code" : "3WNN19",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Whiscash", "3WNN20"]
    ]
  },
  "3WNN20": { //battle
    "code" : "3WNN20",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast. 'A Whiscash I see. Not bad but, not the best.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "3WNN21"],
      ["Use amnesia", "3WNN22"]
    ]
  },
  "3WNN21": { //water pulse
    "code" : "3WNN21",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your water pulse deals a third of its hp, but it doesn't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ditto", "3WNN23"]
    ]
  },
  "3WNN22": { //amnesia
    "code" : "3WNN22",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your amnesia boosts Whiscash's special defense, but something tells me it won't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ditto", "3WNN23"]
    ]
  },
  "3WNN23": { //ditto
    "code" : "3WNN23",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Ditto hits the field. 'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "3WNN24"],
      ["Surrender", "3WNN25"]
    ]
  },
  "3WNN24": { //f - armageddon ending
    "code" : "3WNN24",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Ditto falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "3WNN25": { //hider ending
    "code" : "3WNN25",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //sobble whiscash gold
  "1WNG03": { 
    "code" : "1WNG03",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1WNG04"],
      ["Continue", "1WNG05"]
    ]
  },
  "1WNG04": { //hiders ending
    "code" : "1WNG04",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Inteleon and Whiscash at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1WNG05": { 
    "code" : "1WNG05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Whiscash", "1WNG06"]
    ]
  },
  "1WNG06": { //battle
    "code" : "1WNG06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast. 'A Whiscash I see. Not bad but, not the best.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "1WNG07"],
      ["Use amnesia", "1WNG08"]
    ]
  },
  "1WNG07": { //water pulse
    "code" : "1WNG07",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your water pulse deals a third of its hp, but it doesn't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Inteleon", "1WNG09"]
    ]
  },
  "1WNG08": { //amnesia
    "code" : "1WNG08",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your amnesia boosts Whiscash's special defense, but something tells me it won't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Inteleon", "1WNG09"]
    ]
  },
  "1WNG09": { //inteleon
    "code" : "1WNG09",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Inteleon hits the field. 'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "1WNG10"],
      ["Surrender", "1WNG11"]
    ]
  },
  "1WNG10": { //f - armageddon ending
    "code" : "1WNG10",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Inteleon falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "1WNG11": { //hider ending
    "code" : "1WNG11",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Inteleon and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Inteleon as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //nincada whiscash
  "2WNG03": { 
    "code" : "2WNG03",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2WNG04"],
      ["Continue", "2WNG05"]
    ]
  },
  "2WNG04": { //hiders ending
    "code" : "2WNG04",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your Pokémon at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2WNG05": { 
    "code" : "2WNG05",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Whiscash", "2WNG06"]
    ]
  },
  "2WNG06": { //battle
    "code" : "2WNG06",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast. 'A Whiscash I see. Not bad but, not the best.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "2WNG07"],
      ["Use amnesia", "2WNG08"]
    ]
  },
  "2WNG07": { //water pulse
    "code" : "2WNG07",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your water pulse deals a third of its hp, but it doesn't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ninjask", "2WNG09"]
    ]
  },
  "2WNG08": { //amnesia
    "code" : "2WNG08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your amnesia boosts Whiscash's special defense, but something tells me it won't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ninjask", "2WNG09"]
    ]
  },
  "2WNG09": { //battle
    "code" : "2WNG09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni declares 'Ninjask? It's a battle of speedsters then.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2WNG10"],
      ["Use acrobatics", "2WNG10"],
      ["Surrender", "2WNG11"]
    ]
  },
  "2WNG11": { //s
    "code" : "2WNG11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You still have some hope in you. You have to fight.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2WNG10"],
      ["Use acrobatics", "2NNG10"]
    ]
  },
  "2WNG10": { 
    "code" : "2WNG10",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You deal half the Persian's hp. 'I expected so much more.'",
    "text2" : "Persian retaliates with a power gem that ends your Ninjask.",
    "opt" : [
      ["Send out Shedinja", "2WNG12"]
    ]
  },
  "2WNG12": { //shed
    "code" : "2WNG12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "2WNG13"],
      ["Surrender", "2WNG14"]
    ]
  },
  "2WNG13": { //f
    "code" : "2WNG13",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Fine, have it your way..'",
    "text2" : "Another power gem comes your way, gemstones piercing through Shedinja before you can react. It falls to the ground, now more of a husk than it ever was...",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "2WNG14": { //hider ending
    "code" : "2WNG14",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Shedinja and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Shedinja as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  
  //ditto whiscash
  "3WNG03": { 
    "code" : "3WNG03",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3WNG04"],
      ["Continue", "3WNG05"]
    ]
  },
  "3WNG04": { //hiders ending
    "code" : "3WNG04",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Ditto and Whiscash at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3WNG05": { 
    "code" : "3WNG05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Whiscash", "3WNG06"]
    ]
  },
  "3WNG06": { //battle
    "code" : "3WNG06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast. 'A Whiscash I see. Not bad but, not the best.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "3WNG07"],
      ["Use amnesia", "3WNG08"]
    ]
  },
  "3WNG07": { //water pulse
    "code" : "3WNG07",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your water pulse deals a third of its hp, but it doesn't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ditto", "3WNG09"]
    ]
  },
  "3WNG08": { //amnesia
    "code" : "3WNG08",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Before you can act, a slash connects on Whiscash, severly weakening it. Your amnesia boosts Whiscash's special defense, but something tells me it won't matter.. Whiscash falls to a second slash.",
    "text2" : null,
    "opt" : [
      ["Send out Ditto", "3WNG09"]
    ]
  },
  "3WNG09": { //ditto
    "code" : "3WNG09",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Ditto hits the field. 'Down to your last Pokémon, eh? What a pushover. Run while I still let you.'",
    "text2" : null,
    "opt" : [
      ["Fight", "3WNG10"],
      ["Surrender", "3WNG11"]
    ]
  },
  "3WNG10": { //f - armageddon ending
    "code" : "3WNG10",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Persian. Slash.'",
    "text2" : "...Ditto falls.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  "3WNG11": { //hider ending
    "code" : "3WNG11",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'GO, FOOL! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },

  //--WITH HOUNDOOM

  //sobble houndoom
  "1NHN05": { 
    "code" : "1NHN05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1NHN06"],
      ["Continue", "1NHN07"]
    ]
  },
  "1NHN06": { //hiders ending
    "code" : "1NHN06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Sobble and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1NHN07": { 
    "code" : "1NHN07",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "1NHN08"]
    ]
  },
  "1NHN08": { 
    "code" : "1NHN08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "1NHN09"],
      ["Use will-o-wisp", "1NHN11"]
    ]
  },
  "1NHN09": { //flamethrower 
    "code" : "1NHN09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1NHN12"],
      ["Use will-o-wisp", "1NHN13"],
      ["Use flamethrower", "1NHN14"]
    ]
  },
  "1NHN11": { //willowisp
    "code" : "1NHN11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1NHN12"],
      ["Use will-o-wisp", "1NHN13"],
      ["Use flamethrower", "1NHN14"]
    ]
  },
  "1NHN12": { //rhy crunch
    "code" : "1NHN12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Sobble", "1NHN15"]
    ]
  },
  "1NHN13": { //rhy willowisp
    "code" : "1NHN13",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Sobble", "1NHN15"]
    ]
  },
  "1NHN14": { //rhy flamethrower
    "code" : "1NHN14",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Sobble", "1NHN15"]
    ]
  },
  "1NHN15": { //sobble
    "code" : "1NHN15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! You should've given up before you even arrived. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "1NHN16"],
      ["Fight on", "1NHN17"]
    ]
  },
  "1NHN16": { //hider ending
    "code" : "1NHN16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Sobble and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Sobble as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1NHN17": { //f
    "code" : "1NHN17",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Sobble - your pal from the start - and command it to use water pulse...   but it never got the chance to.",
    "text2" : "Rhydon rips it apart with a stone edge.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  
  //nincada houndoom
  "2NHN05": { 
    "code" : "2NHN05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2NHN06"],
      ["Continue", "2NHN07"]
    ]
  },
  "2NHN06": { //hiders ending
    "code" : "2NHN06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Nincada and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2NHN07": { 
    "code" : "2NHN07",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "2NHN08"]
    ]
  },
  "2NHN08": { 
    "code" : "2NHN08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "2NHN09"],
      ["Use will-o-wisp", "2NHN11"]
    ]
  },
  "2NHN09": { //flamethrower 
    "code" : "2NHN09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2NHN12"],
      ["Use will-o-wisp", "2NHN13"],
      ["Use flamethrower", "2NHN14"]
    ]
  },
  "2NHN11": { //willowisp
    "code" : "2NHN11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2NHN12"],
      ["Use will-o-wisp", "2NHN13"],
      ["Use flamethrower", "2NHN14"]
    ]
  },
  "2NHN12": { //rhy crunch
    "code" : "2NHN12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Nincada", "2NHN15"]
    ]
  },
  "2NHN13": { //rhy willowisp
    "code" : "2NHN13",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Nincada", "2NHN15"]
    ]
  },
  "2NHN14": { //rhy flamethrower
    "code" : "2NHN14",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Nincada", "2NHN15"]
    ]
  },
  "2NHN15": { //Nincada
    "code" : "2NHN15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! You should've given up before you even arrived. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "2NHN16"],
      ["Fight on", "2NHN17"]
    ]
  },
  "2NHN16": { //hider ending
    "code" : "2NHN16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Nincada and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Nincada as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2NHN17": { //f
    "code" : "2NHN17",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Nincada - your pal from the start - and command it to use dig...   but it never got the chance to.",
    "text2" : "Rhydon rips it apart with a stone edge.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //ditto houndoom
  "3NHN05": { 
    "code" : "3NHN05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3NHN06"],
      ["Continue", "3NHN07"]
    ]
  },
  "3NHN06": { //hiders ending
    "code" : "3NHN06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Ditto and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3NHN07": { 
    "code" : "3NHN07",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "3NHN08"]
    ]
  },
  "3NHN08": { 
    "code" : "3NHN08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "3NHN09"],
      ["Use will-o-wisp", "3NHN11"]
    ]
  },
  "3NHN09": { //flamethrower 
    "code" : "3NHN09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3NHN12"],
      ["Use will-o-wisp", "3NHN13"],
      ["Use flamethrower", "3NHN14"]
    ]
  },
  "3NHN11": { //willowisp
    "code" : "3NHN11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3NHN12"],
      ["Use will-o-wisp", "3NHN13"],
      ["Use flamethrower", "3NHN14"]
    ]
  },
  "3NHN12": { //rhy crunch
    "code" : "3NHN12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ditto", "3NHN15"]
    ]
  },
  "3NHN13": { //rhy willowisp
    "code" : "3NHN13",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ditto", "3NHN15"]
    ]
  },
  "3NHN14": { //rhy flamethrower
    "code" : "3NHN14",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ditto", "3NHN15"]
    ]
  },
  "3NHN15": { //sobble
    "code" : "3NHN15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! You should've given up before you even arrived. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "3NHN16"],
      ["Fight on", "3NHN17"]
    ]
  },
  "3NHN16": { //hider ending
    "code" : "3NHN16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3NHN17": { //f
    "code" : "3NHN17",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Ditto - your pal from the start - and command it to use transform...   but it never got the chance to.",
    "text2" : "Rhydon rips it apart with a stone edge.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //sobble houndoom gold
  "1NHG05": { 
    "code" : "1NHG05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1NHG06"],
      ["Continue", "1NHG07"]
    ]
  },
  "1NHG06": { //hiders ending
    "code" : "1NHG06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Drizzile and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1NHG07": { 
    "code" : "1NHG07",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "1NHG08"]
    ]
  },
  "1NHG08": { 
    "code" : "1NHG08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "1NHG09"],
      ["Use will-o-wisp", "1NHG11"]
    ]
  },
  "1NHG09": { //flamethrower 
    "code" : "1NHG09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1NHG12"],
      ["Use will-o-wisp", "1NHG13"],
      ["Use flamethrower", "1NHG14"]
    ]
  },
  "1NHG11": { //willowisp
    "code" : "1NHG11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1NHG12"],
      ["Use will-o-wisp", "1NHG13"],
      ["Use flamethrower", "1NHG14"]
    ]
  },
  "1NHG12": { //rhy crunch
    "code" : "1NHG12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Drizzile", "1NHG15"]
    ]
  },
  "1NHG13": { //rhy willowisp
    "code" : "1NHG13",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Drizzile", "1NHG15"]
    ]
  },
  "1NHG14": { //rhy flamethrower
    "code" : "1NHG14",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Drizzile", "1NHG15"]
    ]
  },
  "1NHG15": { //drizzile
    "code" : "1NHG15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! You should've given up before you even arrived. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "1NHG16"],
      ["Fight on", "1NHG17"]
    ]
  },
  "1NHG16": { //hider ending
    "code" : "1NHG16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Sobble and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Sobble as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1NHG17": { //f
    "code" : "1NHG17",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Sobble - your pal from the start - and command it to use water pulse...   but it never got the chance to.",
    "text2" : "Rhydon rips it apart with a stone edge.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },
  
  //nincada houndoom gold
  "2NHG05": { 
    "code" : "2NHG05",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2NHG06"],
      ["Continue", "2NHG07"]
    ]
  },
  "2NHG06": { //hiders ending
    "code" : "2NHG06",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your team by your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2NHG07": { 
    "code" : "2NHG07",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "2NHG08"]
    ]
  },
  "2NHG08": { 
    "code" : "2NHG08",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "2NHG09"],
      ["Use will-o-wisp", "2NHG11"]
    ]
  },
  "2NHG09": { //flamethrower 
    "code" : "2NHG09",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2NHG12"],
      ["Use will-o-wisp", "2NHG13"],
      ["Use flamethrower", "2NHG14"]
    ]
  },
  "2NHG11": { //willowisp
    "code" : "2NHG11",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2NHG12"],
      ["Use will-o-wisp", "2NHG13"],
      ["Use flamethrower", "2NHG14"]
    ]
  },
  "2NHG12": { //rhy crunch
    "code" : "2NHG12",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ninjask", "2NHG15"]
    ]
  },
  "2NHG13": { //rhy willowisp
    "code" : "2NHG13",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ninjask", "2NHG15"]
    ]
  },
  "2NHG14": { //rhy flamethrower
    "code" : "2NHG14",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ninjask", "2NHG15"]
    ]
  },
  "2NHG15": { //ninjask
    "code" : "2NHG15",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Ninjask hits the field, meeting Giovanni's snarky remarks. 'A Ninjask! A Pokémon entirley weak to Rhydon's rock-type attacks. Trivial.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use x-scissor", "2NHG16"],
      ["Use acrobatics", "2NHG16"],
      ["Use dig", "2NHG17"]
    ]
  },
  "2NHG16": { //first 2 options
    "code" : "2NHG16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Your move comes out, but it doesn't do nearly enough. A stone edge then completley destroys Ninjask.",
    "text2" : null,
    "opt" : [
      ["Send out shedinja", "2NHG18"]
    ]
  },
  "2NHG17": { //dig
    "code" : "2NHG17",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Your move comes out, it's super effective! But it still doesn't do nearly enough. A stone edge then completley destroys Ninjask.",
    "text2" : null,
    "opt" : [
      ["Send out shedinja", "2NHG18"]
    ]
  },
  "2NHG18": { //shed
    "code" : "2NHG18",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! It only has 1hp! You should've given up before you even arrived. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "2NHG19"],
      ["Fight on", "2NHG20"]
    ]
  },
  "2NHG19": { //hider ending
    "code" : "2NHG19",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Shedinja and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Shedinja as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2NHG20": { //f
    "code" : "2NHG20",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Shedinja - your pal from the start - its hp doesn't matter, it can only be hit by super effective moves...   Too bad Rhydon has one.",
    "text2" : "Rhydon rips it apart with a stone edge.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //ditto houndoom gold
  "3NHG05": { 
    "code" : "3NHG05",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3NHG06"],
      ["Continue", "3NHG07"]
    ]
  },
  "3NHG06": { //hiders ending
    "code" : "3NHG06",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Ditto and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3NHG07": { 
    "code" : "3NHG07",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "3NHG08"]
    ]
  },
  "3NHG08": { 
    "code" : "3NHG08",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "3NHG09"],
      ["Use will-o-wisp", "3NHG11"]
    ]
  },
  "3NHG09": { //flamethrower 
    "code" : "3NHG09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3NHG12"],
      ["Use will-o-wisp", "3NHG13"],
      ["Use flamethrower", "3NHG14"]
    ]
  },
  "3NHG11": { //willowisp
    "code" : "3NHG11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3NHG12"],
      ["Use will-o-wisp", "3NHG13"],
      ["Use flamethrower", "3NHG14"]
    ]
  },
  "3NHG12": { //rhy crunch
    "code" : "3NHG12",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ditto", "3NHG15"]
    ]
  },
  "3NHG13": { //rhy willowisp
    "code" : "3NHG13",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ditto", "3NHG15"]
    ]
  },
  "3NHG14": { //rhy flamethrower
    "code" : "3NHG14",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Ditto", "3NHG15"]
    ]
  },
  "3NHG15": { //sobble
    "code" : "3NHG15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! You should've given up before you even arrived. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "3NHG16"],
      ["Fight on", "3NHG17"]
    ]
  },
  "3NHG16": { //hider ending
    "code" : "3NHG16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3NHG17": { //f
    "code" : "3NHG17",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Ditto - your pal from the start - and command it to use transform...   but it never got the chance to.",
    "text2" : "Rhydon rips it apart with a stone edge.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //sobble whiscash houndoom 
  "1WHN05": { 
    "code" : "1WHN05",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1WHN06"],
      ["Continue", "1WHN07"]
    ]
  },
  "1WHN06": { //hiders ending
    "code" : "1WHN06",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your team at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1WHN07": { 
    "code" : "1WHN07",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "1WHN08"]
    ]
  },
  "1WHN08": { 
    "code" : "1WHN08",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "1WHN09"],
      ["Use will-o-wisp", "1WHN11"]
    ]
  },
  "1WHN09": { //flamethrower 
    "code" : "1WHN09",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1WHN12"],
      ["Use will-o-wisp", "1WHN13"],
      ["Use flamethrower", "1WHN14"]
    ]
  },
  "1WHN11": { //willowisp
    "code" : "1WHN11",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1WHN12"],
      ["Use will-o-wisp", "1WHN13"],
      ["Use flamethrower", "1WHN14"]
    ]
  },
  "1WHN12": { //rhy crunch
    "code" : "1WHN12",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "1WHN15"]
    ]
  },
  "1WHN13": { //rhy willowisp
    "code" : "1WHN13",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "1WHN15"]
    ]
  },
  "1WHN14": { //rhy flamethrower
    "code" : "1WHN14",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "1WHN15"]
    ]
  },
  "1WHN15": { //whiscash
    "code" : "1WHN15",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Whiscash hits the field. Giovanni has no words, as if you have the perfect counter.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "1WHN16"],
      ["Use earth power", "1WHN17"]
    ]
  },
  "1WHN16": { //water pulse
    "code" : "1WHN16",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that completely erodes the Rhydon. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "1WHN18"]
    ]
  },
  "1WHN17": { //earth power
    "code" : "1WHN17",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that blasts the Rhydon to pieces. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "1WHN18"]
    ]
  },
  "1WHN18": { //kang
    "code" : "1WHN18",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Kangaskhan! MEGA EVOLVEEEE'",
    "text2" : "Energy wraps over the kaiju as it transforms into Mega Kangaskhan. You stand in shock and maybe in awe, Giovanni taking full advantage and launching a giga impact to eviscerate Whiscash.",
    "opt" : [
      ["Send out Drizzile", "1WHN19"]
    ]
  },
  "1WHN19": { //drizzile
    "code" : "1WHN19",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! Making me waste my time with mega evolution. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "1WHN20"],
      ["Fight on", "1WHN21"]
    ]
  },
  "1WHN20": { //hider ending
    "code" : "1WHN20",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Drizzile and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Drizzile as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1WHN21": { //f
    "code" : "1WHN21",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Drizzile - your pal from the start - and command it to use water pulse...   but it's not enough.",
    "text2" : "Giga impact leaves Drizzile unrecognisable.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //nincada whiscash houndoom 
  "2WHN05": { 
    "code" : "2WHN05",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2WHN06"],
      ["Continue", "2WHN07"]
    ]
  },
  "2WHN06": { //hiders ending
    "code" : "2WHN06",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your team at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2WHN07": { 
    "code" : "2WHN07",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "2WHN08"]
    ]
  },
  "2WHN08": { 
    "code" : "2WHN08",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "2WHN09"],
      ["Use will-o-wisp", "2WHN11"]
    ]
  },
  "2WHN09": { //flamethrower 
    "code" : "2WHN09",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2WHN12"],
      ["Use will-o-wisp", "2WHN13"],
      ["Use flamethrower", "2WHN14"]
    ]
  },
  "2WHN11": { //willowisp
    "code" : "2WHN11",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2WHN12"],
      ["Use will-o-wisp", "2WHN13"],
      ["Use flamethrower", "2WHN14"]
    ]
  },
  "2WHN12": { //rhy crunch
    "code" : "2WHN12",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "2WHN15"]
    ]
  },
  "2WHN13": { //rhy willowisp
    "code" : "2WHN13",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "2WHN15"]
    ]
  },
  "2WHN14": { //rhy flamethrower
    "code" : "2WHN14",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "2WHN15"]
    ]
  },
  "2WHN15": { //whiscash
    "code" : "2WHN15",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Whiscash hits the field. Giovanni has no words, as if you have the perfect counter.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "2WHN16"],
      ["Use earth power", "2WHN17"]
    ]
  },
  "2WHN16": { //water pulse
    "code" : "2WHN16",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that completely erodes the Rhydon. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "2WHN18"]
    ]
  },
  "2WHN17": { //earth power
    "code" : "2WHN17",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that blasts the Rhydon to pieces. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "2WHN18"]
    ]
  },
  "2WHN18": { //kang
    "code" : "2WHN18",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Kangaskhan! MEGA EVOLVEEEE'",
    "text2" : "Energy wraps over the kaiju as it transforms into Mega Kangaskhan. You stand in shock and maybe in awe, Giovanni taking full advantage and launching a giga impact to eviscerate Whiscash.",
    "opt" : [
      ["Send out Ninjask", "2WHN19"]
    ]
  },
  "2WHN19": { //ninjask
    "code" : "2WHN19",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! Making me waste my time with mega evolution. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "2WHN20"],
      ["Fight on", "2WHN21"]
    ]
  },
  "2WHN20": { //hider ending
    "code" : "2WHN20",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ninjask and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ninjask as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2WHN21": { //f
    "code" : "2WHN21",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You unleach an acrobatics, your strongest move, onto Kangaskhan to no avail. The mega Pokémon stands unphased before brutally crushing Ninjask with a double-edge.",
    "text2" : "You could stil run, and let your friends die in vain? No. You have to fight.",
    "opt" : [
      ["Send out Shedinja", "2WHN22"]
    ]
  },
  "2WHN22": { //shed
    "code" : "2WHN22",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Shedinja - your pal from the start - its hp doesn't matter, it can only be hit by super effective moves...   Too bad it has one.",
    "text2" : "A crunch leaves Shedinja in pieces.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //ditto whiscash houndoom 
  "3WHN05": { 
    "code" : "3WHN05",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3WHN06"],
      ["Continue", "3WHN07"]
    ]
  },
  "3WHN06": { //hiders ending
    "code" : "3WHN06",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your team at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3WHN07": { 
    "code" : "3WHN07",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "3WHN08"]
    ]
  },
  "3WHN08": { 
    "code" : "3WHN08",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "3WHN09"],
      ["Use will-o-wisp", "3WHN11"]
    ]
  },
  "3WHN09": { //flamethrower 
    "code" : "3WHN09",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3WHN12"],
      ["Use will-o-wisp", "3WHN13"],
      ["Use flamethrower", "3WHN14"]
    ]
  },
  "3WHN11": { //willowisp
    "code" : "3WHN11",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3WHN12"],
      ["Use will-o-wisp", "3WHN13"],
      ["Use flamethrower", "3WHN14"]
    ]
  },
  "3WHN12": { //rhy crunch
    "code" : "3WHN12",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "3WHN15"]
    ]
  },
  "3WHN13": { //rhy willowisp
    "code" : "3WHN13",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "3WHN15"]
    ]
  },
  "3WHN14": { //rhy flamethrower
    "code" : "3WHN14",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "3WHN15"]
    ]
  },
  "3WHN15": { //whiscash
    "code" : "3WHN15",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Whiscash hits the field. Giovanni has no words, as if you have the perfect counter.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "3WHN16"],
      ["Use earth power", "3WHN17"]
    ]
  },
  "3WHN16": { //water pulse
    "code" : "3WHN16",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that completely erodes the Rhydon. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "3WHN18"]
    ]
  },
  "3WHN17": { //earth power
    "code" : "3WHN17",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that blasts the Rhydon to pieces. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "3WHN18"]
    ]
  },
  "3WHN18": { //kang
    "code" : "3WHN18",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Kangaskhan! MEGA EVOLVEEEE'",
    "text2" : "Energy wraps over the kaiju as it transforms into Mega Kangaskhan. You stand in shock and maybe in awe, Giovanni taking full advantage and launching a giga impact to eviscerate Whiscash.",
    "opt" : [
      ["Send out Ditto", "3WHN19"]
    ]
  },
  "3WHN19": { //ditto
    "code" : "3WHN19",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! Making me waste my time with mega evolution. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "3WHN20"],
      ["Fight on", "3WHN21"]
    ]
  },
  "3WHN20": { //hider ending
    "code" : "3WHN20",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3WHN21": { //f
    "code" : "3WHN21",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Ditto - your pal from the start - and command it to use transform...   but it's not enough.",
    "text2" : "A super effective power-up-punch leaves Ditto unrecognisable.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //sobble whiscash houndoom gold
  "1WHG03": { 
    "code" : "1WHG03",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "1WHG04"],
      ["Continue", "1WHG05"]
    ]
  },
  "1WHG04": { //hiders ending
    "code" : "1WHG04",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only your team at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1WHG05": { 
    "code" : "1WHG05",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "1WHG06"]
    ]
  },
  "1WHG06": { 
    "code" : "1WHG06",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "1WHG07"],
      ["Use will-o-wisp", "1WHG08"]
    ]
  },
  "1WHG07": { //flamethrower 
    "code" : "1WHG07",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1WHG09"],
      ["Use will-o-wisp", "1WHG10"],
      ["Use flamethrower", "1WHG11"]
    ]
  },
  "1WHG08": { //willowisp
    "code" : "1WHG08",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "1WHG09"],
      ["Use will-o-wisp", "1WHG10"],
      ["Use flamethrower", "1WHG11"]
    ]
  },
  "1WHG09": { //rhy crunch
    "code" : "1WHG09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "1WHG12"]
    ]
  },
  "1WHG10": { //rhy willowisp
    "code" : "1WHG10",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "1WHG12"]
    ]
  },
  "1WHG11": { //rhy flamethrower
    "code" : "1WHG11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "1WHG12"]
    ]
  },
  "1WHG12": { //whiscash
    "code" : "1WHG12",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Whiscash hits the field. Giovanni has no words, as if you have the perfect counter.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "1WHG13"],
      ["Use earth power", "1WHG14"]
    ]
  },
  "1WHG13": { //water pulse
    "code" : "1WHG13",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that completely erodes the Rhydon. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "1WHG15"]
    ]
  },
  "1WHG14": { //earth power
    "code" : "1WHG14",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that blasts the Rhydon to pieces. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "1WHG15"]
    ]
  },
  "1WHG15": { //kang
    "code" : "1WHG15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Kangaskhan! MEGA EVOLVEEEE'",
    "text2" : "Energy wraps over the kaiju as it transforms into Mega Kangaskhan. You stand in shock and maybe in awe, Giovanni taking full advantage and launching a giga impact to eviscerate Whiscash.",
    "opt" : [
      ["Send out Inteleon", "1WHG16"]
    ]
  },
  "1WHG16": { //inteleon
    "code" : "1WHG16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni's eyes stop to contemplate what he's seeing, as if he was expecting something far more pathetic as your last mon. He quickly snaps back into character though. 'Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "1WHG17"],
      ["Fight on", "1WHG18"]
    ]
  },
  "1WHG17": { //hider ending
    "code" : "1WHG17",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Inteleon and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Inteleon as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "1WHG18": { //f
    "code" : "1WHG18",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Inteleon - your pal from the start - and command it to use water pulse...   but it's not enough.",
    "text2" : "Giga impact leaves Inteleon unrecognisable.",
    "opt" : [
      ["Continue", "1WHG19"]
    ]
  },
  "1WHG19": { //rhm ending
    "code" : "1WHG19",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "...This should be the end.. You fall down to your knees, ready to hear Giovanni's maniacle victory speech...          ..But he doesnt. He returns to a calmer state reminiscent of his younger years.",
    "text2" : "'You're pathetic enough to lose to me, but anyone would, and you pushed me further than any trainer ever has - even that kid from pallet town way back when. Join me, and the rest of your life shall be prosperous. Or, of course, you can go rot under my show with your organisation. It's your choice, make it a wise one.' ..I mean, what choice do you have? He's right, life would be full of suffering now if you refuse. Maybe more suffering than working for him...     You take the offer.",
    "opt" : [
      ["Continue", "E-GOON"]
    ]
  },

  //nincada whiscash houndoom 
  "2WHG03": { 
    "code" : "2WHG03",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "2WHG04"],
      ["Continue", "2WHG05"]
    ]
  },
  "2WHG04": { //hiders ending
    "code" : "2WHG04",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Ninjask and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2WHG05": { 
    "code" : "2WHG05",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "2WHG06"]
    ]
  },
  "2WHG06": { 
    "code" : "2WHG06",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "2WHG07"],
      ["Use will-o-wisp", "2WHG08"]
    ]
  },
  "2WHG07": { //flamethrower 
    "code" : "2WHG07",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2WHG09"],
      ["Use will-o-wisp", "2WHG10"],
      ["Use flamethrower", "2WHG11"]
    ]
  },
  "2WHG08": { //willowisp
    "code" : "2WHG08",
    "ballNum" : 4,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "2WHG09"],
      ["Use will-o-wisp", "2WHG10"],
      ["Use flamethrower", "2WHG11"]
    ]
  },
  "2WHG09": { //rhy crunch
    "code" : "2WHG09",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "2WHG12"]
    ]
  },
  "2WHG10": { //rhy willowisp
    "code" : "2WHG10",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "2WHG12"]
    ]
  },
  "2WHG11": { //rhy flamethrower
    "code" : "2WHG11",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "2WHG12"]
    ]
  },
  "2WHG12": { //whiscash
    "code" : "2WHG12",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Whiscash hits the field. Giovanni has no words, as if you have the perfect counter.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "2WHG13"],
      ["Use earth power", "2WHG14"]
    ]
  },
  "2WHG13": { //water pulse
    "code" : "2WHG13",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that completely erodes the Rhydon. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "2WHG15"]
    ]
  },
  "2WHG14": { //earth power
    "code" : "2WHG14",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that blasts the Rhydon to pieces. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "2WHG15"]
    ]
  },
  "2WHG15": { //kang
    "code" : "2WHG15",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Kangaskhan! MEGA EVOLVEEEE'",
    "text2" : "Energy wraps over the kaiju as it transforms into Mega Kangaskhan. You stand in shock and maybe in awe, Giovanni taking full advantage and launching a giga impact to eviscerate Whiscash.",
    "opt" : [
      ["Send out Ninjask", "2WHG16"]
    ]
  },
  "2WHG16": { //ninjask
    "code" : "2WHG16",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! Making me waste my time with mega evolution. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "2WHG17"],
      ["Fight on", "2WHG18"]
    ]
  },
  "2WHG17": { //hider ending
    "code" : "2WHG17",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ninjask and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ninjask as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "2WHG18": { //f
    "code" : "2WHG18",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You unleach an acrobatics, your strongest move, onto Kangaskhan to no avail. The mega Pokémon stands unphased before brutally crushing Ninjask with a double-edge.",
    "text2" : "You could stil run, and let your friends die in vain? No. You have to fight.",
    "opt" : [
      ["Send out Shedinja", "2WHG19"]
    ]
  },
  "2WHG19": { //shed
    "code" : "2WHG19",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Shedinja - your pal from the start - its hp doesn't matter, it can only be hit by super effective moves...   Too bad it has one.",
    "text2" : "A crunch leaves Shedinja in pieces.",
    "opt" : [
      ["Continue", "E-DOOM"]
    ]
  },

  //ditto whiscash houndoom 
  "3WHG03": { 
    "code" : "3WHG03",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "The Indigo Plateau: where trainers go to become legends, their legacy semented in the hall of fame for eternity. Such a palace of prestige now fallen to ruins. How could they do this? Is Lance still there? What could Team Rocket possibly have that could tear down the pinacle of Kanto and Johto. You walk in. It's empty, decrepid, every bit of infrastructure seems as if it was beaten to oblivion. Nervously, you slip through the gap in the frozen doors.",
    "text2" : "Once psychic wonders now a woeful wreckage with Elite 4 member Will laying within. Another chamber. Once toxic triumphs now poisoned alongside Koga. Anoteher chamber. Once black belts and brute strength now deadweight as is Bruno. Another chamber. Once darkness before the unworthies' doom, now Karen's room foreshadows an inaffable gloom. Lance lies on all fours, hair ruffled... his cape torn. '..He's  ...so much stronger tha- ..than before' He mutters before passing out. Do you carry on?",
    "opt" : [
      ["Turn back", "3WHG04"],
      ["Continue", "3WHG05"]
    ]
  },
  "3WHG04": { //hiders ending
    "code" : "3WHG04",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You decide saving the world isnt worth the risk of sharing the fate of your surroundings and you run out. You can't go back to the Wailord, Sarge'll kill you. You think to yourself your best bet is hiding out in a desolate forsest with only Ditto and Houndoom at your side..",
    "text2" : null,
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3WHG05": { 
    "code" : "3WHG05",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You pull open the doors to the champion room. Sitting Upon the throne is a man consumed by age in a sinister black suit marked with the red 'R' of Team Rocket. Decade old stories and news broadcasts come flooding back to you as you slowly put a name onto the cunnning face infront of you..     Giovanni.",
    "text2" : "He barks to you 'Little Lance and his clubhouse fail to stop me and this is who they send? I was half expecting one of those kids to come out of nowhere once again, but this.. is far more disappointing. Your silly government title doesn't scare me! I'll kill everything you have all the same.' A smirk rises on his face as he sends out his first Pokémon: Persian.",
    "opt" : [
      ["Send out Houndoom", "3WHG06"]
    ]
  },
  "3WHG06": { 
    "code" : "3WHG06",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni begins to boast 'A Houndoom, eh? hmph, fit for second place.'",
    "text2" : "What do you do?",
    "opt" : [
      ["Use flamethrower", "3WHG07"],
      ["Use will-o-wisp", "3WHG08"]
    ]
  },
  "3WHG07": { //flamethrower 
    "code" : "3WHG07",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. It still releases a flamethrower at your command, swiftly burning persian to a crisp. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3WHG09"],
      ["Use will-o-wisp", "3WHG10"],
      ["Use flamethrower", "3WHG11"]
    ]
  },
  "3WHG08": { //willowisp
    "code" : "3WHG08",
    "ballNum" : 3,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Houndoom is met with a power gem to the face which severly weakens it. However, not enough to stop Houndoom from using will-o-wisp - burning the Persian and weakening its contact moves - which leads the following slash from Persian to be survivable. You then end it with a flamethrower. Giovanni's smirk slightly flaters before recovering, after all, it's not over yet. He sends out Rhydon.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use crunch", "3WHG09"],
      ["Use will-o-wisp", "3WHG10"],
      ["Use flamethrower", "3WHG11"]
    ]
  },
  "3WHG09": { //rhy crunch
    "code" : "3WHG09",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon has immense defense, it shrugs off your attack and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "3WHG12"]
    ]
  },
  "3WHG10": { //rhy willowisp
    "code" : "3WHG10",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon would be almost neutralized from a burn, too bad it misses. it follows up with an earthquake that kills Houndoom.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "3WHG12"]
    ]
  },
  "3WHG11": { //rhy flamethrower
    "code" : "3WHG11",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Rhydon's a rock type, so resists the fire-type attack, it shrugs it off and kills Houndoom with an earthquake.",
    "text2" : "Your a little hesitant to send out your starter, possibly to die, but the mission is the mission - the world's at stake.",
    "opt" : [
      ["Send out Whiscash", "3WHG12"]
    ]
  },
  "3WHG12": { //whiscash
    "code" : "3WHG12",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Whiscash hits the field. Giovanni has no words, as if you have the perfect counter.",
    "text2" : "What do you do?",
    "opt" : [
      ["Use water pulse", "3WHG13"],
      ["Use earth power", "3WHG14"]
    ]
  },
  "3WHG13": { //water pulse
    "code" : "3WHG13",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that completely erodes the Rhydon. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "3WHG15"]
    ]
  },
  "3WHG14": { //earth power
    "code" : "3WHG14",
    "ballNum" : 2,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "With the force of its fallen friend, Whiscash unleashes its attack that blasts the Rhydon to pieces. Giovanni looks agrovated that you've made it this far, to his last Pokémon!",
    "text2" : "'ENOUGH IS ENOUGH! You've had your fun here. It's my turn. GO, KANGASKHAN!' You see this goliath of a Pokémon infront of you, and as you think the situation is bad enough, you see a gleaming light from Giovanni's lapel...",
    "opt" : [
      ["Continue", "3WHG15"]
    ]
  },
  "3WHG15": { //kang
    "code" : "3WHG15",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "'Kangaskhan! MEGA EVOLVEEEE'",
    "text2" : "Energy wraps over the kaiju as it transforms into Mega Kangaskhan. You stand in shock and maybe in awe, Giovanni taking full advantage and launching a giga impact to eviscerate Whiscash.",
    "opt" : [
      ["Send out Ditto", "3WHG16"]
    ]
  },
  "3WHG16": { //ditto
    "code" : "3WHG16",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "Giovanni bursts out into a crazed cackle. 'THAT'S your final Pokémon?! your saving grace?!! Making me waste my time with mega evolution. Go on! Run while you can!'",
    "text2" : "What do you do?",
    "opt" : [
      ["Surrender", "3WHG17"],
      ["Fight on", "3WHG18"]
    ]
  },
  "3WHG17": { //hider ending
    "code" : "3WHG17",
    "ballNum" : 1,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "As you recall Ditto and begin to run, you hear from behind you 'Run run RUN! I knew you could never beat me.'",
    "text2" : "You escape the Plateau, but to where? You know you cant go back to Sarge, he'll kill you! You decide to live it out in a desolate forest with Ditto as your company, ashamed at what you failed to achieve.",
    "opt" : [
      ["Continue", "E-HIDE"]
    ]
  },
  "3WHG18": { //f
    "code" : "3WHG18",
    "ballNum" : 0,
    "area" : "Indigo Plateau",
    "image" : null,
    "text1" : "You put all your faith in Ditto - your pal from the start - and command it to use transform, but it's met with a power up punch...",
    "text2" : "Ditto holds on. Through nothing you can think of aside from pure friendship, Ditto managed to survive the devastating hit. The power up punch had boosted Kangaskhan's attack...  But now, it boosted your attack. As Ditto transforms into Mega Kangaskhan you scream at it to use power up punch. Ditto forms a giant uppercut as it grows, knocking Kangaskhan's neck all the way back before it falls to the floor never to get back up. In shambles, Giovanni falls to his knees and begs for mercy from the goliath now on your side. Sarge would never want you to kill a man, not even dangers like this one. You recall Ditto to it's ball as other KAO officers enter the room and arrest Giovanni. Feeling much lighter, you get onto Charizard and soar off into the sky..",
    "opt" : [
      ["Continue", "E-TRUE"]
    ]
  },


// -- ENDINNGS --


  "E-RUNT": {
    "code": "E-RUNT",
    "background": runt,
    "text1": "RUNT ENDING",
    "text2": "there should be a cooler page here, huh",
    "end": true,
    "name": "RUNT",
    "value": "runt"
  },

  "E-FROZ": {
    "code": "E-FROZ",
    "background": frozen,
    "text1": "FROZEN ENDING",
    "text2": "there should be a cooler page here, huh - pun DEFINITLEY intended :>",
    "end": true,
    "name": "FROZEN",
    "value": "froze"
  },

  "E-DOOM": {
    "code": "E-DOOM",
    "background": doom,
    "text1": "ARMAGEDDON ENDING",
    "text2": "there should be a cooler page here, huh",
    "end": true,
    "name": "DOOMSDAY",
    "value": "doom"
  },

  "E-HIDE": {
    "code": "E-HIDE",
    "background": hide,
    "text1": "HIDER ENDING",
    "text2": "there should be a cooler page here, huh",
    "end": true,
    "name": "HIDERS",
    "value": "hide"
  },

  "E-GOON": {
    "code": "E-GOON",
    "background": rhm,
    "text1": "RIGHT HAND MAN ENDING",
    "text2": "there should be a cooler page here, huh",
    "end": true,
    "name": "RIGHT HAND MAN",
    "value": "goon"
  },

  "E-TRUE": {
    "code": "E-TRUE",
    "background": best,
    "text1": "TRUE ENDING",
    "text2": "there should be a cooler page here, huh",
    "end": true,
    "name": "TRUE",
    "value": "true"
  }
}
