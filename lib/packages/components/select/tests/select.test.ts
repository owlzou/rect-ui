import { mount } from '@vue/test-utils'
import { test, expect } from "vitest";
import { RSelect } from "../.."

const Component = {
    template: `<r-select :options="ops" v-model="model"/>`,
    components: { RSelect },
    data() {
        return {
            ops: [
                { value: "A", text: "Option A" },
                { value: "B", text: "Option B" },
                { value: "C", text: "Option C" },
            ],
            model: ""
        }
    }
}

test('displays select', () => {
    const wrapper = mount(Component)
    expect(wrapper.find('select').text()).toContain('Option A')
})

test('select value', async () => {
    const wrapper = mount(Component)
    const select = wrapper.getComponent(RSelect)

    await select.setValue("B")

    expect(select.emitted()['update:modelValue'][0][0]).toEqual("B")
})