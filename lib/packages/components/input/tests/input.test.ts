import { test, expect, vi, describe } from "vitest";
import { mount } from "@vue/test-utils";
import { RInput } from "../..";
import { nextTick, ref } from "vue";

const Component = {
    template: `<r-input v-model="value" placeholder="占位字符串" ref="inputRef"/>`,
    components: { RInput },
    setup() {
        const value = ref("默认输入");
        const inputRef = ref<InstanceType<typeof HTMLInputElement>>();
        return { value, inputRef };
    },
};

describe("prop 测试", () => {
    test("Display placeholder", () => {
        const wrapper = mount(Component);
        expect(wrapper.find("input").attributes("placeholder")).toContain(
            "占位字符串"
        );
    });
});

describe("绑定测试", () => {
    test("Input value", async () => {
        const wrapper = mount(Component);
        const input = wrapper.getComponent(RInput);

        await input.setValue("新的输入");

        expect(input.emitted()["update:modelValue"][0][0]).toEqual("新的输入");
    });
});

describe("Slot 测试", () => {
    test("Display slot:before", () => {
        const Component2 = {
            template: `<r-input><template #before>开头</template></r-input>`,
            components: { RInput },
        };
        const wrapper = mount(Component2);
        expect(wrapper.find(".r-input__before").text()).toEqual("开头");
    });

    test("Display slot:after", () => {
        const Component3 = {
            template: `<r-input><template #after>结尾</template></r-input>`,
            components: { RInput },
        };
        const wrapper = mount(Component3);
        expect(wrapper.find(".r-input__after").text()).toEqual("结尾");
    });
});

describe("Event 测试", () => {
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

test.skip("Method: focus", async () => {
    // 怎么测试方法呢……
    const wrapper = mount(Component);

    const input = wrapper.getComponent(RInput) as InstanceType<typeof RInput>;

    vi.spyOn(input.vm, "focus");

    await input.vm.focus();
    await nextTick();
    // console.log(input.emitted())
    expect(input.emitted()["focus"]).toHaveLength(1);
});
