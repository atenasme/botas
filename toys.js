module.exports = [
  {
    name: "balloon",
    aliases: ["Balloon"],
    code: `
  $title[Balloon]
$description[
$getVar[tier1] 
L1: **On break** → Give +1 $getVar[attack] and +1 $getVar[health] to the right-most friend.	
L2: **On break** → Give +2 $getVar[attack] and +2 $getVar[health] to the right-most friend.
L3: **On break** → Give +3 $getVar[attack] and +3 $getVar[health] to the right-most friend.
Source: Ferret]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `

  },
  {
    name: "tennisball",
    aliases: ["Tennisball"],
    code: `
  $title[Tennisball]
$description[
$getVar[tier1]
L1: **Start of battle** → Deal 1 $getVar[damage] to two random enemies.
L2: **Start of battle** → Deal 2 $getVar[damage] to two random enemies.
L3: **Start of battle** → Deal 3 $getVar[damage] to two random enemies.
Source: Ferret]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "radio",
    aliases: ["Radio"],
    code: `
  $title[Radio]
$description[
$getVar[tier2]
L1: **On break** → Give +1 $getVar[health] to all friends.	
L2: **On break** → Give +2 $getVar[health] to all friends.
L3: **On break** → Give +3 $getVar[health] to all friends.
Source: Lemur]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "garlicpress",
    aliases: ["Garlicpress", "Garlic Press", "garlic press", "Garlicpress", "Garlic Press"],
    code: `
  $title[Garlic Press]
$description[
$getVar[tier2]
L1: **Start of battle** → Give the right-most friend $getVar[garlic] Perk.
L2: **Start of battle** → Give the two right-most friend $getVar[garlic] Perk.
L3: **Start of battle** → Give the three right-most friend $getVar[garlic] Perk.
Source: Lemur]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `

  },
  {
    name: "toiletpaper",
    aliases: ["Toiletpaper", "Toilet Paper", "toilet paper", "Toiletpaper", "Toilet Paper"],
    code: `
  $title[Toilet Paper]
$description[
$getVar[tier3]
L1: **Start of battle** → Make the first enemy $getVar[weak].
L2: **Start of battle** → Make the two first enemies $getVar[weak].
L3: **Start of battle** → Make the three first enemies $getVar[weak].
Source: Puppy]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "ovenmitts",
    aliases: ["Ovenmitts", "Oven Mitts", "oven mitts", "Ovenmitts", "Oven Mitts"],
    code: `
  $title[Oven Mitts]
$description[
$getVar[tier3]
L1: **On break** → Stock one free Lasagna.
L2: **On break** → Stock two free Lasagna.
L3: **On break** → Stock three free Lasagna.
Source: Puppy]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "melonhelmet",
    aliases: ["Melonhelmet", "Melon Helmet", "melon helmet", "Melonhelmet", "Melon Helmet"],
    code: `
  $title[Melon Helmet]
$description[
$getVar[tier4]
L1: **On break** → Give the right-most friend $getVar[melon] Perk.	
L2: **On break** → Give the two right-most friend $getVar[melon] Perk.
L3: **On break** → Give the three right-most friend $getVar[melon] Perk.
Source: Gharial]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "foamsword",
    aliases: ["Foamsword", "FoamSword", "foam sword", "foamSword", "Foam Sword"],
    code: `
  $title[Foam Sword]
$description[
$getVar[tier4]
L1: **Start of battle** → Deal 6 $getVar[damage] to the weakest enemy.	
L2: **Start of battle** → Deal 6 $getVar[damage] to the weakest enemy. Triggers 2 times.
L3: **Start of battle** → Deal 6 $getVar[damage] to the weakest enemy. Triggers 3 times.
Source: Gharial]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
    
  },
  {
    name: "toygun",
    aliases: ["Toygun", "Toy Gun", "toy gun", "toyGun", "Toy gun"],
    code: `
  $title[Toy Gun]
$description[
$getVar[tier4]
L1: **Start of battle** → Deal 6 $getVar[damage] to the last enemy.
L2: **Start of battle** → Deal 6 $getVar[damage] to the last enemy. Triggers 2 times.
L3: **Start of battle** → Deal 6 $getVar[damage] to the last enemy. Triggers 3 times.
Source: Gharial]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `

  },
  {
    name: "flashlight",
    aliases: ["Flashlight"],
    code: `
  $title[Flashlight]
$description[
$getVar[tier5]
L1: **On break** → Give +6 $getVar[attack] and +6 $getVar[health] to the right-most friend.	
L2: **On break** → Give +12 $getVar[attack] and +12 $getVar[health] to the right-most friend.
L3: **On break** → Give +18 $getVar[attack] and +18 $getVar[health] to the right-most friend.
Source: Sting Ray]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
    
  },
  {
    name: "stinkysock",
    aliases: ["Stinkysock", "Stinky Sock", "stinky sock", "stinkySock", "Stinky sock"],
    code: `
  $title[Stinky Sock]
$description[
$getVar[tier5]
L1: **Start of battle** → Reduce the highest health enemy by 40% $getVar[health].
L2: **Start of battle** → Reduce to the two highest health enemies by 40% $getVar[health].
L3: **Start of battle** → Reduce to the three highest health enemies by 40% $getVar[health].
Source: Sting Ray]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "television",
    aliases: ["Television"],
    code: `
  $title[Television]
$description[
$getVar[tier6]
L1: **On break** → Give +2 $getVar[attack] and +2 $getVar[health] to all friends.
L2: **On break** → Give +4 $getVar[attack] and +4 $getVar[health] to all friends.
L3: **On break** → Give +6 $getVar[attack] and +6 $getVar[health] to all friends.
Source: Mongoose]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "peanutjar",
    aliases: ["Peanutjar", "Peanut Jar", "peanut jar", "Peanutjar", "Peanut jar"],
    code: `
  $title[Peanut Jar]
$description[
$getVar[tier6]
L1: **Start of battle** → Give the right-most friend $getVar[peanut] Perk.
L2: **Start of battle** → Give the two right-most friend $getVar[peanut] Perk.
L3: **Start of battle** → Give the three right-most friend $getVar[peanut] Perk.
Source: Mongoose]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "airpalmtree",
    aliases: ["Airpalmtree", "Air Palm Tree", "air palm tree", "airPalmTree", "Air palm tree"],
    code: `
  $title[Air Palm Tree]
$description[
$getVar[tier6]
L1: **Start of battle** → Give the right-most friend $getVar[coconut] Perk.	
L2: **Start of battle** → Give the two right-most friend $getVar[coconut] Perk.
L3: **Start of battle** → Give the three right-most friend $getVar[coconut] Perk.
Source: Mongoose]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
];