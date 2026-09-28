import { access, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const required = ['dist/index.html', 'dist/styles.css', 'dist/game.js'];
await Promise.all(required.map((file) => access(file)));
execFileSync(process.execPath, ['--check', 'dist/game.js'], { stdio: 'inherit' });

const html = await readFile('dist/index.html', 'utf8');
const javascript = await readFile('dist/game.js', 'utf8');
for (const reference of ['./styles.css', './game.js']) {
  if (!html.includes(reference)) throw new Error(`index.html에 ${reference} 참조가 없습니다.`);
}
if (!html.includes('lang="ko"')) throw new Error('문서 언어 설정이 없습니다.');

const htmlIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = htmlIds.filter((id, index) => htmlIds.indexOf(id) !== index);
if (duplicateIds.length) throw new Error(`중복된 HTML id: ${[...new Set(duplicateIds)].join(', ')}`);
const referencedIds = [...javascript.matchAll(/\$\('#([^']+)'\)/g)].map((match) => match[1]);
const missingIds = [...new Set(referencedIds.filter((id) => !htmlIds.includes(id)))];
if (missingIds.length) throw new Error(`game.js가 찾는 HTML id가 없습니다: ${missingIds.join(', ')}`);
console.log('Static site verified: dist/');
