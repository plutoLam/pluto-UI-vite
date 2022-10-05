import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "m"
  },
  icon: {
    type: String,
    default: ""
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  }
};
const sizeMap = {
  "s": [1, 2],
  "m": [2, 4]
};
const MyButton = defineComponent({
  name: "LButton",
  props,
  setup(props2, {
    slots
  }) {
    console.log("props: ", props2);
    return () => createVNode("button", {
      "class": `
      py-${sizeMap[props2.size][0]} 
      px-${sizeMap[props2.size][1]} 
      rounded-${props2.round ? "99" : "lg"}
      bg-${props2.color}-${props2.plain ? "100" : "500"}
      hover:bg-${props2.color}-400
      border-${props2.color}-${props2.plain ? "500" : "500"}
      cursor-pointer
      border-solid
      text-${props2.plain ? props2.color + "-500" : "white-500"}
      hover:text-white
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
    `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFCButton");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
function install(app) {
  app.component(MyButton.name, MyButton);
  app.component(SFCButton.name, SFCButton);
  app.component(JSXButton.name, JSXButton);
}
export {
  JSXButton,
  MyButton,
  SFCButton,
  install as default
};
