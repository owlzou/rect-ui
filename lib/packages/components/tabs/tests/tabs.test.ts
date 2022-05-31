import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RTabs, RTabItem } from "../.."

const Component = {
    template: `<r-tabs v-model="current">
      <r-tab-item label="标签一" value="1">标签一的内容</r-tab-item>
      <r-tab-item label="标签二" value="2">标签二的内容</r-tab-item>
      <r-tab-item label="标签三" value="3">标签三的内容</r-tab-item>
    </r-tabs>`,
    components: { RTabs, RTabItem },
    data() {
        return { current: "1" }
    }
}

test('check display', () => {
    const wrapper = mount(Component)  
    // 1: tab 1 visible
    const content1 = wrapper.findAllComponents(RTabItem)[0].find("div")
    expect(content1.text()).toContain('标签一的内容')
    expect(content1.isVisible()).toBe(true)
    // 2: tab 2 invisible
    const content2 = wrapper.findAllComponents(RTabItem)[1].find("div")
    expect(content2.isVisible()).toBe(false)
})

test('switch tab', async () => {
    const wrapper = await mount(Component, { attachTo: document.body });
    // click tab 2
    const tab2 = wrapper.findAll(".r-tab")[1];
    await tab2.trigger("click");
    // tab 1 is invisible
    const content1 = wrapper.findAllComponents(RTabItem)[0].find("div")
    expect(content1.isVisible()).toBe(false)
    // tab 2 is visible
    const content2 = wrapper.findAllComponents(RTabItem)[1].find("div")
    expect(content2.isVisible()).toBe(true)
}) 
