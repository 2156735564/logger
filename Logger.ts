export enum LogLevel {
    VERBOSE,
    INFO,
    WARNING,
    ERROR
  }
  
export class Logger {
    private static instance: Logger;
    private logLevel: LogLevel;
  
    private constructor(logLevel: LogLevel = LogLevel.INFO) {
      this.logLevel = logLevel;
    }
  
    public static getInstance(logLevel?: LogLevel): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger(logLevel);
      }
      return Logger.instance;
    }
  
    public setLogLevel(logLevel: LogLevel): void {
      this.logLevel = logLevel;
    }
  
    private log(level: LogLevel, message: string): void {
      if (level >= this.logLevel) {
        console.log(`[${LogLevel[level]}] ${message}`);
      }
    }
  
    public verbose(message: string): void {
      this.log(LogLevel.VERBOSE, message);
    }
  
    public info(message: string): void {
      this.log(LogLevel.INFO, message);
    }
  
    public warning(message: string): void {
      this.log(LogLevel.WARNING, message);
    }
  
    public error(message: string): void {
      this.log(LogLevel.ERROR, message);
    }
  }





