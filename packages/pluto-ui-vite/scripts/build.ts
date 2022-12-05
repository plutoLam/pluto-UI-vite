import fs from "fs-extra";
import path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);

  const baseOutDir = config.build.outDir;
  console.log('baseOutDir: ', baseOutDir);
  const packageJson = require('../package.json');
  packageJson.main = "pluto-ui.umd.js";
  packageJson.module = "pluto-ui.esm.js";
  // packageJson.types = "pluto-ui.d.ts";
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./readme.md"),
    path.resolve(baseOutDir + "/readme.md")
  );

  // 分块打包
  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      // 当有两个组件时，这里的outDir会一层套一层
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`],
        },
        outDir,
      };
      // 防止config改变
      const copyConfig = Object.assign({}, config)
      copyConfig.build = { ...config.build, ...custom };
      await build(defineConfig(copyConfig as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "pluto-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();