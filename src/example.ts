import { Builder, Button, Col, Text, bud, px } from "./index.ts";

let counter = 0;

Col([
  Builder(() => Text("Counter: " + counter))
    .class("counter")
    .padding({ vertical: px(20) }),
  Button("Increment")
    .color("red")
    .bold.onClick(() => {
      counter++;
      bud("counter");
    }),
  Button("Decrement")
    .color("blue")
    .bold.onClick(() => {
      counter--;
      bud("counter");
    }),
  Button("Reset")
    .color("green")
    .bold.onClick(() => {
      counter = 0;
      bud("counter");
    }),
]).gap(px(4)).center.fullScreen.mount("#app");
