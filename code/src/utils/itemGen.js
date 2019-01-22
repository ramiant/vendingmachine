const _items = [{
	name: 'Apple',
	credit: 1,
	url: 'http://pngimg.com/uploads/apple/apple_PNG12439.png'
}, {
	name: 'Biscuits',
	credit: 2.5,
	url: 'https://png.pngtree.com/element_pic/17/03/22/2de2d82b4a67578ba9e51a91ed394cb2.jpg'
}, {
	name: 'Soda',
	credit: 3,
	url: 'https://c7.uihere.com/files/292/667/684/soft-drink-coca-cola-pepsi-sprite-coca-cola-drink-png-image-thumb.jpg'
}, {
	name: 'Sandwich',
	credit: 5,
	url: 'https://png.pngtree.com/element_pic/00/16/07/2357933d72dbe8a.jpg'
}, {
	name: 'Croissant',
	credit: 2,
	url: 'https://www.clipartmax.com/png/middle/107-1077287_dd-croissant-by-amis0129-kawaii-croissant.png'
}, {
	name: 'Candy',
	credit: 1,
	url: 'https://img.pngio.com/red-cartoon-candy-red-candy-cartoon-candy-candy-png-image-and-clipart-candy-png-260_261.png'
}, {
	name: 'Peanuts',
	credit: 0.5,
	url: 'https://png.pngtree.com/element_pic/16/12/31/6f6b92e43654c58f161ebd96969a1c01.jpg'
}]

export default function generateItems({
	width: w = 4, // columns
	height: h = 8, // rows
	depth: d = 4,
	variableDepth = true
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
