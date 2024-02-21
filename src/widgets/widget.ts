import { BuderState } from "../state";
import { BuderStyle } from "../styles";
import { BuderUnit } from "../units";

export class BuderWidget {
  constructor() {}

  _style: BuderStyle = {};
  _events: { [key: string]: (e: any) => void } = {};
  _id?: string;
  _classes: string[] = [];
  _tag?: string;
  _attribute: { [key: string]: string } = {};
  _text?: string | BuderState<any>;

  mount(selector: string): BuderWidget {
    const target = document.querySelector(selector);
    target?.replaceWith(this.render());
    return this;
  }

  render(el?: HTMLElement): HTMLElement {
    if (!el) {
      el = document.createElement(this._tag ?? "div");
    }
    for (const key in this._style) {
      const value = (this._style as any)[key];
      if (value instanceof Object) {
        (el.style as any)[key] = `${value.value}${value.unit}`;
      } else {
        (el.style as any)[key] = value;
      }
    }

    // Add event listeners
    for (const key in this._events) {
      el.addEventListener(key, this._events[key]);
    }

    // Add id and classes and attributes
    if (this._id) {
      el.id = this._id;
    }
    if (this._classes.length > 0) {
      el.classList.add(...this._classes);
    }
    for (const key in this._attribute) {
      el.setAttribute(key, this._attribute[key]);
    }
    if (this._text) {
      if (this._text instanceof BuderState) {
        el.textContent = this._text.value;
        this._text.subscribe((newValue) => {
          if (el) {
            if (el.textContent !== newValue) {
              el.textContent = newValue;
            }
          }
        });
      } else {
        el.textContent = this._text;
      }
    }
    return el;
  }

  id(id: string): BuderWidget {
    this._id = id;
    return this;
  }

  class(...classes: string[]): BuderWidget {
    if (classes.length === 1) {
      this._classes = classes[0].split(" ");
    } else {
      this._classes = classes;
    }
    return this;
  }

  tag(tag: string): BuderWidget {
    this._tag = tag;
    return this;
  }

  attribute(s: { [key: string]: string }): BuderWidget {
    this._attribute = Object.assign(this._attribute, s);
    return this;
  }

  style(s: BuderStyle): BuderWidget {
    this._style = Object.assign(this._style, s);
    return this;
  }

  text(text: string): BuderWidget {
    this._text = text;
    return this;
  }

  padding(
    value:
      | BuderUnit
      | {
          top?: BuderUnit;
          left?: BuderUnit;
          right?: BuderUnit;
          bottom?: BuderUnit;
          vertical?: BuderUnit;
          horizontal?: BuderUnit;
        }
  ): BuderWidget {
    // @ts-ignore
    if (value.unit) {
      // @ts-ignore
      return this.style({ padding: value });
    } else {
      // @ts-ignore
      const { top, left, right, bottom, vertical, horizontal } = value;
      if (vertical || horizontal) {
        return this.style({
          paddingTop: vertical,
          paddingBottom: vertical,
          paddingLeft: horizontal,
          paddingRight: horizontal,
        });
      } else {
        return this.style({
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        });
      }
    }
  }

  color(color: string): BuderWidget {
    return this.style({ color });
  }

  fontSize(size: BuderUnit): BuderWidget {
    return this.style({ fontSize: size });
  }

  fontWeight(weight: BuderUnit): BuderWidget {
    return this.style({ fontWeight: weight });
  }

  width(width: BuderUnit): BuderWidget {
    return this.style({ width });
  }

  height(height: BuderUnit): BuderWidget {
    return this.style({ height });
  }

  minWidth(width: BuderUnit): BuderWidget {
    return this.style({ minWidth: width });
  }

  minHeight(height: BuderUnit): BuderWidget {
    return this.style({ minHeight: height });
  }

  maxWidth(width: BuderUnit): BuderWidget {
    return this.style({ maxWidth: width });
  }

  maxHeight(height: BuderUnit): BuderWidget {
    return this.style({ maxHeight: height });
  }

  get bold(): BuderWidget {
    return this.style({ fontWeight: "bold" });
  }

  get italic(): BuderWidget {
    return this.style({ fontStyle: "italic" });
  }

  get underline(): BuderWidget {
    return this.style({ textDecoration: "underline" });
  }

  get lineThrough(): BuderWidget {
    return this.style({ textDecoration: "line-through" });
  }

  get noWrap(): BuderWidget {
    return this.style({ whiteSpace: "nowrap" });
  }

  get wrap(): BuderWidget {
    return this.style({ whiteSpace: "wrap" });
  }

  get wrapReverse(): BuderWidget {
    return this.style({ whiteSpace: "wrap-reverse" });
  }

  float(value: "left" | "right"): BuderWidget {
    return this.style({ float: value });
  }

  clear(value: "left" | "right" | "both" | "none"): BuderWidget {
    return this.style({ clear: value });
  }

  position(
    value: "static" | "relative" | "absolute" | "fixed" | "sticky"
  ): BuderWidget {
    return this.style({ position: value });
  }

  get center() {
    switch (this._style.display) {
      case "flex":
        this._style.alignItems = "center";
        this._style.justifyContent = "center";
        break;
      case "grid":
        this._style.placeItems = "center";
        break;
      case "block":
        this._style.margin = "auto";
        break;
      case "inline-flex":
        this._style.alignItems = "center";
        this._style.justifyContent = "center";
        break;
      case "inline-grid":
        this._style.placeItems = "center";
        break;
      case "table":
        this._style.display = "table";
        this._style.margin = "auto";
        break;
      case "inline":
      case "inline-block":
      case "table-cell":
      case "table-row":
      case "table-column":
      case "table-column-group":
      case "table-footer-group":
      case "table-header-group":
        this._style.verticalAlign = "middle";
        this._style.textAlign = "center";
        break;
      default:
        this._style.textAlign = "center";
    }
    return this;
  }

  get sticky(): BuderWidget {
    return this.style({ position: "sticky" });
  }

  get absolute(): BuderWidget {
    return this.style({ position: "absolute" });
  }

  get relative(): BuderWidget {
    return this.style({ position: "relative" });
  }

  get fixed(): BuderWidget {
    return this.style({ position: "fixed" });
  }

  get fullScreen(): BuderWidget {
    return this.style({
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    });
  }

  get full(): BuderWidget {
    return this.style({
      width: "100%",
      height: "100%",
    });
  }

  get expand(): BuderWidget {
    return this.style({ flex: "1" });
  }

  private _setEvent(event: string, func: (e: any) => void): BuderWidget {
    this._events[event] = func;
    return this;
  }

  onCopy(func: (e: ClipboardEvent) => void): BuderWidget {
    return this._setEvent("copy", func);
  }
  onCut(func: (e: ClipboardEvent) => void): BuderWidget {
    return this._setEvent("cut", func);
  }
  onPaste(func: (e: ClipboardEvent) => void): BuderWidget {
    return this._setEvent("paste", func);
  }
  onCompositionEnd(func: (e: CompositionEvent) => void): BuderWidget {
    return this._setEvent("compositionend", func);
  }
  onCompositionStart(func: (e: CompositionEvent) => void): BuderWidget {
    return this._setEvent("compositionstart", func);
  }
  onCompositionUpdate(func: (e: CompositionEvent) => void): BuderWidget {
    return this._setEvent("compositionupdate", func);
  }
  onDrag(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("drag", func);
  }
  onDragEnd(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragend", func);
  }
  onDragEnter(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragenter", func);
  }
  onDragExit(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragexit", func);
  }
  onDragLeave(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragleave", func);
  }
  onDragOver(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragover", func);
  }
  onDragStart(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragstart", func);
  }
  onDrop(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("drop", func);
  }
  onFocus(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("focus", func);
  }
  onFocusIn(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("focusin", func);
  }
  onFocusOut(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("focusout", func);
  }
  onBlur(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("blur", func);
  }
  onChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("change", func);
  }
  onBeforeInput(func: (e: Event) => void): BuderWidget {
    return this._setEvent("beforeinput", func);
  }
  onInput(func: (e: Event) => void): BuderWidget {
    return this._setEvent("input", func);
  }
  onReset(func: (e: Event) => void): BuderWidget {
    return this._setEvent("reset", func);
  }
  onSubmit(func: (e: Event) => void): BuderWidget {
    return this._setEvent("submit", func);
  }
  onInvalid(func: (e: Event) => void): BuderWidget {
    return this._setEvent("invalid", func);
  }
  onLoad(func: (e: Event) => void): BuderWidget {
    return this._setEvent("load", func);
  }
  onError(func: (e: Event) => void): BuderWidget {
    return this._setEvent("error", func);
  }
  onKeydown(func: (e: KeyboardEvent) => void): BuderWidget {
    return this._setEvent("keydown", func);
  }
  onKeypress(func: (e: KeyboardEvent) => void): BuderWidget {
    return this._setEvent("keypress", func);
  }
  onKeyup(func: (e: KeyboardEvent) => void): BuderWidget {
    return this._setEvent("keyup", func);
  }
  onAuxClick(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("auxclick", func);
  }
  onClick(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("click", func);
  }
  onContextMenu(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("contextmenu", func);
  }
  onDblClick(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("dblclick", func);
  }
  onMouseDown(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mousedown", func);
  }
  onMouseEnter(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseenter", func);
  }
  onMouseLeave(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseleave", func);
  }
  onMouseMove(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mousemove", func);
  }
  onMouseOut(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseout", func);
  }
  onMouseOver(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseover", func);
  }
  onMouseUp(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseup", func);
  }
  onAbort(func: (e: Event) => void): BuderWidget {
    return this._setEvent("abort", func);
  }
  onCanPlay(func: (e: Event) => void): BuderWidget {
    return this._setEvent("canplay", func);
  }
  onCanPlayThrough(func: (e: Event) => void): BuderWidget {
    return this._setEvent("canplaythrough", func);
  }
  onDurationChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("durationchange", func);
  }
  onEmptied(func: (e: Event) => void): BuderWidget {
    return this._setEvent("emptied", func);
  }
  onEncrypted(func: (e: Event) => void): BuderWidget {
    return this._setEvent("encrypted", func);
  }
  onEnded(func: (e: Event) => void): BuderWidget {
    return this._setEvent("ended", func);
  }
  onLoadedData(func: (e: Event) => void): BuderWidget {
    return this._setEvent("loadeddata", func);
  }
  onLoadedMetadata(func: (e: Event) => void): BuderWidget {
    return this._setEvent("loadedmetadata", func);
  }
  onLoadStart(func: (e: Event) => void): BuderWidget {
    return this._setEvent("loadstart", func);
  }
  onPause(func: (e: Event) => void): BuderWidget {
    return this._setEvent("pause", func);
  }
  onPlay(func: (e: Event) => void): BuderWidget {
    return this._setEvent("play", func);
  }
  onPlaying(func: (e: Event) => void): BuderWidget {
    return this._setEvent("playing", func);
  }
  onProgress(func: (e: Event) => void): BuderWidget {
    return this._setEvent("progress", func);
  }
  onRateChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("ratechange", func);
  }
  onSeeked(func: (e: Event) => void): BuderWidget {
    return this._setEvent("seeked", func);
  }
  onSeeking(func: (e: Event) => void): BuderWidget {
    return this._setEvent("seeking", func);
  }
  onStalled(func: (e: Event) => void): BuderWidget {
    return this._setEvent("stalled", func);
  }
  onSuspend(func: (e: Event) => void): BuderWidget {
    return this._setEvent("suspend", func);
  }
  onTimeUpdate(func: (e: Event) => void): BuderWidget {
    return this._setEvent("timeupdate", func);
  }
  onVolumeChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("volumechange", func);
  }
  onWaiting(func: (e: Event) => void): BuderWidget {
    return this._setEvent("waiting", func);
  }
  onSelect(func: (e: Event) => void): BuderWidget {
    return this._setEvent("select", func);
  }
  onScroll(func: (e: UIEvent) => void): BuderWidget {
    return this._setEvent("scroll", func);
  }
  onTouchCancel(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchcancel", func);
  }
  onTouchEnd(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchend", func);
  }
  onTouchMove(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchmove", func);
  }
  onTouchStart(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchstart", func);
  }
  onPointerDown(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerdown", func);
  }
  onPointerMove(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointermove", func);
  }
  onPointerUp(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerup", func);
  }
  onPointerCancel(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointercancel", func);
  }
  onPointerEnter(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerenter", func);
  }
  onPointerLeave(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerleave", func);
  }
  onPointerOver(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerover", func);
  }
  onPointerOut(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerout", func);
  }
  onWheel(func: (e: WheelEvent) => void): BuderWidget {
    return this._setEvent("wheel", func);
  }
  onAnimationStart(func: (e: AnimationEvent) => void): BuderWidget {
    return this._setEvent("animationstart", func);
  }
  onAnimationEnd(func: (e: AnimationEvent) => void): BuderWidget {
    return this._setEvent("animationend", func);
  }
  onAnimationIteration(func: (e: AnimationEvent) => void): BuderWidget {
    return this._setEvent("animationiteration", func);
  }
  onTransitionEnd(func: (e: TransitionEvent) => void): BuderWidget {
    return this._setEvent("transitionend", func);
  }
  onTransitionStart(func: (e: TransitionEvent) => void): BuderWidget {
    return this._setEvent("transitionstart", func);
  }
}
