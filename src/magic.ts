const example = [{ href: 'aha1' }, { href: 'aha2' }]

const $ =
	<Ks extends string, Rec extends Record<Ks, any>>(attribute: Ks) =>
	(item: Rec) =>
		item && item[attribute]

const hrefs = example.map($('href'))
console.log(hrefs)

////tests, add more symbols to export as, maybe `prop` too
///try to use like $`href`

///add readme
