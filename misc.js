const fs = require('fs');
const path = require('path');


async function dateTimeInfo() {
   /**
    * Retrieves the current date and time and formats it into various forms.
    *
    * @returns {Array} An array containing formatted timestamp, log timestamp, year, current month name, and date.
    */
    const now = new Date();
    const date = String(now.getDate()).padStart(2, '0');
    const monthIndex = now.getMonth(); 
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedMonth = String(monthIndex + 1).padStart(2, '0');
    const timeStamp = `${date}${formattedMonth}${year}_${hours}${minutes}${seconds}`;
    const logTimeStamp = `${date}${formattedMonth}${year}`;
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = months[monthIndex];
    return [timeStamp, logTimeStamp, year, currentMonth, date];
};


async function formatLogName(session, chatId){
   /**
    * Formats a log file name based on the session, chatId, and current date.
    *
    * @param {string} session - A string identifying the session for which the log will be created.
    * @param {string} chatId - A string identifying the chat for which the log will be generated.
    *
    * @returns {Array} An array containing the formatted log file name and a boolean indicating success (true).
    * @throws {Error} Throws an error if an error occurs during execution.
    */
    try {
        const [timeStamp, logTimeStamp, year, currentMonth, date] = await dateTimeInfo();
        const logFileName = `${session}_${chatId}_${date}.log`;
        return [logFileName, true];
    } catch (error) {
        console.error(`formatLogName -> ERROR: ${error.message}`);
        return false;
    }
};


async function createLogDirectories(sessions) {
   /**
    * Creates necessary directories for logging, including directories for date, year, month, and day.
    *
    * @param {Array} sessions - An array of session strings for which directories will be created.
    *
    * @returns {Array} An array containing a map of session directories and a boolean indicating success (true).
    * @throws {Error} Throws an error if an error occurs during directory creation.
    */
    try {
        const [timeStamp, logTimeStamp, year, currentMonth, date] = await dateTimeInfo();
        const dateDir = path.join(__dirname, 'log');
        const yearDir = path.join(dateDir, String(year));
        const monthDir = path.join(yearDir, currentMonth);
        const dayDir = path.join(monthDir, date);      
        [dateDir, yearDir, monthDir, dayDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        });
        const sessionDirs = {};
        sessions.forEach(session => {
            const sessionDir = path.join(dayDir, session);
            if (!fs.existsSync(sessionDir)) {
                fs.mkdirSync(sessionDir);
            }
            sessionDirs[session] = sessionDir;
        });
        return [sessionDirs, true];
    } 
    catch (error) {
        console.error(`createLogDirectories -> ERROR: ${error.message}`);
        return false;
    }
};


async function validateDir(sessions) {
   /**
    * Validates or creates necessary directories for sessions.
    *
    * @param {Array} sessions - An array of session strings for which directories will be validated or created.
    *
    * @returns {Object} An object containing the directory path and status (true if exists) for each session.
    * @throws {Error} Throws an error if an error occurs during validation or directory creation.
    */
    try {
        const [sessionDirs, status] = await createLogDirectories(sessions);
        if (!status) {
            console.error('validateDir -> ERROR: Failed to create directories');
            return false;
        }
        const sessionStatus = {};
        for (let session of sessions) {
            const dataDir = sessionDirs[session];
            if (fs.existsSync(dataDir)) {
                sessionStatus[session] = [dataDir, true];
            } else {
                console.error(`validateDir -> ERROR: Directory for session ${session} doesn't exist`);
                sessionStatus[session] = [null, false];
            }
        }
        return sessionStatus;
    } catch (error) {
        console.error(`validateDir -> ERROR: ${error.message}`);
        return false;
    }
};

module.exports = {formatTimestamp, dateTimeInfo, formatLogName, validateDir}
