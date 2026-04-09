const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const lines = html.split('\n');

const output = lines.map((line, index) => {
    if (line.includes('data:image') && line.length > 2000) {
        return `${index + 1}: <HUGE BASE64 IMAGE LINE SKIPPED>`;
    }
    return `${index + 1}: ${line}`;
});

fs.writeFileSync('temp_view.txt', output.join('\n'));
