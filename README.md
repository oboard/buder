# buder [![npm](https://img.shields.io/npm/v/buder.svg)](https://www.npmjs.com/package/buder)

Buder is a UI framework that provides a concise syntax for defining components, enabling efficient state management, and offering styling options for enhanced visual customization.

## Getting Started

```bash
npm i buder
pnpm i buder
bun i buder
yarn add buder
```

### State Binding Example

```typescript
import { Button, Column, Input, State, Text, px } from "./index.ts";

let a = State("14px");

Column(
  Input(a),
  Text(a),
  Button("Reset")
    .style({ backgroundColor: "red", color: "white", fontSize: a })
    .event({
      click: () => {
        a.set("14px");
      },
    })
)
  .center.style({ gap: px(10) })
  .mount("#app");
```

## How to build

```bash
bun i
bun build
```

## Widgets Catalog

- `Widget`
  - All widgets inherit from this class
  - `mount` method is used to mount the widget to a DOM element
  - `style` method is used to set styles for the widget
  - `event` method is used to bind events to the widget
- `View`
  - All widgets with multiple elements inherit from this class
  ```typescript
  View(Widget1(), Widget2(), Widget3());
  ```
- `Button`
  - A clickable button

```typescript
Button("Click me").event({
  click: () => {
    console.log("Button clicked");
  },
});
```

- `Flex`
  - A container that arranges its child widgets in a row or column

```typescript
Flex(Widget1(), Widget2(), Widget3());
```

- `Row`
  - A container that arranges its child widgets in a row

```typescript
Row(Widget1(), Widget2(), Widget3());
```

- `Column`
  - A container that arranges its child widgets in a column

```typescript
Column(Widget1(), Widget2(), Widget3());
```

- `Stack`
  - A container that arranges its child widgets in a stack

```typescript
Stack(Widget1(), Widget2(), Widget3());
```

- `Input`
- `Span`
  - A Text widget

```typescript
Span("Hello, world!");

// Center Text
Span("Hello, world!").center();
```

- `Picture`
  - A widget that displays an image

```typescript
Picture("https://placeholder.com/150x150");
```

- `Link`
  - A widget that displays a hyperlink

```typescript
Link("https://www.google.com");
```

- `Checkbox`
  - A widget that displays a checkbox

```typescript
View(Checkbox(b).id("checkbox"), Label(" Bold").for("checkbox"));
```

- `Radio`
  - A widget that displays a radio button

```typescript
Radio("Radio");
```

- `Select`
  - A widget that displays a select box

```typescript
Select("Select", ["Option 1", "Option 2"]);
```

- `Slider`
  - A widget that displays a slider

```typescript
Slider("Slider");
```

- `Canvas`
  - A widget that displays a canvas

```typescript
const width = 200,
  height = 200;
Canvas(width, height, (ctx) => {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 100);
});
```

- `Input`
  - A widget that displays an input field

```typescript
let content = State("");
Input(content);
```

- `Label`
  - A widget that displays a label

```typescript
Label("Label").for("input-id");
```

- `PlaceHolder`
  - A widget that displays a placeholder

```typescript
// Height and width can be set using H and W functions

H(px(16));

W(px(16));
```

- `TextArea`
  - A widget that displays a textarea

```typescript
let content = State("");
TextArea(content);
```

## Stateful
- A state variable that can be bound to a widget's property

  ```typescript
  let a = State("14px");

  Column(Input(a), Text(a));
  ```

- `set` method is used to update the state variable

  ```typescript
  a.set("16px");
  ```

- `transform` method is used to transform the state variable's value before and after updating it

  ```typescript
  a.transform(
    (v) => +v.replace("px", ""),
    (v) => `${v}px`
  );
  ```

- `get` method is used to get the object property state variable. When fontSize changed, styles can be updated

  ```typescript
  // BuderState<Record<string, string>>
  let styles = State({ fontSize: "14px" });
  // BuderState<string>
  let fontSize = a.get("fontSize");
  ```

## Styling

- `style` method
  - Sets styles for the widget

```typescript
Button("Reset").style({ backgroundColor: "red", color: "white", fontSize: a });
```

- `Theme`
  - A global theme object that can be used to set default styles or classes for all widgets

```typescript
const theme = {
  button: "button_class",
  input: "input_class",
  ..extra
};
Theme(
  theme,
  widget
);
```

## Events

- `event` method
  - Binds events to the widget

```typescript
Button("Reset").event({
  click: () => {
    a.set("14px");
  },
});
```

## Git 标准

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;

```

```
