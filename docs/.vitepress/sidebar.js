import {getSidebarList} from './generateSidebar'
console.log(getSidebarList(), 'getSidebarList()');


const sidebar = {
  "/pages/vim/": [
    {
      text: "Vim",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/vim/" },
        { text: "认识Vim", link: "/pages/vim/knowVim" },
        { text: "行相关命令", link: "/pages/vim/commandLine" },
        { text: "语法", link: "/pages/vim/grammar" },
      ],
    },
  ],
  "/pages/tools/": [
    {
      text: "Tool",
      collapsible: true,
      items: [{ text: "工具地址", link: "/pages/tools/index" }],
    },
  ],
  "/pages/learning/": [
    {
      text: "面试题",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/learning/" },
        { text: "HTML", link: "/pages/learning/html" },
        { text: "JS", link: "/pages/learning/js" },
        { text: "VUE", link: "/pages/learning/vue" },
      ],
    },
  ],
  "/pages/notes/": [
  {
    text: "开发配置",
    collapsible: true,
    items: [
      { text: "环境", link: "/pages/notes/my-settings/development" },
    ],
  },
    {
      text: "npm",
      collapsible: true,
      collapsed: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/learning/" },
        { text: "常用命令", link: "/pages/notes/npm/npmCommand" },
        { text: "私有化", link: "/pages/notes/npm/privateNpm" },
        { text: "包发布", link: "/pages/notes/npm/packagePublish" },
        { text: "nrm", link: "/pages/notes/npm/nrm" },
      ],
    },
    {
      text: "node",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "pm2",
          link: "/pages/notes/node/pm2",
        },
      ],
    },
    {
      text: "问题",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "小程序",
          link: "/pages/notes/applet/issue",
        },
      ],
    },
   
  ],
  "/pages/test/": [
    {
      text: "单元测试基础知识",
      collapsible: true,
      items: [
        { text: "为什么写测试", link: "/pages/test/basic/whyWriteTest" },
        { text: "单元测试在修改代码时的好处", link: "/pages/test/basic/editCodeAdvantage" },
        { text: "单元测试的其他好处", link: "/pages/test/basic/otherAdvantage" },
        { text: "自动化思维-功能验证", link: "/pages/test/basic/automate" },
        { text: "单元级别的功能测试", link: "/pages/test/basic/unitLevelTest" },
        { text: "什么时候写测试", link: "/pages/test/basic/whatTimeWriteTest" },
      ],
    },
    {
      text: "初始Vitest",
      collapsible: true,
      items: [
        { text: "编写第一个单元测试", link: "/pages/test/vitest/oneTest" },
        { text: "Vitest Test Api", link: "/pages/test/vitest/api" },
        { text: "Vitest Debug", link: "/pages/test/vitest/debug" },
        { text: "Vitest VS Jest", link: "/pages/test/vitest/vitestVsJest" },
        { text: "实现 mini test runner", link: "/pages/test/vitest/miniTestRunner" },
      ],
    },
    {
      text: "Vue-项目实战",
      collapsible: true,
      items: [
        { text: "项目概述", link: "/pages/test/actualCombatVue/index" },
      ],
    },
  ],
};

export default sidebar;
