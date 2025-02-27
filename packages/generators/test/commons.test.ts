import { strictEqual } from 'assert'
import { getJavaScript } from '../lib/commons'

describe('common tests', () => {
  it('getJavaScript returns transpiled JavaScript', () => {
    const transpiled = getJavaScript(
      `import bla from 'bla'
import something from './file'

type X = { name: string }

function test (arg: X) {
  bla(something)
}

// This is a comment
const otherThing: string = "Hello"
`
    )

    strictEqual(
      transpiled,
      `import bla from 'bla';
import something from './file.js';

 function test(arg) {
    bla(something);
}

 // This is a comment
const otherThing = "Hello";
`
    )

    strictEqual(
      getJavaScript(`import { authentication } from './authentication'`),
      `import { authentication } from './authentication.js'`
    )
  })
})
