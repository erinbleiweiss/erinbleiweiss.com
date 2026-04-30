// generate.js
import { render } from './jsonresume-theme-erin/index.js';
import fs from 'node:fs/promises';

async function build() {
    const resumeData = JSON.parse(await fs.readFile('./resume.json', 'utf-8'));

    // We manually call our Vue render function
    const html = await render(resumeData);

    await fs.writeFile('resume.html', html);
    console.log('✅ Resume generated at resume.html');

}

build();