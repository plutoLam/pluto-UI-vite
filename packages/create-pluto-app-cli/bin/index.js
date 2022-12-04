#!/usr/bin/env node

import { promisify } from "util";
import figlet from "figlet";
import clear from "clear";
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const log = (content) => console.log(chalk.green(content));
const opt = {
  "PlutoUI应用模版(Vite)": "pluto-ui-vite",
  PlutoAdmin模版: "admin",
  组件库脚手架: "uitemplate",
  组件库文档网站: "uitemplate",
  退出: "quit",
};

const question = [
  {
    type: "rawlist" /* 选择框 */,
    message: "请选择要创建的项目？",
    name: "operation",
    choices: Object.keys(opt),
  },
];

// 打印欢迎画面
clear();
const logo = figlet.textSync("Pluto UI!", {
  // font: "Ghost",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

const rainbow = chalkAnimation.rainbow(logo);
setTimeout(() => {
  rainbow.stop(); // Animation stops
  query();
}, 500);

// Debug
// const { default: op } = await import(`../lib/operations/Pluto-ui-vite.js`);
// op()

async function query() {
  const answer = await inquirer.prompt(question);
  console.log('answer: ', opt[answer.operation]);

  if (answer.operation === "退出") return;

  const { default: op } = await import(
    `../lib/operations/${opt[answer.operation]}.js`
  );
  await op();

  // await query();
}
