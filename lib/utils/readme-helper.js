var fs = require("fs");
var path = require("path");

var sourcePath = process.argv.slice(2)[0];

const component = sourcePath.split(/[\\\/]+/).pop()

// console.log(`Component: ${component}`)

let imported = ["<script setup>"]
// 遍历 demo 下的文件
if (fs.existsSync(path.join(sourcePath, "demo"))) {
    var dir = fs.readdirSync(path.join(sourcePath, "demo"));
    var filename = [];
    dir.forEach(function (ele, _index) {
        filename.push(ele.split('.')[0]);
    });

    const readme = filename.map(i => `### ${upperSpace(i)}\n\n<${upper(i)}/>\n\n:::details 显示代码\n<<< @/../lib/packages/components/${component}/demo/${i}.vue\n:::\n\n`).join("");
    imported = imported.concat(filename.map(i => `import ${upper(i)} from '@/${component}/demo/${i}.vue'`));

    console.log("## 示例 Examples\n")
    console.log(readme)
}

imported.push("</script>")
console.log(imported.join("\n"))

function upper(str) {
    return str.split('-').map(i => i[0].toUpperCase() + i.substr(1)).join("")
}

function upperSpace(str) {
    const i = str.split('-').join(" ")
    return i[0].toUpperCase() + i.substr(1)
}