import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { RTable, RButton } from "../..";
import { ITableData, ITableHeader } from "../../../utils/types";

const Component = {
  template: `<r-table :headers="headers" :data="data"></r-table>`,
  components: { RTable, RButton },
  setup() {
    const headers: ITableHeader[] = [
      { key: "id", text: "ID", width: 80 },
      {
        key: "user",
        text: "用户名",
        template: (val, _idx, _row) => <a href="#"> {val} </a>,
      },
      { key: "lastLoginTime", text: "最后登录时间" },
      {
        key: "action",
        text: "操作",
        template: (_val, _idx, _row) => (
          <>
            <RButton type="text" color="blue">
              编辑
            </RButton>
            <RButton type="text" color="red">
              删除
            </RButton>
          </>
        ),
      },
    ];
    const data: ITableData[] = [
      { id: 1, user: "竺清晖", lastLoginTime: "2020-05-28" },
      { id: 2, user: "微生阳焱", lastLoginTime: "2020-09-05" },
      { id: 3, user: "歧初瑶", lastLoginTime: "2021-04-03" },
      { id: 4, user: "泰素怀", lastLoginTime: "2021-12-26" },
      { id: 5, user: "历柔惠", lastLoginTime: "2022-12-22" },
    ];

    return { headers, data };
  },
};

test("Display data", () => {
  const wrapper = mount(Component);

  const tr = wrapper.findAll("tr");
  expect(tr, "表格一共有六行").toHaveLength(6);
  expect(tr[0].findAll("th"), "表头一共有四列").toHaveLength(4);
  expect(tr[1].findAll("td"), "表格一共有四列").toHaveLength(4);
  expect(tr[0].findAll("th")[1].text(), "表头文字").toEqual("用户名");
  expect(tr[1].findAll("td")[1].text(), "内容文字").toEqual("竺清晖");
});

test("Custom column", () => {
  const wrapper = mount(Component);

  const button = wrapper.findAll("tbody tr")[0].findAll("td")[3].find(".r-button");
  expect(button, "渲染出按钮").toBeTruthy();
  expect(button.text(), "渲染出按钮文字").toEqual("编辑");
});
