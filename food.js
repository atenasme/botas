module.exports = [
  {
      name: "apple",
      aliases: ["Apple"], 
      code: `
  $title[Apple]
  $description[
  $getVar[tier1]
  Give one pet +1 $getVar[attack] attack and +1 $getVar[health] health. 
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "peach",
      aliases: ["Peach"], 
      code: `
  $title[Peach]
  $description[
  $getVar[tier1]
  Give one pet +2 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "bacon",
      aliases: ["Bacon"], 
      code: `
  $title[Bacon]
  $description[
  $getVar[tier1]
  Give one pet +2 $getVar[attack] attack.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "cookie",
      aliases: ["Cookie"], 
      code: `
  $title[Cookie]
  $description[
  $getVar[tier1]
  Give one pet +2 $getVar[attack] attack and +2 $getVar[health] health until end of battle.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "cupcake",
      aliases: ["Cupcake"], 
      code: `
  $title[Cupcake]
  $description[
  $getVar[tier2]
  Give one pet +3 $getVar[attack] attack and +3 $getVar[health] health until end of battle.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "sleeping pill",
      aliases: ["Sleeping Pill","Sleeping pill","pill","Pill"], 
      code: `
  $title[Sleeping Pill]
  $description[
  $getVar[tier2]
  Make one pet faint. Always on sale!
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "broccoli",
      aliases: ["Broccoli"], 
      code: `
  $title[Broccoli]
  $description[
  $getVar[tier2]
  Give one pet -1 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "fried shrimp",
      aliases: ["Fried Shrimp","Fried shrimp"], 
      code: `
  $title[Fried Shrimp]
  $description[
  $getVar[tier2]
  Give one pet +3 $getVar[attack] attack and -1 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "salad bowl",
      aliases: ["Salad Bowl","Salad bowl","Salad","salad"], 
      code: `
  $title[Salad Bowl]
  $description[
  $getVar[tier3]
  Give two random pets +1 $getVar[attack] attack and +1 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "lettuce",
      aliases: ["Lettuce"], 
      code: `
  $title[Lettuce]
  $description[
  $getVar[tier3]
  Give three pets from current shop tier or higher +1 $getVar[attack] attack and +1 $getVar[health] health.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "avocado",
      aliases: ["Avocado"], 
      code: `
  $title[Avocado]
  $description[
  $getVar[tier3]
  Gain 3 $getVar[gold] gold on the next turn.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "lollipop",
      aliases: ["Lollipop"], 
      code: `
  $title[Lollipop]
  $description[
  $getVar[tier3]
  Swap $getVar[attack] Attack and $getVar[health] Health of a pet.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "canned food",
      aliases: ["Canned Food","Canned food","Can","can"], 
      code: `
  $title[Canned Food]
  $description[
  $getVar[tier4]
  Give all current and future shop pets +1 $getVar[attack] attack and +1 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pear",
      aliases: ["Pear"], 
      code: `
  $title[Pear]
  $description[
  $getVar[tier4]
  Give one pet +2 $getVar[attack] attack and +2 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "waffle",
      aliases: ["Waffle"], 
      code: `
  $title[Waffle]
  $description[
  $getVar[tier4]
  Activate buy ability or give +3 $getVar[health] health.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "chocolate",
      aliases: ["Chocolate","Choco","choco"], 
      code: `
  $title[Chocolate]
  $description[
  $getVar[tier5]
  Give one pet +1 $getVar[exp] experience.
  Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "sushi",
      aliases: ["Sushi"], 
      code: `
  $title[Sushi]
  $description[
  $getVar[tier5]
  Give three random pets +1 $getVar[attack] attack and +1 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "stew",
      aliases: ["Stew"], 
      code: `
  $title[Stew]
  $description[
  $getVar[tier5]
  Give three random pets +2 $getVar[health] health.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "taco",
      aliases: ["Taco"], 
      code: `
  $title[Taco]
  $description[
  $getVar[tier5]
  Give three random pets +2 $getVar[attack] attack.
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "lasagna",
      aliases: ["Lasagna"], 
      code: `
  $title[Lasagna]
  $description[
  $getVar[tier5]
  Give one pet +2 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[puppypa] Puppy Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pizza",
      aliases: ["Pizza"], 
      code: `
  $title[Pizza]
  $description[
  $getVar[tier6]
  Give two random pets +2 $getVar[attack] attack and +2 $getVar[health] health.
  Pack: $getVar[turtlepa] Turtle Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "pretzel",
      aliases: ["Pretzel"], 
      code: `
  $title[Pretzel]
  $description[
  $getVar[tier6]
  Give one pet +2 $getVar[attack] attack and +2 $getVar[health] health. Double if all pets are tier 4 or higher.
  Pack: $getVar[goldenpa] Golden Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "hot dog",
      aliases: ["Hot Dog","Hot dog","Hotdog","hotdog"], 
      code: `
  $title[Hot Dog]
  $description[
  $getVar[tier6]
  Give two random pets +4 $getVar[attack] attack. 
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "orange",
      aliases: ["Orange"], 
      code: `
  $title[Orange]
  $description[
  $getVar[tier6]
  Give two random pets +4 $getVar[health] health. 
  Pack: $getVar[starpa] Star Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "chicken leg",
      aliases: ["Chicken Leg","Chicken leg"], 
      code: `
  $title[Chicken Leg]
  $description[
  $getVar[tier6]
  Give one pet +3 $getVar[attack] attack and +3 $getVar[health] health.
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "soft ice",
      aliases: ["Soft Ice","Soft ice","Ice Cream","Ice cream","ice cream"], 
      code: `
  $title[Soft Ice]
  $description[
  $getVar[tier6]
  Give all pets +1 $getVar[attack] attack. 
  Pack: $getVar[custompa] Custom Pack
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "bread crumbs",
      aliases: ["Bread Crumbs","Bread crumbs"], 
      code: `
  $title[Bread Crumbs]
  $description[
  $getVar[tier1]
  Give one pet +1 $getVar[attack] attack. 
  Pack: N/A
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "milk",
      aliases: ["Milk"], 
      code: `
  $title[Milk]
  $description[
  $getVar[tier1]
  Give one pet +1 $getVar[attack] attack and +2 $getVar[health] health.
  Pack: N/A
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "coconut",
      aliases: ["Coconut"], 
      code: `
  $title[Coconut]
  $description[
  $getVar[tier6]
  Ignore damage once.
  Pack: N/A
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "peanut",
      aliases: ["Peanut","Peanuts","peanuts"], 
      code: `
  $title[Peanut]
  $description[
  $getVar[tier6]
  Knockout any pet attacked and hurt by this.
  Pack: N/A
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },

  {
      name: "skewer",
      aliases: ["Skewer"], 
      code: `
  $title[Skewer]
  $description[
  $getVar[tier6]
  Attack second and third enemy for 3 $getVar[damage] damage.
  Pack: N/A
  ]

  $color[0000ff]

  $onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

      `,
  },
];