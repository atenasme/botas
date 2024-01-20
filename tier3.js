module.exports = [
  {
      name: "badger",
      aliases: ["Badger"], 
      code: `
  $title[Badger]
  $description[
  $getVar[tier3] 6 $getVar[attack] / 3 $getVar[health]
  L1: **Faint** → Deal 50% attack $getVar[damage] damage to ajacent pets.
  L2: **Faint** → Deal 100% attack $getVar[damage] damage to ajacent pets.
  L3: **Faint** → Deal 150% attack $getVar[damage] damage to ajacent pets.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "camel",
      aliases: ["Camel"], 
      code: `
  $title[Camel]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Hurt** → Give the nearest friend behind +1 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **Hurt** → Give the nearest friend behind +2 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **Hurt** → Give the nearest friend behind +3 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "dodo",
      aliases: ["Dodo"], 
      code: `
  $title[Dodo]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 2 $getVar[health]
  L1: **Start of battle** → Give 50% of $getVar[attack] attack to the nearest friend ahead.
  L2: **Start of battle** → Give 100% of $getVar[attack] attack to the nearest friend ahead.
  L3: **Start of battle** → Give 150% of $getVar[attack] attack to the nearest friend ahead.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "dog",
      aliases: ["Dog"], 
      code: `
  $title[Dog]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 2 $getVar[health]
  L1: **Friend summoned** → Gain +2 $getVar[attack] attack and +1 $getVar[health] health until end of battle.
  L2: **Friend summoned** → Gain +4 $getVar[attack] attack and +2 $getVar[health] health until end of battle.
  L3: **Friend summoned** → Gain +6 $getVar[attack] attack and +3 $getVar[health] health until end of battle.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "dolphin",
      aliases: ["Dolphin"], 
      code: `
  $title[Dolphin]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 3 $getVar[health]
  L1: **Start of battle** → Deal 4 $getVar[damage] damage to the lowest health enemy.
  L2: **Start of battle** → Deal 4 $getVar[damage] damage to the lowest health enemy. Triggers 2 times.
  L3: **Start of battle** → Deal 4 $getVar[damage] damage to the lowest health enemy. Triggers 3 times.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "elephant",
      aliases: ["Elephant"], 
      code: `
  $title[Elephant]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 7 $getVar[health]
  L1: **After attack** → Deal 1 $getVar[damage] damage to the nearest friend behind.
  L2: **After attack** → Deal 1 $getVar[damage] damage to the nearest friend behind. Triggers 2 times.
  L3: **After attack** → Deal 1 $getVar[damage] damage to the nearest friend behind. Triggers 3 times.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "giraffe",
      aliases: ["Giraffe"], 
      code: `
  $title[Giraffe]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 2 $getVar[health]
  L1: **End turn** → Give the nearest friend ahead +1 $getVar[attack] attack and +1 $getVar[health].
  L2: **End turn** → Give the nearest two friends ahead +1 $getVar[attack] attack and +1 $getVar[health].
  L3: **End turn** → Give the nearest three friends ahead +1 $getVar[attack] attack and +1 $getVar[health].
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "ox",
      aliases: ["Ox"], 
      code: `
  $title[Ox]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 3 $getVar[health]
  L1: **Friend ahead faints** → Gain the $getVar[melon] Melon perk and +1 $getVar[attack]. Works 1 time per turn.
  L2: **Friend ahead faints** → Gain the $getVar[melon] Melon perk and +1 $getVar[attack]. Works 2 times per turn.
  L3: **Friend ahead faints** → Gain the $getVar[melon] Melon perk and +1 $getVar[attack]. Works 3 times per turn.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "rabbit",
      aliases: ["Rabbit"], 
      code: `
  $title[Rabbit]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 2 $getVar[health]
  L1: **Friendly ate food** → Give them +1 $getVar[health] health. 
  L2: **Friendly ate food** → Give them +2 $getVar[health] health. 
  L3: **Friendly ate food** → Give them +3 $getVar[health] health. 
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "sheep",
      aliases: ["Sheep"], 
      code: `
  $title[Sheep]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 2 $getVar[health]
  L1: **Faint** → Summon two 2/2 $getVar[ram] Rams.
  L2: **Faint** → Summon two 4/4 $getVar[ram] Rams.
  L3: **Faint** → Summon two 6/6 $getVar[ram] Rams.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "flying squirrel",
      aliases: ["Flying Squirrel"], 
      code: `
  $title[Flying Squirrel]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 3 $getVar[health]
  L1: **Friendly toy broke** → Re-summon the toy, but its level can max be kept at 1.
  L2: **Friendly toy broke** → Re-summon the toy, but its level can max be kept at 2.
  L3: **Friendly toy broke** → Re-summon the toy, but its level can max be kept at 3.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "goldfish",
      aliases: ["Goldfish"], 
      code: `
  $title[Goldfish]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 5 $getVar[health]
  L1: **End turn** → Increase sell value by 1 $getVar[gold] gold.
  L2: **End turn** → Increase sell value by 2 $getVar[gold] gold.
  L3: **End turn** → Increase sell value by 3 $getVar[gold] gold.
  Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "hare",
      aliases: ["Hare"], 
      code: `
  $title[Hare]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Before attack** → Copy food perk from one random enemy. Works 1 time per battle.
  L2: **Before attack** → Copy food perk from one random enemy. Works 2 times per battle.
  L3: **Before attack** → Copy food perk from one random enemy. Works 3 times per battle.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "hatching chick",
      aliases: ["Hatching Chick"], 
      code: `
  $title[Hatching Chick]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 2 $getVar[health]
  L1: **End turn** → Give nearest friend ahead +3 $getVar[attack] and +3 $getVar[health] until the end of battle.
  L2: **End turn** → Give nearest friend ahead +2 $getVar[attack] and +2 $getVar[health].
  L3: **End turn** → Give nearest friend ahead +1 $getVar[exp] experience.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "hoopoe bird",
      aliases: ["Hoopoe Bird"], 
      code: `
  $title[Hoopeo Bird]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 2 $getVar[health]
  L1: **Faint** → Deal 2 $getVar[damage] damage to the first and last enemy.
  L2: **Faint** → Deal 4 $getVar[damage] damage to the first and last enemy.
  L3: **Faint** → Deal 6 $getVar[damage] damage to the first and last enemy.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "mole",
      aliases: ["Mole"], 
      code: `
  $title[Mole]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 3 $getVar[health]
  L1: **Faint** → Remove the two nearest friendly perks to summon one 6/6 Mole.
  L2: **Faint** → Remove the two nearest friendly perks to summon one 12/12 Mole.
  L3: **Faint** → Remove the two nearest friendly perks to summon one 18/18 Mole.
  Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "owl",
      aliases: ["Owl"], 
      code: `
  $title[Owl]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 2 $getVar[health]
  L1: **Start of turn** → Summon one level 1 $getVar[mouse] Mouse.
  L2: **Start of turn** → Summon one level 2 $getVar[mouse] Mouse.
  L3: **Start of turn** → Summon one level 3 $getVar[mouse] Mouse.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pangolin",
      aliases: ["Pangolin"], 
      code: `
  $title[Pangolin]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 5 $getVar[health]
  L1: **Faint** → If you have a toy, give nearest friend behind +5 $getVar[health] health.
  L2: **Faint** → If you have a toy, give nearest friend behind +10 $getVar[health] health.
  L3: **Faint** → If you have a toy, give nearest friend behind +15 $getVar[health] health.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "puppy",
      aliases: ["Puppy"], 
      code: `
  $title[Puppy]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 3 $getVar[health]
  L1: **Buy** → Choose one level 1 toy from tier 3.
  L2: **Buy** → Choose one level 2 toy from tier 3.
  L3: **Buy** → Choose one level 3 toy from tier 3.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "tropical fish",
      aliases: ["Tropical Fish"], 
      code: `
  $title[Tropical Fish]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 4 $getVar[health]
  L1: **End turn** → Give adjacent friends +1 $getVar[health] health.
  L2: **End turn** → Give adjacent friends +2 $getVar[health] health.
  L3: **End turn** → Give adjacent friends +3 $getVar[health] health.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "anteater",
      aliases: ["Anteater"], 
      code: `
  $title[Anteater]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 2 $getVar[health]
  L1: **Faint** → Summon one 1/1 level 3 $getVar[ant] Ant.
  L2: **Faint** → Summon two 1/1 level 3 $getVar[ant] Ants.
  L3: **Faint** → Summon three 1/1 level 3 $getVar[ant] Ants.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "capybara",
      aliases: ["Capybara"], 
      code: `
  $title[Capybara]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 5 $getVar[health]
  L1: **Roll** → Give unfrozen shop pets +2 $getVar[attack] attack and +1 $getVar[health] health.
  L2: **Roll** → Give unfrozen shop pets +4 $getVar[attack] attack and +2 $getVar[health] health.
  L3: **Roll** → Give unfrozen shop pets +6 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "cassowary",
      aliases: ["Cassowary"], 
      code: `
  $title[Cassowary]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 4 $getVar[health]
  L1: **End turn** → If this has a $getVar[straw] Strawberry friend, gain +1 $getVar[attack] attack and +1 $getVar[health] health.
  L2: **End turn** → If this has a $getVar[straw] Strawberry friend, gain +2 $getVar[attack] attack and +2 $getVar[health] health.
  L3: **End turn** → If this has a $getVar[straw] Strawberry friend, gain +3 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "eel",
      aliases: ["Eel"], 
      code: `
  $title[Eel]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 2 $getVar[health]
  L1: **Start of battle** → Gain 50% $getVar[health] health.
  L2: **Start of battle** → Gain 100% $getVar[health] health.
  L3: **Start of battle** → Gain 150% $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "leech",
      aliases: ["Leech"], 
      code: `
  $title[Leech]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 2 $getVar[health]
  L1: **End turn** → Deal 1 $getVar[damage] damage to the nearest friend ahead and gain +1 $getVar[health] health.
  L2: **End turn** → Deal 1 $getVar[damage] damage to the nearest friend ahead and gain +2 $getVar[health] health.
  L3: **End turn** → Deal 1 $getVar[damage] damage to the nearest friend ahead and gain +3 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "okapi",
      aliases: ["Okapi"], 
      code: `
  $title[Okapi]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 3 $getVar[health]
  L1: **Roll** → Gain +1 $getVar[attack] and +1 $getVar[health] health until end of battle. Works 5 times per turn.
  L2: **Roll** → Gain +2 $getVar[attack] and +2 $getVar[health] health until end of battle. Works 5 times per turn.
  L3: **Roll** → Gain +3 $getVar[attack] and +3 $getVar[health] health until end of battle. Works 5 times per turn.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pug",
      aliases: ["Pug"], 
      code: `
  $title[Pug]
  $description[
  $getVar[tier3] 5 $getVar[attack] / 2 $getVar[health]
  L1: **Start of battle** → Give the nearest friend ahead +1 $getVar[exp] experience.
  L2: **Start of battle** → Give the nearest friend ahead +2 $getVar[exp] experience.
  L3: **Start of battle** → Give the nearest friend ahead +3 $getVar[exp] experience.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "toad",
      aliases: ["Toad"], 
      code: `
  $title[Toad]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 3 $getVar[health]
  L1: **Enemy hurt** → Make it $getVar[weak] Weak. Works 2 times per battle.
  L2: **Enemy hurt** → Make it $getVar[weak] Weak. Works 4 times per battle.
  L3: **Enemy hurt** → Make it $getVar[weak] Weak. Works 6 times per battle.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "woodpecker",
      aliases: ["Woodpecker"], 
      code: `
  $title[Wooodpecker]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 3 $getVar[health]
  L1: **Start of battle** → Deal 2 $getVar[damage] damage to the nearest two pets ahead.
  L2: **Start of battle** → Deal 2 $getVar[damage] damage to the nearest two pets ahead. Triggers 2 times.
  L3: **Start of battle** → Deal 2 $getVar[damage] damage to the nearest two pets ahead. Triggers 3 times.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "baboon",
      aliases: ["Baboon"], 
      code: `
  $title[Baboon]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 2 $getVar[health]
  L1: **End turn** → Give one random friend from the current shop tier +1 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **End turn** → Give one random friend from the current shop tier +2 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **End turn** → Give one random friend from the current shop tier +3 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "betta fish",
      aliases: ["Betta Fish"], 
      code: `
  $title[Betta Fish]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 3 $getVar[health]
  L1: **Faint** → Give the nearest friend behind +4 $getVar[attack] attack and +2 $getVar[health] health.
  L2: **Faint** → Give the nearest friend behind +8 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **Faint** → Give the nearest friend behind +12 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "flea",
      aliases: ["Flea"], 
      code: `
  $title[Flea]
  $description[
  $getVar[tier3] 4 $getVar[attack] / 2 $getVar[health]
  L1: **Faint** → Make the most healthy enemy $getVar[weak] Weak.
  L2: **Faint** → Make the two most healthy enemies $getVar[weak] Weak.
  L3: **Faint** → Make the three most healthy enemies $getVar[weak] Weak.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "flying fish",
      aliases: ["Flying Fish"], 
      code: `
  $title[Flying Fish]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 2 $getVar[health]
  L1: **Friend summoned** → If in battle, give it +2 $getVar[exp] experience. Works 2 times per turn.
  L2: **Friend summoned** → If in battle, give it +4 $getVar[exp] experience. Works 2 times per turn.
  L3: **Friend summoned** → If in battle, give it +6 $getVar[exp] experience. Works 2 times per turn.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "guineafowl",
      aliases: ["Guineafowl"], 
      code: `
  $title[Guineafowl]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 4 $getVar[health]
  L1: **Hurt** → Gain +2 $getVar[trumpet] Trumpets.
  L2: **Hurt** → Gain +4 $getVar[trumpet] Trumpets.
  L3: **Hurt** → Gain +6 $getVar[trumpet] Trumpets.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "meerkat",
      aliases: ["Meerkat"], 
      code: `
  $title[Meerkat]
  $description[
  $getVar[tier3] 1 $getVar[attack] / 3 $getVar[health]
  L1: **Start of battle** → Give adjacent friends +1 $getVar[attack] attack for every 3 $getVar[gold] gold spent this turn.
  L2: **Start of battle** → Give adjacent friends +2 $getVar[attack] attack for every 3 $getVar[gold] gold spent this turn.
  L3: **Start of battle** → Give adjacent friends +3 $getVar[attack] attack for every 3 $getVar[gold] gold spent this turn.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "musk ox",
      aliases: ["Musk Ox"], 
      code: `
  $title[Musk Ox]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 4 $getVar[health]
  L1: **Friend ahead faints** → Gain +1 $getVar[attack] attack and +2 $getVar[health] health until end of battle.
  L2: **Friend ahead faints** → Gain +2 $getVar[attack] attack and +4 $getVar[health] health until end of battle.
  L3: **Friend ahead faints** → Gain +3 $getVar[attack] attack and +6 $getVar[health] health until end of battle.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "osprey",
      aliases: ["Osprey"], 
      code: `
  $title[Osprey]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 3 $getVar[health]
  L1: **Faint** → Summon one 2/1 $getVar[groundhog] Groundhog.
  L2: **Faint** → Summon two 2/1 $getVar[groundhog] Groundhogs.
  L3: **Faint** → Summon three 2/1 $getVar[groundhog] Groundhogs.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "royal flycatcher",
      aliases: ["Royal Flycatcher"], 
      code: `
  $title[Royal Flycatcher]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 4 $getVar[health]
  L1: **Enemy summoned** → Deal 3 $getVar[damage] damage to one random enemy.
  L2: **Enemy summoned** → Deal 6 $getVar[damage] damage to one random enemy.
  L3: **Enemy summoned** → Deal 9 $getVar[damage] damage to one random enemy.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "surgeon fish",
      aliases: ["Surgeon Fish"], 
      code: `
  $title[Surgeon Fish]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 3 $getVar[health]
  L1: **Before attack** → Spend 2 $getVar[trumpet] trumpets to give nearest friend behind +6 $getVar[health] health.
  L2: **Before attack** → Spend 2 $getVar[trumpet] trumpets to give nearest friend behind +12 $getVar[health] health.
  L3: **Before attack** → Spend 2 $getVar[trumpet] trumpets to give nearest friend behind +18 $getVar[health] health.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "weasel",
      aliases: ["Weasel"], 
      code: `
  $title[Weasel]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 4 $getVar[health]
  L1: **Faint** → Gain +1 $getVar[gold] gold on next turn.
  L2: **Faint** → Gain +2 $getVar[gold] gold on next turn.
  L3: **Faint** → Gain +3 $getVar[gold] gold on next turn.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "aardvark",
      aliases: ["Aardvark"], 
      code: `
  $title[Aardvark]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 3 $getVar[health]
  L1: **Enemy summoned** → Gain +2 $getVar[attack] attack and +2 $getVar[health] health. 
  L2: **Enemy summoned** → Gain +4 $getVar[attack] attack and +4 $getVar[health] health.
  L3: **Enemy summoned** → Gain +6 $getVar[attack] attack and +6 $getVar[health] health.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "bear",
      aliases: ["Bear"], 
      code: `
  $title[Bear]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 5 $getVar[health]
  L1: **Faint** → Give $getVar[honey] Honey perk to all pets that are one space away.
  L2: **Faint** → Give $getVar[honey] Honey perk to all pets that are two spaces away.
  L3: **Faint** → Give $getVar[honey] Honey perk to all pets that are three spaces away.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "emeperor tamarin",
      aliases: ["Emperor Tamarin"], 
      code: `
  $title[Emperor Tamarin]
  $description[
  $getVar[tier3] 3 $getVar[attack] / 3 $getVar[health]
  L1: **Sell** → Give 33% $getVar[attack] attack and $getVar[health] health to the leftmost shop pet.
  L2:  **Sell** → Give 66% $getVar[attack] attack and $getVar[health] health to the leftmost shop pet.
  L3:  **Sell** → Give 100% $getVar[attack] attack and $getVar[health] health to the leftmost shop pet.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "porcupine",
      aliases: ["Porcupine"], 
      code: `
  $title[Porcupine]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 6 $getVar[health]
  L1: **Hurt** → Deal 3 $getVar[damage] damage directly back.
  L2: **Hurt** → Deal 6 $getVar[damage] damage directly back.
  L3: **Hurt** → Deal 9 $getVar[damage] damage directly back.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "wasp",
      aliases: ["Wasp"], 
      code: `
  $title[Wasp]
  $description[
  $getVar[tier3] 2 $getVar[attack] / 2 $getVar[health]
  L1: **Shop tier upgraded** → Gain +50% $getVar[attack] attack.
  L2: **Shop tier upgraded** → Gain +100% $getVar[attack] attack.
  L3: **Shop tier upgraded** → Gain +150% $getVar[attack] attack.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },
]