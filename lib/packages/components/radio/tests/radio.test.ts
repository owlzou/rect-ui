import { test, expect } from 'vitest'
import { mount } from "@vue/test-utils";
import { RRadio, RRadioGroup } from "../..";

const Component = {
  template: `<r-radio>选择框</r-radio>`,
  components: { RRadio },
};

test("displays label", () => {
  const wrapper = mount(Component);
  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("选择框");
});

const Component2 = {
  template: `
    <r-radio-group v-model="picked">
      <r-radio value="1">A</r-radio>
      <r-radio value="2">B</r-radio>
      <r-radio value="3">C</r-radio>
      <r-radio value="4">D</r-radio>
    </r-radio-group>
   `,
  components: { RRadio, RRadioGroup },
  data() {
    return { picked: "" };
  },
};

test("radio group: update", async () => {
  const wrapper = mount(Component2);
  // 点击
  const cbg = wrapper.getComponent(RRadioGroup);
  const inputs = await wrapper.findAll('input');
  for (let i = 0; i < 4; i++) {
    await inputs[i].setValue(true);
  }
  expect(cbg.emitted()["update:modelValue"]).toHaveLength(4);
  expect(cbg.emitted()["update:modelValue"][0][0]).toEqual("1");
  expect(cbg.emitted()["update:modelValue"][3][0]).toEqual("4");
});

test("radio group: change", async () => {
  const wrapper = mount(Component2);
  // 点击
  const cbg = wrapper.getComponent(RRadioGroup);
  const inputs = await wrapper.findAll('input');
  for (let i = 0; i < 4; i++) {
    await inputs[i].setValue(true);
  }
  expect(cbg.emitted()["update:modelValue"]).toHaveLength(4);
  expect(cbg.emitted()["update:modelValue"][0][0]).toEqual("1");
  expect(cbg.emitted()["update:modelValue"][3][0]).toEqual("4");
});