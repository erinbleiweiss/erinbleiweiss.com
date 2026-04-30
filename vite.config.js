// theme/vite.config.js
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: './static',
                    dest: './public/static'
                }
            ]
        })
    ],
    ssr: {
        // This ensures Vue isn't treated as an external CJS module
        noExternal: ['vue']
    },
    server: {
        open: true // Opens browser automatically
    }
});