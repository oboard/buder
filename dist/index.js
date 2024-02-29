function k(e, t) {
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
var b = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(b || {});
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
class d {
  value;
  builder;
  callbacks = [];
  constructor(t, s) {
    this.value = t, this.builder = s;
  }
  // 重载“.”
  get(t) {
    const s = m(this.value[t]);
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
function m(e) {
  const t = p;
  let s = 0;
  return t && (s = t._statePointer, t._statePointer++, t._states.has(s) ? e = t._states.get(s) : t._states.set(s, e)), new Proxy(new d(e, t), {
    set(n, i, u, c) {
      return n.builder?._states.set(s, u), i == "value" ? n.set(u) : Reflect.set(n, i, u, c), n.builder?.build(), !0;
    }
  });
}
class o {
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
      t.addEventListener(s, this._events[s]);
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
    return this._events = Object.assign(this._events, t), this;
  }
}
let p = null;
class v extends o {
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
    return this._instanceElement ? _(this._instanceElement, t) : this._instanceElement = t, this._statePointer = 0, t;
  }
  build() {
    this.render();
  }
}
function _(e, t) {
  if (!e || !t || e.isEqualNode(t))
    return;
  e.tagName !== t.tagName && e.replaceWith(t);
  const s = e.attributes, n = t.attributes;
  if (s && n) {
    for (let r = 0; r < s.length; r++) {
      const a = s[r], h = n.getNamedItem(a.name);
      h ? h.value !== a.value && e.setAttribute(a.name, h.value) : e.removeAttribute(a.name);
    }
    for (let r = 0; r < n.length; r++) {
      const a = n[r];
      s.getNamedItem(a.name) || e.setAttribute(a.name, a.value);
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
      _(i[r], u[r]);
    }
  return e;
}
function O(e, t) {
  return new v(e, t);
}
class l extends o {
  constructor(t = []) {
    super(), typeof t == "string" ? this.text(t) : this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children?.forEach((s) => {
      t?.appendChild(s.render());
    }), super.render(t);
  }
}
function $(e) {
  return new l(e);
}
class x extends o {
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
function j(e) {
  return new x(e);
}
class y extends l {
  _type = "button";
  constructor(t = []) {
    super(t);
  }
  render() {
    const t = document.createElement("button");
    return super.render(t);
  }
}
function q(e) {
  return new y(e);
}
class f extends l {
  constructor(t = []) {
    super(t), this.style({ display: "flex" });
  }
  get center() {
    return this._style.alignItems = "center", this._style.justifyContent = "center", this;
  }
}
function D(e = []) {
  return new f(e);
}
class g extends f {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function H(e) {
  return new g(e);
}
class E extends f {
  constructor(t = []) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function M(e) {
  return new E(e);
}
class w extends l {
  _children;
  constructor(t = []) {
    super(), this._children = t, this._children.forEach((s) => {
      s._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function z(e) {
  return new w(e);
}
class A extends o {
  _type = "textarea";
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
function G(e) {
  return new A(e);
}
class C extends o {
  _type = "input";
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
function J(e) {
  return new C(e);
}
class L extends o {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function K(e) {
  return new L(e);
}
class T extends o {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function Q(e) {
  return new T(e);
}
class I extends o {
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
class N extends l {
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
    this._instanceElement && _(this._instanceElement, this.render());
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
  return new N(e, t, s);
}
export {
  d as BuderState,
  b as BuderUnits,
  o as BuderWidget,
  O as Builder,
  q as Button,
  H as Col,
  D as Flex,
  X as ForEach,
  K as H,
  V as Image,
  J as Input,
  M as Row,
  z as Stack,
  m as State,
  j as Text,
  G as TextArea,
  k as Theme,
  $ as View,
  Q as W,
  v as _Builder,
  f as _Flex,
  N as _ForEach,
  l as _View,
  p as _currentBuilder,
  _ as diffApply,
  P as em,
  F as percent,
  B as px,
  R as rem,
  W as vh,
  S as vw
};
