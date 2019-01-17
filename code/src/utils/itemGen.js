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
	width: w = 5, // columns
	height: h = 8, // rows
	depth: d = 10
} = {}) {
	let items = Array(h).fill(Array(w).fill(''));
	
	for (let i = 0; i < items.length; i++) {
		for (let j = 0; j < items[i].length; j++) {
			let rand = Math.floor(Math.random()*(items.length - 1))
			console.log(_items[rand].name)
			items[i][j] = Array(d).fill(_items[rand])
		}
	}

	console.log(items)

	// items.forEach((row, i) => {
	// 	row.forEach((spring, j) => {
	// 		console.log(i, j)
	// 		items[i][j] = Array(d).fill(_items[rand]);
	// 	})
	// })
	return items;
}
