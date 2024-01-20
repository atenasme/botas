module.exports = [
  {
    name: "boomerang",
    aliases: ["Boomerang"],
    code: `
  $title[Boomerang]
$description[
$getVar[tier1]
Start of battle	→ Deal 30 $getVar[damage] to the highest $getVar[health] health friend.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]

`
  },
  {
    name: "dicecup",
    aliases: ["Dicecup", "Dice Cup", "Dicecup"],
    code: `
  $title[Dice Cup]
$description[
$getVar[tier1]
Start of battle	→ Shuffle positions of all friends.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "dodgeball",
    aliases: ["Dodgeball"],
    code: `
  $title[Dodgeball]
$description[
$getVar[tier1]
Start of battle	→ Deal 30 $getVar[damage] to the lowest health friend. Triggers 2 times.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "handkerchief",
    aliases: ["Handkerchief"],
    code: `
  $title[Handkerchief]
$description[
$getVar[tier1]
Start of battle	→ Make friends front-to-back $getVar[weak] for each shop tier.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "pen",
    aliases: ["Pen"],
    code: `
  $title[Pen]
$description[
$getVar[tier1]
Start of battle	→ Give friends front-to-back $getVar[ink] for each shop tier.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "pogostick",
    aliases: ["Pogo stick", "Pogostick"],
    code: `
  $title[Pogo Stick]
$description[
$getVar[tier1]
Start of battle	→ Multiply $getVar[attack] and $getVar[health] of the lowest health enemy by 4.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "rockbag",
    aliases: ["Rock bag", "Rockbag"],
    code: `
  $title[Rock Bag]
$description[
$getVar[tier1]
Friend faints	→ Deal 2 $getVar[damage] to a random friend for each turn.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "scissors",
    aliases: ["Scissors"],
    code: `
  $title[Scissors]
$description[
$getVar[tier1]
Start of battle	→ Set $getVar[health] of the two most healthy friends to 1.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "spinningtop",
    aliases: ["Spinning top", "Spinningtop"],
    code: `
  $title[Spinning Top]
$description[
$getVar[tier1]
Friend faints	→ Deal 2 $getVar[damage] to one random friend.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "unicycle",
    aliases: ["Unicycle"],
    code: `
  $title[Unicycle]
$description[
$getVar[tier1]
Start of battle	→ Give enemies front-to-back +1 $getVar[attack] and +1 $getVar[health] for each turn.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "yoyo",
    aliases: ["Yoyo", "Yo yo", "yo yo"],
    code: `
  $title[Yoyo]
$description[
$getVar[tier1]
All enemies fainted	→ Make all friends faint.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "actionfigure",
    aliases: ["Action figure", "Actionfigure"],
    code: `
  $title[Action Figure]
$description[
$getVar[tier2]
Start of battle	→ Give $getVar[coconut] to enemies front-to-back for every second shop tier.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "dice",
    aliases: ["Dice"],
    code: `
  $title[Dice]
$description[
$getVar[tier2]
Roll → Lose 1 $getVar[gold]]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "openpiggybank",
    aliases: ["Open piggy bank", "Openpiggybank"],
    code: `
  $title[Open Piggy Bank]
$description[
$getVar[tier2]
Buy from shop	→ Lose 1 $getVar[gold]]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "rubberduck",
    aliases: ["Rubber duck", "Rubberduck"],
    code: `
  $title[Rubber Duck]
$description[
$getVar[tier2]
All enemies fainted	→ Summon one 3/3 enemy $getVar[duck]. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "bowlingball",
    aliases: ["Bowling ball", "Bowlingball"],
    code: `
  $title[Bowling Ball]
$description[
$getVar[tier3]
Friend Faints	→ Deal 3 $getVar[damage] to the friend behind]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "glasses",
    aliases: ["Glasses"],
    code: `
  $title[Glasses]
$description[
$getVar[tier3]
Start of battle	→ Set $getVar[health] health of all friends to 5.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "lunchbox",
    aliases: ["Lunchbox", "Lunch box", "lunch box"],
    code: `
  $title[Lunch Box]
$description[
$getVar[tier3]
All enemies fainted	→ Summon two 4/2 enemy Ants. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "papershredder",
    aliases: ["Paper shredder", "Papershredder"],
    code: `
  $title[Paper Shredder]
$description[
$getVar[tier3]
Friend summoned	→ Make it faint]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "spring",
    aliases: ["Spring"],
    code: `
  $title[Spring]
$description[
$getVar[tier3]
All enemies fainted	→ Summon one 4/4 enemy Dog. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "cardboardbox",
    aliases: ["Cardboard box", "Cardboardbox"],
    code: `
  $title[Cardboard Box]
$description[
$getVar[tier4]
All enemies fainted	→ Summon two 1/1 enemy Scorpions. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "trampoline",
    aliases: ["Trampoline"],
    code: `
  $title[Trampoline]
$description[
$getVar[tier4]
All enemies fainted	→ Summon one 8/8 enemy Kangaroo. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "boot",
    aliases: ["Boot"],
    code: `
  $title[Boot]
$description[
$getVar[tier5]
Friend faints	→ Deal 8 $getVar[damage] to the back-most friend.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "pillbottle",
    aliases: ["Pill bottle", "Pillbottle"],
    code: `
  $title[Pill Bottle]
$description[
$getVar[tier5]
Start of battle	→ Knock out the front-most friend.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "ringpyramid",
    aliases: ["Ring pyramid", "Ringpyramid"],
    code: `
  $title[Ring Pyramid]
$description[
$getVar[tier5]
Friend faints	→ Deal 2 $getVar[damage] to all friends.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "rockinghorse",
    aliases: ["Rocking horse", "Rockinghorse"],
    code: `
  $title[Rocking Horse]
$description[
$getVar[tier5]
All enemies fainted	→ Summon three 6/4 enemy Horses. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "stuffedbear",
    aliases: ["Stuffed bear", "Stuffedbear"],
    code: `
  $title[Stuffed Bear]
$description[
$getVar[tier5]
All enemies fainted	→ Summon one 25/25 enemy Grizzly Bear. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
  {
    name: "toymouse",
    aliases: ["Toy mouse", "Toymouse"],
    code: `
  $title[Toy Mouse]
$description[
$getVar[tier5]
All enemies fainted	→ Summon five random 5/5 enemy Felines. Works 1 time per battle.]

$color[0000ff]

$onlyIf[$channelID==$getGuildVar[channel];{newEmbed: {title:Wrong Channel}{description:Please use commands in <#$getGuildVar[channel]>}}]

  $onlyIf[$getGuildVar[channel]!=;{newEmbed: {title:No Channel}{description:Please set a channel to use commands by using \`&setchannel <#channel>\`}}]
  `
  },
];