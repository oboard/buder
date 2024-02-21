import {
  Builder,
  Button,
  Col,
  ForEach,
  Input,
  Row,
  State,
  Text,
  View,
  percent,
  px,
} from "./index.ts";

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
