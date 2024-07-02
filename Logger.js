"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["VERBOSE"] = 0] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(logLevel) {
        if (logLevel === void 0) { logLevel = LogLevel.INFO; }
        this.logLevel = logLevel;
    }
    Logger.getInstance = function (logLevel) {
        if (!Logger.instance) {
            Logger.instance = new Logger(logLevel);
        }
        return Logger.instance;
    };
    Logger.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    Logger.prototype.log = function (level, message) {
        if (level >= this.logLevel) {
            console.log("[".concat(LogLevel[level], "] ").concat(message));
        }
    };
    Logger.prototype.verbose = function (message) {
        this.log(LogLevel.VERBOSE, message);
    };
    Logger.prototype.info = function (message) {
        this.log(LogLevel.INFO, message);
    };
    Logger.prototype.warning = function (message) {
        this.log(LogLevel.WARNING, message);
    };
    Logger.prototype.error = function (message) {
        this.log(LogLevel.ERROR, message);
    };
    return Logger;
}());
exports.Logger = Logger;
