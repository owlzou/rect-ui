import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RFieldset } from "../.."

const Component = {
    template: `<r-fieldset title="标题">Group Content</r-fieldset>`,
    components: { RFieldset }
}

test('Display title', () => {
    const wrapper = mount(Component)
    // Assert the rendered text of the component
    expect(wrapper.find('label').text()).toContain('标题')
})

test('Display slot',()=>{
    const wrapper = mount(Component)
    expect(wrapper.text()).toContain('Group Content')
})