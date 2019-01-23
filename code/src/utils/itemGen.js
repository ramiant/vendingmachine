const _items = [{
	name: 'Apple',
	credit: 1,
	url: 'http://pngimg.com/uploads/apple/apple_PNG12439.png'
}, {
	name: 'Biscuits',
	credit: 2.5,
	url: 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Apps-preferences-web-browser-cookies-icon.png'
}, {
	name: 'Soda',
	credit: 3,
	url: 'http://icons.iconarchive.com/icons/musett/coca-cola/128/Coca-Cola-icon.png'
}, {
	name: 'Sandwich',
	credit: 5,
	url: 'http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/128/32386-sandwich-icon.png'
}, {
	name: 'Croissant',
	credit: 2,
	url: 'http://icons.iconarchive.com/icons/musett/coffee-shop/128/Croissant-icon.png'
}, {
	name: 'Candy',
	credit: 1,
	url: 'http://icons.iconarchive.com/icons/gianni-polito/colobrush/128/candy-stick-icon.png'
}, {
	name: 'Peanuts',
	credit: 0.5,
	url: 'http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/128/32369-peanuts-icon.png'
}]

export default function generateItems({
	width: w = 4, // columns
	height: h = 8, // rows
	depth: d = 4,
	variableDepth = false
} = {}) {
	let items = [];

	for (let i = 0; i < h; i++) {
		items.push([]);
		for (let j = 0; j < w; j++) {
			items[i].push([])
			let rand = Math.floor(Math.random()*(_items.length))
			let depth = variableDepth ? Math.floor(Math.random()*d) : d
			for (let k = 0; k < depth; k++) {
				items[i][j].push(_items[rand]);
			}
		}
	}

	return {
		items: items,
		width: w,
		height: h,
		depth: d
	};
}
