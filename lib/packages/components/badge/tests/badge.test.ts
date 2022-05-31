import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RBadge,RButton } from "../.."

const Component = {
    template: `<r-badge text="badge text"></r-badge>`,
    components: { RBadge }
}

const ComponentEmpty = {
    template: `<r-badge></r-badge>`,
    components: { RBadge }
}

const ComponentAttach = {
    template: `<r-badge><r-button></r-button></r-badge>`,
    components: { RBadge,RButton }
}

test('Display badge', () => {
    const wrapper = mount(Component)
    // Assert the rendered text of the component
    expect(wrapper.find(".r-badge__label").text()).toEqual("badge text");
    expect(wrapper.find(".r-badge__empty").exists()).toBeFalsy()
})

test('Display empty badge', () => {
    const wrapper = mount(ComponentEmpty)

    expect(wrapper.find(".r-badge__empty").exists()).toBeTruthy();
    expect(wrapper.find(".r-badge__label").exists()).toBeFalsy()
})

test('Display attached badge', () => {
    const wrapper = mount(ComponentAttach)

    expect(wrapper.find(".r-button").exists()).toBeTruthy();
})