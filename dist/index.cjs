"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function y(e,t){console.log(e);function n(s){s._children&&s._children.forEach(n);const i=s._type;if(i){const u=e[i];u&&s.class(u)}}return n(t),t}var b=(e=>(e.px="px",e.em="em",e.rem="rem",e.vw="vw",e.vh="vh",e.percent="%",e))(b||{});function g(e){return{value:e,unit:"px"}}function E(e){return{value:e,unit:"em"}}function w(e){return{value:e,unit:"rem"}}function A(e){return{value:e,unit:"vw"}}function T(e){return{value:e,unit:"vh"}}function C(e){return{value:e,unit:"%"}}class h{value;builder;callbacks=[];constructor(t,n){this.value=t,this.builder=n}get(t){const n=m(this.value[t]);return n.subscribe(()=>{this.value[t]=n.value}),n}subscribe(t){this.callbacks.push(t)}set(t){this.value=t,this.callbacks.forEach(n=>{n(t)})}}function m(e){const t=exports._currentBuilder;let n=0;return t&&(n=t._statePointer,t._statePointer++,t._states.has(n)?e=t._states.get(n):t._states.set(n,e)),new Proxy(new h(e,t),{set(s,i,u,c){return s.builder?._states.set(n,u),i=="value"?s.set(u):Reflect.set(s,i,u,c),s.builder?.build(),!0}})}class o{constructor(){}_children;_style={};_events={};_id;_classes=[];_tag;_attribute={};_text;_type;mount(t){return document.querySelector(t)?.replaceWith(this.render()),this}render(t){t||(t=document.createElement(this._tag??"div"));for(const n in this._style){const s=this._style[n];s instanceof Object?s.value.subscribe?s.value.subscribe(i=>{t&&(t.style[n]=`${i}${s.unit}`)}):s.subscribe?s.subscribe(i=>{t&&(t.style[n]=i)}):t.style[n]=`${s.value}${s.unit}`:t.style[n]=s}for(const n in this._events)t.addEventListener(n,this._events[n]);this._id&&(t.id=this._id),this._classes.forEach(n=>{typeof n=="string"?n&&t&&t.classList.add(n):n instanceof Array?t.classList.add(...n):n instanceof h&&n.subscribe(s=>{if(t){t.classList.add(...s.filter(i=>t&&!t.classList.contains(i)));for(const i of t.classList)s.includes(i)||t.classList.remove(i)}})});for(const n in this._attribute)typeof this._attribute[n]=="string"?t.setAttribute(n,this._attribute[n]):(t.setAttribute(n,this._attribute[n].value),this._attribute[n].subscribe(s=>{t&&t.setAttribute(n,s)}));return this._text&&(typeof this._text=="string"?t.textContent=this._text:(t.textContent=this._text.value,this._text.subscribe(n=>{t&&(t.textContent=n)}))),t}id(t){return this._id=t,this}class(t){return this._classes.push(t),this}tag(t){return this._tag=t,this}attribute(t){return this._attribute=Object.assign(this._attribute,t),this}style(t){return this._style=Object.assign(this._style,t),this}text(t){return this._text=t,this}type(t){return this._type=t,this}padding(t){if(t.unit)return this.style({padding:t});{const{top:n,left:s,right:i,bottom:u,vertical:c,horizontal:r}=t;return c||r?this.style({paddingTop:c,paddingBottom:c,paddingLeft:r,paddingRight:r}):this.style({paddingTop:n,paddingBottom:u,paddingLeft:s,paddingRight:i})}}get full(){return this.style({width:"100%",height:"100%"})}get expand(){return this.style({flex:"1"})}event(t){return this._events=Object.assign(this._events,t),this}}exports._currentBuilder=null;class x extends o{_func;_instanceElement;_states=new Map;_statePointer=0;constructor(t,n){super(),exports._currentBuilder=this,this._func=t,n&&n.forEach(s=>{s.subscribe(()=>{this.build()})})}subscribe(t){this._states.forEach((n,s)=>{const i=this._states.get(s);i instanceof h&&(i.builder=this,i.subscribe(t))})}render(){const t=super.render(this._func(this.build.bind(this)).render());return this._instanceElement?d(this._instanceElement,t):this._instanceElement=t,this._statePointer=0,t}build(){this.render()}}function d(e,t){if(!e||!t||e.isEqualNode(t))return;e.tagName!==t.tagName&&e.replaceWith(t);const n=e.attributes,s=t.attributes;if(n&&s){for(let r=0;r<n.length;r++){const a=n[r],f=s.getNamedItem(a.name);f?f.value!==a.value&&e.setAttribute(a.name,f.value):e.removeAttribute(a.name)}for(let r=0;r<s.length;r++){const a=s[r];n.getNamedItem(a.name)||e.setAttribute(a.name,a.value)}}const i=e.childNodes,u=t.childNodes,c=Math.max(i.length,u.length);if(c==0)e.textContent!==t.textContent&&(e.textContent=t.textContent);else for(let r=0;r<c;r++){if(r>=i.length){e.appendChild(u[r]);continue}if(r>=u.length){e.removeChild(i[r]);continue}d(i[r],u[r])}return e}function B(e,t){return new x(e,t)}class l extends o{constructor(t=[]){super(),typeof t=="string"?this.text(t):this._children=t}render(t){return t||(t=document.createElement("div")),this._children?.forEach(n=>{t?.appendChild(n.render())}),super.render(t)}}function L(e){return new l(e)}class I extends o{_type="text";constructor(t){super(),this._text=t}render(){const t=document.createElement("span");return super.render(t)}get center(){return this._style.verticalAlign="middle",this._style.textAlign="center",this}}function S(e){return new I(e)}class F extends l{_type="button";constructor(t=[]){super(t)}render(){const t=document.createElement("button");return super.render(t)}}function k(e){return new F(e)}class _ extends l{constructor(t=[]){super(t),this.style({display:"flex"})}get center(){return this._style.alignItems="center",this._style.justifyContent="center",this}}function H(e=[]){return new _(e)}class M extends _{constructor(t=[]){super(t),this.style({flexDirection:"column"})}}function N(e){return new M(e)}class W extends _{constructor(t=[]){super(t),this.style({flexDirection:"row"})}}function P(e){return new W(e)}class R extends l{_children;constructor(t=[]){super(),this._children=t,this._children.forEach(n=>{n._style.position="absolute"}),this.style({position:"relative"})}}function O(e){return new R(e)}class p extends o{_type="input";_tag="input";_model;constructor(t){super(),t&&(this._model=t,this.attribute({value:t.value}),this.event({input:n=>{t.value=n.target.value}}))}render(){const t=document.createElement(this._tag);return(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLButtonElement)&&(this._model?.subscribe(n=>{t&&(t.value=n)}),t.value=this._model?.value??""),super.render(t)}}function j(e){return new p(e)}class $ extends p{_type="textarea";_tag="textarea";constructor(t){super(t)}render(){return super.render()}}function q(e){return new $(e)}class D extends o{constructor(t){super(),this.style({height:t})}}function V(e){return new D(e)}class z extends o{constructor(t){super(),this.style({width:t})}}function G(e){return new z(e)}class J extends o{_type="image";_src;constructor(t){super(),this.attribute({src:t})}render(){const t=document.createElement("img");return super.render(t)}}function K(e){return new J(e)}class v extends l{_state;_builder;_instanceElement;_parent;constructor(t,n,s){super(),this._state=t,this._builder=n,this._parent=s,this._state.subscribe(()=>{this.build()})}build(){this._instanceElement&&d(this._instanceElement,this.render())}render(){let t=0;this._children=[];for(const s of this._state.value){const i=this._builder(s,t++);this._children.push(i)}const n=super.render(this._parent?.render());return this._instanceElement?n:this._instanceElement=n}}function Q(e,t,n){return new v(e,t,n)}exports.BuderState=h;exports.BuderUnits=b;exports.BuderWidget=o;exports.Builder=B;exports.Button=k;exports.Col=N;exports.Flex=H;exports.ForEach=Q;exports.H=V;exports.Image=K;exports.Input=j;exports.Row=P;exports.Stack=O;exports.State=m;exports.Text=S;exports.TextArea=q;exports.Theme=y;exports.View=L;exports.W=G;exports._Builder=x;exports._Flex=_;exports._ForEach=v;exports._Input=p;exports._View=l;exports.diffApply=d;exports.em=E;exports.percent=C;exports.px=g;exports.rem=w;exports.vh=T;exports.vw=A;
