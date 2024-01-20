const { AoiClient } = require("aoi.js");
const { Util } = require('aoi.js');
const { parse, createAst } = require('@akarui/aoi.parser');
const { parseExtraOptions } = require('@akarui/aoi.parser/components');
const keep_alive = require('./keep_alive.js')

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
};

const { LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "MTE5NjU0MjM1NTU4MzUzNzI0Mg.GWJ5mR.00tHM4jxDvmPgT3_zg94x9vJYL34FViMxMs4QU",
  prefix: "&",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

client.loadCommands("./commands/", true);

require("./handler/variables.js")(client);

client.status({
  name: "Wiki-Bot for SAP!",
  type: "WATCHING",
  status: "idle",
  time: 25,
  URL: "https://superautopets.wiki.gg/wiki/Super_Auto_Pets_Wiki",
});
