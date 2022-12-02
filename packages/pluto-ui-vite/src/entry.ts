import { App } from "vue";
import { MyButton } from "./Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import { Link } from "./Link";
import "uno.css";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default function install(app: App): void {
  app.component(MyButton.name, MyButton);
  app.component(SFCButton.name, SFCButton);
  app.component(JSXButton.name, JSXButton);
  app.component(Link.name, Link);
}
