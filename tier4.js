module.exports = [
  {
    name: "bison",
    aliases: ["Bison"],
    code: `
    $title[Bison]
$description[
$getVar[tier4] 5 $getVar[attack] / 3 $getVar[health]
L1: **End turn** → If this has a level 3 friend, gain +1 $getVar[attack] and +2 $getVar[health].
L2: **End turn** → If this has a level 3 friend, gain +2 $getVar[attack] and +4 $getVar[health].
L3: **End turn** → If this has a level 3 friend, gain +3 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "blowfish",
    aliases: ["Blowfish"],
    code: `
    $title[Blowfish]
$description[
$getVar[tier4] 3 $getVar[attack] / 6 $getVar[health]
L1: **Hurt** → Deal 3 $getVar[damage] to one random enemy.	
L2: **Hurt** → Deal 6 $getVar[damage] to one random enemy.
L3: **Hurt** → Deal 9 $getVar[damage] to one random enemy.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "deer",
    aliases: ["Deer"],
    code: `
    $title[Deer]
$description[
$getVar[tier4] 1 $getVar[attack] / 1 $getVar[health]
L1: **Faint** → Summon one 5/5 $getVar[bus] with $getVar[chili].
L2: **Faint** → Summon one 10/10 $getVar[bus] with $getVar[chili].
L3: **Faint** → Summon one 15/15 $getVar[bus] with $getVar[chili].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
    
  },
  {
    name: "hippo",
    aliases: ["Hippo"],
    code: `
    $title[Hippo]
$description[
$getVar[tier4] 4 $getVar[attack] / 5 $getVar[health]
L1: **Knock out** → Gain +3 $getVar[attack] and +3 $getVar[health].
L2: **Knock out** → Gain +6 $getVar[attack] and +6 $getVar[health].
L3: **Knock out** → Gain +9 $getVar[attack] and +9 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "parrot",
    aliases: ["Parrot"],
    code: `
    $title[Parrot]
$description[
$getVar[tier4] 4 $getVar[attack] / 2 $getVar[health]
L1: **End turn** → Copy ability from the nearest pet ahead as level 1 until end of battle.
L2: **End turn** → Copy ability from the nearest pet ahead as level 2 until end of battle.
L3: **End turn** → Copy ability from the nearest pet ahead as level 3 until end of battle.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "penguin",
    aliases: ["Penguin"],
    code: `
    $title[Penguin]
$description[
$getVar[tier4] 1 $getVar[attack] / 3 $getVar[health]
L1: **End turn** → Give two level 2 or higher friends +1 $getVar[attack] and +1 $getVar[health].
L2: **End turn** → Give two level 2 or higher friends +2 $getVar[attack] and +2 $getVar[health].
L3: **End turn** → Give two level 2 or higher friends +3 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "stunk",
    aliases: ["Stunk"],
    code: `
    $title[Stunk]
$description[
$getVar[tier4] 3 $getVar[attack] / 5 $getVar[health]
L1: **Start of battle** → Reduce the highest health enemy by 33% $getVar[health].
L2: **Start of battle** → Reduce the highest health enemy by 66% $getVar[health].
L3: **Start of battle** → Reduce the highest health enemy by 100% $getVar[health].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "squirrel",
    aliases: ["Squirrel"],
    code: `
    $title[Squirrel]
$description[
$getVar[tier4] 2 $getVar[attack] / 5 $getVar[health]
L1: **Start of turn** → Discount all shop food by 1 $getVar[gold].
L2: **Start of turn** → Discount all shop food by 2 $getVar[gold].
L3: **Start of turn** → Discount all shop food by 3 $getVar[gold].
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]


$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "turtle",
    aliases: ["Turtle"],
    code: `
    $title[Turtle]
$description[
$getVar[tier4] 2 $getVar[attack] / 5 $getVar[health]
L1: **Faint** → Give $getVar[melon] Perk to the nearest friend behind.
L2: **Faint** → Give $getVar[melon] Perk to the two nearest friends behind.
L3: **Faint** → Give $getVar[melon] Perk to the three nearest friends
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "whale",
    aliases: ["Whale"],
    code: `
    $title[Whale]
$description[
$getVar[tier4] 4 $getVar[attack] / 10 $getVar[health]
L1: **Start of battle** → Swallow the nearest friend ahead and summon a new level 1 after fainting.
L2: **Start of battle** → Swallow the nearest friend ahead and summon a new level 2 after fainting.
L3: **Start of battle** → Swallow the nearest friend ahead and summon a new level 3 after fainting.
Pack: $getVar[turtlepa] Turtle Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "cockatoo",
    aliases: ["Cockatoo"],
    code: `
    $title[Cockatoo]
$description[
$getVar[tier4] 4 $getVar[attack] / 2 $getVar[health]
L1: **Buy** → Give one random Faint friend +2 $getVar[attack] and +2 $getVar[health].
L2: **Buy** → Give one random Faint friend +4 $getVar[attack] and +4 $getVar[health].
L3: **Buy** → Give one random Faint friend +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "cuttlefish",
    aliases: ["Cuttlefish"],
    code: `
    $title[Cuttlefish]
$description[
$getVar[tier4] 8 $getVar[attack] / 4 $getVar[health]
L1: **Faint** → Give the last enemy $getVar[ink].
L2: **Faint** → Give the last two enemies $getVar[ink].
L3: **Faint** → Give the last three enemies $getVar[ink].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "falcon",
    aliases: ["Falcon"],
    code: `
    $title[Falcon]
$description[
$getVar[tier4] 5 $getVar[attack] / 5 $getVar[health]
L1: **Knock out** → Summon one 3/3 level 1 copy of it. Works 3 times per battle.	
L2: **Knock out** → Summon one 3/3 level 2 copy of it. Works 3 times per battle.
L3: **Knock out** → Summon one 3/3 level 3 copy of it. Works 3 times per battle.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "manatee",
    aliases: ["Manatee"],
    code: `
    $title[Manatee]
$description[
$getVar[tier4] 2 $getVar[attack] / 11 $getVar[health]
L1: **End turn** → Take 5 $getVar[damage] and give the nearest friend ahead +2 $getVar[attack] and +1 $getVar[health].
L2: **End turn** → Take 5 $getVar[damage] and give the nearest friend ahead +4 $getVar[attack] and +2 $getVar[health].
L3: **End turn** → Take 5 $getVar[damage] and give the nearest friend ahead +6 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "mantaray",
    aliases: ["Manta Ray", "Manta ray", "manta ray"],
    code: `
    $title[Manta Ray]
$description[
$getVar[tier4] 5 $getVar[attack] / 6 $getVar[health]
L1: **End turn** → If there is an empty space, gain +2 $getVar[gold] next turn.
L2: **End turn** → If there is an empty space, gain +4 $getVar[gold]
L3: **End turn** → If there is an empty space, gain +6 $getVar[gold]
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "poisondartfrog",
    aliases: ["Poison Dart Frog", "Poison dart frog", "poison dart frog"],
    code: `
    $title[Poison Dart Frog]
$description[
$getVar[tier4] 5 $getVar[attack] / 2 $getVar[health]
L1: **Friend ahead faints** → Deal 4 $getVar[damage] to the highest health enemy.	
L2: **Friend ahead faints** → Deal 8 $getVar[damage] to the highest health enemy.
L3: **Friend ahead faints** → Deal 12 $getVar[damage] to the highest health enemy.
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "saigaantelope",
    aliases: ["Saiga Antelope", "Saiga antelope", "saiga antelope"],
    code: `
    $title[Saiga Antelope]
$description[
$getVar[tier4] 4 $getVar[attack] / 3 $getVar[health]
L1: **Friend faints** → Gain +1 $getVar[trumpet].
L2: **Friend faints** → Gain +2 $getVar[trumpet].
L3: **Friend faints** → Gain +3 $getVar[trumpet].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "sealion",
    aliases: ["Sealion"],
    code: `
    $title[Sealion]
$description[
$getVar[tier4] 3 $getVar[attack] / 6 $getVar[health]
L1: **End turn** → Give friends behind +1 $getVar[attack] and friends ahead +1 $getVar[health].
L2: **End turn** → Give friends behind +2 $getVar[attack] and friends ahead +2 $getVar[health].
L3: **End turn** → Give friends behind +3 $getVar[attack] and friends ahead +3 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "secretarybird",
    aliases: ["Secretary Bird", "Secretary bird", "secretary bird"],
    code: `
    $title[Secretary Bird]
$description[
$getVar[tier4] 2 $getVar[attack] / 5 $getVar[health]
L1: **Two friends faint** → Give the nearest friend ahead +3 $getVar[attack] and +3 $getVar[health].
L2: **Two friends faint** → Give the nearest friend ahead +6 $getVar[attack] and +6 $getVar[health].
L3: **Two friends faint** → Give the nearest friend ahead +9 $getVar[attack] and +9 $getVar[health].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "slug",
    aliases: ["Slug"],
    code: `
    $title[Slug]
$description[
$getVar[tier4] 4 $getVar[attack] / 4 $getVar[health]
L1: **Faint** → Summon one 2/2 $getVar[smaller] that summons one 1/1 $getVar[smallest].
L2: **Faint** → Summon one 4/4 $getVar[smaller] that summons one 2/2 $getVar[smallest].
L3: **Faint** → Summon one 6/6 $getVar[smaller] that summons one 3/3 $getVar[smallest].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "vaquita",
    aliases: ["Vaquita"],
    code: `
    $title[Vaquita]
$description[
$getVar[tier4] 3 $getVar[attack] / 4 $getVar[health]
L1: **Faint** → Gain +50% $getVar[trumpet].
L2: **Faint** → Gain +100% $getVar[trumpet].
L3: **Faint** → Gain +150% $getVar[trumpet].
Pack: $getVar[goldenpa] Golden Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "blobfish",
    aliases: ["Blobfish"],
    code: `
    $title[Blobfish]
$description[
$getVar[tier4] 2 $getVar[attack] / 5 $getVar[health]
L1: **Faint** → Give the nearest friend behind +2 $getVar[attack] and +2 $getVar[health] and +1 $getVar[exp].
L2: **Faint** → Give the nearest friend behind +4 $getVar[attack] and +4 $getVar[health] and +2 $getVar[exp].
L3: **Faint** → Give the nearest friend behind +6 $getVar[attack] and +6 $getVar[health] and +3 $getVar[exp].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "clownfish",
    aliases: ["Clownfish"],
    code: `
    $title[Clownfish]
$description[
$getVar[tier4] 3 $getVar[attack] / 4 $getVar[health]
L1: **Friendly pet level-up** → Give it +2 $getVar[attack] and +2 $getVar[health].
L2: **Friendly pet level-up** → Give it +4 $getVar[attack] and +4 $getVar[health].
L3: **Friendly pet level-up** → Give it +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "crow",
    aliases: ["Crow"],
    code: `
    $title[Crow]
$description[
$getVar[tier4] 3 $getVar[attack] / 3 $getVar[health]
L1: **Sell** → Stock one $getVar[chocolate].
L2: **Sell** → Stock one better $getVar[chocolate].
L3: **Sell** → Stock one best $getVar[chocolate].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "donkey",
    aliases: ["Donkey"],
    code: `
    $title[Donkey]
$description[
$getVar[tier4] 4 $getVar[attack] / 6 $getVar[health]
L1: **Friend faints** → Push the last enemy to the front. Works 1 time per battle.	
L2: **Friend faints** → Push the last enemy to the front. Works 2 times per battle.
L3: **Friend faints** → Push the last enemy to the front. Works 3 times per battle.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "hawk",
    aliases: ["Hawk"],
    code: `
    $title[Hawk]
$description[
$getVar[tier4] 4 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Deal 7 $getVar[damage] to the opposite enemy.
L2: **Start of battle** → Deal 14 $getVar[damage] to the opposite enemy.
L3: **Start of battle** → Deal 21 $getVar[damage] to the opposite enemy.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "orangutan",
    aliases: "Orangutan",
    code: `
    $title[Orangutan]
$description[
$getVar[tier4] 3 $getVar[attack] / 6 $getVar[health]
L1: **End turn** → Give the lowest health friendly pet +4 $getVar[health].
L2: **End turn** → Give the lowest health friendly pet +6 $getVar[health].
L3: **End turn** → Give the lowest health friendly pet +8 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "pelican",
    aliases: ["Pelican"],
    code: `
    $title[Pelican]
$description[
$getVar[tier4] 2 $getVar[attack] / 3 $getVar[health]
L1: **End turn & Start of battle** → Give one random $getVar[straw] friend +2 $getVar[attack] and +1 $getVar[health].
L2: **End turn & Start of battle** → Give one random $getVar[straw] friend +4 $getVar[attack] and +2 $getVar[health].
L3: **End turn & Start of battle** → Give one random $getVar[straw] friend +6 $getVar[attack] and +3 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "platypus",
    aliases: ["Platypus"],
    code: `
    $title[Platypus]
$description[
$getVar[tier4] 2 $getVar[attack] / 2 $getVar[health]
L1: **Sell & Faint** → Summon one 3/3 level 1 $getVar[duck] and $getVar[beaver].
L2: **Sell & Faint** → Summon one 6/6 level 2 $getVar[duck] and $getVar[beaver].
L3: **Sell & Faint** → Summon one 9/9 level 3 $getVar[duck] and $getVar[beaver].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

`

  },
  {
    name: "prayingmantis",
    aliases: ["Prayingmantis", "praying mantis", "Praying mantis", "prayingMantis", "PrayingMantis", "Praying Mantis"],
    code: `
    $title[Praying Mantis]
$description[
$getVar[tier4] 7 $getVar[attack] / 2 $getVar[health]
L1: **Start of turn** → Knock out adjacent friends and gain +2 $getVar[attack] and +2 $getVar[health].	
L2: **Start of turn** → Knock out adjacent friends and gain +4 $getVar[attack] and +4 $getVar[health].
L3: **Start of turn** → Knock out adjacent friends and gain +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "starfish",
    aliases: ["Starfish"],
    code: `
    $title[Starfish]
$description[
$getVar[tier4] 3 $getVar[attack] / 4 $getVar[health]
L1: **Friend sold** → If it had a Sell ability, give +1 $getVar[attack] and +1 $getVar[health] to one random friend.
L2: **Friend sold** → If it had a Sell ability, give +2 $getVar[attack] and +2 $getVar[health] to one random friend.
L3: **Friend sold** → If it had a Sell ability, give +3 $getVar[attack] and +3 $getVar[health] to one random friend.
Pack: $getVar[starpa] Star Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "buffalo",
    aliases: ["Buffalo"],
    code: `
    $title[Buffalo]
$description[
$getVar[tier4] 4 $getVar[attack] / 4 $getVar[health]
L1: **Three friends sold** → Gain +2 $getVar[attack] and +2 $getVar[health].	
L2: **Three friends sold** → Gain +4 $getVar[attack] and +4 $getVar[health].
L3: **Three friends sold** → Gain +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "catterpillar",
    aliases: ["Catterpillar"],
    code: `
    $title[Catterpillar]
$description[
$getVar[tier4] 1 $getVar[attack] / 1 $getVar[health]
L1: **Start of turn** → Gain +1 $getVar[exp].
L2: **Start of turn** → Gain +2 $getVar[exp].
L3: **Start of battle** → Transform into a $getVar[bufly] and copy stats of the strongest enemy.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "chameleon",
    aliases: ["Chameleon"],
    code: `
    $title[Chameleon]
$description[
$getVar[tier4] 3 $getVar[attack] / 5 $getVar[health]
L1: **End turn** → Copy friendly toy ability as level 1 until end of battle.	
L2: **End turn** → Copy friendly toy ability as level 2 until end of battle.
L3: **End turn** → Copy friendly toy ability as level 3 until end of battle.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "doberman",
    aliases: ["Doberman"],
    code: `
    $title[Doberman]
$description[
$getVar[tier4] 4 $getVar[attack] / 5 $getVar[health]
L1: **Start of battle** → If this is your lowest tier pet, gain $getVar[coconut] Perk and +8 $getVar[attack].
L2: **Start of battle** → If this is your lowest tier pet, gain $getVar[coconut] Perk and +16 $getVar[attack].
L3: **Start of battle** → If this is your lowest tier pet, gain $getVar[coconut] Perk and +24 $getVar[attack].
Pack: $getVar[puppypa] Puppy Pack $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "gharial",
    aliases: ["Gharial"],
    code: `
    $title[Gharial]
$description[
$getVar[tier4] 5 $getVar[attack] / 3 $getVar[health]
L1: **Buy** → Choose one level 1 toy from tier 4.
L2: **Buy** → Choose one level 2 toy from tier 4.
L3: **Buy** → Choose one level 3 toy from tier 4.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "llama",
    aliases: ["Llama"],
    code: `
    $title[Llama]
$description[
$getVar[tier4] 2 $getVar[attack] / 5 $getVar[health]
L1: **End turn** → If there is an empty space, gain +1 $getVar[attack] and +2 $getVar[health].
L2: **End turn** → If there is an empty space, gain +2 $getVar[attack] and +4 $getVar[health].
L3: **End turn** → If there is an empty space, gain +3 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "lobster",
    aliases: "Lobster",
    code: `
    $title[Lobster]
$description[
$getVar[tier4] 3 $getVar[attack] / 3 $getVar[health]
L1: **Friend summoned** → If outside battle, gain +2 $getVar[attack] and +2 $getVar[health].
L2: **Friend summoned** → If outside battle, gain +4 $getVar[attack] and +4 $getVar[health].
L3: **Friend summoned** → If outside battle, gain +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]
`
  },
  {
    name: "microbe",
    aliases: ["Microbe"],
    code: `
    $title[Microbe]
$description[
$getVar[tier4] 1 $getVar[attack] / 1 $getVar[health]
L1: **Faint** → Make all pets $getVar[weak].
L2: **Faint** → Make all pets $getVar[weak].
L3: **Faint** → Make all pets $getVar[weak].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "tahr",
    aliases: ["Tahr"],
    code: `
    $title[Tahr]
$description[
$getVar[tier4] 5 $getVar[attack] / 3 $getVar[health]
L1: **Faint** → Give $getVar[chili] Perk to the nearest friend behind.
L2: **Faint** → Give $getVar[chili] Perk to the two nearest friends behind.
L3: **Faint** → Give $getVar[chili] Perk to the three nearest friends behind.
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "whaleshark",
    aliases: ["Whaleshark", "whale shark", "Whale shark", "Whale Shark"],
    code: `
    $title[Whale Shark]
$description[
$getVar[tier4] 1 $getVar[attack] / 4 $getVar[health]
L1: **Gain perk or aliment** → Remove it and gain +2 $getVar[attack] and +2 $getVar[health].
L2: **Gain perk or aliment** → Remove it and gain +4 $getVar[attack] and +4 $getVar[health].
L3: **Gain perk or aliment** → Remove it and gain +6 $getVar[attack] and +6 $getVar[health].
Pack: $getVar[puppypa] Puppy Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`

  },
  {
    name: "dragonfly",
    aliases: ["Dragonfly"],
    code: `
    $title[Dragonfly]
$description[
$getVar[tier4] 1 $getVar[attack] / 1 $getVar[health]
L1: **End turn** → Give +1 $getVar[attack] and +1 $getVar[health] to one friend of each level.
L2: **End turn** → Give +2 $getVar[attack] and +2 $getVar[health] to one friend of each level.
L3: **End turn** → Give +3 $getVar[attack] and +3 $getVar[health] to one friend of each level.
Pack: $getVar[custompa] Custom Pack]
$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "jerboa",
    aliases: ["Jerboa"],
    code: `
    $title[Jerboa]
$description[
$getVar[tier4] 1 $getVar[attack] / 3 $getVar[health]
L1: **Eats $getVar[apple]** → Give friends +1 $getVar[attack] and +1 $getVar[health]. Works 2 times per turn.
L2: **Eats $getVar[apple]** → Give friends +2 $getVar[attack] and +2 $getVar[health]. Works 2 times per turn.
L3: **Eats $getVar[apple]** → Give friends +3 $getVar[attack] and +3 $getVar[health]. Works 2 times per turn.
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "lynx",
    aliases: ["Lynx"],
    code: `
    $title[Lynx]
$description[
$getVar[tier4] 5 $getVar[attack] / 3 $getVar[health]
L1: **Start of battle** → Deal $getVar[damage] to one random enemy equal to the sum of all friendly levels.	
L2: **Start of battle** → Deal $getVar[damage] to two random enemy equal to the sum of all friendly levels.
L3: **Start of battle** → Deal $getVar[damage] to three random enemy equal to the sum of all friendly levels.
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
  {
    name: "seagull",
    aliases: ["Seagull"],
    code: `
    $title[Seagull]
$description[
$getVar[tier4] 4 $getVar[attack] / 3 $getVar[health]
L1: **Friend summoned** → Copy this pet's food perk to it. Works 1 time per turn.
L2: **Friend summoned** → Copy this pet's food perk to it. Works 2 times per turn.
L3: **Friend summoned** → Copy this pet's food perk to it. Works 3 times per turn.
Pack: $getVar[custompa] Custom Pack]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

$onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
`
  },
];