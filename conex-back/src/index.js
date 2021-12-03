import app from './app';
import config from './config/environment';
import http from 'http';

const server = http.Server(app);
server.listen(config.server.port, config.server.host, () => {
  console.log('Server Started');
});
