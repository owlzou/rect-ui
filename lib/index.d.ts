import { AllowedComponentProps } from 'vue';
import type { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { EmitsOptions } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { Slot } from 'vue';
import { VNodeProps } from 'vue';
import { WritableComputedRef } from 'vue';

declare const ComponentLibrary: {
    install(Vue: App, _options?: {}): void;
};
export default ComponentLibrary;

export declare type IAlignItems = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';

export declare type IButtonType = "normal" | "primary" | "outline" | "text";

export declare type IColor = "gray" | "blue" | "indigo" | "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "green" | "teal" | "cyan" | "light" | "primary";

export declare type IDropdownTrigger = "hover" | "click";

export declare type IJustifyContent = "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" | "baseline" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "unset";

export declare interface ISelectOption {
    value: string;
    text: string;
}

export declare type ITableData = {
    [key: string]: any;
};

export declare interface ITableHeader {
    key: string;
    text: string;
    width?: number;
    template?: (value: string, index: number, row: ITableData) => JSX.Element;
}

export declare type ITabStyle = "card" | "label";

/**
 * @displayName 徽标 Badge
 */
export declare const RBadge: DefineComponent<    {
/**
* 颜色，详见 [色彩](/basic/color.html)。
*/
color: {
type: PropType<IColor>;
default: string;
};
/** 内容 */
text: {
type: StringConstructor;
};
outline: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, unknown, {
classes(): {
[x: string]: any;
"r-badge__label": any;
"r-attach": any;
"r-badge__empty": boolean;
"r-outline": any;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 颜色，详见 [色彩](/basic/color.html)。
*/
color: {
type: PropType<IColor>;
default: string;
};
/** 内容 */
text: {
type: StringConstructor;
};
outline: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
color: IColor;
outline: boolean;
}>;

/**
 * @displayName 按钮 Button
 */
export declare const RButton: DefineComponent<    {
/**
* 按钮的类型
* @values primary,normal,outline,text
*/
type: {
type: PropType<IButtonType>;
default: string;
};
/** 是否为扁平按钮 */
flat: {
type: BooleanConstructor;
default: boolean;
};
/** 按钮的颜色，详见 [色彩](/basic/color.html)。*/
color: {
type: PropType<IColor>;
default: string;
};
/** 是否禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
}, {
btnClasses: {
[x: string]: boolean | Slot;
"r-button": boolean;
"r-flat": boolean;
"r-icon-btn": Slot;
};
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 按钮的类型
* @values primary,normal,outline,text
*/
type: {
type: PropType<IButtonType>;
default: string;
};
/** 是否为扁平按钮 */
flat: {
type: BooleanConstructor;
default: boolean;
};
/** 按钮的颜色，详见 [色彩](/basic/color.html)。*/
color: {
type: PropType<IColor>;
default: string;
};
/** 是否禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
type: IButtonType;
color: IColor;
flat: boolean;
disabled: boolean;
}>;

/**
 * 卡片
 * @displayName 卡片 Card
 */
export declare const RCard: DefineComponent<    {
/** 是否双线边框 */
double: {
type: BooleanConstructor;
default: boolean;
};
/** 是否扁平（没有阴影）*/
flat: {
type: BooleanConstructor;
default: boolean;
};
/** 对话框皮肤 */
dialog: {
type: BooleanConstructor;
default: boolean;
};
/**
* 对话框皮肤的主题色，详见 [色彩](/basic/color.html)。
* */
color: {
type: PropType<IColor>;
};
}, unknown, unknown, {
classes(): {
"r-card": boolean;
"r-double": any;
"r-flat": any;
"r-dialog": any;
};
titleClasses(): {
[x: string]: any;
"r-modal__title": boolean;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 是否双线边框 */
double: {
type: BooleanConstructor;
default: boolean;
};
/** 是否扁平（没有阴影）*/
flat: {
type: BooleanConstructor;
default: boolean;
};
/** 对话框皮肤 */
dialog: {
type: BooleanConstructor;
default: boolean;
};
/**
* 对话框皮肤的主题色，详见 [色彩](/basic/color.html)。
* */
color: {
type: PropType<IColor>;
};
}>>, {
flat: boolean;
double: boolean;
dialog: boolean;
}>;

/**
 * 多选框。
 * @displayName 多选框 Checkcbox
 * @requires ./checkbox-group.vue
 */
export declare const RCheckbox: DefineComponent<    {
/**
* 是否被选中
* @model
*/
modelValue: {
type: BooleanConstructor;
default: boolean;
};
/** `value` 属性 */
value: {
type: PropType<String | Number>;
};
/** 是否被禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/** inline 模式 */
inline: {
type: BooleanConstructor;
defalut: boolean;
};
}, {
onChange: (e: Event) => void;
}, unknown, {
model: {
get(): any;
set(val: any): void;
};
classes(): {
"r-checkbox": boolean;
"r-inline": any;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 是否被选中
* @model
*/
modelValue: {
type: BooleanConstructor;
default: boolean;
};
/** `value` 属性 */
value: {
type: PropType<String | Number>;
};
/** 是否被禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/** inline 模式 */
inline: {
type: BooleanConstructor;
defalut: boolean;
};
}>> & {
"onUpdate:modelValue"?: (...args: any[]) => any;
onChange?: (...args: any[]) => any;
}, {
disabled: boolean;
modelValue: boolean;
inline: boolean;
}>;

/**
 * @displayName 多选框组 Checkbox Group
 */
export declare const RCheckboxGroup: DefineComponent<    {
/** @model */
modelValue: {
type: PropType<String[] | Number[]>;
};
}, void, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** @model */
modelValue: {
type: PropType<String[] | Number[]>;
};
}>> & {
"onUpdate:modelValue"?: (...args: any[]) => any;
onChange?: (...args: any[]) => any;
}, {}>;

export declare const RCol: DefineComponent<    {
xs: {
type: NumberConstructor;
};
sm: {
type: NumberConstructor;
};
md: {
type: NumberConstructor;
};
lg: {
type: NumberConstructor;
};
xl: {
type: NumberConstructor;
};
/** 所占宽度，取值从1到24 */
span: {
type: NumberConstructor;
};
}, unknown, unknown, {
classes(): {
[x: string]: any;
"r-col": boolean;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
xs: {
type: NumberConstructor;
};
sm: {
type: NumberConstructor;
};
md: {
type: NumberConstructor;
};
lg: {
type: NumberConstructor;
};
xl: {
type: NumberConstructor;
};
/** 所占宽度，取值从1到24 */
span: {
type: NumberConstructor;
};
}>>, {}>;

/**
 * @displayName 下拉菜单 Dropdown
 * @requires ./dropdown-item.vue
 */
export declare const RDropdown: DefineComponent<    {
/**
* 按钮的颜色，详见 [色彩](/basic/color.html)。
*/
color: {
type: PropType<IColor>;
default: string;
};
/**
* 触发下拉菜单的方式
* @values hover,click
*/
trigger: {
type: PropType<IDropdownTrigger>;
default: string;
};
/** 下拉菜单的宽度 */
width: {
type: NumberConstructor;
};
}, {
visible: Ref<boolean>;
}, unknown, {}, {
clickOtherArea: () => void;
}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 按钮的颜色，详见 [色彩](/basic/color.html)。
*/
color: {
type: PropType<IColor>;
default: string;
};
/**
* 触发下拉菜单的方式
* @values hover,click
*/
trigger: {
type: PropType<IDropdownTrigger>;
default: string;
};
/** 下拉菜单的宽度 */
width: {
type: NumberConstructor;
};
}>>, {
color: IColor;
trigger: IDropdownTrigger;
}>;

/**
 * @displayName 下拉菜单物品 Dropdown Item
 */
export declare const RDropdownItem: DefineComponent<    {}, {
itemClasses: ComputedRef<    {
[x: string]: boolean;
"r-dropdown-item": boolean;
}>;
hover: Ref<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;

/**
 * @displayName 字段集 Fieldset
 */
export declare const RFieldset: DefineComponent<    {
/** 显示分组的标题 */
title: {
type: StringConstructor;
};
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 显示分组的标题 */
title: {
type: StringConstructor;
};
}>>, {}>;

/** @displayName 输入框 Input */
export declare const RInput: DefineComponent<    {
/**
* 输入框的值
* @model
*/
modelValue: {
type: StringConstructor;
};
/** 占位 */
placeholder: {
type: StringConstructor;
};
/** 是否禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/** 是否只读 */
readonly: {
type: BooleanConstructor;
default: boolean;
};
/** 密码框 */
password: {
type: BooleanConstructor;
default: boolean;
};
/** 开启自动完成 */
autocomplete: {
type: BooleanConstructor;
};
/** 扁平模式 */
flat: {
type: BooleanConstructor;
default: boolean;
};
}, {
classes: ComputedRef<    {
"r-input": boolean;
"r-flat": boolean;
"r-slot-before": Slot;
"r-slot-after": Slot;
"r-disabled": boolean;
"r-focus": boolean;
}>;
onInput: (event: InputEvent) => void;
onFocus: (val: any) => any;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 输入框的值
* @model
*/
modelValue: {
type: StringConstructor;
};
/** 占位 */
placeholder: {
type: StringConstructor;
};
/** 是否禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/** 是否只读 */
readonly: {
type: BooleanConstructor;
default: boolean;
};
/** 密码框 */
password: {
type: BooleanConstructor;
default: boolean;
};
/** 开启自动完成 */
autocomplete: {
type: BooleanConstructor;
};
/** 扁平模式 */
flat: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: (...args: any[]) => any;
}, {
flat: boolean;
disabled: boolean;
readonly: boolean;
password: boolean;
autocomplete: boolean;
}>;

/**
 * @displayName 对话框 Modal
 */
export declare const RModal: DefineComponent<    {
/**
* 对话框的主题色，详见 [色彩](/basic/color.html)。
* */
color: {
type: PropType<IColor>;
};
/** 对话框的宽度 */
width: {
type: StringConstructor;
default: string;
};
/** 可见 */
visible: {
type: BooleanConstructor;
};
/** 右上角的关闭图标 */
closable: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, unknown, {
titleClasses(): {
[x: string]: any;
"r-modal__title": boolean;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "close"[], "close", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 对话框的主题色，详见 [色彩](/basic/color.html)。
* */
color: {
type: PropType<IColor>;
};
/** 对话框的宽度 */
width: {
type: StringConstructor;
default: string;
};
/** 可见 */
visible: {
type: BooleanConstructor;
};
/** 右上角的关闭图标 */
closable: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onClose?: (...args: any[]) => any;
}, {
width: string;
visible: boolean;
closable: boolean;
}>;

/**
 * @displayName 单选框 Radio
 * @requires ./radio-group.vue
 */
export declare const RRadio: DefineComponent<    {
/** 对应的 `value` */
value: {
type: PropType<String | Number>;
};
/** 对应的 `name` */
name: {
type: StringConstructor;
};
/** 是否被禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/**
* 是否被选中
* @model
*/
modelValue: {
type: BooleanConstructor;
default: boolean;
};
/** inline 模式 */
inline: {
type: BooleanConstructor;
defalut: boolean;
};
}, unknown, unknown, {
model: {
get(): any;
set(val: any): void;
};
classes(): {
"r-radio": boolean;
"r-inline": any;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 对应的 `value` */
value: {
type: PropType<String | Number>;
};
/** 对应的 `name` */
name: {
type: StringConstructor;
};
/** 是否被禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/**
* 是否被选中
* @model
*/
modelValue: {
type: BooleanConstructor;
default: boolean;
};
/** inline 模式 */
inline: {
type: BooleanConstructor;
defalut: boolean;
};
}>>, {
disabled: boolean;
modelValue: boolean;
inline: boolean;
}>;

/** @displayName 单选组 Radio Group */
export declare const RRadioGroup: DefineComponent<    {
/** @model */
modelValue: {
type: PropType<String | Number>;
};
}, void, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** @model */
modelValue: {
type: PropType<String | Number>;
};
}>> & {
"onUpdate:modelValue"?: (...args: any[]) => any;
onChange?: (...args: any[]) => any;
}, {}>;

export declare const RRow: DefineComponent<    {
/** 间隔 */
space: {
type: NumberConstructor;
};
/** 水平布局上的参数，详见 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) */
justify: {
type: PropType<IJustifyContent>;
};
/** 详见 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)*/
align: {
type: PropType<IAlignItems>;
};
/** 强制不换行 */
nowrap: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, unknown, {
classes(): {
[x: string]: any;
"r-row": boolean;
"r-row-nowrap": any;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 间隔 */
space: {
type: NumberConstructor;
};
/** 水平布局上的参数，详见 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) */
justify: {
type: PropType<IJustifyContent>;
};
/** 详见 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)*/
align: {
type: PropType<IAlignItems>;
};
/** 强制不换行 */
nowrap: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
nowrap: boolean;
}>;

/**
 * @displayName 下拉菜单 Select
 */
export declare const RSelect: DefineComponent<    {
/** 选项 */
options: {
type: PropType<ISelectOption[]>;
};
/**
* 选中项目的 `value`
* @model
*/
modelValue: {
type: StringConstructor;
};
}, unknown, unknown, {
model: {
get(): any;
set(val: any): void;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 选项 */
options: {
type: PropType<ISelectOption[]>;
};
/**
* 选中项目的 `value`
* @model
*/
modelValue: {
type: StringConstructor;
};
}>>, {}>;

/**
 * @displayName 滑块 Slider
 */
export declare const RSlider: DefineComponent<    {
/** 步长 */
step: {
type: NumberConstructor;
default: number;
};
/** 最小值 */
min: {
type: NumberConstructor;
default: number;
};
/** 最大值 */
max: {
type: NumberConstructor;
default: number;
};
/** @model */
modelValue: {
type: NumberConstructor;
default: number;
};
hidevalue: {
type: BooleanConstructor;
default: boolean;
};
}, {
model: WritableComputedRef<unknown>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 步长 */
step: {
type: NumberConstructor;
default: number;
};
/** 最小值 */
min: {
type: NumberConstructor;
default: number;
};
/** 最大值 */
max: {
type: NumberConstructor;
default: number;
};
/** @model */
modelValue: {
type: NumberConstructor;
default: number;
};
hidevalue: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
modelValue: number;
max: number;
min: number;
step: number;
hidevalue: boolean;
}>;

/**
 * @displayName 开关 Switch
 */
export declare const RSwitch: DefineComponent<    {
/** @model */
modelValue: {
type: BooleanConstructor;
default: boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, unknown, {
model: {
get(): any;
set(val: any): void;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** @model */
modelValue: {
type: BooleanConstructor;
default: boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
disabled: boolean;
modelValue: boolean;
}>;

/** @displayName 标签页物品 Tab Item */
export declare const RTabItem: DefineComponent<    {
/** 标签标题 */
label: {
type: StringConstructor;
};
/** 标签页的识别值 */
value: {
type: PropType<String | Number>;
required: true;
};
}, void, unknown, {
selected(): boolean;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 标签标题 */
label: {
type: StringConstructor;
};
/** 标签页的识别值 */
value: {
type: PropType<String | Number>;
required: true;
};
}>>, {}>;

/**
 * @displayName 表格 Table
 */
export declare const RTable: DefineComponent<    {
/** 表头定义 */
headers: {
type: PropType<ITableHeader[]>;
required: true;
};
/** 表内数据 */
data: {
type: PropType<ITableData[]>;
required: true;
};
/**（可访问性）描述表格内容的文字 */
caption: {
type: StringConstructor;
};
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/** 表头定义 */
headers: {
type: PropType<ITableHeader[]>;
required: true;
};
/** 表内数据 */
data: {
type: PropType<ITableData[]>;
required: true;
};
/**（可访问性）描述表格内容的文字 */
caption: {
type: StringConstructor;
};
}>>, {}>;

/**
 *  @displayName 标签页 Tabs
 *  @requires ./tab-item.vue
 */
export declare const RTabs: DefineComponent<    {
/**
* 当前被选中的标签页
* @model
*/
modelValue: {
type: PropType<String | Number>;
required: true;
};
/** 标签样式
* @values card, label
*/
type: {
type: PropType<ITabStyle>;
default: string;
};
}, {
update: (val: any) => void;
tabList: {
[x: string]: {
label: string;
value: string;
};
};
itemClasses: (value: string | number) => {
"r-tab": boolean;
"r-tab-label": boolean;
"r-selected": boolean;
};
tabbarClasses: ComputedRef<    {
"r-tab-bar": boolean;
}>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 当前被选中的标签页
* @model
*/
modelValue: {
type: PropType<String | Number>;
required: true;
};
/** 标签样式
* @values card, label
*/
type: {
type: PropType<ITabStyle>;
default: string;
};
}>>, {
type: ITabStyle;
}>;

/**
 * @displayName Textarea 文本框
 */
export declare const RTextarea: DefineComponent<    {
/**
* 文本框的值
* @model
*/
modelValue: {
type: PropType<string | number | string[]>;
};
/** 占位 */
placeholder: {
type: StringConstructor;
};
/** 是否禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/** 是否只读 */
readonly: {
type: BooleanConstructor;
default: boolean;
};
/** 可见行数 */
rows: {
type: NumberConstructor;
};
/** 可见列数 */
cols: {
type: NumberConstructor;
};
}, {
model: WritableComputedRef<string | number | string[]>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
/**
* 文本框的值
* @model
*/
modelValue: {
type: PropType<string | number | string[]>;
};
/** 占位 */
placeholder: {
type: StringConstructor;
};
/** 是否禁用 */
disabled: {
type: BooleanConstructor;
default: boolean;
};
/** 是否只读 */
readonly: {
type: BooleanConstructor;
default: boolean;
};
/** 可见行数 */
rows: {
type: NumberConstructor;
};
/** 可见列数 */
cols: {
type: NumberConstructor;
};
}>> & {
"onUpdate:modelValue"?: (...args: any[]) => any;
}, {
disabled: boolean;
readonly: boolean;
}>;

export { }
