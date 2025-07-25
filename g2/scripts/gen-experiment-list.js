const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/experiments');
const files = fs.readdirSync(dir)
  .filter(f => f.endsWith('.ts'))
  .map(f => ({
    name: f.replace('.ts', ''),
    file: `./src/experiments/${f}`
  }));

fs.writeFileSync(
  path.join(dir, 'experiment-list.json'),
  JSON.stringify(files, null, 2),
  'utf-8'
);

console.log('实验列表已生成：src/experiments/experiment-list.json');