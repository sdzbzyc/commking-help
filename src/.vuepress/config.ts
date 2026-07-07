import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "通信汪CommKing",
  description: "通信汪CommKing的产品说明书",

  bundler: viteBundler(),

  theme,

  // 是否预加载页面链接
  shouldPrefetch: false,
});