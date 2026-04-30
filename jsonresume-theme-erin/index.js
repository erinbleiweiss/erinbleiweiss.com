import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import Resume from './Resume.vue';
import fs from 'node:fs/promises';
import * as sass from 'sass';
import path from 'node:path';

export async function render(resume) {
      const app = createSSRApp(Resume, { resume });
      const html = await renderToString(app);

      return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">
        <style>
          ${await getStyles()}
        </style>
        <title>${resume.basics.name}</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `;
}

async function getStyles() {
    try {
        // Resolve the absolute path to your scss file
        const scssPath = path.resolve(__dirname, 'styles/main.scss');

        const result = sass.compile(scssPath, {
            style: 'compressed', // 'expanded' for readable, 'compressed' for minified
            loadPaths: [path.dirname(scssPath)] // Helps resolve @imports within the file
        });

        return result.css;
    } catch (err) {
        console.error('Sass Compilation Error:', err);
        return '';
    }
}