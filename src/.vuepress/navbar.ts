import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  "/guide/get-started/",
//  {
//    text: "指南",
//    icon: "lightbulb",
//    prefix: "/guide/",
//    children: [
//      {
//        text: "Bar",
//        icon: "lightbulb",
//        prefix: "bar/",
//        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
//      },
//      {
//        text: "Foo",
//        icon: "lightbulb",
//        prefix: "foo/",
//        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
//      },
//    ],
//  },
  {
    text: "在线商城",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "京东自营旗舰店",
        icon: "lightbulb",
        link: "https://commking.jd.com",
//        prefix: "bar/",
//        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },      
      {
        text: "京东网络自营旗舰店",
        icon: "lightbulb",
        link: "https://mall.jd.com/index-1000351981.html",
//        prefix: "bar/",
//        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },  
     {
       text: "天猫官方旗舰店",
       icon: "lightbulb",
       link: "https://commking.tmall.com/",
//       prefix: "bar/",
//       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
     },            
//      {
//        text: "Foo",
//        icon: "lightbulb",
//        prefix: "foo/",
//        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
//      },
    ],
  },
  {
    text: "官网",
    icon: "book",
    link: "https://www.commking.cn",
  },
]);
