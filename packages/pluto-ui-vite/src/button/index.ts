import MyButton from "./Button";
import { App } from "vue";

// 导出Button组件
export { MyButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
  },
};
