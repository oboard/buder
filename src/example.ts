import { Button, Col, Input, State, Text, px } from "./index.ts";

let a = State("14");

Col([
  Input(a),
  Text(a),
  Button("Reset")
    .color("green")
    .fontSize(px(a))
    .bold.onClick(() => {
      a.value = "14";
    }),
])
  .gap(px(10))
  .center.fullScreen.mount("#app");
