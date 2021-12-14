type MagicOverload = {
	<Key extends string, Value, Rec extends Record<Key, Value>>(attribute: Key): (
		item: Rec
	) => Value

	<
		TagKey extends TemplateStringsArray,
		Value,
		Rec extends Record<string, Value>
	>(
		attribute: TagKey,
		...expr: string[]
	): (item: Rec) => Value
}

export const magic: MagicOverload =
	(attribute, ...strings) =>
	(item) => {
		let name = ""
		if (Array.isArray(attribute)) {
			attribute.forEach((str, i) => {
				name += str + (strings[i] || "")
			})
		} else {
			name = attribute
		}

		return item && item[name]
	}

export const $ = magic
export const prop = magic
