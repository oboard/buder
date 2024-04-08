import {
  Button,
  Checkbox,
  Column,
  Input,
  Label,
  State,
  Text,
  TextArea,
  Theme,
  View,
  px,
} from "./index.ts";
import { Select } from "./widgets/select.ts";

let a = State("14px");
let b = State(false);
let c = State(Text("Hello"));

Theme(
  {
    button: "btn",
  },
  Column(
    Input(a).event({
      input: (_) => {
        console.log(a.value);
        c.set(Text(a).style({ color: "red" }));
      },
    }),
    TextArea(a),
    Text(a),
    Checkbox(b),
    Select({
      "18px": "medium",
      "24px": "large",
      "14px": "small",
    }).bind(a),
    c,
    View(Checkbox(b).id("checkbox"), Label(" Bold").for("checkbox")),
    Button(Column(Text(a), Text("重置")))
      .style({
        backgroundColor: "red",
        color: "white",
        fontSize: a,
        fontWeight: b.computed((v) => (v ? "bold" : "normal")),
      })
      .event({
        click: () => {
          a.set("14px");
        },
      })
  ).center.style({ gap: px(10) })
).mount("#app");
