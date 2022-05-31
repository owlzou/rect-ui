function upper(str) {
  return str
    .split("-")
    .map((i) => i[0].toUpperCase() + i.substr(1))
    .join("");
}

function getSidebar() {
  const menuComponents = [
    ["徽标", "badge"],
    ["按钮", "button"],
    ["卡片", "card"],
    ["多选框", "checkbox"],
    ["下拉菜单", "dropdown"],
    ["分组", "fieldset"],
    ["输入框", "input"],
    ["对话框", "modal"],
    ["单选框", "radio"],
    ["下拉菜单", "select"],
    ["滑块", "slider"],
    ["开关", "switch"],
    ["标签页", "tabs"],
    ["表格","table"],
    ["文本框", "textarea"],
  ];

  menuComponents.sort((a, b) => a[1] - b[1]);

  // 在文件夹里的index文件，不要忘记链接最后的'/'
  return [
    {
      text: "基础 Basic",
      children: [
        { text: "色彩 Color", link: "/basic/color.html" },
        { text: "图标 Icons", link: "/basic/icon.html" },
        { text: "栅格 Grid", link: "/basic/grid.html" },
      ],
    },
    {
      text: "组件 Components",
      children: menuComponents.map((i) => ({
        text: `${i[0]} ${upper(i[1])}`,
        link: `/components/${i[1]}/`,
      })),
    },
  ];
}

function getExampleSidebar() {
  const examples = [
    ["表单", "form"],
    ["音乐播放器", "music-player"],
  ];

  return [
    {
      text: "示例 Examples",
      children: examples.map((i) => ({
        text: `${i[0]} ${upper(i[1])}`,
        link: `/examples/${i[1]}/`,
      })),
    },
  ];
}

module.exports = {
  title: "Rect UI 文档",
  description: "Vue3 UI 库学习产物",
  themeConfig: {
    nav: [
      {
        text: "文档",
        link: "/basic/color.html",
        activeMatch: "^/(basic|components)/|^/$",
      },
      { text: "示例", link: "/examples/form/", activeMatch: '^/examples/' },
      { text: "Github", link: "https://github.com/owlzou/rect-ui" },
    ],
    sidebar: { "/examples/": getExampleSidebar(), "/": getSidebar() },
  },
};
