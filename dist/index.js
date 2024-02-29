var E = /* @__PURE__ */ ((t) => (t.px = "px", t.em = "em", t.rem = "rem", t.vw = "vw", t.vh = "vh", t.percent = "%", t))(E || {});
function $(t) {
  return {
    value: t,
    unit: "px"
    /* px */
  };
}
function j(t) {
  return {
    value: t,
    unit: "em"
    /* em */
  };
}
function D(t) {
  return {
    value: t,
    unit: "rem"
    /* rem */
  };
}
function H(t) {
  return {
    value: t,
    unit: "vw"
    /* vw */
  };
}
function M(t) {
  return {
    value: t,
    unit: "vh"
    /* vh */
  };
}
function z(t) {
  return {
    value: t,
    unit: "%"
    /* percent */
  };
}
let w = null;
class k extends f {
  // _key: number;
  _func;
  _instanceElement;
  _states = /* @__PURE__ */ new Map();
  _statePointer = 0;
  constructor(s, n) {
    super(), w = this, this._func = s, n && n.forEach((i) => {
      i.subscribe(() => {
        this.build();
      });
    });
  }
  subscribe(s) {
    this._states.forEach((n, i) => {
      const a = this._states.get(i);
      a instanceof x && (a.builder = this, a.subscribe(s));
    });
  }
  render() {
    const s = super.render(this._func(this.build.bind(this)).render());
    return this._instanceElement ? v(this._instanceElement, s) : this._instanceElement = s, this._statePointer = 0, s;
  }
  build() {
    this.render();
  }
}
function v(t, s) {
  if (!t || !s || t.isEqualNode(s))
    return;
  t.tagName !== s.tagName && t.replaceWith(s);
  const n = t.attributes, i = s.attributes;
  if (n && i) {
    for (let o = 0; o < n.length; o++) {
      const r = n[o], u = i.getNamedItem(r.name);
      u ? u.value !== r.value && t.setAttribute(r.name, u.value) : t.removeAttribute(r.name);
    }
    for (let o = 0; o < i.length; o++) {
      const r = i[o];
      n.getNamedItem(r.name) || t.setAttribute(r.name, r.value);
    }
  }
  const a = t.childNodes, c = s.childNodes, l = Math.max(a.length, c.length);
  if (l == 0)
    t.textContent !== s.textContent && (t.textContent = s.textContent);
  else
    for (let o = 0; o < l; o++) {
      if (o >= a.length) {
        t.appendChild(c[o]);
        continue;
      }
      if (o >= c.length) {
        t.removeChild(a[o]);
        continue;
      }
      v(a[o], c[o]);
    }
  return t;
}
function G(t, s) {
  return new k(t, s);
}
class x {
  value;
  builder;
  callbacks = [];
  constructor(s, n) {
    this.value = s, this.builder = n;
  }
  // 重载“.”
  get(s) {
    const n = A(this.value[s]);
    return n.subscribe(() => {
      this.value[s] = n.value;
    }), n;
  }
  subscribe(s) {
    this.callbacks.push(s);
  }
  set(s) {
    this.value = s, this.callbacks.forEach((n) => {
      n(s);
    });
  }
}
function A(t) {
  const s = w;
  let n = 0;
  return s && (n = s._statePointer, s._statePointer++, s._states.has(n) ? t = s._states.get(n) : s._states.set(n, t)), new Proxy(new x(t, s), {
    set(i, a, c, l) {
      return i.builder?._states.set(n, c), a == "value" ? i.set(c) : Reflect.set(i, a, c, l), i.builder?.build(), !0;
    }
  });
}
class f {
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
  mount(s) {
    return document.querySelector(s)?.replaceWith(this.render()), this;
  }
  render(s) {
    s || (s = document.createElement(this._tag ?? "div"));
    for (const n in this._style) {
      const i = this._style[n];
      i instanceof Object ? i.value.subscribe ? i.value.subscribe((a) => {
        s && (s.style[n] = `${a}${i.unit}`);
      }) : i.subscribe ? i.subscribe((a) => {
        s && (s.style[n] = a);
      }) : s.style[n] = `${i.value}${i.unit}` : s.style[n] = i;
    }
    for (const n in this._events)
      s.addEventListener(n, this._events[n]);
    this._id && (s.id = this._id), typeof this._classes == "string" ? s.classList.add(this._classes) : this._classes instanceof Array ? s.classList.add(...this._classes) : this._classes instanceof x && this._classes.subscribe((n) => {
      if (s) {
        s.classList.add(
          ...n.filter((i) => s && !s.classList.contains(i))
        );
        for (const i of s.classList)
          n.includes(i) || s.classList.remove(i);
      }
    });
    for (const n in this._attribute)
      typeof this._attribute[n] == "string" ? s.setAttribute(n, this._attribute[n]) : (s.setAttribute(n, this._attribute[n].value), this._attribute[n].subscribe((i) => {
        s && s.setAttribute(n, i);
      }));
    return this._text && (typeof this._text == "string" ? s.textContent = this._text : (s.textContent = this._text.value, this._text.subscribe((n) => {
      s && (s.textContent = n);
    }))), s;
  }
  id(s) {
    return this._id = s, this;
  }
  class(s) {
    return this._classes ??= [], this._classes.push(s), this;
  }
  tag(s) {
    return this._tag = s, this;
  }
  attribute(s) {
    return this._attribute = Object.assign(this._attribute, s), this;
  }
  style(s) {
    return this._style = Object.assign(this._style, s), this;
  }
  text(s) {
    return this._text = s, this;
  }
  type(s) {
    return this._type = s, this;
  }
  padding(s) {
    if (s.unit)
      return this.style({ padding: s });
    {
      const { top: n, left: i, right: a, bottom: c, vertical: l, horizontal: o } = s;
      return l || o ? this.style({
        paddingTop: l,
        paddingBottom: l,
        paddingLeft: o,
        paddingRight: o
      }) : this.style({
        paddingTop: n,
        paddingBottom: c,
        paddingLeft: i,
        paddingRight: a
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
  event(s) {
    return this._events = Object.assign(this._events, s), this;
  }
}
class _ extends f {
  constructor(s = []) {
    super(), typeof s == "string" ? this.text(s) : this._children = s;
  }
  render(s) {
    return s || (s = document.createElement("div")), this._children?.forEach((n) => {
      s?.appendChild(n.render());
    }), super.render(s);
  }
}
function J(t) {
  return new _(t);
}
var b = /* @__PURE__ */ ((t) => (t[t.input = 0] = "input", t[t.button = 1] = "button", t[t.label = 2] = "label", t[t.container = 3] = "container", t[t.form = 4] = "form", t[t.select = 5] = "select", t[t.textarea = 6] = "textarea", t[t.checkbox = 7] = "checkbox", t[t.radio = 8] = "radio", t[t.header = 9] = "header", t[t.footer = 10] = "footer", t[t.section = 11] = "section", t[t.article = 12] = "article", t[t.nav = 13] = "nav", t[t.aside = 14] = "aside", t[t.main = 15] = "main", t[t.figure = 16] = "figure", t[t.figcaption = 17] = "figcaption", t[t.table = 18] = "table", t[t.caption = 19] = "caption", t[t.tbody = 20] = "tbody", t[t.thead = 21] = "thead", t[t.tfoot = 22] = "tfoot", t[t.tr = 23] = "tr", t[t.th = 24] = "th", t[t.td = 25] = "td", t[t.video = 26] = "video", t[t.audio = 27] = "audio", t[t.iframe = 28] = "iframe", t[t.canvas = 29] = "canvas", t[t.svg = 30] = "svg", t[t.math = 31] = "math", t[t.p = 32] = "p", t[t.h1 = 33] = "h1", t[t.h2 = 34] = "h2", t[t.h3 = 35] = "h3", t[t.h4 = 36] = "h4", t[t.h5 = 37] = "h5", t[t.h6 = 38] = "h6", t[t.ul = 39] = "ul", t[t.ol = 40] = "ol", t[t.li = 41] = "li", t[t.dl = 42] = "dl", t[t.dt = 43] = "dt", t[t.dd = 44] = "dd", t[t.a = 45] = "a", t[t.em = 46] = "em", t[t.strong = 47] = "strong", t[t.small = 48] = "small", t[t.s = 49] = "s", t[t.cite = 50] = "cite", t[t.q = 51] = "q", t[t.dfn = 52] = "dfn", t[t.abbr = 53] = "abbr", t[t.time = 54] = "time", t[t.code = 55] = "code", t[t.var = 56] = "var", t[t.samp = 57] = "samp", t[t.kbd = 58] = "kbd", t[t.sub = 59] = "sub", t[t.sup = 60] = "sup", t[t.i = 61] = "i", t[t.b = 62] = "b", t[t.u = 63] = "u", t[t.mark = 64] = "mark", t[t.ruby = 65] = "ruby", t[t.rt = 66] = "rt", t[t.rp = 67] = "rp", t[t.bdi = 68] = "bdi", t[t.bdo = 69] = "bdo", t[t.span = 70] = "span", t[t.br = 71] = "br", t[t.wbr = 72] = "wbr", t[t.ins = 73] = "ins", t[t.del = 74] = "del", t[t.address = 75] = "address", t[t.fieldset = 76] = "fieldset", t[t.text = 77] = "text", t[t.password = 78] = "password", t[t.datetime = 79] = "datetime", t[t.datetimeLocal = 80] = "datetimeLocal", t[t.date = 81] = "date", t[t.month = 82] = "month", t[t.week = 83] = "week", t[t.number = 84] = "number", t[t.email = 85] = "email", t[t.submit = 86] = "submit", t[t.reset = 87] = "reset", t[t.primaryButton = 88] = "primaryButton", t[t.secondaryButton = 89] = "secondaryButton", t[t.successButton = 90] = "successButton", t[t.dangerButton = 91] = "dangerButton", t[t.warningButton = 92] = "warningButton", t[t.infoButton = 93] = "infoButton", t[t.lightButton = 94] = "lightButton", t[t.darkButton = 95] = "darkButton", t[t.linkButton = 96] = "linkButton", t[t.blockButton = 97] = "blockButton", t[t.largeButton = 98] = "largeButton", t[t.smallButton = 99] = "smallButton", t[t.outlineButton = 100] = "outlineButton", t[t.disabledButton = 101] = "disabledButton", t[t.activeButton = 102] = "activeButton", t[t.dropdownButton = 103] = "dropdownButton", t[t.splitButton = 104] = "splitButton", t[t.toggleButton = 105] = "toggleButton", t[t.checkboxButton = 106] = "checkboxButton", t[t.radioButton = 107] = "radioButton", t[t.listitem = 108] = "listitem", t[t.list = 109] = "list", t[t.link = 110] = "link", t[t.image = 111] = "image", t))(b || {});
function K(t, s) {
  function n(i) {
    i._children && i._children.forEach(n);
    const a = i._type;
    if (a) {
      const c = t[a];
      c && i.class(c);
    }
  }
  n(s);
}
class C extends f {
  _type = b.text;
  constructor(s) {
    super(), this._text = s;
  }
  render() {
    const s = document.createElement("span");
    return super.render(s);
  }
  get center() {
    return this._style.verticalAlign = "middle", this._style.textAlign = "center", this;
  }
}
function Q(t) {
  return new C(t);
}
class L extends _ {
  constructor(s = []) {
    super(s);
  }
  render() {
    const s = document.createElement("button");
    return super.render(s);
  }
}
function V(t) {
  return new L(t);
}
class g extends _ {
  constructor(s = []) {
    super(s), this.style({ display: "flex" });
  }
  get center() {
    return this._style.alignItems = "center", this._style.justifyContent = "center", this;
  }
}
function X(t = []) {
  return new g(t);
}
class I extends g {
  constructor(s = []) {
    super(s), this.style({ flexDirection: "column" });
  }
}
function Y(t) {
  return new I(t);
}
class N extends g {
  constructor(s = []) {
    super(s), this.style({ flexDirection: "row" });
  }
}
function Z(t) {
  return new N(t);
}
class P extends _ {
  _children;
  constructor(s = []) {
    super(), this._children = s, this._children.forEach((n) => {
      n._style.position = "absolute";
    }), this.style({ position: "relative" });
  }
}
function U(t) {
  return new P(t);
}
class R extends f {
  _type = b.textarea;
  _model;
  constructor(s) {
    super(), this._model = s, s && this.event({
      input: (n) => {
        s.value = n.target.value;
      }
    });
  }
  render() {
    const s = document.createElement("textarea");
    return s.value = this._model?.value || "", this._model?.subscribe((n) => {
      s.value = n;
    }), super.render(s);
  }
}
function d(t) {
  return new R(t);
}
class S extends f {
  _type = b.input;
  _model;
  constructor(s) {
    super(), s && (this._model = s, this.attribute({ value: s.value }), this.event({
      input: (n) => {
        s.value = n.target.value;
      }
    }));
  }
  render() {
    const s = document.createElement("input");
    return this._model?.subscribe((n) => {
      s.value = n;
    }), super.render(s);
  }
}
function h(t) {
  return new S(t);
}
class W extends f {
  constructor(s) {
    super(), this.style({ height: s });
  }
}
function p(t) {
  return new W(t);
}
class q extends f {
  constructor(s) {
    super(), this.style({ width: s });
  }
}
function m(t) {
  return new q(t);
}
class F extends f {
  _type = b.image;
  _src;
  constructor(s) {
    super(), this.attribute({ src: s });
  }
  render() {
    const s = document.createElement("img");
    return super.render(s);
  }
}
function y(t) {
  return new F(t);
}
class O extends _ {
  _state;
  _builder;
  _instanceElement;
  _parent;
  constructor(s, n, i) {
    super(), this._state = s, this._builder = n, this._parent = i, this._state.subscribe(() => {
      this.build();
    });
  }
  build() {
    this._instanceElement && v(this._instanceElement, this.render());
  }
  render() {
    let s = 0;
    this._children = [];
    for (const i of this._state.value) {
      const a = this._builder(i, s++);
      this._children.push(a);
    }
    const n = super.render(this._parent?.render());
    return this._instanceElement ? n : this._instanceElement = n;
  }
}
function B(t, s, n) {
  return new O(t, s, n);
}
export {
  x as BuderState,
  b as BuderThemeType,
  E as BuderUnits,
  f as BuderWidget,
  G as Builder,
  V as Button,
  Y as Col,
  X as Flex,
  B as ForEach,
  p as H,
  y as Image,
  h as Input,
  Z as Row,
  U as Stack,
  A as State,
  Q as Text,
  d as TextArea,
  K as Theme,
  J as View,
  m as W,
  k as _Builder,
  g as _Flex,
  O as _ForEach,
  _ as _View,
  w as _currentBuilder,
  v as diffApply,
  j as em,
  z as percent,
  $ as px,
  D as rem,
  M as vh,
  H as vw
};
