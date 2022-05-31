// packages/main.ts
import type { App } from "vue";
import * as components from "./components";
import "./css/color.css"
import "./css/common.styl"

const ComponentLibrary = {
    install(Vue:App, _options = {}) {
        // components
        for (const componentName in components) {
            const component = components[componentName];
            component.install = function (Vue:App) {
                Vue.component(component.name, component);
            };
            Vue.component(component.name, component);
        }
    },
};

export default ComponentLibrary; 
export * from "./components"
export * from "./utils/types"
export * from "./components/types"
