import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
//    "",
//    "portfolio",
    {
      text: "介绍",
      icon: "fa-solid fa-circle-info",
//      prefix: "guide/get-started",
      link: "guide/get-started/",
//      children: "structure",
    },
    {
      text: "仪器仪表类",
      icon: "book",
      collapsible: true,
      prefix: "/guide",
      link: "/guide/",
      children: ['inst/splicer/','inst/splicer/ck100.md','inst/splicer/ck100s.md','inst/splicer/ck600.md'],
    },
    {
      text: "施工工具类",
      icon: "book",
//      collapsible: true,
      prefix: "/tools",
      link: "/tools/",
//      children: ['inst/splicer/','inst/splicer/ck100.md'],
    },
    {
      text: "布线耗材类",
      icon: "book",
//      collapsible: true,
      prefix: "/tools",
      link: "/tools/",
//      children: ['inst/splicer/','inst/splicer/ck100.md'],
    },    
  ],
});



