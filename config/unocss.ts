import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import "@iconify-json/ic"

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const safelist = [
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...colors.map((v) => `text-${v}-500`),
  'py-1',
  'py-2',
  'py-3',
  'px-2',
  'px-4',
  'px-6',
  'rounded-99',
  'rounded-lg',
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });