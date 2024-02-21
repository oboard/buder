import {
  Builder,
  Button,
  Col,
  Input,
  State,
  Text,
  TextArea,
  px,
} from "./index.ts";

let text = State({
  name: "text",
  address: "address",
  phone: "13000000000",
});
let a = text.get("address");
Builder(() => {
  return Col([
    TextArea(text.get("name")),
    Input(a),
    Text(a),
    Text(JSON.stringify(text.value)),
    Button("Reset")
      .color("green")
      .bold.onClick(() => {
        text.get("address").value = "";
      }),
  ]).gap(px(4));
}).center.fullScreen.mount("#app");
