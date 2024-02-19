import { BuderApp, BuderUnit, BuderUnits, Text, View, px } from "./index.ts";

BuderApp(
  "App",
  View([
    Text("Hello Buder!")
      .style({
        color: "red",
        fontSize: px(20),
      })
      .onMouseUp((e) => {
        console.log("Hello Buder!");
      }),
  ])
).mount("#app");
