import { mount } from "@vue/test-utils";
import { RButton, RDropdown, RDropdownItem } from "../..";
import { Check } from "lucide-vue-next";
import { ref } from "vue";
import { test, expect } from 'vitest'

const CompoentClick = {
  template: `<r-dropdown color="yellow">
      <r-button>        
        点击按钮打开
      </r-button>
      <template #items>
        <r-dropdown-item><template #icon><Check/></template>选项一</r-dropdown-item>
        <r-dropdown-item>选项二</r-dropdown-item>
        <r-dropdown-item>选项三</r-dropdown-item>
      </template>
    </r-dropdown>`,
  components: { RButton, RDropdown, RDropdownItem, Check },
  setup() {
    const visible = ref(false);
    const close = () => {
      visible.value = false;
    };
    return { visible, close };
  },
};

const CompoentHover = {
  template: `<r-dropdown color="yellow" trigger="hover">
      <r-button>        
        点击按钮打开
      </r-button>
      <template #items>
        <r-dropdown-item>选项一</r-dropdown-item>
        <r-dropdown-item>选项二</r-dropdown-item>
        <r-dropdown-item>选项三</r-dropdown-item>
      </template>
    </r-dropdown>`,
  components: { RButton, RDropdown, RDropdownItem },
  setup() {
    const visible = ref(false);
    const close = () => {
      visible.value = false;
    };
    return { visible, close };
  },
};

test("Display dropdown item", () => {
  const wrapper = mount(CompoentClick);
  expect(wrapper.find(".r-dropdown-item").text()).toContain("选项一");
});

test("Display slot", () => {
  const wrapper = mount(CompoentClick);
  expect(wrapper.find(".r-button").text()).toContain("点击按钮打开");
});

test("Display icon slot", () => {
  const wrapper = mount(CompoentClick);
  expect(wrapper.findAll(".r-dropdown-item")[0].find(".lucide").exists()).toBeTruthy()
  expect(wrapper.findAll(".r-dropdown-item")[1].find(".lucide").exists()).toBeFalsy()
})

test("Hover", async () => {
  const wrapper = mount(CompoentHover);

  // 默认看不见
  expect(wrapper.find(".r-dropdown__menu").isVisible()).toBe(false);

  // 触发
  await wrapper.find(".r-dropdown").trigger("mouseover");
  expect(wrapper.find(".r-dropdown__menu").isVisible()).toBe(true);

  //
  await wrapper.find(".r-dropdown").trigger("mouseleave");
  expect(wrapper.find(".r-dropdown__menu").isVisible()).toBe(false);
});

test("Click", async () => {
  const wrapper = mount(CompoentClick, { attachTo: document.body });

  // 默认看不见
  expect(wrapper.find(".r-dropdown__menu").isVisible()).toBe(false);

  // 触发
  await wrapper.find(".r-dropdown").trigger("click");
  expect(wrapper.find(".r-dropdown__menu").isVisible()).toBe(true);

  // 关闭
  await wrapper.findAll(".r-dropdown-item")[0].trigger("click");
  expect(wrapper.find(".r-dropdown__menu").isVisible()).toBe(false);
});
