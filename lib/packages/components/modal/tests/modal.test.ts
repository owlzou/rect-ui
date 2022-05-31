import { test, expect } from 'vitest'
import { mount } from "@vue/test-utils";
import { RModal, RButton, RRow, RCol } from "../..";
import { ref } from "vue";

const Component = {
  template: ` <div class="demo">
    <r-button @click="visible = true" class="open-btn">点击打开</r-button>
    <r-modal color="yellow" :visible="visible" width="300px" closable @close="close">
      <template #title>对话框标题</template>
      对话框的内容
      <template #footer>
        <r-row justify="flex-end" :space="1">
          <r-col>
            <r-button flat color="yellow" @click="close" >确定</r-button>
          </r-col>
          <r-col>
            <r-button flat @click="close">取消</r-button>
          </r-col>
        </r-row>
      </template>
    </r-modal>
  </div>`,
  components: { RModal, RButton, RRow, RCol },
  setup() {
    const visible = ref(false);
    const close = () => {
      visible.value = false;
    };
    return { visible, close };
  },
};

test("displays", () => {
  const wrapper = mount(Component);
  expect(wrapper.find(".r-modal__title").text()).toContain("对话框标题");
  expect(wrapper.find(".r-modal__content").text()).toContain("对话框的内容");
  expect(wrapper.find(".r-modal__footer").findAll(".r-button")).toHaveLength(2);
});

test("open/close", async () => {
  const wrapper = mount(Component);

  // 通常情况下都不可见
  expect(wrapper.find(".r-modal").isVisible()).toBe(false);
  expect(wrapper.find(".r-modal__mask").isVisible()).toBe(false);

  // 点击后打开
  await wrapper.find(".open-btn").trigger("click");
  expect(wrapper.find(".r-modal").isVisible()).toBe(true);
  expect(wrapper.find(".r-modal__mask").isVisible()).toBe(true);

  // 点击关闭
  await wrapper.find(".r-modal .r-svg-button").trigger("click");
  expect(wrapper.find(".r-modal").isVisible()).toBe(false);
  expect(wrapper.find(".r-modal__mask").isVisible()).toBe(false);
});
