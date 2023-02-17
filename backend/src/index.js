const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const sequelize = require('./db/db-connection');
const server = app.listen(config.port, () => {
  sequelize.authenticate().then(() => {
    sequelize.sync().then((result)=>{      
    logger.log('info', 'database is connected')
    logger.log('info', 'Data synced successfully');
    logger.info(`Listening to port ${config.port}`);
  }).catch(()=>{
      logger.log('info', 'Data is not synced')
  });  
  }).catch((err) => {
    logger.error('error', err);
  })
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
