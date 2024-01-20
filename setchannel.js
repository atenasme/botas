module.exports = [
  {
    name: "setchannel",
    code: `
    $setGuildVar[channel;$mentionedChannels[1]]
    $title[Set Channel]
    $description[Set channel to <#$mentionedChannels[1]>. Now you can use my commands in that channel and only at him!]
    $color[0000ff]
    $onlyIf[$mentionedChannels[1]!=;{newEmbed: {title:Wrong Usage}{description:Please use \`&setchannel <#channel>\`}}]
    $onlyPerms[administrator;{newEmbed: {title:Missing Permission}{description:You need \`Administrator\` permission to use this command}}]
    `
  },
  {
    name: "status",
    code: `
    We have actually $commandsCount commands!
    `
  },
];