var p = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(p || {});
function B(e) {
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
function R(e) {
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
function W(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function F(e) {
  return {
    value: e,
    unit: "%"
    /* percent */
  };
}
class a {
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
    for (const s in this._style) {
      const n = this._style[s];
      n instanceof Object ? n.value.subscribe ? n.value.subscribe((r) => {
        t && (t.style[s] = `${r}${n.unit}`);
      }) : n.subscribe ? n.subscribe((r) => {
        t && (t.style[s] = r);
      }) : t.style[s] = `${n.value}${n.unit}` : t.style[s] = n;
    }
    for (const s in this._events)
      t.addEventListener(s, this._events[s]);
    this._id && (t.id = this._id), this._classes.length > 0 && t.classList.add(...this._classes);
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
      const { top: s, left: n, right: r, bottom: u, vertical: c, horizontal: i } = t;
      return c || i ? this.style({
        paddingTop: c,
        paddingBottom: c,
        paddingLeft: i,
        paddingRight: i
      }) : this.style({
        paddingTop: s,
        paddingBottom: u,
        paddingLeft: n,
        paddingRight: r
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
    return this._events = Object.assign(this._events, t), this;
  }
}
class o extends a {
  _children;
  constructor(t = []) {
    super(), typeof t == "string" ? this.text(t) : this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children?.forEach((s) => {
      t?.appendChild(s.render());
    }), super.render(t);
  }
}
function L(e) {
  return new o(e);
}
class m extends a {
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
function O(e) {
  return new m(e);
}
let f = null;
class v extends a {
  // _key: number;
  _func;
  _instanceElement;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(t, s) {
    super(), f = this, this._func = t, s && s.forEach((n) => {
      n.subscribe(() => {
        this.build();
      });
    });
  }
  subscribe(t) {
    this._states.forEach((s, n) => {
      const r = this._states.get(n);
      r instanceof b && (r.builder = this, r.subscribe(t));
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
  const s = e.attributes, n = t.attributes;
  if (s && n) {
    for (let i = 0; i < s.length; i++) {
      const l = s[i], h = n.getNamedItem(l.name);
      h ? h.value !== l.value && e.setAttribute(l.name, h.value) : e.removeAttribute(l.name);
    }
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      s.getNamedItem(l.name) || e.setAttribute(l.name, l.value);
    }
  }
  const r = e.childNodes, u = t.childNodes, c = Math.max(r.length, u.length);
  if (c == 0)
    e.textContent !== t.textContent && (e.textContent = t.textContent);
  else
    for (let i = 0; i < c; i++) {
      if (i >= r.length) {
        e.appendChild(u[i]);
        continue;
      }
      if (i >= u.length) {
        e.removeChild(r[i]);
        continue;
      }
      d(r[i], u[i]);
    }
  return e;
}
function $(e, t) {
  return new v(e, t);
}
class b {
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
  const t = f;
  let s = 0;
  return t && (s = t._statePointer, t._statePointer++, t._states.has(s) ? e = t._states.get(s) : t._states.set(s, e)), new Proxy(new b(e, t), {
    set(n, r, u, c) {
      return n.builder?._states.set(s, u), r == "value" ? n.set(u) : Reflect.set(n, r, u, c), n.builder?.build(), !0;
    }
  });
}
class g extends o {
  constructor(t = []) {
    super(t);
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function j(e) {
  return new g(e);
}
class _ extends o {
  constructor(t = []) {
    super(t), this.style({ display: "flex" });
  }
  get center() {
    return this._style.alignItems = "center", this._style.justifyContent = "center", this;
  }
}
function q(e = []) {
  return new _(e);
}
class y extends _ {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function D(e) {
  return new y(e);
}
class w extends _ {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function H(e) {
  return new w(e);
}
class E extends o {
  _children;
  constructor(t = []) {
    super(), this._children = t, this._children.forEach((s) => {
      s._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function M(e) {
  return new E(e);
}
class C extends a {
  _model;
  constructor(t) {
    super(), this._model = t, t && this.event({
      input: (s) => {
        t.value = s.target.value;
      }
    });
  }
  render() {
    const t = document.createElement("textarea");
    return t.value = this._model?.value || "", this._model?.subscribe((s) => {
      t.value = s;
    }), super.render(t);
  }
}
function z(e) {
  return new C(e);
}
class A extends a {
  _model;
  constructor(t) {
    super(), t && (this._model = t, this.attribute({ value: t.value }), this.event({
      input: (s) => {
        t.value = s.target.value;
      }
    }));
  }
  render() {
    const t = document.createElement("input");
    return this._model?.subscribe((s) => {
      t.value = s;
    }), super.render(t);
  }
}
function V(e) {
  return new A(e);
}
class I extends a {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function G(e) {
  return new I(e);
}
class N extends a {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function J(e) {
  return new N(e);
}
class k extends a {
  _src;
  constructor(t) {
    super(), this.attribute({ src: t });
  }
  render() {
    const t = document.createElement("img");
    return super.render(t);
  }
}
function K(e) {
  return new k(e);
}
class T extends o {
  _state;
  _builder;
  _instanceElement;
  _parent;
  constructor(t, s, n) {
    super(), this._state = t, this._builder = s, this._parent = n, this._state.subscribe(() => {
      console.log("subscribed"), this.build();
    });
  }
  build() {
    this._instanceElement && (console.log(this._instanceElement, this.render()), d(this._instanceElement, this.render()));
  }
  render() {
    let t = 0;
    this._children = [];
    for (const n of this._state.value) {
      const r = this._builder(n, t++);
      this._children.push(r);
    }
    const s = super.render(this._parent?.render());
    return this._instanceElement ? s : this._instanceElement = s;
  }
}
function Q(e, t, s) {
  return new T(e, t, s);
}
export {
  b as BuderState,
  p as BuderUnits,
  a as BuderWidget,
  $ as Builder,
  j as Button,
  D as Col,
  q as Flex,
  Q as ForEach,
  G as H,
  K as Image,
  V as Input,
  H as Row,
  M as Stack,
  x as State,
  O as Text,
  z as TextArea,
  L as View,
  J as W,
  v as _Builder,
  _ as _Flex,
  T as _ForEach,
  o as _View,
  f as _currentBuilder,
  d as diffApply,
  P as em,
  F as percent,
  B as px,
  R as rem,
  W as vh,
  S as vw
};
