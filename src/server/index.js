import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';
import logger from 'morgan';
import { get } from './lib/data-access';

const server = restify.createServer({
  name: 'starter-kit-server',
  version: '1.0.0'
});
const cors = corsMiddleware({
  origins: ['http://localhost:3000']
});

server.use(logger('dev'));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

server.get(
  '/*',
  restify.plugins.serveStatic({
    directory: `${__dirname}/public`,
    default: 'index.html'
  })
);

server.get('/api/:entity', (req, res, next) => {
  get(req.params.entity)
    .then(data => res.send(data))
    .catch(err => err)
    .then(next);
});

server.listen(3001, function() {
  console.log('%s running at %s', server.name, server.url);
});
