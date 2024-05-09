import { BuderApp } from "./app.ts";
import {
  Button,
  Checkbox,
  Column,
  Input,
  Label,
  Slider,
  State,
  Span,
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
    return Span("Example2");
  }

  @Router("/")
  Example() {
    const a = State("14px");
    const b = State(false);
    const c = State(Span("Hello"));
    return Theme(
      {
        button: {
          borderRadius: "5px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        },
      },
      Column(
        Input(a).event({
          input: () => {
            c.set(Span(a).style({ color: "red" }));
          },
        }),
        TextArea(a),
        Span(a),
        Checkbox(b),
        Select({
          "18px": "medium",
          "24px": "large",
          "14px": "small",
        }).bind(a),
        Slider(
          a.transform(
            (v) => +v.replace("px", ""),
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
        Button(Column(Span(a), Span("重置")))
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
