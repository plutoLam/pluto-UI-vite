import { defineComponent, PropType } from "vue";
import "uno.css";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type Isize = "s" | "m";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  size: {
    type: String as PropType<Isize>,
    default: "m", // 设定默认大小
  },
  icon: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
};
const sizeMap = {
  s: [1, 2],
  m: [2, 4],
};
export default defineComponent({
  name: "LButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-${sizeMap[props.size][0]} 
      px-${sizeMap[props.size][1]} 
      rounded-${props.round ? "99" : "lg"}
      bg-${props.color}-${props.plain ? "100" : "500"}
      hover:bg-${props.color}-400
      border-${props.plain ? props.color : "black"}-${
          props.plain ? "500" : "500"
        }
      cursor-pointer
      border-solid
      text-${props.plain ? props.color + "-500" : "white-500"}
      hover:text-${props.plain ? "black" : "white"}
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
    `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
