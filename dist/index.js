var _ = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(_ || {});
function b(e) {
  return {
    value: e,
    unit: "px"
    /* px */
  };
}
function x(e) {
  return {
    value: e,
    unit: "em"
    /* em */
  };
}
function w(e) {
  return {
    value: e,
    unit: "rem"
    /* rem */
  };
}
function k(e) {
  return {
    value: e,
    unit: "vw"
    /* vw */
  };
}
function S(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function C(e) {
  return {
    value: e,
    unit: "%"
    /* percent */
  };
}
class l {
  constructor() {
  }
  _style = {};
  _events = {};
  _id;
  _classes = [];
  _tag;
  _attribute = {};
  _text;
  mount(t) {
    return document.querySelector(t)?.replaceWith(this.render()), this;
  }
  render(t) {
    t || (t = document.createElement(this._tag ?? "div"));
    for (const n in this._style) {
      const r = this._style[n];
      r instanceof Object ? t.style[n] = `${r.value}${r.unit}` : t.style[n] = r;
    }
    for (const n in this._events)
      t.addEventListener(n, this._events[n]);
    this._id && (t.id = this._id), this._classes.length > 0 && t.classList.add(...this._classes);
    for (const n in this._attribute)
      t.setAttribute(n, this._attribute[n]);
    return this._text && (t.textContent = this._text), t;
  }
  id(t) {
    return this._id = t, this;
  }
  class(...t) {
    return t.length === 1 ? this._classes = t[0].split(" ") : this._classes = t, this;
  }
  tag(t) {
    return this._tag = t, this;
  }
  attribute(t) {
    return this._attribute = Object.assign(this._attribute, t), this;
  }
  style(t) {
    return this._style = Object.assign(this._style, t), this;
  }
  text(t) {
    return this._text = t, this;
  }
  padding(t) {
    if (t.unit)
      return this.style({ padding: t });
    {
      const { top: n, left: r, right: s, bottom: i, vertical: o, horizontal: h } = t;
      return o || h ? this.style({
        paddingTop: o,
        paddingBottom: o,
        paddingLeft: h,
        paddingRight: h
      }) : this.style({
        paddingTop: n,
        paddingBottom: i,
        paddingLeft: r,
        paddingRight: s
      });
    }
  }
  color(t) {
    return this.style({ color: t });
  }
  fontSize(t) {
    return this.style({ fontSize: t });
  }
  fontWeight(t) {
    return this.style({ fontWeight: t });
  }
  width(t) {
    return this.style({ width: t });
  }
  height(t) {
    return this.style({ height: t });
  }
  minWidth(t) {
    return this.style({ minWidth: t });
  }
  minHeight(t) {
    return this.style({ minHeight: t });
  }
  maxWidth(t) {
    return this.style({ maxWidth: t });
  }
  maxHeight(t) {
    return this.style({ maxHeight: t });
  }
  get bold() {
    return this.style({ fontWeight: "bold" });
  }
  get italic() {
    return this.style({ fontStyle: "italic" });
  }
  get underline() {
    return this.style({ textDecoration: "underline" });
  }
  get lineThrough() {
    return this.style({ textDecoration: "line-through" });
  }
  get noWrap() {
    return this.style({ whiteSpace: "nowrap" });
  }
  get wrap() {
    return this.style({ whiteSpace: "wrap" });
  }
  get wrapReverse() {
    return this.style({ whiteSpace: "wrap-reverse" });
  }
  float(t) {
    return this.style({ float: t });
  }
  clear(t) {
    return this.style({ clear: t });
  }
  position(t) {
    return this.style({ position: t });
  }
  get center() {
    switch (this._style.display) {
      case "flex":
        this._style.alignItems = "center", this._style.justifyContent = "center";
        break;
      case "grid":
        this._style.placeItems = "center";
        break;
      case "block":
        this._style.margin = "auto";
        break;
      case "inline-flex":
        this._style.alignItems = "center", this._style.justifyContent = "center";
        break;
      case "inline-grid":
        this._style.placeItems = "center";
        break;
      case "table":
        this._style.display = "table", this._style.margin = "auto";
        break;
      case "inline":
      case "inline-block":
      case "table-cell":
      case "table-row":
      case "table-column":
      case "table-column-group":
      case "table-footer-group":
      case "table-header-group":
        this._style.verticalAlign = "middle", this._style.textAlign = "center";
        break;
      default:
        this._style.textAlign = "center";
    }
    return this;
  }
  get sticky() {
    return this.style({ position: "sticky" });
  }
  get absolute() {
    return this.style({ position: "absolute" });
  }
  get relative() {
    return this.style({ position: "relative" });
  }
  get fixed() {
    return this.style({ position: "fixed" });
  }
  get fullScreen() {
    return this.style({
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%"
    });
  }
  get full() {
    return this.style({
      width: "100%",
      height: "100%"
    });
  }
  get expand() {
    return this.style({ flex: "1" });
  }
  _setEvent(t, n) {
    return this._events[t] = n, this;
  }
  onCopy(t) {
    return this._setEvent("copy", t);
  }
  onCut(t) {
    return this._setEvent("cut", t);
  }
  onPaste(t) {
    return this._setEvent("paste", t);
  }
  onCompositionEnd(t) {
    return this._setEvent("compositionend", t);
  }
  onCompositionStart(t) {
    return this._setEvent("compositionstart", t);
  }
  onCompositionUpdate(t) {
    return this._setEvent("compositionupdate", t);
  }
  onDrag(t) {
    return this._setEvent("drag", t);
  }
  onDragEnd(t) {
    return this._setEvent("dragend", t);
  }
  onDragEnter(t) {
    return this._setEvent("dragenter", t);
  }
  onDragExit(t) {
    return this._setEvent("dragexit", t);
  }
  onDragLeave(t) {
    return this._setEvent("dragleave", t);
  }
  onDragOver(t) {
    return this._setEvent("dragover", t);
  }
  onDragStart(t) {
    return this._setEvent("dragstart", t);
  }
  onDrop(t) {
    return this._setEvent("drop", t);
  }
  onFocus(t) {
    return this._setEvent("focus", t);
  }
  onFocusIn(t) {
    return this._setEvent("focusin", t);
  }
  onFocusOut(t) {
    return this._setEvent("focusout", t);
  }
  onBlur(t) {
    return this._setEvent("blur", t);
  }
  onChange(t) {
    return this._setEvent("change", t);
  }
  onBeforeInput(t) {
    return this._setEvent("beforeinput", t);
  }
  onInput(t) {
    return this._setEvent("input", t);
  }
  onReset(t) {
    return this._setEvent("reset", t);
  }
  onSubmit(t) {
    return this._setEvent("submit", t);
  }
  onInvalid(t) {
    return this._setEvent("invalid", t);
  }
  onLoad(t) {
    return this._setEvent("load", t);
  }
  onError(t) {
    return this._setEvent("error", t);
  }
  onKeydown(t) {
    return this._setEvent("keydown", t);
  }
  onKeypress(t) {
    return this._setEvent("keypress", t);
  }
  onKeyup(t) {
    return this._setEvent("keyup", t);
  }
  onAuxClick(t) {
    return this._setEvent("auxclick", t);
  }
  onClick(t) {
    return this._setEvent("click", t);
  }
  onContextMenu(t) {
    return this._setEvent("contextmenu", t);
  }
  onDblClick(t) {
    return this._setEvent("dblclick", t);
  }
  onMouseDown(t) {
    return this._setEvent("mousedown", t);
  }
  onMouseEnter(t) {
    return this._setEvent("mouseenter", t);
  }
  onMouseLeave(t) {
    return this._setEvent("mouseleave", t);
  }
  onMouseMove(t) {
    return this._setEvent("mousemove", t);
  }
  onMouseOut(t) {
    return this._setEvent("mouseout", t);
  }
  onMouseOver(t) {
    return this._setEvent("mouseover", t);
  }
  onMouseUp(t) {
    return this._setEvent("mouseup", t);
  }
  onAbort(t) {
    return this._setEvent("abort", t);
  }
  onCanPlay(t) {
    return this._setEvent("canplay", t);
  }
  onCanPlayThrough(t) {
    return this._setEvent("canplaythrough", t);
  }
  onDurationChange(t) {
    return this._setEvent("durationchange", t);
  }
  onEmptied(t) {
    return this._setEvent("emptied", t);
  }
  onEncrypted(t) {
    return this._setEvent("encrypted", t);
  }
  onEnded(t) {
    return this._setEvent("ended", t);
  }
  onLoadedData(t) {
    return this._setEvent("loadeddata", t);
  }
  onLoadedMetadata(t) {
    return this._setEvent("loadedmetadata", t);
  }
  onLoadStart(t) {
    return this._setEvent("loadstart", t);
  }
  onPause(t) {
    return this._setEvent("pause", t);
  }
  onPlay(t) {
    return this._setEvent("play", t);
  }
  onPlaying(t) {
    return this._setEvent("playing", t);
  }
  onProgress(t) {
    return this._setEvent("progress", t);
  }
  onRateChange(t) {
    return this._setEvent("ratechange", t);
  }
  onSeeked(t) {
    return this._setEvent("seeked", t);
  }
  onSeeking(t) {
    return this._setEvent("seeking", t);
  }
  onStalled(t) {
    return this._setEvent("stalled", t);
  }
  onSuspend(t) {
    return this._setEvent("suspend", t);
  }
  onTimeUpdate(t) {
    return this._setEvent("timeupdate", t);
  }
  onVolumeChange(t) {
    return this._setEvent("volumechange", t);
  }
  onWaiting(t) {
    return this._setEvent("waiting", t);
  }
  onSelect(t) {
    return this._setEvent("select", t);
  }
  onScroll(t) {
    return this._setEvent("scroll", t);
  }
  onTouchCancel(t) {
    return this._setEvent("touchcancel", t);
  }
  onTouchEnd(t) {
    return this._setEvent("touchend", t);
  }
  onTouchMove(t) {
    return this._setEvent("touchmove", t);
  }
  onTouchStart(t) {
    return this._setEvent("touchstart", t);
  }
  onPointerDown(t) {
    return this._setEvent("pointerdown", t);
  }
  onPointerMove(t) {
    return this._setEvent("pointermove", t);
  }
  onPointerUp(t) {
    return this._setEvent("pointerup", t);
  }
  onPointerCancel(t) {
    return this._setEvent("pointercancel", t);
  }
  onPointerEnter(t) {
    return this._setEvent("pointerenter", t);
  }
  onPointerLeave(t) {
    return this._setEvent("pointerleave", t);
  }
  onPointerOver(t) {
    return this._setEvent("pointerover", t);
  }
  onPointerOut(t) {
    return this._setEvent("pointerout", t);
  }
  onWheel(t) {
    return this._setEvent("wheel", t);
  }
  onAnimationStart(t) {
    return this._setEvent("animationstart", t);
  }
  onAnimationEnd(t) {
    return this._setEvent("animationend", t);
  }
  onAnimationIteration(t) {
    return this._setEvent("animationiteration", t);
  }
  onTransitionEnd(t) {
    return this._setEvent("transitionend", t);
  }
  onTransitionStart(t) {
    return this._setEvent("transitionstart", t);
  }
}
class u extends l {
  _children;
  constructor(t = []) {
    super(), this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children.forEach((n) => {
      t?.appendChild(n.render());
    }), super.render(t);
  }
}
function P(e) {
  return new u(e);
}
class v extends l {
  constructor(t) {
    super(), this._text = t;
  }
  render() {
    const t = document.createElement("span");
    return super.render(t);
  }
}
function D(e) {
  return new v(e);
}
let a = [], c = null;
class p extends l {
  _key;
  _func;
  _element;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(t, n) {
    super(), c = this, n && n.forEach((r, s) => {
      r.builder = this, this._states.set(s, r.value);
    }), this._func = t, this._key = a.length, a.push(this);
  }
  render() {
    const t = this._func(this.build.bind(this)).render();
    return t.setAttribute("bud", this._key.toString()), this._element = t, this._statePointer = 0, super.render(t);
  }
  build() {
    this._element?.replaceWith(this.render());
  }
}
function W(e, t) {
  return new p(e, t);
}
function E(e) {
  const t = document.querySelectorAll(e);
  for (const n of t) {
    const r = n.getAttribute("bud");
    if (!r)
      continue;
    const s = a[Number(r)];
    s && n.replaceWith(s.render());
  }
}
function M(...e) {
  return E("." + e.join(",."));
}
function T(e) {
  const t = c;
  let n = 0;
  return t && (n = t._statePointer, t._statePointer++, t._states.has(n) ? e = t._states.get(n) : t._states.set(n, e)), new Proxy(
    { value: e, builder: t },
    {
      set(r, s, i, o) {
        return r.builder?._states.set(n, i), r[s] = i, r.builder?.build(), !0;
      }
    }
  );
}
class g extends u {
  constructor(t = []) {
    super(), typeof t == "string" ? this.text(t) : this._children = t;
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function A(e) {
  return new g(e);
}
class d extends u {
  _children;
  constructor(t = []) {
    super(), this._children = t, this.style({ display: "flex" });
  }
  gap(t) {
    return this.style({ gap: t });
  }
}
class y extends d {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function L(e) {
  return new y(e);
}
class f extends d {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function I(e) {
  return new f(e);
}
class m extends u {
  _children;
  constructor(t = []) {
    super(), this._children = t, this._children.forEach((n) => {
      n._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function O(e) {
  return new m(e);
}
export {
  _ as BuderUnits,
  l as BuderWidget,
  W as Builder,
  A as Button,
  L as Col,
  I as Row,
  O as Stack,
  T as State,
  D as Text,
  P as View,
  p as _Builder,
  u as _View,
  c as _currentBuilder,
  M as bud,
  x as em,
  C as percent,
  b as px,
  E as queryRefresh,
  w as rem,
  S as vh,
  k as vw
};
