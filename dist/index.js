var E = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(E || {});
function D(e) {
  return {
    value: e,
    unit: "px"
    /* px */
  };
}
function I(e) {
  return {
    value: e,
    unit: "em"
    /* em */
  };
}
function T(e) {
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
function M(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function L(e) {
  return {
    value: e,
    unit: "%"
    /* percent */
  };
}
class h {
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
      const s = this._style[n];
      s instanceof Object ? s.value.subscribe ? s.value.subscribe((i) => {
        t && (t.style[n] = `${i}${s.unit}`);
      }) : t.style[n] = `${s.value}${s.unit}` : t.style[n] = s;
    }
    for (const n in this._events)
      t.addEventListener(n, this._events[n]);
    this._id && (t.id = this._id), this._classes.length > 0 && t.classList.add(...this._classes);
    for (const n in this._attribute)
      t.setAttribute(n, this._attribute[n]);
    return this._text && (typeof this._text == "string" ? t.textContent = this._text : (t.textContent = this._text.value, this._text.subscribe((n) => {
      t && (t.textContent = n);
    }))), t;
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
      const { top: n, left: s, right: i, bottom: o, vertical: u, horizontal: r } = t;
      return u || r ? this.style({
        paddingTop: u,
        paddingBottom: u,
        paddingLeft: r,
        paddingRight: r
      }) : this.style({
        paddingTop: n,
        paddingBottom: o,
        paddingLeft: s,
        paddingRight: i
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
class l extends h {
  _children;
  constructor(t = []) {
    super(), typeof t == "string" ? this.text(t) : this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children?.forEach((n) => {
      t?.appendChild(n.render());
    }), super.render(t);
  }
}
function O(e) {
  return new l(e);
}
class f extends h {
  constructor(t) {
    super(), this._text = t;
  }
  render() {
    const t = document.createElement("span");
    return super.render(t);
  }
}
function R(e) {
  return new f(e);
}
let _ = null;
class g extends h {
  // _key: number;
  _func;
  _element;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(t, n) {
    super(), _ = this, n && n.forEach((s, i) => {
      s.builder = this, this._states.set(i, s.value);
    }), this._func = t;
  }
  subscribe(t) {
    this._states.forEach((n, s) => {
      const i = this._states.get(s);
      i instanceof p && (i.builder = this, i.subscribe(t));
    });
  }
  render() {
    const t = super.render(this._func(this.build.bind(this)).render());
    return this._element ? v(this._element, t) : this._element = t, this._statePointer = 0, t;
  }
  build() {
    this.render();
  }
}
function v(e, t) {
  if (!e || !t || e.isEqualNode(t))
    return;
  e.tagName !== t.tagName && e.replaceWith(t);
  const n = e.attributes, s = t.attributes;
  if (n && s) {
    for (let r = 0; r < n.length; r++) {
      const a = n[r], c = s.getNamedItem(a.name);
      c ? c.value !== a.value && e.setAttribute(a.name, c.value) : e.removeAttribute(a.name);
    }
    for (let r = 0; r < s.length; r++) {
      const a = s[r];
      n.getNamedItem(a.name) || e.setAttribute(a.name, a.value);
    }
  }
  const i = e.childNodes, o = t.childNodes, u = Math.max(i.length, o.length);
  if (u == 0)
    e.textContent !== t.textContent && (e.textContent = t.textContent);
  else
    for (let r = 0; r < u; r++) {
      if (r >= i.length) {
        e.appendChild(o[r]);
        continue;
      }
      if (r >= o.length) {
        e.removeChild(i[r]);
        continue;
      }
      v(i[r], o[r]);
    }
  return e;
}
function B(e, t) {
  return new g(e, t);
}
class p {
  value;
  builder;
  callbacks = [];
  constructor(t, n) {
    this.value = t, this.builder = n;
  }
  // 重载“.”
  get(t) {
    const n = m(this.value[t]);
    return n.subscribe(() => {
      this.value[t] = n.value;
    }), n;
  }
  subscribe(t) {
    this.callbacks.push(t);
  }
  set(t) {
    this.value = t, this.callbacks.forEach((n) => {
      n(t);
    });
  }
}
function m(e) {
  const t = _;
  let n = 0;
  return t && (n = t._statePointer, t._statePointer++, t._states.has(n) ? e = t._states.get(n) : t._states.set(n, e)), new Proxy(new p(e, t), {
    set(s, i, o, u) {
      return s.builder?._states.set(n, o), i == "value" ? s.set(o) : Reflect.set(s, i, o, u), s.builder?.build(), !0;
    }
  });
}
class y extends l {
  constructor(t = []) {
    super(t);
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function N(e) {
  return new y(e);
}
class d extends l {
  constructor(t = []) {
    super(t), this.style({ display: "flex" });
  }
  gap(t) {
    return this.style({ gap: t });
  }
}
function H(e = []) {
  return new d(e);
}
class b extends d {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function F(e) {
  return new b(e);
}
class x extends d {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function $(e) {
  return new x(e);
}
class w extends l {
  _children;
  constructor(t = []) {
    super(), this._children = t, this._children.forEach((n) => {
      n._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function j(e) {
  return new w(e);
}
class C extends h {
  _model;
  constructor(t) {
    super(), this._model = t, t && this.onInput((n) => {
      t.value = n.target.value;
    });
  }
  render() {
    const t = document.createElement("textarea");
    return t.value = this._model?.value || "", this._model?.subscribe((n) => {
      t.value = n;
    }), super.render(t);
  }
}
function z(e) {
  return new C(e);
}
class k extends h {
  _model;
  constructor(t) {
    super(), t && (this._model = t, this.attribute({ value: t.value }), this.onInput((n) => {
      t.value = n.target.value;
    }));
  }
  render() {
    const t = document.createElement("input");
    return this._model?.subscribe((n) => {
      t.value = n;
    }), super.render(t);
  }
}
function K(e) {
  return new k(e);
}
class S extends h {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function q(e) {
  return new S(e);
}
class P extends h {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function V(e) {
  return new P(e);
}
class A extends h {
  _src;
  constructor(t) {
    super(), this.attribute({ src: t });
  }
  render() {
    const t = document.createElement("img");
    return super.render(t);
  }
}
function G(e) {
  return new A(e);
}
export {
  p as BuderState,
  E as BuderUnits,
  h as BuderWidget,
  B as Builder,
  N as Button,
  F as Col,
  H as Flex,
  q as H,
  G as Image,
  K as Input,
  $ as Row,
  j as Stack,
  m as State,
  R as Text,
  z as TextArea,
  O as View,
  V as W,
  g as _Builder,
  d as _Flex,
  l as _View,
  _ as _currentBuilder,
  v as diffApply,
  I as em,
  L as percent,
  D as px,
  T as rem,
  M as vh,
  W as vw
};
