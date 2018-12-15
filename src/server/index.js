import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';
import { get } from './lib/data-access';

const server = restify.createServer({
  name: 'starter-kit-server',
  version: '1.0.0'
});
const cors = corsMiddleware({
  origins: ['http://localhost:3000']
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

server.get('/:entity', async (req, res, next) => {
  res.send(await get(req.params.entity));
  return next();
});

server.listen(3001, function() {
  console.log('%s running at %s', server.name, server.url);
});
