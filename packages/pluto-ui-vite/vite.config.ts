import { defineConfig } from "vite";
import pluginVue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "./config/unocss";
import { UserConfig } from "vite";
import dts from "vite-plugin-dts";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: `[name].css`, // 防止出现哈希后缀
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [
    pluginVue(),
    vueJsx(),
    unocss(),
    dts({
      outputDir: "./dist/types",
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
  ],
  build: {
    rollupOptions,
    minify: false, // boolean | 'terser' | 'esbuild' 是否开启混淆 两个混淆工具  terser、esbuild
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "PlutoUI",
      fileName: "pluto-ui", // 输出文件名的前缀，和模块类型配合组成最终的文件名
      // @ts-ignore
      formats: ["esm", "umd", "iife"], // 导出模块类型
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    provider: "istanbul", // or 'c8',
    reporter: ["dot", "json"], // 没有text这个选项，加上这个报错
  },
};

export default defineConfig(config as UserConfig);
