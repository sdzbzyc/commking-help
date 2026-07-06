import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
//    "",
    "/guide/",
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
      link: "/guide/inst/",
      children: ['inst/splicer/','inst/splicer/ck100.md','inst/splicer/ck100s.md','inst/splicer/ck600.md','inst/opmvfl/','inst/opmvfl/ck6100.md','inst/otdr/','inst/otdr/ckot1.md','network/','network/cknct1.md'],
    },
    {
      text: "施工工具类",
      icon: "book",
      collapsible: true,
      prefix: "/guide",
      link: "/guide/tools/",
      children: ['tools/clean/','tools/clean/ckcp.md','tools/clean/ckcpmpo.md','tools/handtool/','tools/handtool/ckrs2.md'],
    },
    {
      text: "布线耗材类",
      icon: "book",
      collapsible: true,
      prefix: "/tools",
      link: "/guide/accessory/",
//      children: ['inst/splicer/','inst/splicer/ck100.md'],
    },    
  ],
});



