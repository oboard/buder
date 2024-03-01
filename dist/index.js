function N(e, t) {
  console.log(e);
  function s(n) {
    n._children && n._children.forEach(s);
    const i = n._type;
    if (i) {
      const u = e[i];
      u && n.class(u);
    }
  }
  return s(t), t;
}
var m = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(m || {});
function B(e) {
  return {
    value: e,
    unit: "px"
    /* px */
  };
}
function H(e) {
  return {
    value: e,
    unit: "em"
    /* em */
  };
}
function M(e) {
  return {
    value: e,
    unit: "rem"
    /* rem */
  };
}
function S(e) {
  return {
    value: e,
    unit: "vw"
    /* vw */
  };
}
function P(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function R(e) {
  return {
    value: e,
    unit: "%"
    /* percent */
  };
}
class d {
  value;
  builder;
  callbacks = [];
  constructor(t, s) {
    this.value = t, this.builder = s;
  }
  // 重载“.”
  get(t) {
    const s = x(this.value[t]);
    return s.subscribe(() => {
      this.value[t] = s.value;
    }), s;
  }
  subscribe(t) {
    this.callbacks.push(t);
  }
  set(t) {
    this.value = t, this.callbacks.forEach((s) => {
      s(t);
    });
  }
}
function x(e) {
  const t = p;
  let s = 0;
  return t && (s = t._statePointer, t._statePointer++, t._states.has(s) ? e = t._states.get(s) : t._states.set(s, e)), new Proxy(new d(e, t), {
    set(n, i, u, c) {
      return n.builder?._states.set(s, u), i == "value" ? n.set(u) : Reflect.set(n, i, u, c), n.builder?.build(), !0;
    }
  });
}
class a {
  constructor() {
  }
  _children;
  _style = {};
  _events = {};
  _id;
  _classes = [];
  _tag;
  _attribute = {};
  _text;
  _type;
  mount(t) {
    return document.querySelector(t)?.replaceWith(this.render()), this;
  }
  render(t) {
    t || (t = document.createElement(this._tag ?? "div"));
    for (const s in this._style) {
      const n = this._style[s];
      n instanceof Object ? n.value.subscribe ? n.value.subscribe((i) => {
        t && (t.style[s] = `${i}${n.unit}`);
      }) : n.subscribe ? n.subscribe((i) => {
        t && (t.style[s] = i);
      }) : t.style[s] = `${n.value}${n.unit}` : t.style[s] = n;
    }
    for (const s in this._events)
      for (const n of this._events[s])
        t.addEventListener(s, n);
    this._id && (t.id = this._id), this._classes.forEach((s) => {
      typeof s == "string" ? s && t && t.classList.add(s) : s instanceof Array ? t.classList.add(...s) : s instanceof d && s.subscribe((n) => {
        if (t) {
          t.classList.add(
            ...n.filter((i) => t && !t.classList.contains(i))
          );
          for (const i of t.classList)
            n.includes(i) || t.classList.remove(i);
        }
      });
    });
    for (const s in this._attribute)
      typeof this._attribute[s] == "string" ? t.setAttribute(s, this._attribute[s]) : (t.setAttribute(s, this._attribute[s].value), this._attribute[s].subscribe((n) => {
        t && t.setAttribute(s, n);
      }));
    return this._text && (typeof this._text == "string" ? t.textContent = this._text : (t.textContent = this._text.value, this._text.subscribe((s) => {
      t && (t.textContent = s);
    }))), t;
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
  attribute(t) {
    return this._attribute = Object.assign(this._attribute, t), this;
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
      const { top: s, left: n, right: i, bottom: u, vertical: c, horizontal: r } = t;
      return c || r ? this.style({
        paddingTop: c,
        paddingBottom: c,
        paddingLeft: r,
        paddingRight: r
      }) : this.style({
        paddingTop: s,
        paddingBottom: u,
        paddingLeft: n,
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
    for (const s in t)
      this._events[s] || (this._events[s] = []), this._events[s].push(t[s]);
    return this;
  }
}
let p = null;
class v extends a {
  // _key: number;
  _func;
  _instanceElement;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(t, s) {
    super(), p = this, this._func = t, s && s.forEach((n) => {
      n.subscribe(() => {
        this.build();
      });
    });
  }
  subscribe(t) {
    this._states.forEach((s, n) => {
      const i = this._states.get(n);
      i instanceof d && (i.builder = this, i.subscribe(t));
    });
  }
  render() {
    const t = super.render(this._func(this.build.bind(this)).render());
    return this._instanceElement ? f(this._instanceElement, t) : this._instanceElement = t, this._statePointer = 0, t;
  }
  build() {
    this.render();
  }
}
function f(e, t) {
  if (!e || !t || e.isEqualNode(t))
    return;
  e.tagName !== t.tagName && e.replaceWith(t);
  const s = e.attributes, n = t.attributes;
  if (s && n) {
    for (let r = 0; r < s.length; r++) {
      const o = s[r], h = n.getNamedItem(o.name);
      h ? h.value !== o.value && e.setAttribute(o.name, h.value) : e.removeAttribute(o.name);
    }
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      s.getNamedItem(o.name) || e.setAttribute(o.name, o.value);
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
      f(i[r], u[r]);
    }
  return e;
}
function W(e, t) {
  return new v(e, t);
}
class l extends a {
  constructor(t = []) {
    super(), typeof t == "string" ? this.text(t) : this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children?.forEach((s) => {
      t?.appendChild(s.render());
    }), super.render(t);
  }
}
function F(e) {
  return new l(e);
}
class y extends a {
  _type = "text";
  constructor(t) {
    super(), this._text = t;
  }
  render() {
    const t = document.createElement("span");
    return super.render(t);
  }
  get center() {
    return this._style.verticalAlign = "middle", this._style.textAlign = "center", this;
  }
}
function $(e) {
  return new y(e);
}
class g extends l {
  _type = "button";
  constructor(t = []) {
    super(t);
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function O(e) {
  return new g(e);
}
class _ extends l {
  constructor(t = []) {
    super(t), this.style({ display: "flex" });
  }
  get center() {
    return this._style.alignItems = "center", this._style.justifyContent = "center", this;
  }
}
function j(e = []) {
  return new _(e);
}
class E extends _ {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function q(e) {
  return new E(e);
}
class w extends _ {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function D(e) {
  return new w(e);
}
class A extends l {
  _children;
  constructor(t = []) {
    super(), this._children = t, this._children.forEach((s) => {
      s._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function z(e) {
  return new A(e);
}
class b extends a {
  _type = "input";
  _tag = "input";
  _model;
  constructor(t) {
    super(), t && (this._model = t, this.attribute({ value: t.value }), this.event({
      input: (s) => {
        t.value = s.target.value;
      }
    }));
  }
  render() {
    const t = document.createElement(this._tag);
    return (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement || t instanceof HTMLButtonElement) && (this._model?.subscribe((s) => {
      t && (t.value = s);
    }), t.value = this._model?.value ?? ""), super.render(t);
  }
}
function G(e) {
  return new b(e);
}
class C extends b {
  _type = "textarea";
  _tag = "textarea";
  constructor(t) {
    super(t);
  }
  render() {
    return super.render();
  }
}
function J(e) {
  return new C(e);
}
class L extends a {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function K(e) {
  return new L(e);
}
class T extends a {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function Q(e) {
  return new T(e);
}
class I extends a {
  _type = "image";
  _src;
  constructor(t) {
    super(), this.attribute({ src: t });
  }
  render() {
    const t = document.createElement("img");
    return super.render(t);
  }
}
function V(e) {
  return new I(e);
}
class k extends l {
  _state;
  _builder;
  _instanceElement;
  _parent;
  constructor(t, s, n) {
    super(), this._state = t, this._builder = s, this._parent = n, this._state.subscribe(() => {
      this.build();
    });
  }
  build() {
    this._instanceElement && f(this._instanceElement, this.render());
  }
  render() {
    let t = 0;
    this._children = [];
    for (const n of this._state.value) {
      const i = this._builder(n, t++);
      this._children.push(i);
    }
    const s = super.render(this._parent?.render());
    return this._instanceElement ? s : this._instanceElement = s;
  }
}
function X(e, t, s) {
  return new k(e, t, s);
}
export {
  d as BuderState,
  m as BuderUnits,
  a as BuderWidget,
  W as Builder,
  O as Button,
  q as Col,
  j as Flex,
  X as ForEach,
  K as H,
  V as Image,
  G as Input,
  D as Row,
  z as Stack,
  x as State,
  $ as Text,
  J as TextArea,
  N as Theme,
  F as View,
  Q as W,
  v as _Builder,
  _ as _Flex,
  k as _ForEach,
  b as _Input,
  l as _View,
  p as _currentBuilder,
  f as diffApply,
  H as em,
  R as percent,
  B as px,
  M as rem,
  P as vh,
  S as vw
};
