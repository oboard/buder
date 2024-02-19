import { BuderWidget } from "./widgets/base/widget";

class _BuderApp {
  name: string;
  content: BuderWidget;

  constructor(name: string, content: BuderWidget) {
    this.name = name;
    this.content = content;
  }

  mount(selector: string) {
    const target = document.querySelector(selector);
    target?.appendChild(this.content.render());
  }
}

export function BuderApp(name: string, content: BuderWidget) {
  const app = new _BuderApp(name, content);
  return app;
}
