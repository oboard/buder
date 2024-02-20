import { Builder, Button, Col, Text, bud } from "./index.ts";

let counter = 0;

Builder(() => {
  return Col([
    Builder(() => Text("Counter: " + counter)).class("counter"),
    Button()
      .text("Increment")
      .onClick(() => {
        counter++;
        bud("counter");
      }),
  ]);
}).center.fullScreen.mount("#app");
