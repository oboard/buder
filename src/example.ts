import { BuderApp, Text, View, px } from "./index.ts";
import { Row } from "./widgets/row.ts";

BuderApp(
  "Counter",
  View([
    Row([
      Text("Hello, world!"),
      Text("Hello, world!"),
      Text("Hello, world!"),
      
    ]),
  ])
).mount("#app");
