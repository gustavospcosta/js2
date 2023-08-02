const path = require('path');
const fs = require('fs');
const {createLogger, transports} = require("winston");
const {validateDir} = require('./misc.js');
const {formatLogName} = require('./misc.js');

async function createMyLogger(session, chatId) {
    /**
     * Creates a logger configured for a specific session and chatId.
     *
     * @param {string} session - A string identifying the session for which the logger will be created.
     * @param {string} chatId - A string identifying the chat for which the log will be generated.
     *
     * @returns {Array} An array containing the created logger and a boolean indicating success (true) or failure (false).
     * @throws {Error} Throws an error if it fails to validate directories or generate the log name.
     */
    try {
        const directoryResult = await validateDir([session]);
        if (!directoryResult || !directoryResult[session] || directoryResult[session][1] !== true) {
            throw new Error("createMyLogger -> FAILED TO CREATE OR VALIDATE LOG DIRECTORIES");
        }
        const [logDirToday] = directoryResult[session];
        const fileNameResult = await formatLogName(session, chatId);
        if (!Array.isArray(fileNameResult) || fileNameResult[1] !== true) {
            throw new Error("createMyLogger -> FAILED TO GENERATE LOG NAME");
        }
        const [logFileName] = fileNameResult;
        const logger = createLogger({
            level: "debug", 
            transports: [
                new transports.Stream({
                    stream: fs.createWriteStream(path.join(logDirToday, logFileName), {flags: 'a'}),
                }),
            ],
        });
        return [logger, true];
    } catch (error) {
        console.error(`createMyLogger -> ERROR: ${error.message}`);
        return [null, false];
    }
};

async function logWpp(logText, chatId) {
   /**
    * Logs a text message for a specific chatId using a logger created with `createMyLogger`.
    *
    * @param {string} logText - The text message to be logged.
    * @param {string} chatId - A string identifying the chat for which the log will be generated.
    *
    * @returns {boolean} Returns true if the message is logged successfully, false otherwise.
    * @throws {Error} Throws an error if it fails to create the logger.
    */
    const loggerResult = await createMyLogger(chatId);
    if (!Array.isArray(loggerResult) || loggerResult[1] !== true) {
        console.error(`logWpp -> ERROR: Failed to create logger`);
        return false;
    }
    const [logger] = loggerResult;
    try {
        logger.debug(`Message: ${logText}`);
        return true;
    } catch (err) {
        console.error(`logWpp -> ERROR: ${err.message}`);
        return false;
    }
};

module.exports = {logWpp}
