import { Builder, Button, Col, Text, bud, px } from "./index.ts";

let counter = 0;

Col([
  Builder(() => Text("Counter: " + counter))
    .class("counter")
    .padding({ vertical: px(20) }),
  Button()
    .text("Increment")
    .color("red")
    .onClick(() => {
      counter++;
      bud("counter");
    }),
]).center.fullScreen.mount("#app");
