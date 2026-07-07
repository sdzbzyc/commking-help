import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
//    "",
//    "/guide/",
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
      expanded: true,
      prefix: "/guide",
//    link: "/guide/inst/",
      children: [
        {
          text: "光纤熔接机",
          icon: "laptop-code",
          prefix: "inst/splicer/",
          collapsible: true,
          expanded: true,
          children: [
            "ck100.md",
            "ck100s.md",
            "ck600.md",
          ],
        },

        {
          text: "光万用表红光源",
          icon: "folder",
          prefix: "inst/opmvfl/",
          collapsible: true,
          expanded: true,
          children: [
            "ck6100.md",
            "ck6183.md",
          ],
        },
],
    },
    {
      text: "施工工具类",
      icon: "book",
      collapsible: true,
      expanded: true,
      prefix: "/guide",
      link: "/guide/tools/",
      children: ['tools/clean/','tools/clean/ckcp.md','tools/clean/ckcpmpo.md','tools/handtool/','tools/handtool/ckrs2.md'],
    },
    {
      text: "布线耗材类",
      icon: "book",
      collapsible: true,
      expanded: true,
      prefix: "/tools",
      link: "/guide/accessory/",
//      children: ['inst/splicer/','inst/splicer/ck100.md'],
    },    
  ],
});



