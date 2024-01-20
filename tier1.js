module.exports = [
  {
    name: "ant",
    aliases: ["Ant"],
    code: `
$title[Ant]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Faint** - Give one random friend +1 $getVar[attack] and +1 $getVar[health]. 
L2: **Faint** - Give one random friend +2 $getVar[attack] and +2 $getVar[health].
L3: **Faint** - Give one random friend +3 $getVar[attack] and +3 $getVar[health].
pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]


$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
    
    `,
  },
  {
    name: "beaver",
    aliases: ["Beaver"],
    code: `
$title[Beaver]
$description[
$getVar[tier1] 3 $getVar[attack] / 2 $getVar[health]
L1: **Sell** 
Give two random friends +1 $getVar[attack].
L2: **Sell** → Give two random friends +2 $getVar[attack].
L3: **Sell** → Give two random friends +3 $getVar[attack].
Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

`
  },
  {
    name: "cricket",
    aliases: ["Cricket"],
    code: `
    $title[Cricket]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Summon one 1/1  Zombie Cricket.
L2: **Faint** → Summon one 2/2  Zombie Cricket.
L3: **Faint** → Summon one 3/3  Zombie Cricket.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "duck",
    aliases: ["Duck"],
    code: `
    $title[Duck]
$description[
$getVar[tier1] 2 $getVar[attack] / 3 $getVar[health]
L1: **Sell** → Give shop pets +1 $getVar[health].
L2: **Sell** → Give shop pets +2 $getVar[health].
L3: **Sell** → Give shop pets +3 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "fish",
    aliases: ["Fish"],
    code: `
    $title[Fish]
$description[
$getVar[tier1] 2 $getVar[attack] / 3 $getVar[health]
L1: **Level up** → Give two friends +1 $getVar[attack] and +1 $getVar[health].
L2: **Level up** → Give two friends +2 $getVar[attack] and +2 $getVar[health].
L3: No Ability.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "horse",
    aliases: ["Horse"],
    code: `
    $title[Horse]
$description[
$getVar[tier1] 2 $getVar[attack] / 1 $getVar[health]
L1: **Friend summoned** → Give it +1 $getVar[attack] until end of battle.
L2: **Friend summoned** → Give it +2 $getVar[attack] until end of battle.
L3: **Friend summoned** → Give it +3 $getVar[attack] until end of battle.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "mosquito",
    aliases: ["Mosquito"],
    code: `
    $title[Mosquito]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Start of battle** → Deal 1 $getVar[attack] to one random enemy.
L2: **Start of battle** → Deal 1 $getVar[attack] to two random enemies.
L3: **Start of battle** → Deal 1 $getVar[attack] to three random enemies.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "mouse",
    aliases: ["Mouse"],
    code: `
    $title[Mouse]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Sell** → Stock one free $getVar[apple].
L2: **Sell** → Stock one free Better $getVar[apple].
L3: **Sell** → Stock one free Best $getVar[apple].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "otter",
    aliases: ["Otter"],
    code: `
    $title[Otter]
$description[
$getVar[tier1] 1 $getVar[attack] / 3 $getVar[health]
L1: **Buy** → Give one random friend +1 health.
L2: **Buy** → Give two random friend +1 health.
L3: **Buy** → Give three random friend +1 health.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "pig",
    aliases: ["Pig"],
    code: `
    $title[Pig]
$description[
$getVar[tier1] 4 $getVar[attack] / 1 $getVar[health]
L1: **Sell** → Gain +1 $getVar[gold].
L2: **Sell** → Gain +2 $getVar[gold].
L3: **Sell**!→ Gain +3 $getVar[gold].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "bettle",
    aliases: ["Bettle"],
    code: `
    $title[Bettle]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Start of battle** → Gain Honey Perk.
L2: **Start of battle** → Gain Meat Bone Perk.
L3: **Start of battle** → Gain Garlic Perk.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "bluebird",
    aliases: ["Bluebird"],
    code: `
    $title[Bluebird]
$description[
$getVar[tier1] 2 $getVar[attack] / 1 $getVar[health]
L1: **End turn** → Give one random friend +1 $getVar[attack].
L2: **End turn** → Give one random friends +2 $getVar[attack].
L3: **End turn** → Give one random friends +3 $getVar[attack].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "chinchilla",
    aliases: ["Chinchilla"],
    code: `
    $title[Chinchilla]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Sell** → Summon one 2/2 level 1  Loyal Chinchilla
L2: **Sell** → Summon one 4/4level 2  Loyal Chinchilla
L3: **Sell** → Summon one 6/6 level 3  Loyal Chinchilla
Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "chipmunk",
    aliases: ["Chipmunk"],
    code: `
    $title[Chipmunk]
$description[
$getVar[tier1] 3 $getVar[attack] / 2 $getVar[health]
L1: **Sell** → Stock one 1-gold copy of this pet's food perk.
L2: **Sell** → Stock two 1-gold copy of this pet's food perk.
L3: **Sell** → Stock three 1-gold copy of this pet's food perk.
Pack: $getVar[puppypa] Puppy Pack $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "ferret",
    aliases: ["Ferret"],
    code: `
    $title[Ferret]
$description[
$getVar[tier1] 2 $getVar[attack] / 1 $getVar[health]
L1: **Buy** → Choose one level 1 toy from tier 1.
L2: **Buy** → Choose one level 2 toys from tier 1.
L3: **Buy** → Choose one level 3 toys from tier 1.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "gecko",
    aliases: ["Gecko"],
    code: `
    $title[Gecko]
$description[
$getVar[tier1] 3 $getVar[attack] / 1 $getVar[health]
L1: **Start of battle** → If you have a toy, gain +2 $getVar[health].
L2: **Start of battle** → If you have a toy, gain +2 $getVar[health].
L3: **Start of battle** → If you have a toy, gain +2 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "ladybug",
    aliases: ["Ladybug"],
    code: `
    $title[Ladybug]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Friend gained perk** → Gain +2 $getVar[attack] until end of battle.
L2: **Friend gained perk** → Gain +4 $getVar[attack] until end of battle.
L3: **Friend gained perk** → Gain +6 $getVar[attack] until end of battle.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "moth",
    aliases: ["Moth"],
    code: `
    $title[Moth]
$description[
$getVar[tier1] 1 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Give front-most friend +2 $getVar[attack].
L2: **Start of battle** → Give front-most friend +4 $getVar[attack].
L3: **Start of battle** → Give front-most friend +6 $getVar[attack].
Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "cockroach",
    aliases: ["Cockroach"],
    code: `
    $title[Cockroach]
$description[
$getVar[tier1] 1 $getVar[attack] / 4 $getVar[health]
L1: **Start of turn** → Set $getVar[attack] to the current shop tier + 1.
L2: **Start of turn** → Set $getVar[attack] to the current shop tier + 2.
L3: **Start of turn** → Set $getVar[attack] to the current shop tier + 3.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "duckling",
    aliases: ["Duckling"],
    code: `
    $title[Duckling]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Sell** → Give left-most shop pet +2 $getVar[health].
L2: **Sell** → Give left-most shop pet +4 $getVar[health].
L3: **Sell** → Give left-most shop pet +6 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "frog",
    aliaes: ["Frog"],
    code: `
    $title[Frog]
$description[
$getVar[tier1] 3 $getVar[attack] / 1 $getVar[health]
L1: **Start of battle** → Swap stats of the two adjacent friends.
L2: **Start of battle** → Swap stats of the two adjacent friends.
L3: **Start of battle** → Swap stats of the two adjacent friends.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "hummingbird",
    aliases: ["Hummingbird"],
    code: `
    $title[Hummingbird]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Start of battle** → Give +2 $getVar[attack] and +1 $getVar[health] to one random $getVar[straw] friend.
L2: **Start of battle** → Give +2 $getVar[attack] and +1 $getVar[health] to one random $getVar[straw] friend.
L3: **Start of battle** → Give +2 $getVar[attack] and +1 $getVar[health] to one random $getVar[straw] friend.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "kiwi",
    aliases: ["Kiwi"],
    code: `
    $title[Kiwi]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Sell** → Give one random $getVar[straw] friend +1 $getVar[attack] and +2 $getVar[health].
L2: **Sell** → Give one random $getVar[straw] friend +2 $getVar[attack] and +4 $getVar[health].
L3: **Sell** → Give one random $getVar[straw] friend +4 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "pillbug",
    aliases: ["Pillbug"],
    code: `
    $title[Pillbug]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Shop tier upgraded** → Give the two nearest pets behind +1 $getVar[health].
L2: **Shop tier upgraded** → Give the two nearest pets behind +2 $getVar[health].
L3: **Shop tier upgraded** → Give the two nearest pets behind +3 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "seahorse",
    aliases: ["Seahorse"],
    code: `
    $title[Seahorse]
$description[
$getVar[tier1] 2 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Push the last enemy one space forward.
L2: **Start of battle** → Push the last enemy two space forward.
L3: **Start of battle** → Push the last enemy three space forward.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "frilleddragon",
    aliases: ["Frilled Dragon", "Frilled-Dragon", "Frilled-dragon", "frilled-dragon", "Frilleddragon", "FrilledDragon"],
    code: `
    $title[Frilled Dragon]
$description[
$getVar[tier1] 1 $getVar[attack] / 1 $getVar[health]
L1: **Start of battle → Gain +1 $getVar[attack] and +1 $getVar[health] per friend with a Faint ability.
L2: **Start of battle → Gain +2 $getVar[attack] and +2 $getVar[health] per friend with a Faint ability.
L3: **Start of battle → Gain +3 $getVar[attack] and +3 $getVar[health] per friend with a Faint ability.
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "marmoset",
    aliases: ["Marmoset"],
    code: `
    $title[Marmoset]
$description[
$getVar[tier1] 2 $getVar[attack] / 3 $getVar[health]
L1: **Sell** → Your next roll is free.
L2: **Sell** → Your next two roll are free.
L3: **Sell** → Your next three roll are free.
Pack: $getVar[custompa] Custom Pack $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "bulldog",
    aliases: ["Bulldog"],
    code: `
    $title[Bulldog]
$description[
$getVar[tier1] 1 $getVar[attack] / 3 $getVar[health]
L1: **After attack** → Set $getVar[attack] equal to $getVar[health] +1.
L2: **After attack** → Set $getVar[attack] equal to $getVar[health] +2.
L3: **After attack** → Set $getVar[attack] equal to $getVar[health] +3.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "groundhog",
    aliases: ["Groundhog"],
    code: `
    $title[Groundhog]
$description[
$getVar[tier1] 2 $getVar[attack] / 1 $getVar[health]
L1: **Faint → Gain +1 $getVar[trumpet].
L2: **Faint → Gain +2 $getVar[trumpet].
L3: **Faint → Gain +3 $getVar[trumpet].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "conesnail",
    aliases: ["Cone Snail", "Cone snail", "Conesnail", "ConeSnail", "coneSnail", "Cone-Snail", "Cone-snail", "cone-Snail", "cone-snail"],
    code: `
    $title[Cone Snail]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Start of battle** → Give the nearest friend behind +2 $getVar[health].
L2: **Start of battle** → Give the nearest friend behind +4 $getVar[health].
L3: **Start of battle** → Give the nearest friend behind +6 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "goose",
    aliases: ["Goose"],
    code: `
    $title[Goose]
$description[
$getVar[tier1] 2 $getVar[attack] / 2 $getVar[health]
L1: **Start of battle** → Remove 1  $getVar[attack] from the first enemy.
L2: **Start of battle** → Remove 2  $getVar[attack] from the first enemy.
L3: **Start of battle** → Remove 3  $getVar[attack] from the first enemy.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "piedtamarin",
    aliases: ["Pied Tamarin", "Pied-Tamarin", "Pied-tamarin", "pied-tamarin", "Piedtamarin", "PiedTamarin", "Pied tamarin", "pied Tamarin", "pied tamarin"],
    code: `
    $title[Pied Tamarin]
$description[
$getVar[tier1] 1 $getVar[attack] / 2 $getVar[health]
L1: **Faint** → Spend 1 $getVar[trumpet] to deal 3 damage to one random enemy.
L2: **Faint** → Spend 1 $getVar[trumpet] to deal 3 damage to two random enemies.
L3: **Faint** → Spend 1 $getVar[trumpet] to deal 3 damage to three random enemies.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "opossum",
    aliases: ["Opossum"],
    code: `
    $title[Opossum]
$description[
$getVar[tier1] 2 $getVar[attack] / 3 $getVar[health]
L1: **Sell** → Give one random Faint pet in the shop +1 $getVar[attack] and +1 $getVar[health].
L2: **Sell** → Give one random Faint pets in the shop +2 $getVar[attack] and +2 $getVar[health].
L3: **Sell** → Give one random Faint pets in the shop +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "silkmoth",
    aliases: ["Silkmoth"],
    code: `
    $title[Silkmoth]
$description[
$getVar[tier1] 3 $getVar[attack] / 1 $getVar[health]
L1: **Friend ahead hurt** → Give it +1  $getVar[health]. Works 2 times per turn.
L2: **Friend ahead hurt** → Give it +2  $getVar[health]. Works 2 times per turn.
L3: **Friend ahead hurt** → Give it +3  $getVar[health]. Works 2 times per turn.
Pack: $getVar[goldenpa] Golden Pack]
$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "magpie",
    aliases: ["Magpie"],
    code: `
    $title[Magpie]
$description[
$getVar[tier1] 1 $getVar[attack] / 4 $getVar[health]
L1: **End turn → Spend up to 1 $getVar[gold] and gain it back next turn.
L2: **End turn → Spend up to 2 $getVar[gold] and gain it back next turn.
L3: **End turn → Spend up to 3 $getVar[gold] and gain it back next turn.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "sloth",
    aliases: ["Sloth"],
    code: `
    $title[Sloth]
$description[
$getVar[tier1] 1 $getVar[attack] / 1 $getVar[health]
"Sloth has no special ability. Is kind of lame combat-wise. But he truly believes in you!"
Sloth can appears in any pack. Sloth has 1/10.000 (0.01%) to appears.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
];
