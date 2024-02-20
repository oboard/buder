import { BuderApp, Builder, Button, Col, Text, View } from "./index.ts";

let counter = 0;

BuderApp(
  View([
    Builder((refresh) =>
      Col([
        Text("Counter: " + counter),
        Button().text("Increment").onClick(() => {
          counter++;
          refresh();
        }),
      ]).center()
    ),
  ])
    .center()
    .fullScreen()
).mount("#app");
