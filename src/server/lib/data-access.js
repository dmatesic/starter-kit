import { filter, find } from 'lodash';
import tabletop from 'tabletop';

const DOC_ID = '1B_J3laBaCbg5HgxQGd-fnF7DvTOMwSN37PUlr1FgeyI';

export function get(entity, query) {
  return load(entity).then(data => filter(data, query || (() => true)));
}

export function getOne(entity, query) {
  return load(entity).then(data => find(data, query || (() => true)));
}

function load(entity) {
  return new Promise(resolve => {
    tabletop.init({
      key: `https://docs.google.com/spreadsheets/d/${DOC_ID}/pubhtml`,
      callback: data => {
        resolve(data[entity].all());
      },
      parseNumbers: true
    });
  });
}
