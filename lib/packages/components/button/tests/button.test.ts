import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RButton } from "../.."

const ButtonComponent = {
    template: `<r-button>This is a button</r-button>`,
    components: { RButton }
}

test('displays label', () => {
    const wrapper = mount(ButtonComponent)
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('This is a button')
})

test("click", () => {
    const wrapper = mount(ButtonComponent)
    const button = wrapper.getComponent(RButton)
    button.trigger("click");
    expect(button.emitted()["click"]).toHaveLength(1);
})