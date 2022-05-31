import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineConfig({
  plugins: process.env.VITEST ? [vueJsx(), vue()] : [dts(), vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "rect-ui",
      fileName: (format) => `rect-ui.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
    },
  },
  test: {
    include: ["**/tests/*.test.[jt]s?(x)"],
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx$/],
    }
  },
});
