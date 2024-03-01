import { Button, Col, Input, State, Text, TextArea, Theme, px } from "./index.ts";

let a = State("14px");

Theme(
  {
    button: "btn",
  },
  Col([
    Input(a),
    TextArea(a),
    Text(a),
    Button("Reset")
      .style({ backgroundColor: "red", color: "white", fontSize: a })
      .event({
        click: () => {
          a.set("14px");
        },
      }),
  ]).center.style({ gap: px(10) })
).mount("#app");
