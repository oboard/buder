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

Theme(
  {
    button: "btn",
  },
  Column(
    Input(a).event({
      input: (_) => {
        console.log(a.value);
      },
    }),
    TextArea(a),
    Text(a),
    Checkbox(b),
    Select({
      "14px": "small",
      "18px": "medium",
      "24px": "large",
    }).bind(a),
    View(Checkbox(b).id("checkbox"), Label(" Checkbox").for("checkbox")),
    Button(Column(Text(a), Text("重置")))
      .style({ backgroundColor: "red", color: "white", fontSize: a })
      .event({
        click: () => {
          a.set("14px");
        },
      })
  ).center.style({ gap: px(10) })
).mount("#app");
