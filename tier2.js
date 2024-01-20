module.exports = [
  {
    name: "crab",
    aliases: ["Crab"],
    code: `
    $title[Crab]
$description[
$getVar[tier2] 4 $getVar[attack] / 1 $getVar[health]
L1: **Start of battle** → Copy 50% of $getVar[health] from the most healthy friend.
L2: **Start of battle** → Copy 100% of $getVar[health] from the most healthy friend.
L3: **Start of battle** → Copy 150% of $getVar[health] from the most healthy friend.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "flamingo",
    aliases: ["Flamingo"],
    code: `
    $title[Flamingo]
$description[
$getVar[tier2] 3 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Give the two nearest friends behind +1 $getVar[attack] and +1 $getVar[health].
L2: **Faint** → Give the two nearest friends behind +2 $getVar[attack] and +2 $getVar[health].
L3: **Faint** → Give the two nearest friends behind +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "hedgehog",
    aliases: ["Hedgehog"],
    code: `
    $title[Hedgehog]
$description[
$getVar[tier2] 3 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Deal 2 $getVar[damage] to all.
L2: **Faint** → Deal 4 $getVar[damage] to all.
L3: **Faint** → Deal 6 $getVar[damage] to all.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "kangaroo",
    aliases: ["Kangaroo"],
    code: `
    $title[Kangaroo]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Friend ahead attacks** → Gain +1 $getVar[attack] and +1 $getVar[health].
L2: **Friend ahead attacks** → Gain +2 $getVar[attack] and +2 $getVar[health].
L3: **Friend ahead attacks** → Gain +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "peacock",
    aliases: ["Peacock"],
    code: `
    $title[Peacock]
$description[
$getVar[tier2] 2 $getVar[attack] / 5 $getVar[health]
L1: **Hurt** → Gain +4 $getVar[attack].
L2: **Hurt** → Gain +8 $getVar[attack].
L3: **Hurt** → Gain +12 $getVar[attack].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "rat",
    aliases: ["Rat"],
    code: `
    $title[Rat]
$description[
$getVar[tier2] 3 $getVar[attack] / 6 $getVar[health]
L1: **Faint** → Summon one 1/1 Dirty Rat up front for the opponent.
L2: **Faint** → Summon two 1/1 Dirty Rat up front for the opponent.
L3: **Faint** → Summon three 1/1 Dirty Rat up front for the opponent.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "snail",
    aliases: ["Snail"],
    code: `
    $title[Snail]
$description[
$getVar[tier2] 2 $getVar[attack] / 2 $getVar[health]
L1: **End turn** → If you lost last battle, give friends +1 $getVar[health].
L2: **End turn** → If you lost last battle, give friends +2 $getVar[health].
L3: **End turn** → If you lost last battle, give friends +3 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "spider",
    aliases: ["Spider"],
    code: `
    $title[Spider]
$description[
$getVar[tier2] 2 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Summon one level 1 tier 3 pet as a 2/2.
L2: **Faint** → Summon one level 2 tier 3 pets as a 4/4.
L3: **Faint** → Summon one level 3 tier 3 pets as a 6/6.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "swan",
    aliases: ["Swan"],
    code: `
    $title[Swan]
$description[
$getVar[tier2] 1 $getVar[attack] / 2 $getVar[health]
L1: **Start of turn** → Gain +1 $getVar[gold].
L2: **Start of turn** → Gain +2 $getVar[gold].
L3: **Start of turn** → Gain +3 $getVar[gold].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "worm",
    aliases: ["Worm"],
    code: `
    $title[Worm]
$description[
$getVar[tier2] 1 $getVar[attack] / 3 $getVar[health]
L1: **Start of turn** → Stock one 2-gold $getVar[apple].
L2: **Start of turn** → Stock one 2-gold Better $getVar[apple].
L3: **Start of turn** → Stock one 2-gold Best $getVar[apple].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "africanpenguin",
    aliases: ["AfricanPenguin", "African penguin", "African Penguin", "african Penguin", "african penguin", "Africanpenguin", "africanPenguin", "African-Penguin", "African-penguin", "african-Penguin", "african-penguin"],
    code: `
    $title[African Penguin]
$description[
$getVar[tier2] 1 $getVar[attack] / 3 $getVar[health]
L1: **Buy** → Give three random friends +1 $getVar[attack].
L2: **Buy** → Give three random friends +2 $getVar[attack].
L3: **Buy** → Give three random friends +3 $getVar[attack].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "blackneckedstilt",
    aliases: ["BlackneckedStilt", "Blacknecked stilt", "Blacknecked Stilt", "blacknecked Stilt", "blackneckedstilt", "Blackneckedstilt", "Blacknecked-Stilt", "Blacknecked-stilt", "blacknecked-Stilt", "blacknecked-stilt"],
    code: `
    $title[Blacknecked Stilt]
$description[
$getVar[tier2] 3 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Gain +2 $getVar[trumpet].
L2: **Faint** → Gain +4 $getVar[trumpet].
L3: **Faint** → Gain +6 $getVar[trumpet].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "doorheadant",
    aliases: ["Doorheadant", "Doorhead ant", "Doorhead Ant", "doorhead Ant", "doorheadant", "Doorheadant", "Doorhead-ant", "Doorhead-ant", "doorhead-Ant", "doorhead-ant"],
    code: `
    $title[Doorhead Ant]
$description[
$getVar[tier2] 2 $getVar[attack] / 2 $getVar[health]
L1: **Empty front space** → If in battle, push this to the front and gain +4 $getVar[health].
L2: **Empty front space** → If in battle, push this to the front and gain +8 $getVar[health].
L3: **Empty front space** → If in battle, push this to the front and gain +12 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "gazelle",
    aliases: ["Gazelle"],
    code: `
    $title[Gazelle]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Start of turn** → Gain +1 $getVar[attack] and +1 $getVar[health] until end of battle for each $getVar[gold] over 10.
L2: **Start of turn** → Gain +2 $getVar[attack] and +2 $getVar[health] until end of battle for each $getVar[gold] over 10.
L3: **Start of turn** → Gain +3 $getVar[attack] and +3 $getVar[health] until end of battle for each $getVar[gold] over 10.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "herculesbeetle",
    aliases: ["HerculesBeetle", "Hercules beetle", "Hercules Beetle", "hercules Beetle", "herculesbeetle", "Herculesbeetle", "Hercules-Beetle", "Hercules-beetle", "hercules-Beetle", "hercules-beetle"],
    code: `
    $title[Hercules Beetle]
$description[
$getVar[tier2] 3 $getVar[attack] / 4 $getVar[health]
L1: **Sell** → Give friends front-to-back +1 $getVar[attack] for each battle this has fought.
L2: **Sell** → Give friends front-to-back +2 $getVar[attack] for each battle this has fought.
L3: **Sell** → Give friends front-to-back +3 $getVar[attack] for each battle this has fought.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "lizard",
    aliases: ["Lizard"],
    code: `
    $title[Lizard]
$description[
$getVar[tier2] 1 $getVar[attack] / 3 $getVar[health]
L1: **Hurt** → Summon one 3/1 Lizard Tail. Works 2 times per turn.	
L2: **Hurt** → Summon one 6/2 Lizard Tail. Works 2 times per turn.
L3: **Hurt** → Summon one 9/3 Lizard Tail. Works 2 times per turn.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "seaturtle",
    aliases: ["Seaturtle", "Sea turtle", "Sea Turtle", "sea Turtle", "sea turtle", "Seaturtle", "Sea-turtle", "Sea-turtle", "sea-Turtle", "sea-turtle"],
    code: `
    $title[Sea Turtle]
$description[
$getVar[tier2] 2 $getVar[attack] / 5 $getVar[health]
L1: **Friend Summoned** → If in battle, give it +3 $getVar[health].
L2: **Friend Summoned** → If in battle, give it +6 $getVar[health].
L3: **Friend Summoned** → If in battle, give it +9 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "seaurchin",
    aliases: ["Seaurchin", "Sea urchin", "Sea urchin", "sea urchin", "seaurchin", "Seaurchin", "Sea-urchin", "Sea-urchin", "sea-Urchin", "sea-urchin"],
    code: `
    $title[Sea Urchin]
$description[
$getVar[tier2] 3 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Remove 5 $getVar[health] from the first enemy.
L2: **Faint** → Remove 5 $getVar[health] from the first two enemies.
L3: **Faint** → Remove 5 $getVar[health] from the first three enemies.
Pack: $getVar[goldenpa] Golden Pack]
$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "squid",
    aliases: ["Squid"],
    code: `
    $title[Squid]
$description[
$getVar[tier2] 5 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Spend 1 Trumpet to give the first enemy $getVar[ink].
L2: **Faint** → Spend 1 Trumpet to give the two first enemies $getVar[ink].
L3: **Faint** → Spend 1 Trumpet to give the three first enemies $getVar[ink].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "stoat",
    aliases: ["Stoat"],
    code: `
    $title[Stoat]
$description[
$getVar[tier2] 2 $getVar[attack] / 2 $getVar[health]
L1: **Sell** → Summon one level 1 pet from your current tier as a 1/1.
L2: **Sell** → Summon one level 2 pet from your current tier as a 1/1.
L3: **Sell** → Summon one level 3 pet from your current tier as a 1/1.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "atlanticpuffin",
    aliases: ["AtlanticPuffin", "Atlantic puffin", "Atlantic Puffin", "atlantic Puffin", "atlanticpuffin", "Atlantic-puffin", "Atlantic-puffin", "atlantic-Puffin", "atlantic-puffin"],
    code: `
    $title[Atlantic Puffin]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Deal 2 $getVar[damage] for each $getVar[straw] friend to one random enemy.
L2: **Start of battle** → Deal 2 $getVar[damage] for each $getVar[straw] friend to two random enemies.
L3: **Start of battle** → Deal 2 $getVar[damage] for each $getVar[straw] friend to three random enemies.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "dove",
    aliases: ["Dove"],
    code: `
    $title[Dove]
$description[
$getVar[tier2] 2 $getVar[attack] / 1 $getVar[health]
L1: **Faint** → Give two $getVar[straw] friends +2 $getVar[attack] and +2 $getVar[health].
L2: **Faint** → Give two $getVar[straw] friends +4 $getVar[attack] and +4 $getVar[health].
L3: **Faint** → Give two $getVar[straw] friends +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "guineapig",
    aliases: ["Guineapig", "Guinea pig", "Guinea Pig", "guinea Pig", "guinea pig", "Guinea-pig", "Guinea-pig", "guinea-Pig", "guinea-pig"],
    code: `
    $title[Guinea Pig]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Buy** → Summon one 1/1 Guinea Pig.
L2: **Buy** → Summon one 2/2 Guinea Pig.
L3: **Buy** → Summon one 3/3 Guinea Pig.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "iguana",
    aliases: ["Iguana"],
    code: `
    $title[Iguana]
$description[
$getVar[tier2] 3 $getVar[attack] / 3 $getVar[health]
L1: **Enemy summoned or pushed** → Deal 2 $getVar[damage] to it.
L2: **Enemy summoned or pushed** → Deal 4 $getVar[damage] to it
L3: **Enemy summoned or pushed** → Deal 6 $getVar[damage] to it.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "jellyfish",
    aliases: ["Jellyfish"],
    code: `
    $title[Jellyfish]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Friend level-up** → Gain +1 $getVar[attack] and +1 $getVar[health].
L2: **Friend level-up** → Gain +2 $getVar[attack] and +2 $getVar[health].
L3: **Friend level-up** → Gain +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "koala",
    aliases: ["Koala"],
    code: `
    $title[Koala]
$description[
$getVar[tier2] 3 $getVar[attack] / 2 $getVar[health]
L1: **Friend hurt** → Give it +1 $getVar[attack] and +1 $getVar[health]. Works 1 time per turn.
L2: **Friend hurt** → Give it +2 $getVar[attack] and +2 $getVar[health]. Works 1 time per turn.
L3: **Friend hurt** → Give it +3 $getVar[attack] and +3 $getVar[health]. Works 1 time per turn.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "panda",
    aliases: ["Panda"],
    code: `
    $title[Panda]
$description[
$getVar[tier2] 2 $getVar[attack] / 4 $getVar[health]
L1: **Start of battle** → If friend ahead, give 50% of $getVar[attack] and $getVar[health] to it and then faint.
L2: **Start of battle** → If friend ahead, give 100% of $getVar[attack] and $getVar[health] to it and then faint.
L3: **Start of battle** → If friend ahead, give 150% of $getVar[attack] and $getVar[health] to it and then faint.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "salamander",
    aliases: ["Salamander"],
    code: `
    $title[Salamander]
$description[
$getVar[tier2] 2 $getVar[attack] / 4 $getVar[health]
L1: **Friend bought** → If it has a Start of battle ability, gain +2 $getVar[attack]. Works 1 time per turn.
L2: **Friend bought** → If it has a Start of battle ability, gain +4 $getVar[attack]. Works 1 time per turn.
L3: **Friend bought** → If it has a Start of battle ability, gain +6 $getVar[attack]. Works 1 time per turn.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "stork",
    aliases: ["Stork"],
    code: `
    $title[Stork]
$description[
$getVar[tier2] 2 $getVar[attack] / 1 $getVar[health]
L1: **Faint** → Summon one level 1 pet from the previous shop tier as a 3/2.
L2: **Faint** → Summon one level 2 pet from the previous shop tier as a 6/4
L3: **Faint** → Summon one level 3 pet from the previous shop tier as a 9/6.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "yak",
    aliases: ["Yak"],
    code: `
    $title[Yak]
$description[
$getVar[tier2] 3 $getVar[attack] / 5 $getVar[health]
L1: **End turn** → Deal 1 $getVar[damage] to itself and gain +1 $getVar[attack].
L2: **End turn** → Deal 1 $getVar[damage] to itself and gain +2 $getVar[attack].
L3: **End turn** → Deal 1 $getVar[damage] to itself and gain +3 $getVar[attack].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "bat",
    aliases: ["Bat"],
    code: `
    $title[Bat]
$description[
$getVar[tier2] 1 $getVar[attack] / 2 $getVar[health]
L1: **Start of battle** → Make one random enemy $getVar[weak].
L2: **Start of battle** → Make two random enemy $getVar[weak].
L3: **Start of battle** → Make three random enemy $getVar[weak].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "belugasturgeon",
    aliases: ["Beluga Sturgeon" , "Beluga sturgeon", "beluga Sturgeon", "Beluga Sturgeon", "BelugaSturgeon", "Belugasturgeon", "belugaSturgeon", "Beluga-Sturgeon", "Beluga-sturgeon", "beluga-Sturgeon", "beluga-sturgeon"],
    code: `
    $title[Beluga Sturgeon]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Faint** → Summon one 2/3 Dolphin with $getVar[rice] in the back.
L2: **Faint** → Summon two 2/3 Dolphin with $getVar[rice] in the back.
L3: **Faint** → Summon three 2/3 Dolphin with $getVar[rice] in the back.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "dromedary",
    aliases: ["Dromedary"],
    code: `
    $title[Dromedary]
$description[
$getVar[tier2] 2 $getVar[attack] / 4 $getVar[health]
L1: **Start of turn** → Give the two left-most shop pets +1 $getVar[attack] and +1 $getVar[health].
L2: **Start of turn** → Give the two left-most shop pets +2 $getVar[attack] and +2 $getVar[health].
L3: **Start of turn** → Give the two left-most shop pets +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "frigatebird",
    aliases: ["Frigatebird"],
    code: `
    $title[Frigatebird]
$description[
$getVar[tier2] 2 $getVar[attack] / 5 $getVar[health]
L1: **Friend gained ailment** → Give it $getVar[rice]. Works 1 time per turn.
L2: **Friend gained ailment** → Give it $getVar[rice]. Works 2 times per turn.
L3: **Friend gained ailment** → Give it $getVar[rice]. Works 3 times per turn.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "lemur",
    aliases: ["Lemur"],
    code: `
    $title[Lemur]
$description[
$getVar[tier2] 3 $getVar[attack] / 3 $getVar[health]
L1: **Buy → Choose one level 1 toy from tier 2.
L2: **Buy → Choose one level 2 toy from tier 2.
L3: **Buy → Choose one level 3 toy from tier 2.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "mandrill",
    aliases: ["Mandrill"],
    code: `
    $title[Mandrill]
$description[
$getVar[tier2] 3 $getVar[attack] / 4 $getVar[health]
L1: **Faint → Break friendly tier 2 or lower toy.	
L2: **Faint → Break friendly tier 4 or lower toy.
L3: **Faint → Break friendly tier 6 or lower toy.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "robin",
    aliases: ["Robin"],
    code: `
    $title[Robin]
$description[
$getVar[tier2] 2 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Summon one 2/3 level 1 $getVar[nest] and give it $getVar[egg] Perk.
L2: **Start of battle** → Summon one 4/6 level 2 $getVar[nest] and give it $getVar[egg] Perk.
L3: **Start of battle** → Summon one 6/9 level 3 $getVar[nest] and give it $getVar[egg] Perk.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "shrimp",
    aliases: ["Shrimp"],
    code: `
    $title[Shrimp]
$description[
$getVar[tier2] 2 $getVar[attack] / 2 $getVar[health]
L1: **Friend sold** → Give one random friend +1 $getVar[health].
L2: **Friend sold** → Give two random friends +2 $getVar[health].
L3: **Friend sold** → Give three random friends +3 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "tabbycat",
    aliases: ["Tabby cat", "Tabby Cat", "tabby Cat", "Tabbycat", "tabbycat", "TabbyCat", "tabby-cat", "Tabby-cat", "tabby-Cat", "Tabby-Cat"],
    code: `
    $title[Tabby Cat]
$description[
$getVar[tier2] 4 $getVar[attack] / 2 $getVar[health]
L1: **Friendly gained perk** → Give two random friends +1 $getVar[health] until end of battle.
L2: **Friendly gained perk** → Give two random friends +2 $getVar[health] until end of battle.
L3: **Friendly gained perk** → Give two random friends +3 $getVar[health] until end of battle.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "toucan",
    aliases: ["Toucan"],
    code: `
    $title[Toucan]
$description[
$getVar[tier2] 3 $getVar[attack] / 3 $getVar[health]
L1: **Faint → Copy food perk to the nearest friend behind.
L2: **Faint → Copy food perk to the two nearest friends behind.
L3: **Faint → Copy food perk to the three nearest friends behind.
Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "wombat",
    aliases: ["Wombat"],
    code: `
    $title[Wombat]
$description[
$getVar[tier2] 3 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Copy Faint Ability as level 1 from the highest tier enemy.
L2: **Start of battle** → Copy Faint Ability as level 2 from the highest tier enemy.
L3: **Start of battle** → Copy Faint Ability as level 3 from the highest tier enemy.
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
];