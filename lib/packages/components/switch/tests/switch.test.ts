import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RSwitch } from "../.."

const Component = {
    template: `<r-switch :v-model="checked">选择框</r-switch>`,
    components: { RSwitch },
    data() {
        return { checked: false }
    }
}

test('displays label', () => {
    const wrapper = mount(Component)
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('选择框')
})

test('checked', async () => {
    const wrapper = mount(Component)
    // 点击
    const cb = wrapper.getComponent(RSwitch)
    await wrapper.find('input').setValue(true)
    expect(cb.emitted()['update:modelValue'][0][0]).toEqual(true)
    await wrapper.find('input').setValue(false)
    expect(cb.emitted()['update:modelValue'][1][0]).toEqual(false)
})
