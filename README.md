# @webpod/exec

A tiny spawn wrapper.

```js
import exec from '@webpod/exec'

const {ls, curl} = exec

const list = ls('-la').trim().split('\n')

const resp = curl('https://medv.io')
```

## Usage

```sh
npm i @webpod/exec
```

Import any binary you would like to call. Use it like a function.

```js
import exec from '@webpod/exec'

const {cat} = exec

const content = cat('README.md')
```

To get exit code or stderr, use `.status` or `.stderr`.

```js
const {git} = exec

console.log(git('pull').status)
```

To pass options to the [spawn], bind to an options object.

```js
const {tee} = exec

tee.call({input: 'Hello, world!'}, 'file.txt')
```

## License

MIT

[spawn]: https://nodejs.org/api/child_process.html#child_processspawncommand-args-options
