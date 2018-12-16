import { filter, find } from 'lodash';
import tabletop from 'tabletop';
import { NotFoundError, InternalServerError } from 'restify-errors';

const DOC_ID = '1B_J3laBaCbg5HgxQGd-fnF7DvTOMwSN37PUlr1FgeyI';

export function get(entity, query) {
  return load(entity).then(data => filter(data, query || (() => true)));
}

export function getOne(entity, query) {
  return load(entity).then(data => find(data, query || (() => true)));
}

function load(entity) {
  return new Promise((resolve, reject) => {
    tabletop.init({
      key: `https://docs.google.com/spreadsheets/d/${DOC_ID}/pubhtml`,
      callback: data => {
        if (!data) return reject(new InternalServerError('No data'));
        if (!data[entity]) return reject(new NotFoundError('Invalid entity'));

        resolve(data[entity].all());
      },
      parseNumbers: true
    });
  });
}
