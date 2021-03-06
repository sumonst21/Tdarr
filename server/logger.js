import homePath from "./paths.js";
var log4js = require("log4js");

console.log("loggerPath:" + homePath);
log4js.configure({
  appenders: {
    tdarr: {
      type: "file",
      filename: homePath + "/Tdarr/Logs/log.txt",
      maxLogSize: 1 * 1024 * 1024, // = 1MB
      backups: 2, 
    },
    console: { type: "console" },
  },
  categories: { default: { appenders: ["console", "tdarr"], level: "trace" } },
});

logger = log4js.getLogger("tdarr");

module.exports = logger;

module.exports.loggerFunc = function loggerFunc(type, string) {
  switch (type) {
    case "trace":
      logger.trace(string);
      break;
    case "debug":
      logger.debug(string);
      break;
    case "info":
      logger.info(string);
      break;
    case "warn":
      logger.warn(string);
      break;
    case "error":
      logger.error(string);
      break;
    case "fatal":
      logger.fatal(string);
      break;
    default:
      logger.info(string);
  }
}
