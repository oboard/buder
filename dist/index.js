var _ = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(_ || {});
function C(e) {
  return {
    value: e,
    unit: "px"
    /* px */
  };
}
function P(e) {
  return {
    value: e,
    unit: "em"
    /* em */
  };
}
function D(e) {
  return {
    value: e,
    unit: "rem"
    /* rem */
  };
}
function W(e) {
  return {
    value: e,
    unit: "vw"
    /* vw */
  };
}
function T(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function A(e) {
  return {
    value: e,
    unit: "%"
    /* percent */
  };
}
class i {
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
      const { top: n, left: r, right: s, bottom: o, vertical: u, horizontal: h } = t;
      return u || h ? this.style({
        paddingTop: u,
        paddingBottom: u,
        paddingLeft: h,
        paddingRight: h
      }) : this.style({
        paddingTop: n,
        paddingBottom: o,
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
class a extends i {
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
function I(e) {
  return new a(e);
}
class v extends i {
  constructor(t) {
    super(), this._text = t;
  }
  render() {
    const t = document.createElement("span");
    return super.render(t);
  }
}
function M(e) {
  return new v(e);
}
let l = [], d = null;
class p extends i {
  _key;
  _func;
  _element;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(t, n) {
    super(), d = this, n && n.forEach((r, s) => {
      r.builder = this, this._states.set(s, r.value);
    }), this._func = t, this._key = l.length, l.push(this);
  }
  render() {
    const t = this._func(this.build.bind(this)).render();
    return t.setAttribute("bud", this._key.toString()), this._element = t, this._statePointer = 0, super.render(t);
  }
  build() {
    this._element?.replaceWith(this.render());
  }
}
function L(e, t) {
  return new p(e, t);
}
function g(e) {
  const t = document.querySelectorAll(e);
  for (const n of t) {
    const r = n.getAttribute("bud");
    if (!r)
      continue;
    const s = l[Number(r)];
    s && n.replaceWith(s.render());
  }
}
function O(...e) {
  return g("." + e.join(",."));
}
function R(e) {
  const t = d;
  let n = 0;
  return t && (n = t._statePointer, t._statePointer++, t._states.has(n) ? e = t._states.get(n) : t._states.set(n, e)), new Proxy(
    { value: e, builder: t },
    {
      set(r, s, o, u) {
        return r.builder?._states.set(n, o), r[s] = o, r.builder?.build(), !0;
      }
    }
  );
}
class E extends a {
  constructor(t = []) {
    super(), typeof t == "string" ? this.text(t) : this._children = t;
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function B(e) {
  return new E(e);
}
class c extends a {
  _children;
  constructor(t = []) {
    super(), this._children = t, this.style({ display: "flex" });
  }
  gap(t) {
    return this.style({ gap: t });
  }
}
function H(e) {
  return new c(e);
}
class y extends c {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function F(e) {
  return new y(e);
}
class m extends c {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function j(e) {
  return new m(e);
}
class f extends a {
  _children;
  constructor(t = []) {
    super(), this._children = t, this._children.forEach((n) => {
      n._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function q(e) {
  return new f(e);
}
class x extends i {
  _model;
  constructor(t) {
    super(), this._model = t;
  }
  render() {
    const t = document.createElement("textarea");
    return t.value = this._model?.value ?? "", t.addEventListener("input", (n) => {
      this._model.value = n.target.value;
    }), super.render(t);
  }
}
function z(e) {
  return new x(e);
}
class b extends i {
  _model;
  constructor(t) {
    super(), t && (this._model = t, this.attribute({ value: t.value }), this.onInput((n) => {
      t.value = n.target.value;
    }));
  }
  render() {
    const t = document.createElement("input");
    return super.render(t);
  }
}
function K(e) {
  return new b(e);
}
class w extends i {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function V(e) {
  return new w(e);
}
class k extends i {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function $(e) {
  return new k(e);
}
class S extends i {
  _src;
  constructor(t) {
    super(), this.attribute({ src: t });
  }
  render() {
    const t = document.createElement("img");
    return super.render(t);
  }
}
function N(e) {
  return new S(e);
}
export {
  _ as BuderUnits,
  i as BuderWidget,
  L as Builder,
  B as Button,
  F as Col,
  H as Flex,
  V as H,
  N as Img,
  K as Input,
  j as Row,
  q as Stack,
  R as State,
  M as Text,
  z as TextArea,
  I as View,
  $ as W,
  p as _Builder,
  c as _Flex,
  a as _View,
  d as _currentBuilder,
  O as bud,
  P as em,
  A as percent,
  C as px,
  g as queryRefresh,
  D as rem,
  T as vh,
  W as vw
};
