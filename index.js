'use strict';
let message = process.argv[2] || 'woof';

console.log(`                               /-` + message.split('').map(() => '-').join('') + `-\\`);
console.log(`                               | ` + message + ` |`);
console.log(`                               \\_` + message.split('').map(() => '_').join('') + `_/`);
console.log(`                      __      / /`);
console.log(`     ,              ," e\`--o   / `);
console.log(`    ((             (  | __,'  /  `);
console.log(`     \\\\~----------' \\_;/      `);
console.log(`     (                /          `);
console.log(`     /) ._________.  )           `);
console.log(`    (( (         (( (            `);
console.log(`     \`\`-'         \`\`-'       `);
