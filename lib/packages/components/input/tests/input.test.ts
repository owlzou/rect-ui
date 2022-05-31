import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RInput } from "../.."

const Component = {
    template: `<r-input v-model="value" placeholder="占位字符串" />`,
    components: { RInput },
    data() {
        return { value: "默认输入" }
    }
}

test('Display placeholder', () => {
    const wrapper = mount(Component)
    expect(wrapper.find('input').attributes('placeholder')).toContain('占位字符串')
})

test('Input value', async () => {
    const wrapper = mount(Component)
    const input = wrapper.getComponent(RInput)

    await input.setValue("新的输入")

    expect(input.emitted()['update:modelValue'][0][0]).toEqual("新的输入")
})


test('Display slot:before', () => {
    const Component2 = {
        template: `<r-input><template #before>开头</template></r-input>`,
        components: { RInput },
    }
    const wrapper = mount(Component2)
    expect(wrapper.find(".r-input__before").text()).toEqual("开头")
})

test('Display slot:after', () => {
    const Component3 = {
        template: `<r-input><template #after>结尾</template></r-input>`,
        components: { RInput },
    }
    const wrapper = mount(Component3)
    expect(wrapper.find(".r-input__after").text()).toEqual("结尾")
})