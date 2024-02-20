import { Builder, Button, Col, State, Text, bud, px } from "./index.ts";
import { TextArea } from "./widgets/textarea.ts";

let text = State("");
Col([
  TextArea(text),
  Builder(() => Text(text.value), [text]),
  Button("Reset")
    .color("green")
    .bold.onClick(() => {
      text.value = "";
      bud("text");
    }),
])
  .gap(px(4))
  .center.fullScreen.mount("#app");
