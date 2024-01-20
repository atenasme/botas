module.exports = [
  {
      name: "armadillo",
      aliases: ["Armadillo"], 
      code: `
  $title[Armadillo]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 6 $getVar[health]
  L1: **Star of battle** → Give ALL pets +8 $getVar[health] health.
  L2: **Star of battle** → Give ALL pets +16 $getVar[health] health.
  L3: **Star of battle** → Give ALL pets +24 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  
  

      `,
  },
  {
      name: "cow",
      aliases: ["Cow"], 
      code: `
  $title[Cow]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 6 $getVar[health]
  L1: **Buy** → Replace shop with two free $getVar[milk] Milk.
  L2: **Buy** → Replace shop with two free Better $getVar[milk] Milk.
  L3: **Buy** → Replace shop with two free Best $getVar[milk] Milk.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "crocodile",
      aliases: ["Crocodile"], 
      code: `
  $title[Crocodile]
  $description[
  $getVar[tier5] 8 $getVar[attack] / 4 $getVar[health]
  L1: **Start of battle** → Deal 8 $getVar[damage] damage to the last enemy.
  L2: **Start of battle** → Deal 8 $getVar[damage] damage to the last enemy. Triggers 2 times.
  L3: **Start of battle** → Deal 8 $getVar[damage] damage to the last enemy. Triggers 3 times.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "monkey",
      aliases: ["Monkey"], 
      code: `
  $title[Monkey]
  $description[
  $getVar[tier5] 1 $getVar[attack] / 2 $getVar[health]
  L1: **End turn** → Give front-most friend +2 $getVar[attack] attack and +3 $getVar[health] health.
  L2: **End turn** → Give front-most friend +4 $getVar[attack] attack and +6 $getVar[health] health.
  L3: **End turn** → Give front-most friend +6 $getVar[attack] attack and +9 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "rhino",
      aliases: ["Rhino"], 
      code: `
  $title[Rhino]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 9 $getVar[health]
  L1: **Knock out** → Deal 4 $getVar[damage] damage to the first enemy. Double against tier 1 pets.
  L2: **Knock out** → Deal 8 $getVar[damage] damage to the first enemy. Double against tier 1 pets.
  L3: **Knock out** → Deal 12 $getVar[damage] damage to the first enemy. Double against tier 1 pets.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "rooster",
      aliases: ["Rooster"], 
      code: `
  $title[Rooster]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Summon one $getVar[chick] Chick with 1 $getVar[health] health and 50% $getVar[attack] attack of this.
  L2: **Faint** → Summon two $getVar[chick] Chicks with 1 $getVar[health] health and 50% $getVar[attack] attack of this.
  L3: **Faint** → Summon three $getVar[chick] Chicks with 1 $getVar[health] health and 50% $getVar[attack] attack of this.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "scorpion",
      aliases: ["Scorpion"], 
      code: `
  $title[Scorpion]
  $description[
  $getVar[tier5] 1 $getVar[attack] / 1 $getVar[health]
  L1: **Summoned** → Gain the $getVar[peanut] Peanut perk.
  L2: **Summoned** → Gain the $getVar[peanut] Peanut perk.
  L3: **Summoned** → Gain the $getVar[peanut] Peanut perk.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "seal",
      aliases: ["Seal"], 
      code: `
  $title[Seal]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 8 $getVar[health]
  L1: **Eats food** → Give three random friends +1 $getVar[attack] attack.
  L2: **Eats food** → Give three random friends +2 $getVar[attack] attack.
  L3: **Eats food** → Give three random friends +3 $getVar[attack] attack.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "shark",
      aliases: ["Shark"], 
      code: `
  $title[Shark]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 2 $getVar[health]
  L1: **Friend faints** → Gain +2 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **Friend faints** → Gain +4 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **Friend faints** → Gain +6 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "turkey",
      aliases: ["Turkey"], 
      code: `
  $title[Turkey]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Friend summoned** → Give it +3 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **Friend summoned** → Give it +6 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **Friend summoned** → Give it +9 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "axolotl",
      aliases: ["Axolotl"], 
      code: `
  $title[Axolotl]
  $description[
  $getVar[tier5]  $getVar[attack] /  $getVar[health]
  L1: **Friend gained perk** → Give it permanent +1 $getVar[attack] attack and +1 $getVar[health] health.
  L2: **Friend gained perk** → Give it permanent +2 $getVar[attack] attack and +2 $getVar[health] health.
  L3: **Friend gained perk** → Give it permanent +3 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "chicken",
      aliases: ["Chicken"], 
      code: `
  $title[Chicken]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Give future shop pets permanent +1 $getVar[attack] attack and +1 $getVar[health] health.
  L2: **Faint** → Give future shop pets permanent +2 $getVar[attack] attack and +2 $getVar[health] health.
  L3: **Faint** → Give future shop pets permanent +3 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "eagle",
      aliases: ["Eagle"], 
      code: `
  $title[Eagle]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 5 $getVar[health]
  L1: **Faint** → Summon one 5/5 level 1 pet from next shop tier.
  L2: **Faint** → Summon one 10/10 level 1 pet from next shop tier.
  L3: **Faint** → Summon one 15/15 level 1 pet from next shop tier.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "goat",
      aliases: ["Goat"], 
      code: `
  $title[Goat]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 6 $getVar[health]
  L1: **Friend bought** → Gaint +1 $getVar[gold] gold. Works 2 times per turn.
  L2: **Friend bought** → Gaint +2 $getVar[gold] gold. Works 2 times per turn.
  L3: **Friend bought** → Gaint +3 $getVar[gold] gold. Works 2 times per turn.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "mosasaurus",
      aliases: ["Mosasaurus"], 
      code: `
  $title[Mosasaurus]
  $description[
  $getVar[tier5] 5 $getVar[attack] / 6 $getVar[health]
  L1: **Toy broke** → Give adjacent friends +2 $getVar[attack] attack and +3 $getVar[health] health.
  L2: **Toy broke** → Give adjacent friends +4 $getVar[attack] attack and +6 $getVar[health] health.
  L3: **Toy broke** → Give adjacent friends +6 $getVar[attack] attack and +9 $getVar[health] health.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "panther",
      aliases: ["Panther"], 
      code: `
  $title[Panther]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 5 $getVar[health]
  L1: Perks are two times stronger on this.
  L2: Perks are three times stronger on this.
  L3: Perks are four times stronger on this.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "poodle",
      aliases: ["Poodle"], 
      code: `
  $title[Poodle]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 2 $getVar[health]
  L1: **End turn** → Give +1 $getVar[attack] attack and +1 $getVar[health] health to one friend of each tier.
  L2: **End turn** → Give +2 $getVar[attack] attack and +2 $getVar[health] health to one friend of each tier.
  L3: **End turn** → Give +3 $getVar[attack] attack and +3 $getVar[health] health to one friend of each tier.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "snapping turtle",
      aliases: ["Snapping Turtle"], 
      code: `
  $title[Snapping Turtle]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 5 $getVar[health]
  L1: **Faint** → Give $getVar[skewer] Skewer perk to the nearest friend behind.
  L2: **Faint** → Give $getVar[skewer] Skewer perk to the two nearest friend behind.
  L3: **Faint** → Give $getVar[skewer] Skewer perk to the three nearest friend behind.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "sting ray",
      aliases: ["Sting Ray"], 
      code: `
  $title[Sting Ray]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 6 $getVar[health]
  L1: **Buy** → Choose one level 1 toy from tier 5.
  L2: **Buy** → Choose one level 2 toy from tier 5.
  L3: **Buy** → Choose one level 3 toy from tier 5.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "stonefish",
      aliases: ["Stonefish"], 
      code: `
  $title[Stonefish]
  $description[
  $getVar[tier5] 7 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Deal attack $getVar[damage] damage directly back to whoever knocked this out.
  L2: **Faint** → Deal double attack $getVar[damage] damage directly back to whoever knocked this out.
  L3: **Faint** → Deal triple attack $getVar[damage] damage directly back to whoever knocked this out.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "fox",
      aliases: ["Fox"], 
      code: `
  $title[Fox]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 4 $getVar[health]
  L1: **End turn** → Steal the right-most shop food.
  L2: **End turn** → Steal the right-most shop food and double its attack and health effects.
  L3: **End turn** → Steal the right-most shop food and triple its attack and health effects.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "hamster",
      aliases: ["Hamster"], 
      code: `
  $title[Hamster]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 4 $getVar[health]
  L1: **Roll** → Gain +1 $getVar[gold] gold. Works 2 times per turn.
  L2: **Roll** → Gain +1 $getVar[gold] gold. Works 4 times per turn.
  L3: **Roll** → Gain +1 $getVar[gold] gold. Works 6 times per turn.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "lion",
      aliases: ["Lion"], 
      code: `
  $title[Lion]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 6 $getVar[health]
  L1: **Start of battle** → If this is your highest tier pet, gain +50% $getVar[attack] attack and $getVar[health] health.
  L2: **Start of battle** → If this is your highest tier pet, gain +100% $getVar[attack] attack and $getVar[health] health.
  L3: **Start of battle** → If this is your highest tier pet, gain +150% $getVar[attack] attack and $getVar[health] health.
  Pack: $getVar[starpa] Star Pack 
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "polar bear",
      aliases: ["Polar Bear"], 
      code: `
  $title[Polar Bear]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 8 $getVar[health]
  L1: **Start of turn** → Give one random frozen shop pet +4 $getVar[attack] attack and +4 $getVar[health] health.
  L2: **Start of turn** → Give one random frozen shop pet +8 $getVar[attack] attack and +8 $getVar[health] health.
  L3: **Start of turn** → Give one random frozen shop pet +12 $getVar[attack] attack and +12 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "shoebill",
      aliases: ["Shoebill"], 
      code: `
  $title[Shoebill]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 4 $getVar[health]
  L1: **End turn** → Give $getVar[straw] Strawberry friends +1 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **End turn** → Give $getVar[straw] Strawberry friends +2 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **End turn** → Give $getVar[straw] Strawberry friends +3 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "siberian husky",
      aliases: ["Siberian Husky"], 
      code: `
  $title[Siberian Husky]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 3 $getVar[health]
  L1: **End turn** → Give friends with no food perks +1 $getVar[attack] attack and +1 $getVar[health] health.
  L2: **End turn** → Give friends with no food perks +2 $getVar[attack] attack and +2 $getVar[health] health.
  L3: **End turn** → Give friends with no food perks +3 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "swordfish",
      aliases: ["Swordfish"], 
      code: `
  $title[Swordfish]
  $description[
  $getVar[tier5] 5 $getVar[attack] / 5 $getVar[health]
  L1: **Start of battle** → Deal 100% attack $getVar[damage] damage to the most healthy enemy and itself.
  L2: **Start of battle** → Deal 200% attack $getVar[damage] damage to the most healthy enemy and itself.
  L3: **Start of battle** → Deal 300% attack $getVar[damage] damage to the most healthy enemy and itself.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "triceratops",
      aliases: ["Triceratops"], 
      code: `
  $title[Triceratops]
  $description[
  $getVar[tier5] 5 $getVar[attack] / 6 $getVar[health]
  L1: **Hurt** → Give one random friend +3 $getVar[attack] attack and +3 $getVar[health] health.
  L2: **Hurt** → Give one random friend +6 $getVar[attack] attack and +6 $getVar[health] health.
  L3: **Hurt** → Give one random friend +9 $getVar[attack] attack and +9 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "vulture",
      aliases: ["Vulture"], 
      code: `
  $title[Vulture]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 3 $getVar[health]
  L1: **Two friends faint** → Deal 4 $getVar[damage] damage to one random enemy.
  L2: **Two friends faint** → Deal 8 $getVar[damage] damage to one random enemy.
  L3: **Two friends faint** → Deal 12 $getVar[damage] damage to one random enemy.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "zebra",
      aliases: ["Zebra"], 
      code: `
  $title[Zebra]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 5 $getVar[health]
  L1: **Buy & Sell** → Give one random friend +2 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **Buy & Sell** → Give one random friend +4 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **Buy & Sell** → Give one random friend +6 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "beluga whale",
      aliases: ["Beluga Whale"], 
      code: `
  $title[Beluga Whale]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 8 $getVar[health]
  L1: **Eats food** → Swallow the left-most shop pet and release it as level 1 after fainting.
  L2: **Eats food** → Swallow the left-most shop pet and release it as level 2 after fainting.
  L3: **Eats food** → Swallow the left-most shop pet and release it as level 3 after fainting.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "blue ringed octopus",
      aliases: ["Blue Ringed Octopus"], 
      code: `
  $title[Blue Ringed Octopus]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 4 $getVar[health]
  L1: **Buy** → Give friends +1 $getVar[attack] attack and +1 $getVar[health] health.
  L2: **Buy** → Give friends +2 $getVar[attack] attack and +2 $getVar[health] health.
  L3: **Buy** → Give friends +3 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "crane",
      aliases: ["Crane"], 
      code: `
  $title[Crane]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 5 $getVar[health]
  L1: **Friend ahead hurt** → Give it $getVar[melon] Melon perk and +5 $getVar[attack] attack. Works 1 time per turn.
  L2: **Friend ahead hurt** → Give it $getVar[melon] Melon perk and +5 $getVar[attack] attack. Works 2 times per turn.
  L3: **Friend ahead hurt** → Give it $getVar[melon] Melon perk and +5 $getVar[attack] attack. Works 3 times per turn.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "egyption vulture",
      aliases: ["Egyption Vulture"], 
      code: `
  $title[Egyptian Vulture]
  $description[
  $getVar[tier5] 7 $getVar[attack] / 4 $getVar[health]
  L1: **Knock out** → Activate ability on the nearest **Faint** friend behind. Works 1 time per battle.
  L2: **Knock out** → Activate ability on the nearest **Faint** friend behind. Works 2 times per battle.
  L3: **Knock out** → Activate ability on the nearest **Faint** friend behind. Works 3 times per battle.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "emu",
      aliases: ["Emu"], 
      code: `
  $title[Emu]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Empty front space** → Push nearest friend ahead to the front and give it +4 $getVar[health] health in battle.
  L2: **Empty front space** → Push nearest friend ahead to the front and give it +8 $getVar[health] health in battle.
  L3: **Empty front space** → Push nearest friend ahead to the front and give it +12 $getVar[health] health in battle.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "fire ant",
      aliases: ["Fire Ant"], 
      code: `
  $title[Fire Ant]
  $description[
  $getVar[tier5] 6 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Give $getVar[attack] attack to the highest tier friend.
  L2: **Faint** → Give $getVar[attack] attack to the two highest tier friends.
  L3: **Faint** → Give $getVar[attack] attack to the three highest tier friends.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "macaque",
      aliases: ["Macaque"], 
      code: `
  $title[Macaque]
  $description[
  $getVar[tier5] 2 $getVar[attack] / 2 $getVar[health]
  L1: **Start of battle** → Summon one 12/12 $getVar[orangu] Orangutan with the same food perk as this.
  L2: **Start of battle** → Summon one 24/24 $getVar[orangu] Orangutan with the same food perk as this.
  L3: **Start of battle** → Summon one 36/36 $getVar[orangu] Orangutan with the same food perk as this.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "nurse shark",
      aliases: ["Nurse Shark"], 
      code: `
  $title[Nurse Shark]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 6 $getVar[health]
  L1: **Faint** → Spend up to 6 $getVar[trumpet] trumpets and deal triple as $getVar[damage] damage to one random enemy.
  L2: **Faint** → Spend up to 6 $getVar[trumpet] trumpets and deal triple as $getVar[damage] damage to two random enemies.
  L3: **Faint** → Spend up to 6 $getVar[trumpet] trumpets and deal triple as $getVar[damage] damage to three random enemies.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "nyala",
      aliases: ["Nyala"], 
      code: `
  $title[Nyala]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Gain +8 $getVar[trumpet] trumpets.
  L2: **Faint** → Gain +16 $getVar[trumpet] trumpets.
  L3: **Faint** → Gain +24 $getVar[trumpet] trumpets.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "silver fox",
      aliases: ["Silver Fox"], 
      code: `
  $title[Silver Fox]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 6 $getVar[health]
  L1: **Before attack** → Gain +1 $getVar[gold] gold on next turn. Works 3 times per battle.
  L2: **Before attack** → Gain +2 $getVar[gold] gold on next turn. Works 3 times per battle.
  L3: **Before attack** → Gain +3 $getVar[gold] gold on next turn. Works 3 times per battle.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "wolf",
      aliases: ["Wolf"], 
      code: `
  $title[Wolf]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Summon three 3/2 $getVar[pig] Pigs.
  L2: **Faint** → Summon three 6/4 $getVar[pig] Pigs.
  L3: **Faint** → Summon three 9/6 $getVar[pig] Pigs.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "alpaca",
      aliases: ["Alpaca"], 
      code: `
  $title[Alpaca]
  $description[
  $getVar[tier5] 3 $getVar[attack] / 7 $getVar[health]
  L1: **Friend summoned** → Give it +1 $getVar[exp] experience. Works 1 time per turn.
  L2: **Friend summoned** → Give it +1 $getVar[exp] experience. Works 2 times per turn.
  L3: **Friend summoned** → Give it +1 $getVar[exp] experience. Works 3 times per turn.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "hyena",
      aliases: ["Hyena"], 
      code: `
  $title[Hyena]
  $description[
  $getVar[tier5] 5 $getVar[attack] / 5 $getVar[health]
  L1: **Start of battle** → Swap attack and health of ALL pets.
  L2: **Start of battle** → Shuffle positions of ALL pets.
  L3: **Start of battle** → Swap attack and health and shuffle positions of ALL pets.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "moose",
      aliases: ["Moose"], 
      code: `
  $title[Moose]
  $description[
  $getVar[tier5] 5 $getVar[attack] / 6 $getVar[health]
  L1: **End turn** → Unfreeze shop and give one random friend +3 $getVar[health] health for each tier 1 shop pet.
  L2: **End turn** → Unfreeze shop and give one random friend +6 $getVar[health] health for each tier 1 shop pet.
  L3: **End turn** → Unfreeze shop and give one random friend +9 $getVar[health] health for each tier 1 shop pet.
  Pack: $getVar[custompa] Custom Packs
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "raccoon",
      aliases: ["Raccoon"], 
      code: `
  $title[Raccoon]
  $description[
  $getVar[tier5] 4 $getVar[attack] / 5 $getVar[health]
  L1: **Before attack** → Steal food perk from target. Works 1 time per battle.
  L2: **Before attack** → Steal food perk from target. Works 2 times per battle.
  L3: **Before attack** → Steal food perk from target. Works 3 times per battle.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },
]