import { createApp } from 'vue';
import Resume from './jsonresume-theme-erin/Resume.vue';
import resumeData from './resume.json';

// Mount the app normally for the browser
const app = createApp(Resume, { resume: resumeData });
app.mount('#app');

// Optional: Enable HMR for the JSON data itself
if (import.meta.hot) {
    import.meta.hot.accept('./resume.json', (newRawModule) => {
        // This will trigger a full page reload when resume.json changes
        window.location.reload();
    });
}