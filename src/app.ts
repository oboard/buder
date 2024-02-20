import { BuderWidget } from "./widgets/widget";

class _BuderApp {
  content: BuderWidget;

  constructor(content: BuderWidget) {
    this.content = content;
  }

  mount(selector: string): _BuderApp {
    const target = document.querySelector(selector);
    target?.replaceWith(this.content.render());
    return this;
  }
}

export function BuderApp(content: BuderWidget) {
  const app = new _BuderApp(content);
  return app;
}
