export const $ =
	<Ks extends string, Rec extends Record<Ks, any>>(attribute: Ks) =>
	(item: Rec) =>
		item && item[attribute]


////tests, add more symbols to export as, maybe `prop` too
///try to use like $`href`

///add readme
