import { defineConfig } from "vite"
import pluginVue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    pluginVue(),
    vueJsx(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    })
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "PlutoUI",
      fileName: "pluto-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
})