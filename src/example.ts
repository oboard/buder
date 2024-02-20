import {
  Builder,
  Button,
  Col,
  Input,
  State,
  Text,
  TextArea,
  // bud,
  px,
} from "./index.ts";

Builder(() => {
  let text = State("1");

  return Col([
    TextArea(text),
    Input(text),
    Text(text.value),
    Button("Reset")
      .color("green")
      .bold.onClick(() => {
        text.value = "";
      }),
  ]).gap(px(4));
}).center.fullScreen.mount("#app");
