const { execSync } = require('child_process');
var fs = require('fs');
var path = require('path');
const { exit } = require('process');

// 构建
myExec('npx vuedx-typecheck . && npx vite build')
sed("dist/rect-ui.es.js", '= defineComponent', '= /*#__PURE__*/ defineComponent')

// 抽取定义
myExec('npm run dts:package');

removeDir("dist/components");
removeDir("dist/utils");
fs.unlinkSync("dist/index.d.ts");
fs.unlinkSync("dist/shims-vue.d.ts");

// 最后
pack()

/* -------------------------------- FUNCTIONS ------------------------------- */

function sed(fileName, match, replace) {
    let text = fs.readFileSync(fileName, "utf8").toString();
    text = text.replaceAll(new RegExp(match,"g"), replace);
    fs.writeFileSync(fileName, text);
}

function removeDir(filePath) {
    if (fs.existsSync(filePath)) {
        for (let file of fs.readdirSync(filePath)) {
            let newFilePath = path.join(filePath, file);
            if (fs.statSync(newFilePath).isDirectory()) {
                removeDir(newFilePath);
            } else {
                fs.unlinkSync(newFilePath);
            }
        }
        fs.rmdirSync(filePath);
    }
}

function pack() {
    sed('package.json', '"dependencies"', '"peerDependencies"');
    execSync("npm pack")
    sed('package.json', '"peerDependencies"', '"dependencies"');
}

function myExec(cmd) {
    try {
        execSync(cmd)
    } catch (e) {
        console.log(`${e.output}`)
        exit()
    }
}