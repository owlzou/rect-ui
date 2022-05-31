const path = require("path");

module.exports = {
  componentsRoot: "../lib/packages/components", // the folder where CLI will start searching for components.
  components: "**/index.vue", // 需要生成文档的 vue 文件的 glob
  outDir: "components", // folder to save components docs in (relative to the current working directry)
  getDestFile: (file, config) =>
    path.join(config.outDir, file).replace(/\.vue$/, ".md"), // specify the name of the output md file,
  templates: {
    component: require("./templates/component")
  }
};
