# arrow-magic

A great way to write simple arrow functions faster.


## Why arrow-magic?

Have you ever written code similar to the one below?
```ts
const aThing = anotherThing.map(thing => thing.name)
```

I'm sure you have.

How about something like this?
```ts
const aThing = anotherThing.map(x => x.name)
```

Probably also yes, because we are programmers, and we want to be efficient, so we name `thing` to just `x` because it's just used in that one place and it's pretty obvious what we want to do with it.

Let me show you an even more efficient way to do it, that gets rid of the `x` too!

```ts
const aThing = anotherThing.map($("name"))
```

Or maybe even like this.
```ts
const aThing = anotherThing.map($`name`)
```

Ain't that cool? I love it.


## Installation

```sh
npm install arrow-magic
yarn add arrow-magic
```

## Usage

Pretty simple.
```ts
import { $ } from "arrow-magic"

const aThing = anotherThing.map($("name"))
```


## Why is is `$`?

Well, why not?

Ruby uses `&`, and that seems fine. I like `$`, and I also export it as `magic` and as `prop` in case you want something more.. english than `$`.

If you like some other symbol/name, feel free to make a PR!


## Is it any good?

[Yes.](https://github.com/glenjamin/node-fib#is-it-any-good)


## Do I lose anything by using this?

Not if you use the `$("name")` syntax. It even works with typescript and typechecking!

The `` $`name` `` syntax unfortunately loses typechecking. Maybe there is a way to keep it, but I couldn't find it. Please make a PR if you can make this happen!
