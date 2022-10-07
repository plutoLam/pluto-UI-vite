import { defineConfig } from "vite"
import pluginVue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: `assets/[name].css`,
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    pluginVue(),
    vueJsx(),
    unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,   // 追加
    lib: {
      entry: "./src/entry.ts",
      name: "PlutoUI",
      fileName: "pluto-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})