var fs = require("fs");
var path = require("path");

const prefix = "R"

const base = "./packages/components";
var dir = fs.readdirSync(base);

let index_writer = fs.createWriteStream(`${base}/index.ts`);
let types_writer = fs.createWriteStream(`${base}/types.ts`);

dir.forEach(function (ele, index) {
  const dirName = path.join(base, ele);
  if (fs.statSync(dirName).isDirectory()) {
    const dir2 = fs.readdirSync(dirName);
    let cpts = [];
    dir2.forEach((el, _index) => {
      if (el.endsWith(".vue")) {
        const baseName = el == "index.vue" ? ele : el.split(".")[0]
        // for install
        cpts.push(baseName);
      } else if (el == "types.ts") {
        types_writer.write(`export * from "./${ele}/types"\n`);
      }
    });
    index_writer.write(`export * from "./${ele}"\n`)
    index_writer.write(`export {default as ${upper(ele)}} from "./${ele}"\n`)
    fs.writeFileSync(path.join(dirName, "index.ts"), installTemplate(ele, cpts));
  }
});

index_writer.close();
types_writer.close();

function upper(str) {
  return str
    .split("-")
    .map((i) => i[0].toUpperCase() + i.substr(1))
    .join("");
}

function installTemplate(mainName, cpts) {
  return `import type { App } from "vue";\n
${cpts.map(i => `import ${prefix}${upper(i)} from './${i == mainName ? 'index' : i}.vue'\n`).join("")}
const ${upper(mainName)} = {
	install(Vue: App) {
${cpts.map((i) => `\t\tVue.component(${prefix}${upper(i)}.name, ${prefix}${upper(i)});`).join("\n")}
	}
};

export default ${upper(mainName)}
export { ${cpts.map(i => prefix + upper(i)).join(",")} }`
}

