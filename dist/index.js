function I(e, t) {
  function s(n) {
    n._children && n._children.forEach(s);
    const r = n._type;
    if (r) {
      const u = e[r];
      u && n.class(u);
    }
  }
  return s(t), t;
}
var v = /* @__PURE__ */ ((e) => (e.px = "px", e.em = "em", e.rem = "rem", e.vw = "vw", e.vh = "vh", e.percent = "%", e))(v || {});
function M(e) {
  return {
    value: e,
    unit: "px"
    /* px */
  };
}
function R(e) {
  return {
    value: e,
    unit: "em"
    /* em */
  };
}
function W(e) {
  return {
    value: e,
    unit: "rem"
    /* rem */
  };
}
function F(e) {
  return {
    value: e,
    unit: "vw"
    /* vw */
  };
}
function O(e) {
  return {
    value: e,
    unit: "vh"
    /* vh */
  };
}
function $(e) {
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
    set(n, r, u, o) {
      return n.builder?._states.set(s, u), r == "value" ? n.set(u) : Reflect.set(n, r, u, o), n.builder?.build(), !0;
    }
  });
}
class c {
  constructor() {
  }
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
    for (const s in this._style) {
      const n = this._style[s];
      n instanceof Object ? n.value.subscribe ? n.value.subscribe((r) => {
        t && (t.style[s] = `${r}${n.unit}`);
      }) : n.subscribe ? n.subscribe((r) => {
        t && (t.style[s] = r);
      }) : t.style[s] = `${n.value}${n.unit}` : t.style[s] = n;
    }
    for (const s in this._events)
      for (const n of this._events[s])
        t.addEventListener(s, n);
    this._id && (t.id = this._id), this._classes.forEach((s) => {
      typeof s == "string" ? s && t && t.classList.add(s) : s instanceof Array ? t.classList.add(...s) : s instanceof d && s.subscribe((n) => {
        if (t) {
          t.classList.add(
            ...n.filter((r) => t && !t.classList.contains(r))
          );
          for (const r of t.classList)
            n.includes(r) || t.classList.remove(r);
        }
      });
    });
    for (const s in this._attr)
      typeof this._attr[s] == "string" ? t.setAttribute(s, this._attr[s]) : (t.setAttribute(s, this._attr[s].value), this._attr[s].subscribe((n) => {
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
      const { top: s, left: n, right: r, bottom: u, vertical: o, horizontal: i } = t;
      return o || i ? this.style({
        paddingTop: o,
        paddingBottom: o,
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
    for (const s in t)
      this._events[s] || (this._events[s] = []), this._events[s].push(t[s]);
    return this;
  }
}
let p = null;
class y extends c {
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
      const r = this._states.get(n);
      r instanceof d && (r.builder = this, r.subscribe(t));
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
    for (let i = 0; i < s.length; i++) {
      const a = s[i], h = n.getNamedItem(a.name);
      h ? h.value !== a.value && e.setAttribute(a.name, h.value) : e.removeAttribute(a.name);
    }
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      s.getNamedItem(a.name) || e.setAttribute(a.name, a.value);
    }
  }
  const r = e.childNodes, u = t.childNodes, o = Math.max(r.length, u.length);
  if (o == 0)
    e.textContent !== t.textContent && (e.textContent = t.textContent);
  else
    for (let i = 0; i < o; i++) {
      if (i >= r.length) {
        e.appendChild(u[i]);
        continue;
      }
      if (i >= u.length) {
        e.removeChild(r[i]);
        continue;
      }
      _(r[i], u[i]);
    }
  return e;
}
function j(e, t) {
  return new y(e, t);
}
class l extends c {
  constructor(t) {
    super(), t && typeof t[0] == "string" ? this.text(t[0]) : this._children = t;
  }
  render(t) {
    return t || (t = document.createElement("div")), this._children?.forEach((s) => {
      t?.appendChild(s.render());
    }), super.render(t);
  }
}
function q(...e) {
  return new l(e);
}
class m extends c {
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
  return new m(e);
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
function z(...e) {
  return new g(e);
}
class f extends l {
  constructor(t) {
    super(t), this.style({ display: "flex" });
  }
  get center() {
    return this._style.alignItems = "center", this._style.justifyContent = "center", this;
  }
}
function G(...e) {
  return new f(e);
}
class E extends f {
  constructor(t) {
    super(t), this.style({ flexDirection: "column" });
  }
}
function J(...e) {
  return new E(e);
}
class w extends f {
  constructor(t) {
    super(t), this.style({ flexDirection: "row" });
  }
}
function K(...e) {
  return new w(e);
}
class C extends l {
  constructor(t = []) {
    super(t), this._children?.forEach((s) => {
      s.style({ position: "absolute" });
    }), this.style({ position: "relative" });
  }
}
function Q(e) {
  return new C(e);
}
class b extends c {
  _type = "input";
  _tag = "input";
  _model;
  constructor(t) {
    super(), t && (this._model = t, this.attr({ value: t.value }), this.event({
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
function V(e) {
  return new b(e);
}
class A extends b {
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
  return new A(e);
}
class S extends c {
  constructor(t) {
    super(), this.style({ height: t });
  }
}
function Y(e) {
  return new S(e);
}
class k extends c {
  constructor(t) {
    super(), this.style({ width: t });
  }
}
function Z(e) {
  return new k(e);
}
class L extends c {
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
  return new L(e);
}
class T extends l {
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
      const r = this._builder(n, t++);
      this._children.push(r);
    }
    const s = super.render(this._parent?.render());
    return this._instanceElement ? s : this._instanceElement = s;
  }
}
function tt(e, t, s) {
  return new T(e, t, s);
}
class N extends m {
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
class P extends c {
  _tag = "input";
  _model;
  _type = "checkbox";
  constructor(t) {
    super(), t && (this._model = t, this.attr({
      type: "checkbox",
      checked: t.value ? "true" : "false"
    }), this.event({
      input: (s) => {
        t.value = !!s.target.checked;
      }
    }));
  }
  render() {
    const t = super.render();
    return this._model?.subscribe((s) => {
      t && (t.checked = s);
    }), t.checked = this._model?.value ?? !1, t;
  }
}
function st(e) {
  return new P(e);
}
class B extends c {
  _options;
  _type = "slider";
  _tag = "input";
  _model;
  constructor(t, s) {
    super(), t && (this._model = t, this._options = s, this.attr({ value: t.value.toString() }), this.event({
      input: (n) => {
        t.value = Number(n.target.value);
      }
    }));
  }
  render() {
    const t = document.createElement(this._tag);
    return t.type = "range", t.min = this._options?.min.toString() || "0", t.max = this._options?.max.toString() || "100", t.step = this._options?.step.toString() || "1", this._model?.subscribe((s) => {
      t && (t.value = s.toString());
    }), t.value = (this._model?.value ?? "").toString(), super.render(t);
  }
}
const nt = (e, t) => new B(e, t);
class H extends l {
  _type = "select";
  _model;
  _options;
  constructor(t) {
    super(), this._options = t;
  }
  bind(t) {
    return this._model = t, this.event({
      change: (s) => {
        t.set(s.target.value ?? "");
      }
    }), this;
  }
  render() {
    const t = document.createElement("select");
    return this._options && Object.entries(this._options).forEach(([s, n]) => {
      const r = document.createElement("option");
      r.value = s, r.text = n, t.appendChild(r);
    }), this._model?.subscribe((s) => {
      t.value = s;
    }), super.render(t);
  }
}
function rt(e) {
  return new H(e);
}
export {
  d as BuderState,
  v as BuderUnits,
  c as BuderWidget,
  j as Builder,
  z as Button,
  st as Checkbox,
  J as Column,
  G as Flex,
  tt as ForEach,
  Y as H,
  V as Input,
  et as Label,
  U as Picture,
  K as Row,
  rt as Select,
  nt as Slider,
  Q as Stack,
  x as State,
  D as Text,
  X as TextArea,
  I as Theme,
  q as View,
  Z as W,
  y as _Builder,
  g as _Button,
  P as _Checkbox,
  E as _Column,
  f as _Flex,
  T as _ForEach,
  b as _Input,
  N as _Label,
  w as _Row,
  H as _Select,
  B as _Slider,
  m as _Text,
  l as _View,
  p as _currentBuilder,
  _ as diffApply,
  R as em,
  $ as percent,
  M as px,
  W as rem,
  O as vh,
  F as vw
};
