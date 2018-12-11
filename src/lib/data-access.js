import { filter, find } from 'lodash';
import tabletop from 'tabletop';

const DOC_ID = '1B_J3laBaCbg5HgxQGd-fnF7DvTOMwSN37PUlr1FgeyI';

export default class DataAccess {
	constructor() {}

	init() {
		return new Promise((resolve) => {
			tabletop.init({
				key: `https://docs.google.com/spreadsheets/d/${DOC_ID}/pubhtml`,
				callback: (data) => {
					const tables = Object.keys(data);
					tables.forEach((table) => {
						this[table] = data[table].all();
					});
					resolve();
				},
				parseNumbers: true
			});
		});
	}

	get(table, query) {
		return filter(this[table], query || (() => true));
	}

	getOne(table, query) {
		return find(this[table], query || (() => true));
	}
}
