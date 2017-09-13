//
// Importing / exporting gets done via the `ìmport` or `export` keyword.
// This example imports all exports via the wildcard operator from the relative positioned `constants.js` file.
//
// You can also import item by item like
//
// `import {foo} from './constants.js'`
//
// or just the default export like
//
// `import foo from './constants.js'`
//
import * as constants from './constants.js';

console.log(constants.foo);
console.log(constants.baz);
