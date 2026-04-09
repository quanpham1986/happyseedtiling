const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('Includes Meet The Founder:', html.includes('Meet The Founder'));
console.log('Includes </body>:', html.includes('</body>'));
console.log('Includes <nav>:', html.includes('<nav>'));
console.log('Includes class="logo":', html.includes('class="logo"'));

const idx = html.indexOf('Meet The Founder');
console.log('Index:', idx);
