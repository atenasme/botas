module.exports = [
  {
      name: "honey",
      aliases: ["Honey"], 
      code: `
  $title[Honey]
  $description[
  $getVar[tier1]
  Give a pet the $getVar[honey] Honey perk.
  Summon a 1/1 $getVar[bee] Bee after fainting.
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "egg",
      aliases: ["Egg"], 
      code: `
  $title[Egg]
  $description[
  $getVar[tier1]
  Give a pet the $getVar[egg] Egg perk.
  Deal 2 $getVar[damage] damage before attack, once.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "strawberry",
      aliases: ["Strawberry"], 
      code: `
  $title[Strawberry]
  $description[
  $getVar[tier1]
  Give a pet the $getVar[straw] perk.
  Enables $getVar[straw] abilities.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "blueberry",
      aliases: ["Blueberry"], 
      code: `
  $title[Blueberry]
  $description[
  $getVar[tier1]
  Give a pet the $getVar[bberry] Blueberry perk.
  Prioritize this for enemy random abilities.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "meat bone",
      aliases: ["Meat Bone"], 
      code: `
  $title[Meat Bone]
  $description[
  $getVar[tier2]
  Give a pet the $getVar[meat] Meat bone perk.
  Attack with +3 $getVar[damage] damage. 
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "cherry",
      aliases: ["Cherry"], 
      code: `
  $title[Cherry]
  $description[
  $getVar[tier2]
  Give a pet the $getVar[cherry] Cherry perk.
  Gain 2 $getVar[trumpet] trumpets on start of battle. 
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "chocolate cake",
      aliases: ["Chocolate Cake"], 
      code: `
  $title[Chocolate Cake]
  $description[
  $getVar[tier2]
  Give a pet the $getVar[chococ] Chocolate Cake perk.
  Gain +3 $getVar[exp] experience and faint before attacking.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "rice",
      aliases: ["Rice"], 
      code: `
  $title[Rice]
  $description[
  $getVar[tier2]
  Give a pet the $getVar[rice] Rice perk.
  Sell for +2 $getVar[gold] gold. 
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "garlic",
      aliases: ["Garlic"], 
      code: `
  $title[Garlic]
  $description[
  $getVar[tier3]
  Give a pet the $getVar[garlic] Garlic perk.
  Take 2 less $getVar[damage] damage.
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "fig",
      aliases: ["Fig"], 
      code: `
  $title[Fig]
  $description[
  $getVar[tier3]
  Give a pet the $getVar[fig] Fig perk.
  Deal 4 $getVar[damage] damage to the lowest health enemy on start of battle. 
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "cucumber",
      aliases: ["Cucumber"], 
      code: `
  $title[Cucumber]
  $description[
  $getVar[tier3]
  Give a pet the $getVar[cucumber] Cucumber perk.
  Gain +1 $getVar[health] health at end of turn.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pineapple",
      aliases: ["Pineapple"], 
      code: `
  $title[Pineapple]
  $description[
  $getVar[tier3]
  Give a pet the $getVar[pineapple] Pineapple perk. 
  Ability deals +2 $getVar[damage].
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "croissant",
      aliases: ["Croissant"], 
      code: `
  $title[Croissant]
  $description[
  $getVar[tier3]
  Give a pet the $getVar[croissant] Croissant perk.
  Gain +1 $getVar[attack] attack at end of turn.
  Pack: $getVar[puppypa] Puppy Pack $getVar[custom] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "banana",
      aliases: ["Banana"], 
      code: `
  $title[Banana]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[banana] Banana perk.
  Summon one 4/4 $getVar[monkey] Monkey on faint.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "potato",
      aliases: ["Potato"], 
      code: `
  $title[Potato]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[potato] Potato perk.
  Take 10 less $getVar[damage] damage from abilities, twice.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "cheese",
      aliases: ["Cheese"], 
      code: `
  $title[Cheese]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[cheese] Cheese perk.
  Attack with double $getVar[damage] damage, once.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "grapes",
      aliases: ["Grapes"], 
      code: `
  $title[Grapes]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[grapes] Grapes perk.
  Gain +1 $getVar[gold] gold at the start of every turn.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pie",
      aliases: ["Pie"], 
      code: `
  $title[Pie]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[pie] Pie perk.
  Gain +4 $getVar[attack] attack and +4 $getVar[health] health before start of battle.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "salt",
      aliases: ["Salt"], 
      code: `
  $title[Salt]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[salt] Salt perk.
  Attack lower tier pets for double $getVar[damage] damage.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "donut",
      aliases: ["Donut"], 
      code: `
  $title[Donut]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[donut] Donut perk.
  Prioritize this for friendly random abilities.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "fortune cookie",
      aliases: ["Fortune Cookie"], 
      code: `
  $title[Fortune Cookie]
  $description[
  $getVar[tier4]
  Give a pet the $getVar[fcookie] Fortune Cookie perk.
  Attack has 50% chance to deal double $getVar[damage] damage.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "chili",
      aliases: ["Chili"], 
      code: `
  $title[Chili]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[chili] Chili perk.
  Attack second enemy for 5 $getVar[damage] damage. 
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "durian",
      aliases: ["Durian"], 
      code: `
  $title[Durian]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[durian] Durian perk.
  Reduce the most healthy enemy by 33% $getVar[health] health before attacking, once.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "onion",
      aliases: ["Onion"], 
      code: `
  $title[Onion]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[onion] Onion perk.
  Move to the back when in the front, once.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "carrot",
      aliases: ["Carrot"], 
      code: `
  $title[Carrot]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[carrot] Carrot perk.
  Gain +1 $getVar[attack] attack and +1 $getVar[health] health at end of turn.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pepper",
      aliases: ["Pepper"], 
      code: `
  $title[Pepper]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[pepper] Pepper perk.
  Health does not go under 1. Removed after taking damage.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "lemon",
      aliases: ["Lemon"], 
      code: `
  $title[Lemon]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[lemon] Lemon perk.
  Take 7 less $getVar[damage] damage, twice. 
  Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "eggplant",
      aliases: ["Eggplant"], 
      code: `
  $title[Eggplant]
  $description[
  $getVar[tier5]
  Give a pet the $getVar[eggplant] Eggplant perk.
  Push opposite enemy 1 space forward at the start of battle.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "melon",
      aliases: ["Melon"], 
      code: `
  $title[Melon]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[melon] Melon perk.
  Take 20 less $getVar[damage] damage, once. 
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "mushroom",
      aliases: ["Mushroom"], 
      code: `
  $title[Mushroom]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[mush] Mushroom perk.
  Come back as a 1/1 after fainting.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "steak",
      aliases: ["Steak"], 
      code: `
  $title[Steak]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[steak] Steak perk.
  Attack with +20 $getVar[damage] damage, once.
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pita bread",
      aliases: ["Pita Bread"], 
      code: `
  $title[Pita Bread]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[pita] Pita Bread perk.
  Gain +15 $getVar[health] health when hurt, once.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "tomato",
      aliases: ["Tomato"], 
      code: `
  $title[Tomato]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[tomato] Tomato perk.
  Deal 8 $getVar[damage] damage to the last enemy before attacking, once. 
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "popcorn",
      aliases: ["Popcorn"], 
      code: `
  $title[Popcorn]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[popcorn] Popcorn perk.
  Summon a random pet from the same tier after fainting.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pancakes",
      aliases: ["Pancakes"], 
      code: `
  $title[Pancakes]
  $description[
  $getVar[tier6]
  Give a pet the $getVar[pancakes] Pancakes perk.
  Give friends +2 $getVar[attack] attack and +2 $getVar[health] health before start of battle. 
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },
];