const Hapi = require('hapi');
const Routes = require('./src/routes');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8001,
});

server.route(Routes);

if (!module.parent) {
  server.start((error) => {
    if (error) {
      console.log('error', error);
    }
    console.log('Server started at port 8001');
  });
}

module.exports = server;
