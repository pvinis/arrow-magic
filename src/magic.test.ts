import { $ } from './magic'

it('works', () => {
	const examples = [{ href: 'aha1' }, { href: 'aha2' }]

	const hrefs = examples.map($('href'))

	expect(hrefs).toEqual(['aha1', 'aha2'])
})

it('should give type error if a typescript error on non-existent prop is used, but still do the operation', () => {
	const examples = [{ href: 'aha1' }, { href: 'aha2' }]

	// @ts-expect-error
	const blas = examples.map($('bla'))
	expect(blas).toEqual([undefined, undefined])
})

it('can be used with the shorthand $``, but you lose typechecking', () => {
	const examples = [{ href: 'aha1' }, { href: 'aha2' }]

	const hrefs = examples.map($`href`)
	expect(hrefs).toEqual(['aha1', 'aha2'])

	const tests = examples.map($`test`)
	expect(tests).toEqual([undefined, undefined])
})

it('can get funky, but you lose typechecking', () => {
	const examples = [{ href: 'aha1' }, { href: 'aha2' }]

	const letterF = 'f'
	const hrefs = examples.map($`hre${letterF}`)
	expect(hrefs).toEqual(['aha1', 'aha2'])
})
