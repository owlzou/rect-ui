<template>
  <table class="r-table">
    <caption v-if="caption">
      {{
        caption
      }}
    </caption>
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :style="header.width ? `width:${header.width}px` : null"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <r-table-cell
          v-for="(i, idx) in headers"
          :style="i.width ? `width:${i.width}px` : null"
          :template="i.template"
          :val="row[i.key]"
          :idx="idx"
          :row="row"
        />
      </tr>
    </tbody>
  </table>
</template>
<script lang="tsx">
import { defineComponent, h, PropType } from "vue";
import { ITableHeader, ITableData } from "./types";

interface ITableCellProp {
  template: (
    value: string | number,
    index: number,
    row: ITableData
  ) => JSX.Element;
  val: string | number;
  idx: number;
  row: ITableData;
}

const RTableCell = (props: ITableCellProp) => {
  if (props.template) {
    return h("td", props.template(props.val, props.idx, props.row));
  } else {
    return h("td", props.val);
  }
};

/**
 * @displayName 表格 Table
 */
export default defineComponent({
  name: "r-table",
  components: { RTableCell },
  props: {
    /** 表头定义 */
    headers: { type: Object as PropType<ITableHeader[]>, required: true },
    /** 表内数据 */
    data: { type: Array as PropType<ITableData[]>, required: true },
    /**（可访问性）描述表格内容的文字 */
    caption: { type: String },
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

.r-table {
    width 100%
    border-collapse collapse
    display table
    border $common-border

    td, th {
        border unset
        padding 8px
        word-break keep-all
        max-width 100%
    }

    tr {
        border unset
        background var(--color-bg)
    }

    thead tr{
        border-bottom $common-border
        font-weight bold
        text-align left
        background var(--color-light-3)
    }

    tbody tr:nth-of-type(2n) {
        background var(--color-light-2)
    }
}
</style>
