import {
  Builder,
  Button,
  Col,
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
    Text(text.value),
    Button("Reset")
      .color("green")
      .bold.onClick(() => {
        text.value = "";
      }),
  ]).gap(px(4));
}).center.fullScreen.mount("#app");
