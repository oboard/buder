class a {
  constructor() {
  }
  _instanceElement;
  _children;
  _style = {};
  _events = {};
  _id;
  _classes = [];
  _tag;
  _attr = {};
  _text;
  _type;
  mount(t) {
    return document.querySelector(t)?.replaceWith(this.render()), this;
  }
  render(t) {
    t || (t = document.createElement(this._tag ?? "div"));
    for (const n in this._style) {
      const s = this._style[n];
      s instanceof Object ? s.value instanceof o ? s.value.init((i) => {
        t && (t.style[n] = `${i}${s.unit}`);
      }) : s instanceof o ? s.init((i) => {
        t && (t.style[n] = i);
      }) : t.style[n] = `${s.value}${s.unit}` : t.style[n] = s;
    }
    for (const n in this._events)
      for (const s of this._events[n])
        t.addEventListener(n, s);
    this._id && (t.id = this._id), this._classes.forEach((n) => {
      typeof n == "string" ? n && t && t.classList.add(n) : n instanceof Array ? t.classList.add(...n) : n instanceof o && n.subscribe((s) => {
        if (t) {
          t.classList.add(
            ...s.filter((i) => t && !t.classList.contains(i))
          );
          for (const i of t.classList)
            s.includes(i) || t.classList.remove(i);
        }
      });
    });
    for (const n in this._attr) {
      const s = this._attr[n];
      s instanceof o ? s.init((i) => {
        t && t.setAttribute(n, i);
      }) : typeof s == "string" && t.setAttribute(n, s);
    }
    return this._text && (this._text instanceof o ? this._text.init((n) => {
      t && (t.textContent = n);
    }) : t.textContent = this._text), t;
  }
  id(t) {
    return this._id = t, this;
  }
  class(t) {
    return this._classes.push(t), this;
  }
  tag(t) {
    return this._tag = t, this;
  }
  attr(t) {
    return this._attr = Object.assign(this._attr, t), this;
  }
  style(t) {
    return this._style = Object.assign(this._style, t), this;
  }
  text(t) {
    return this._text = t, this;
  }
  type(t) {
    return this._type = t, this;
  }
  padding(t) {
    if (t.unit)
      return this.style({ padding: t });
    {
      const { top: n, left: s, right: i, bottom: u, vertical: c, horizontal: r } = t;
      return c || r ? this.style({
        paddingTop: c,
        paddingBottom: c,
        paddingLeft: r,
        paddingRight: r
      }) : this.style({
        paddingTop: n,
        paddingBottom: u,
        paddingLeft: s,
        paddingRight: i
      });
    }
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
  event(t) {
    for (const n in t)
      this._events[n] || (this._events[n] = []), this._events[n].push(t[n]);
    return this;
  }
}
let m = null;
class b extends a {
  // _key: number;
  _func;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(t, n) {
    super(), m = this, this._func = t, n && n.forEach((s) => {
      s.subscribe(() => {
        this.build();
      });
    });
  }
  bind(t) {
    return t && t.subscribe(() => {
      this.build();
    }), this;
  }
  subscribe(t) {
    this._states.forEach((n, s) => {
      const i = this._states.get(s);
      i instanceof o && (i.builder = this, i.subscribe(t));
    });
  }
  render() {
    const t = super.render(this._func(this.build.bind(this)).render());
    return this._instanceElement ? d(this._instanceElement, t) : this._instanceElement = t, this._statePointer = 0, t;
  }
  build() {
    this.render();
  }
}
function d(e, t) {
  if (!e || !t || e.isEqualNode(t))
    return;
  e.tagName !== t.tagName && e.replaceWith(t);
  const n = e.attributes, s = t.attributes;
  if (n && s) {
    for (let r = 0; r < n.length; r++) {
      const l = n[r], f = s.getNamedItem(l.name);
      f ? f.value !== l.value && e.setAttribute(l.name, f.value) : e.removeAttribute(l.name);
    }
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      n.getNamedItem(l.name) || e.setAttribute(l.name, l.value);
    }
  }
  const i = e.childNodes, u = t.childNodes, c = Math.max(i.length, u.length);
  if (c == 0)
    e.textContent !== t.textContent && (e.textContent = t.textContent);
  else
    for (let r = 0; r < c; r++) {
      if (r >= i.length) {
        e.appendChild(u[r]);
        continue;
      }
      if (r >= u.length) {
        e.removeChild(i[r]);
        continue;
      }
      d(i[r], u[r]);
    }
  return e;
}
function I(e, t) {
  return new b(e, t);
}
class o {
  value;
  builder;
  callbacks = [];
  constructor(t, n) {
    this.value = t, this.builder = n;
  }
  // 重载“.”
  get(t) {
    const n = p(this.value[t]);
    return n.subscribe(() => {
      this.value[t] = n.value;
    }), n;
  }
  init(t) {
    return this.subscribe(t), t(this.value), this;
  }
  subscribe(t) {
    return this.callbacks.push(t), this;
  }
  computed(t) {
    const n = p(t(this.value));
    return this.subscribe(() => {
      n.set(t(this.value));
    }), n;
  }
  set(t) {
    this.value = t, this.callbacks.forEach((n) => {
      n(t);
    });
  }
}
function p(e) {
  const t = m;
  let n = 0;
  return t && (n = t._statePointer, t._statePointer++, t._states.has(n) ? e = t._states.get(n) : t._states.set(n, e)), new Proxy(new o(e, t), {
    set(s, i, u, c) {
      return s.builder?._states.set(n, u), i == "value" ? s.set(u) : Reflect.set(s, i, u, c), s.builder?.build(), !0;
    }
  });
}
function M(e, t) {
  function n(s) {
    s._children && s._children.forEach(n);
    const i = s._type;
    function u(c) {
      c && s.class(c);
    }
    i && (e instanceof o ? e.init((c) => {
      u(c[i]);
    }) : u(e[i]));
  }
  return n(t), t;
}
var y = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(y || {});
function R(e) {
  return {
    value: e,
    unit: "px"
    /* px */
  };
}
function W(e) {
  return {
    value: e,
    unit: "em"
    /* em */
  };
}
function F(e) {
  return {
    value: e,
    unit: "rem"
    /* rem */
  };
}
function O(e) {
  return {
    value: e,
    unit: "vw"
    /* vw */
  };
}
function $(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function j(e) {
  return {
    value: e,
    unit: "%"
    /* percent */
  };
}
class h extends a {
  constructor(t) {
    super(), t && typeof t[0] == "string" ? this.text(t[0]) : this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children?.forEach((n) => {
      if (n instanceof o) {
        const s = n.value;
        s instanceof a && n.init((i) => {
          const u = i.render();
          s._instanceElement ? d(s._instanceElement, u) : (s._instanceElement = u, t?.appendChild(u));
        });
      } else
        t?.appendChild(n.render());
    }), super.render(t);
  }
}
function q(...e) {
  return new h(e);
}
class v extends a {
  _type = "text";
  constructor(t) {
    super(), this._text = t;
  }
  render() {
    const t = document.createElement(this._tag ?? "span");
    return super.render(t);
  }
  get center() {
    return this._style.verticalAlign = "middle", this._style.textAlign = "center", this;
  }
}
function D(e) {
  return new v(e);
}
class g extends h {
  _type = "button";
  constructor(t = []) {
    super(t);
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function z(...e) {
  return new g(e);
}
class _ extends h {
  constructor(t) {
    super(t), this.style({ display: "flex" });
  }
  get center() {
    return this._style.alignItems = "center", this._style.justifyContent = "center", this;
  }
}
function V(...e) {
  return new _(e);
}
class E extends _ {
  constructor(t) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function G(...e) {
  return new E(e);
}
class w extends _ {
  constructor(t) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function J(...e) {
  return new w(e);
}
class C extends h {
  constructor(t = []) {
    super(t), this._children?.forEach((n) => {
      n.style({ position: "absolute" });
    }), this.style({ position: "relative" });
  }
}
function K(e) {
  return new C(e);
}
class x extends a {
  _type = "input";
  _tag = "input";
  _model;
  constructor(t) {
    super(), t && (this._model = t, t instanceof o ? (this.attr({ value: t.value }), this.event({
      input: (n) => {
        t.value = n.target.value;
      }
    })) : this.attr({ value: t }));
  }
  render() {
    const t = document.createElement(this._tag);
    return (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement || t instanceof HTMLButtonElement) && this._model instanceof o && this._model?.init((n) => {
      t && (t.value = n);
    }), super.render(t);
  }
}
function Q(e) {
  return new x(e);
}
class S extends x {
  _type = "textarea";
  _tag = "textarea";
  constructor(t) {
    super(t);
  }
  render() {
    return super.render();
  }
}
function X(e) {
  return new S(e);
}
class A extends a {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function Y(e) {
  return new A(e);
}
class L extends a {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function Z(e) {
  return new L(e);
}
class T extends a {
  _type = "picture";
  _src;
  constructor(t) {
    super(), this.attr({ src: t });
  }
  render() {
    const t = document.createElement("img");
    return super.render(t);
  }
}
function U(e) {
  return new T(e);
}
class k extends h {
  _state;
  _builder;
  _parent;
  constructor(t, n, s) {
    super(), this._state = t, this._builder = n, this._parent = s, this._state.subscribe(() => {
      this.build();
    });
  }
  build() {
    this._instanceElement && d(this._instanceElement, this.render());
  }
  render() {
    let t = 0;
    this._children = [];
    for (const s of this._state.value) {
      const i = this._builder(s, t++, this._state.value);
      this._children.push(i);
    }
    const n = super.render(this._parent?.render());
    return this._instanceElement ? n : this._instanceElement = n;
  }
}
function tt(e, t, n) {
  return new k(e, t, n);
}
class N extends v {
  _tag = "label";
  constructor(t) {
    super(t);
  }
  for(t) {
    return this.attr({
      for: t
    });
  }
}
function et(e) {
  return new N(e);
}
class P extends a {
  _tag = "input";
  _model;
  _type = "checkbox";
  constructor(t) {
    super(), t && (this._model = t, this.attr({
      type: "checkbox",
      checked: t.value ? "true" : "false"
    }), this.event({
      input: (n) => {
        t.value = !!n.target.checked;
      }
    }));
  }
  render() {
    const t = super.render();
    return this._model?.init((n) => {
      t && (t.checked = n);
    }), t;
  }
}
function nt(e) {
  return new P(e);
}
class B extends a {
  _options;
  _type = "slider";
  _tag = "input";
  _model;
  constructor(t, n) {
    super(), t && (this._model = t, this._options = n, this.attr({ value: t.value.toString() }), this.event({
      input: (s) => {
        t.value = Number(s.target.value);
      }
    }));
  }
  render() {
    const t = document.createElement(this._tag);
    return t.type = "range", t.min = this._options?.min.toString() || "0", t.max = this._options?.max.toString() || "100", t.step = this._options?.step.toString() || "1", this._model?.subscribe((n) => {
      t && (t.value = n.toString());
    }), t.value = (this._model?.value ?? "").toString(), super.render(t);
  }
}
const st = (e, t) => new B(e, t);
class H extends h {
  _type = "select";
  _model;
  _options;
  constructor(t) {
    super(), t instanceof o ? t.init((n) => {
      this._options = n;
    }) : this._options = t;
  }
  bind(t) {
    return this._model = t, this.event({
      change: (n) => {
        t.set(n.target.value ?? "");
      }
    }), this;
  }
  render() {
    const t = document.createElement("select");
    return this._options && Object.entries(this._options).forEach(([n, s]) => {
      const i = document.createElement("option");
      i.value = n, i.text = s, t.appendChild(i);
    }), this._model?.init((n) => {
      t.value = n;
    }), super.render(t);
  }
}
function it(e) {
  return new H(e);
}
export {
  o as BuderState,
  y as BuderUnits,
  a as BuderWidget,
  I as Builder,
  z as Button,
  nt as Checkbox,
  G as Column,
  V as Flex,
  tt as ForEach,
  Y as H,
  Q as Input,
  et as Label,
  U as Picture,
  J as Row,
  it as Select,
  st as Slider,
  K as Stack,
  p as State,
  D as Text,
  X as TextArea,
  M as Theme,
  q as View,
  Z as W,
  b as _Builder,
  g as _Button,
  P as _Checkbox,
  E as _Column,
  _ as _Flex,
  k as _ForEach,
  x as _Input,
  N as _Label,
  w as _Row,
  H as _Select,
  B as _Slider,
  v as _Text,
  h as _View,
  m as _currentBuilder,
  d as diffApply,
  W as em,
  j as percent,
  R as px,
  F as rem,
  $ as vh,
  O as vw
};
