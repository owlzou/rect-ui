import { defineComponent,PropType } from "vue";
import { ITableData } from "./types";

const RTableCell = defineComponent({
  name: "r-table-cell",
  props: {
    template: {
      type: Function as PropType<
        (value: string, index: number, row: ITableData) => JSX.Element
      >,
    },
    val: { type: [String, Number] as PropType<String | Number> },
    idx: { type: Number },
    row: { type: Object as PropType<ITableData> },
  },
  render(props) {
    return props.template ? (
      <td>{props.template(props.val, props.idx, props.row)}</td>
    ) : (
      <td>{props.val}</td>
    );
  },
});

export default RTableCell