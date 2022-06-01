import { test, expect, vi, describe } from "vitest";
import { mount } from "@vue/test-utils";
import { RTextarea } from "../..";
import { ref } from "vue";

const Component = {
    template: `<r-textarea v-model="value" placeholder="占位字符串" ref="inputRef"/>`,
    components: { RTextarea },
    setup() {
        const value = ref("默认输入");
        const inputRef = ref<InstanceType<typeof HTMLInputElement>>();
        return { value, inputRef };
    },
};

describe("显示测试", () => {
    test("Display placeholder", () => {
        const wrapper = mount(Component);
        expect(wrapper.find("textarea").attributes("placeholder")).toContain(
            "占位字符串"
        );
    });
});

describe("绑定测试", () => {
    test("Input value", async () => {
        const wrapper = mount(Component);
        const input = wrapper.getComponent(RTextarea);

        await input.setValue("新的输入");

        expect(input.emitted()["update:modelValue"][0][0]).toEqual("新的输入");
    });
});

describe("事件测试", () => {
    test.each([
        "focus",
        "blur",
        "change",
        "input",
        "compositionstart",
        "compositionend",
        "compositionupdate",
    ])("Event: %s", (s) => {
        const wrapper = mount(Component);
        wrapper.trigger(s);
        expect(wrapper.emitted()[s]).toHaveLength(1);
    });
});
