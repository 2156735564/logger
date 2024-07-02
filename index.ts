import { LogLevel, Logger } from './Logger';


const logger = Logger.getInstance();

logger.setLogLevel(LogLevel.VERBOSE);




logger.verbose('This is a verbose log message.');
logger.info('This is an informational log message.');
logger.warning('This is a warning log message.');
logger.error('This is an error log message.');

console.log('-----------');

logger.setLogLevel(LogLevel.INFO);


logger.verbose('This is a verbose log message.');
logger.info('This is an informational log message.');
logger.warning('This is a warning log message.');
logger.error('This is an error log message.');