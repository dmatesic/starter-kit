import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';
import { BadRequestError } from 'restify-errors';
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

server.get('/api/:entity', (req, res, next) => {
  let matches;
  try {
    matches = getMatches(req);
  } catch (err) {
    res.send(new BadRequestError('Invalid JSON for filter'));
    next();
  }

  get(req.params.entity, matches)
    .then(data => res.send(data))
    .catch(err => err)
    .then(next);

  function getMatches(req) {
    const filter = req.query.filter;
    if (!filter) return null;

    JSON.parse(filter);
  }
});

server.get(
  '/*',
  restify.plugins.serveStatic({
    directory: `${__dirname}/public`,
    default: 'index.html'
  })
);

server.listen(3001, function() {
  console.log('%s running at %s', server.name, server.url);
});
