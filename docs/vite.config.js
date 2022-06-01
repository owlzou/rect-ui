import { defineConfig } from "vite";
const path = require('path')
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [vueJsx()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../lib/packages/components')
        },
    },
    base:"./"
});
