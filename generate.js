// generate.js
import { render } from './jsonresume-theme-erin/index.js';
import fs from 'node:fs/promises';

async function build() {
    // Copy static assets to dist
    const source = './static';
    const destination = './dist/static';

    fs.cp(source, destination, { recursive: true }, (err) => {
        if (err) {
            console.error('❌ Error copying assets:', err);
        } else {
            console.log('✅ Assets copied successfully!');
        }
    });

    const resumeData = JSON.parse(await fs.readFile('./resume.json', 'utf-8'));

    // We manually call our Vue render function
    const html = await render(resumeData);

    await fs.writeFile('dist/index.html', html);
    console.log('✅ Resume generated at index.html');
}

build();