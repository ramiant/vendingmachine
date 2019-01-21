const _items = [{
	name: 'Apple',
	credit: 1
}, {
	name: 'Biscuits',
	credit: 2.5
}, {
	name: 'Soda',
	credit: 3
}, {
	name: 'Sandwich',
	credit: 5
}, {
	name: 'Croissant',
	credit: 2
}, {
	name: 'Candy',
	credit: 1
}, {
	name: 'Peanuts',
	credit: 0.5
}]

export default function generateItems({
	width: w = 3, // columns
	height: h = 3, // rows
	depth: d = 4
} = {}) {
	let items = [];

	for (let i = 0; i < h; i++) {
		items.push([]);
		for (let j = 0; j < w; j++) {
			items[i].push([])
			let rand = Math.floor(Math.random()*(_items.length - 1))
			for (let k = 0; k < d; k++) {
				items[i][j].push(_items[rand]);
			}
		}
	}

	return items;
}
