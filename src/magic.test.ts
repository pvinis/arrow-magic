import { $ } from './magic'

it('works', () => {
	const examples = [{ href: 'aha1' }, { href: 'aha2' }]

	const hrefs = examples.map($('href'))

	expect(hrefs).toEqual(['aha1', 'aha2'])
})

it('should give type error if a typescript error on non-existent prop is used, but still do the operation', () => {
	const examples = [{ href: 'aha1' }, { href: 'aha2' }]

	// @ts-expect-error
	expect(examples.map($('bla'))).toEqual([undefined, undefined])
})
