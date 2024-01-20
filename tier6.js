module.exports = [
  {
    name: "boar",
    aliases: ["Boar"], 
    code: `
  $title[Boar]
$description[
$getVar[tier6] 10 $getVar[attack] 6 $getVar[health]
L1: **Before attack** → Gain +4 $getVar[attack] and +2 $getVar[health].
L2: **Before attack** → Gain +8 $getVar[attack] and +4 $getVar[health].
L3: **Before attack** → Gain +12 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "cat",
    aliases: ["Cat"], 
    code: `
  $title[Cat]
$description[
$getVar[tier6] 4 $getVar[attack] 5 $getVar[health]
L1: Food gives double $getVar[health] health and $getVar[attack] attack. Works 2 times per turn.
L2: Food gives triple $getVar[health] health and $getVar[attack] attack. Works 2 times per turn.
L3: Food gives quadruple $getVar[health] health and $getVar[attack] attack. Works 2 times per turn.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "dragon",
    aliases: ["Dragon"], 
    code: `
  $title[Dragon]
$description[
$getVar[tier6] 6 $getVar[attack] 8 $getVar[health]
L1: **Tier 1 friend bought** → Give friends +1 $getVar[attack] and +1 $getVar[health].
L2: **Tier 1 friend bought** → Give friends +2 $getVar[attack] and +2 $getVar[health].
L3: **Tier 1 friend bought** → Give friends +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "fly",
    aliases: ["Fly"], 
    code: `
  $title[Fly]
$description[
$getVar[tier6] 5 $getVar[attack] 5 $getVar[health]
L1: **Friend faints** → Summon one 4/4 $getVar[zfly] in its place. Works 3 times per turn.
L2: **Friend faints** → Summon one 8/8 $getVar[zfly] in its place. Works 3 times per turn.
L3: **Friend faints** → Summon one 12/12 $getVar[zfly] in its place. Works 3 times per turn.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "gorilla",
    aliases: ["Gorilla"], 
    code: `
  $title[Gorilla]
$description[
$getVar[tier6] 7 $getVar[attack] 10 $getVar[health]
L1: **Hurt** → Gain $getVar[coconut] Coconut 1 time per battle.	
L2: **Hurt** → Gain $getVar[coconut] Coconut 2 times per battle.
L3: **Hurt** → Gain $getVar[coconut] Coconut 3 times per battle.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "leopard",
    aliases: ["Leopard"], 
    code: `
  $title[Leopard]
$description[
$getVar[tier6] 10 $getVar[attack] 4 $getVar[health]
L1: **Start of battle** → Deal 50% attack $getVar[damage] to one random enemy.	
L2: **Start of battle** → Deal 50% attack $getVar[damage] to two random enemies.
L3: **Start of battle** → Deal 50% attack $getVar[damage] to three random enemies.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "mammoth",
    aliases: ["Mammoth"], 
    code: `
  $title[Mammoth]
$description[
$getVar[tier6] 3 $getVar[attack] 10 $getVar[health]
L1: **Faint** → Give all friends +2 $getVar[attack] and +2 $getVar[health].
L2: **Faint** → Give all friends +4 $getVar[attack] and +4 $getVar[health].
L3: **Faint** → Give all friends +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "snake",
    aliases: ["Snake"], 
    code: `
  $title[Snake]
$description[
$getVar[tier6] 6 $getVar[attack] 6 $getVar[health]
L1: **Friend ahead attacks** → Deal 5 $getVar[damage] to one random enemy.
L2: **Friend ahead attacks** → Deal 10 $getVar[damage] to one random enemy.
L3: **Friend ahead attacks** → Deal 15 $getVar[damage] to one random enemy.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "tiger",
    aliases: ["Tiger"],
    code: `
  $title[Tiger]
$description[
That's me!
$getVar[tier6] 6 $getVar[attack] 4 $getVar[health]
L1: The friend ahead repeats their ability in battle as if they were level 1.	
L2: The friend ahead repeats their ability in battle as if they were level 2.
L3: The friend ahead repeats their ability in battle as if they were level 3.
Pack: $getVar[turtlepa] Turtle Pack]
$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "wolverine",
    aliases: ["Wolverine"],
    code: `
  $title[Wolverine]
$description[
$getVar[tier6] 5 $getVar[attack] 4 $getVar[health]
L1: Adjacent friendly abilities deal 3 $getVar[damage] extra.
L2: Adjacent friendly abilities deal 6 $getVar[damage] extra.
L3: Adjacent friendly abilities deal 9 $getVar[damage] extra.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "birdofparadise",
    aliases: ["Bird of Paradise", "bird of paradise", "Bird of paradise"],
    code: `
  $title[Bird of Paradise]
$description[
$getVar[tier6] 3 $getVar[attack] 3 $getVar[health]
L1: **Spend 7 gold** → Give three random friends +1 $getVar[attack] and +1 $getVar[health].
L2: **Spend 7 gold** → Give three random friends +2 $getVar[attack] and +2 $getVar[health].
L3: **Spend 7 gold** → Give three random friends +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "catfish",
    aliases: ["Catfish"],
    code: `
  $title[Catfish]
$description[
$getVar[tier6] 3 $getVar[attack] 3 $getVar[health]
L1: **Start of turn** → Spend 1 $getVar[gold] to activate Buy ability on the nearest friend ahead.
L2: **Start of turn** → Spend 1 $getVar[gold] to activate Buy ability on the nearest friend ahead. Triggers 2 times.
L3: **Start of turn** → Spend 1 $getVar[gold] to activate Buy ability on the nearest friend ahead. Triggers 3 times.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "cobra",
    aliases: ["Cobra"],
    code: `
  $title[Cobra]
$description[
$getVar[tier6] 12 $getVar[attack] 6 $getVar[health]
L1: **Friend ahead attacks** → Deal 20% attack $getVar[damage] to one random enemy.
L2: **Friend ahead attacks** → Deal 40% attack $getVar[damage] to one random enemy.
L3: **Friend ahead attacks** → Deal 60% attack $getVar[damage] to one random enemy.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "germanshepherd",
    aliases: ["German Shepherd", "german shepherd", "German shepherd"],
    code: `
  $title[German Shepherd]
$description[
$getVar[tier6] 10 $getVar[attack] 4 $getVar[health]
L1: **Friend summoned** → Give 25% of $getVar[attack] to it until end of battle.
L2: **Friend summoned** → Give 50% of $getVar[attack] to it until end of battle.
L3: **Friend summoned** → Give 75% of $getVar[attack] to it until end of battle.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
    
  },
  {
    name: "grizzlybear",
    aliases: ["Grizzly Bear", "grizzly bear", "Grizzly bear"],
    code: `
  $title[Grizzly Bear]
$description[
$getVar[tier6] 6 $getVar[attack] 6 $getVar[health]
L1: **Five friendly attacks** → Deal 6 $getVar[damage] to two random enemies.
L2: **Five friendly attacks** → Deal 12 $getVar[damage] to two random enemies.
L3: **Five friendly attacks** → Deal 18 $getVar[damage] to two random enemies.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "highlandcow",
    aliases: ["Highland Cow", "highland cow", "Highland Cow"],
    code: `
  $title[Highland Cow]
$description[
$getVar[tier6] 4 $getVar[attack] 12 $getVar[health]
L1: **Start of battle** → Gain +1 $getVar[trumpet] for each 3 $getVar[health] Health this has.
L2: **Start of battle** → Gain +2 $getVar[trumpet] for each 3 $getVar[health] Health this has.
L3: **Start of battle** → Gain +3 $getVar[trumpet] for each 3 $getVar[health] Health this has.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
    
  },
  {
    name: "oyster",
    aliases: ["Oyster"],
    code: `
  $title[Oyster]
$description[
$getVar[tier6] 2 $getVar[attack] 10 $getVar[health]
L1: **Sell** → Gain +3 $getVar[gold].
L2: **Sell** → Gain +6 $getVar[gold].
L3: **Sell** → Gain +9 $getVar[gold].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "pteranodon",
    aliases: ["Pteranodon"],
    code: `
  $title[Pteranodon]
$description[
$getVar[tier6] 5 $getVar[attack] 3 $getVar[health]
L1: **Friend faints** → Re-summon it behind this as a 1/1. Works 1 time per turn.
L2: **Friend faints** → Re-summon it behind this as a 1/1. Works 2 times per turn.
L3: **Friend faints** → Re-summon it behind this as a 1/1. Works 3 times per turn.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "warthog",
    aliases: ["Warthog"],
    code: `
  $title[Warthog]
$description[
$getVar[tier6] 9 $getVar[attack] 6 $getVar[health]
L1: **Faint** → Give random friends +1 $getVar[attack] and +1 $getVar[health] for every 3 attack this has.
L2: **Faint** → Give random friends +2 $getVar[attack] and +2 $getVar[health] for every 3 attack this has.
L3: **Faint** → Give random friends +3 $getVar[attack] and +3 $getVar[health] for every 3 attack this has.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "wildebeest",
    aliases: ["Wildebeest"],
    code: `
  $title[Wildebeest]
$description[
$getVar[tier6] 8 $getVar[attack] 6 $getVar[health]
L1: **Before attack** → Spend 4 $getVar[trumpet] to gain $getVar[coconut]. Works 1 time per battle.
L2: **Before attack** → Spend 8 $getVar[trumpet] to gain $getVar[coconut]. Works 2 times per battle.
L3: **Before attack** → Spend 12 $getVar[trumpet] to gain $getVar[coconut]. Works 3 times per battle.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "hammerheadshark",
    aliases: ["Hammerhead Shark", "hammerhead shark", "Hammerhead shark"],
    code: `
  $title[Hammerhead Shark]
$description[
$getVar[tier6] 5 $getVar[attack] 5 $getVar[health]
L1: **Start of turn** → If this has a level 3 friend, gain +3 $getVar[gold].
L2: **Start of turn** → If this has a level 3 friend, gain +6 $getVar[gold].
L3: **Start of turn** → If this has a level 3 friend, gain +9 $getVar[gold].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "komodo",
    aliases: ["Komodo"],
    code: `
  $title[Komodo]
$description[
$getVar[tier6] 6 $getVar[attack] 6 $getVar[health]
L1: **End turn** → Give friends ahead +1 $getVar[attack] and +1 $getVar[health] and then shuffle their positions.
L2: **End turn** → Give friends ahead +2 $getVar[attack] and +2 $getVar[health] and then shuffle their positions.
L3: **End turn** → Give friends ahead +3 $getVar[attack] and +3 $getVar[health] and then shuffle their positions.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "orca",
    aliases: ["Orca"],
    code: `
  $title[Orca]
$description[
$getVar[tier6] 4 $getVar[attack] 8 $getVar[health]
L1: **Faint** → Summon one random pet with Faint ability from any pack.
L2: **Faint** → Summon two random pets with Faint ability from any pack.
L3: **Faint** → Summon three random pets with Faint ability from any pack.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "ostrich",
    aliases: ["Ostrich"],
    code: `
  $title[Ostrich]
$description[
$getVar[tier6] 2 $getVar[attack] 8 $getVar[health]
L1: **End turn** → Gain +1 $getVar[attack] and +1 $getVar[health] for every $getVar[tier5] tier 5 pet or higher in the shop.
L2: **End turn** → Gain +2 $getVar[attack] and +2 $getVar[health] for every $getVar[tier5] tier 5 pet or higher in the shop.
L3: **End turn** → Gain +3 $getVar[attack] and +3 $getVar[health] for every $getVar[tier5] tier 5 pet or higher in the shop.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "piranha",
    aliases: ["Piranha"],
    code: `
  $title[Piranha]
$description[
$getVar[tier6] 10 $getVar[attack] 4 $getVar[health]
L1: **Hurt** → Give friends +3 $getVar[attack].
L2: **Hurt** → Give friends +6 $getVar[attack].
L3: **Hurt** → Give friends +9 $getVar[attack].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "reindeer",
    aliases: ["Reindeer"],
    code: `
  $title[Reindeer]
$description[
$getVar[tier6] 6 $getVar[attack] 4 $getVar[health]
L1: **Before attack** → Gain $getVar[melon]. Works 1 time per battle.
L2: **Before attack** → Gain $getVar[melon]. Works 2 times per battle.
L3: **Before attack** → Gain $getVar[melon]. Works 3 times per battle.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "sabertooth",
    aliases: ["Sabertooth"],
    code: `
  $title[Sabertooth]
$description[
$getVar[tier6] 6 $getVar[attack] 6 $getVar[health]
L1: **Hurt** → Summon one random tier 1 pet as a 5/5.
L2: **Hurt** → Summon two random tier 1 pets as a 10/10.
L3: **Hurt** → Summon three random tier 1 pets as a 15/15.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "spinosaurus",
    aliases: ["Spinosaurus"],
    code: `
  $title[Spinosaurus]
$description[
$getVar[tier6] 4 $getVar[attack] 8 $getVar[health]
L1: **Friend faints** → Give one random friend +3 $getVar[attack] and +2 $getVar[health].
L2: **Friend faints** → Give one random friend +6 $getVar[attack] and +4 $getVar[health].
L3: **Friend faints** → Give one random friend +9 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "stegosaurus",
    aliases: ["Stegosaurus"],
    code: `
  $title[Stegosaurus]
$description[
$getVar[tier6] 3 $getVar[attack] 8 $getVar[health]
L1: **Start of battle** → Give one random friend without held food +1 $getVar[attack] and +1 $getVar[health] until end of battle. Multiply with turn number.
L2: **Start of battle** → Give one random friend without held food +2 $getVar[attack] and +2 $getVar[health] until end of battle. Multiply with turn number.
L3: **Start of battle** → Give one random friend without held food +3 $getVar[attack] and +3 $getVar[health] until end of battle. Multiply with turn number.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "velociraptor",
    aliases: ["Velociraptor"],
    code: `
  $title[Velociraptor]
$description[
$getVar[tier6] 3 $getVar[attack] 2 $getVar[health]
L1: **Start of battle** → Give $getVar[coconut] to one random $getVar[straw] friend.
L2: **Start of battle** → Give $getVar[coconut] to one random $getVar[straw] friend.
L3: **Start of battle** → Give $getVar[coconut] to one random $getVar[straw] friend.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "anglerfish",
    aliases: ["Anglerfish"],
    code: `
  $title[Anglerfish]
$description[
$getVar[tier6] 7 $getVar[attack] 4 $getVar[health]
L1: **Buy** → Choose one free pet from your last opponent to stock.
L2: **Buy** → Choose one free pet from your last opponent to stock twice.
L3: **Buy** → Choose one free pet from your last opponent to stock thrice.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "elephantseal",
    aliases: ["Elephant seal", "elephant seal", "ElephantSeal", "Elephantseal"],
    code: `
  $title[Elephant Seal]
$description[
$getVar[tier6] 3 $getVar[attack] 9 $getVar[health]
L1: **Gain perk** → Give friends +1 $getVar[attack] and +1 $getVar[health]. Double in battle.
L2: **Gain perk** → Give friends +2 $getVar[attack] and +2 $getVar[health]. Double in battle.
L3: **Gain perk** → Give friends +3 $getVar[attack] and +3 $getVar[health]. Double in battle.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "lionfish",
    aliases: ["Lionfish"],
    code: `
  $title[Lionfish]
$description[
$getVar[tier6] 8 $getVar[attack] 4 $getVar[health]
L1: **Faint** → Deal 3 $getVar[damage] to one random enemy. Repeat for each 10 attack this has.
L2: **Faint** → Deal 6 $getVar[damage] to one random enemy. Repeat for each 10 attack this has.
L3: **Faint** → Deal 9 $getVar[damage] to one random enemy. Repeat for each 10 attack this has.
Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "mantisshrimp",
    aliases: ["Mantis shrimp", "mantis hsrimp", "MantisShrimp", "Mantisshrimp"],
    code: `
  $title[Mantis Shrimp]
$description[
$getVar[tier6] 9 $getVar[attack] 3 $getVar[health]
L1: **Start of battle** → Deal 10 $getVar[damage] to the first enemy.
L2: **Start of battle** → Deal 10 $getVar[damage] to the first enemy. Triggers 2 times.
L3: **Start of battle** → Deal 10 $getVar[damage] to the first enemy. Triggers 3 times.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "mongoose",
    aliases: ["Mongoose"],
    code: `
  $title[Mongoose]
$description[
$getVar[tier6] 4 $getVar[attack] 3 $getVar[health]
L1: **Buy** → Choose one level 1 toy from tier 6.	
L2: **Buy** → Choose one level 2 toy from tier 6.
L3: **Buy** → Choose one level 3 toy from tier 6.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "octopus",
    aliases: ["Octopus"],
    code: `
  $title[Octopus]
$description[
$getVar[tier6] 8 $getVar[attack] 8 $getVar[health]
L1: **After attack** → Deal 6 $getVar[damage] to one random enemy.	
L2: **After attack** → Deal 6 $getVar[damage] to two random enemies.
L3: **After attack** → Deal 6 $getVar[damage] to three random enemies.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "puma",
    aliases: ["Puma"],
    code: `
  $title[Puma]
$description[
$getVar[tier6] 6 $getVar[attack] 5 $getVar[health]
L1: Friendly toy repeats its ability as level 1.
L2: Friendly toy repeats its ability as level 2.
L3: Friendly toy repeats its ability as level 3.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "sauropod",
    aliases: ["Sauropod"],
    code: `
  $title[Sauropod]
$description[
$getVar[tier6] 4 $getVar[attack] 12 $getVar[health]
L1: **Shop food bought** → Gain +1 $getVar[gold]. Works 3 times per turn.
L2: **Shop food bought** → Gain +2 $getVar[gold]. Works 3 times per turn.
L3: **Shop food bought** → Gain +3 $getVar[gold]. Works 3 times per turn.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "tyrannosaurus",
    aliases: ["Tyrannosaurus"],
    code: `
  $title[Tyrannosaurus]
$description[
$getVar[tier6] 6 $getVar[attack] 4 $getVar[health]
L1: **End turn** → Give two tier 5 friends or higher +2 $getVar[attack] and +1 $getVar[health].
L2: **End turn** → Give two tier 5 friends or higher +4 $getVar[attack] and +2 $getVar[health].
L3: **End turn** → Give two tier 5 friends or higher +6 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "lioness",
    aliases: ["Lioness"],
    code: `
  $title[Lioness]
$description[
$getVar[tier6] 4 $getVar[attack] 5 $getVar[health]
L1: **End turn** → Give current and future shop pets +2 $getVar[attack] and +2 $getVar[health].
L2: **End turn** → Give current and future shop pets +4 $getVar[attack] and +4 $getVar[health].
L3: **End turn** → Give current and future shop pets +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "tapir",
    aliases: ["Tapir"],
    code: `
  $title[Tapir]
$description[
$getVar[tier6] 4 $getVar[attack] 3 $getVar[health]
L1: **Faint** → Summon one level 1 copy of a random friendly pet. Except other Tapirs!	
L2: **Faint** → Summon one level 2 copy of a random friendly pet. Except other Tapirs!
L3: **Faint** → Summon one level 3 copy of a random friendly pet. Except other Tapirs!
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "walrus",
    aliases: ["Walrus"],
    code: `
  $title[Walrus]
$description[
$getVar[tier6] 7 $getVar[attack] 5 $getVar[health]
L1: **Faint** → Give one random friend $getVar[peanut].
L2: **Faint** → Give two random friends $getVar[peanut].
L3: **Faint** → Give three random friends $getVar[peanut].
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "whitetiger",
    aliases: ["Whitetiger", "White Tiger", "white tiger", "White tiger", "white Tiger"],
    code: `
  $title[Whitetiger]
$description[
$getVar[tier6] 4 $getVar[attack] 3 $getVar[health]
L1: **Start of battle** → Make the nearest friend behind +3 $getVar[exp].	
L2: **Start of battle** → Make the two nearest friends behind +3 $getVar[exp].
L3: **Start of battle** → Make the three nearest friends behind +3 $getVar[exp].
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
];