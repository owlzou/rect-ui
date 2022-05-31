import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RCheckbox, RCheckboxGroup } from "../.."


const Component = {
    template: `<r-checkbox :v-model="checked">选择框</r-checkbox>`,
    components: { RCheckbox },
    data() {
        return { checked: false }
    }
}

test('display: label', () => {
    const wrapper = mount(Component)
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('选择框')
})

test('single check: update', async () => {
    const wrapper = mount(Component)
    // 点击
    const cb = wrapper.getComponent(RCheckbox)
    await wrapper.find('input').setValue(true)
    await wrapper.find('input').setValue(false)
    expect(cb.emitted()['update:modelValue'][0][0]).toEqual(true)
    expect(cb.emitted()['update:modelValue'][1][0]).toEqual(false)
})

test('single check: change', async () => {
    const wrapper = mount(Component);
    const cb = wrapper.getComponent(RCheckbox)
    await wrapper.find('input').setValue(true)
    await wrapper.find('input').setValue(false)
    expect(cb.emitted()['change'][0][0]).toEqual(true);
    expect(cb.emitted()['change'][1][0]).toEqual(false)
})

const Component2 = {
    template: `
    <r-checkbox-group v-model="picked">
      <r-checkbox value="1">A</r-checkbox>
      <r-checkbox value="2">B</r-checkbox>
      <r-checkbox value="3">C</r-checkbox>
      <r-checkbox value="4">D</r-checkbox>
    </r-checkbox-group>
   `,
    components: { RCheckbox, RCheckboxGroup },
    data() {
        return { picked: [] }
    }
}

test('check group: update', async () => {
    const wrapper = mount(Component2)
    // 点击
    const cbg = wrapper.getComponent(RCheckboxGroup)
    const inputs = await wrapper.findAll('input');
    for (let i = 0; i < 4; i++) {
        await inputs[i].setValue(true);
    }
    expect(cbg.emitted()['update:modelValue']).toHaveLength(4)
    expect(cbg.emitted()['update:modelValue'][0][0]).toEqual(["1"])
    expect(cbg.emitted()['update:modelValue'][3][0]).toEqual(["1", "2", "3", "4"]);
})

test('check group: change', async () => {
    const wrapper = mount(Component2)
    // 点击
    const cbg = wrapper.getComponent(RCheckboxGroup)
    const inputs = await wrapper.findAll('input');
    await inputs[1].setValue(true);
    await inputs[2].setValue(true)
    expect(cbg.emitted()['change'][0][0]).toEqual(["2"])
    expect(cbg.emitted()['change'][1][0]).toEqual(["2", "3"])
})