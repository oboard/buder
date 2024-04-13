import { BuderApp } from "./app.ts";
import {
  Button,
  Checkbox,
  Column,
  Input,
  Label,
  Slider,
  State,
  Text,
  TextArea,
  Theme,
  View,
  px,
} from "./index.ts";
import { Router } from "./router.ts";
import { Select } from "./widgets/select.ts";

class App extends BuderApp {
  @Router("/*")
  Example2() {
    return Text("Example2");
  }

  @Router("/")
  Example() {
    let a = State("14px");
    let b = State(false);
    let c = State(Text("Hello"));
    return Theme(
      {
        button: "btn",
      },
      Column(
        Input(a).event({
          input: () => {
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
        Slider(
          a.transform(
            (v) => parseInt(v.replace("px", "")),
            (v) => `${v}px`
          ),
          {
            min: 10,
            max: 20,
            step: 1,
          }
        ),
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
    );
  }
}

new App().mount("#app");
