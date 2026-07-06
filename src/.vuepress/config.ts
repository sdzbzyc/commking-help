import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "通信汪CommKing",
  description: "通信汪CommKing的产品说明书",
  plugins: [
    docsearchPlugin({
      appId: '4KDWFWXV0T',
      apiKey: 'de8ef0731b94a3377b32f5f10a581185',
      indexName: 'help-commking',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
                searchInputLabel: '搜索',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                selectKeyAriaLabel: 'Enter key',
                navigateText: '切换',
                navigateUpKeyAriaLabel: 'Arrow up',
                navigateDownKeyAriaLabel: 'Arrow down',
                closeText: '关闭',
                closeKeyAriaLabel: 'Escape key',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
          },
        },
      },
    },
    }),
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

