import { routerMap } from "./router";
import { BuderWidget } from "./widgets/widget";

export class BuderApp {
  constructor() {}

  mount(selector: string) {
    const target = document.querySelector(selector);

    const loc = window.location.pathname;
    console.log(loc);
    let widgetFunction = routerMap[loc];
    // 正则匹配widgetFunction
    if (!widgetFunction) {
      for (let word in routerMap) {
        if (new RegExp(word).test(loc)) {
          widgetFunction = routerMap[word];
          break;
        }
      }
    }

    if (widgetFunction instanceof Function) {
      const widget = widgetFunction();
      if (!widget) {
        throw new Error(`Widget not found for ${loc}`);
      } else if (widget instanceof BuderWidget) {
        target?.replaceWith(widget.render());
      }
    }
    return this;
  }
}
