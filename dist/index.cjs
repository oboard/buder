"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function x(e,t){console.log(e);function s(n){n._children&&n._children.forEach(s);const i=n._type;if(i){const u=e[i];u&&n.class(u)}}return s(t),t}var p=(e=>(e.px="px",e.em="em",e.rem="rem",e.vw="vw",e.vh="vh",e.percent="%",e))(p||{});function y(e){return{value:e,unit:"px"}}function g(e){return{value:e,unit:"em"}}function E(e){return{value:e,unit:"rem"}}function w(e){return{value:e,unit:"vw"}}function A(e){return{value:e,unit:"vh"}}function C(e){return{value:e,unit:"%"}}class h{value;builder;callbacks=[];constructor(t,s){this.value=t,this.builder=s}get(t){const s=b(this.value[t]);return s.subscribe(()=>{this.value[t]=s.value}),s}subscribe(t){this.callbacks.push(t)}set(t){this.value=t,this.callbacks.forEach(s=>{s(t)})}}function b(e){const t=exports._currentBuilder;let s=0;return t&&(s=t._statePointer,t._statePointer++,t._states.has(s)?e=t._states.get(s):t._states.set(s,e)),new Proxy(new h(e,t),{set(n,i,u,a){return n.builder?._states.set(s,u),i=="value"?n.set(u):Reflect.set(n,i,u,a),n.builder?.build(),!0}})}class c{constructor(){}_children;_style={};_events={};_id;_classes=[];_tag;_attribute={};_text;_type;mount(t){return document.querySelector(t)?.replaceWith(this.render()),this}render(t){t||(t=document.createElement(this._tag??"div"));for(const s in this._style){const n=this._style[s];n instanceof Object?n.value.subscribe?n.value.subscribe(i=>{t&&(t.style[s]=`${i}${n.unit}`)}):n.subscribe?n.subscribe(i=>{t&&(t.style[s]=i)}):t.style[s]=`${n.value}${n.unit}`:t.style[s]=n}for(const s in this._events)t.addEventListener(s,this._events[s]);this._id&&(t.id=this._id),this._classes.forEach(s=>{typeof s=="string"?s&&t&&t.classList.add(s):s instanceof Array?t.classList.add(...s):s instanceof h&&s.subscribe(n=>{if(t){t.classList.add(...n.filter(i=>t&&!t.classList.contains(i)));for(const i of t.classList)n.includes(i)||t.classList.remove(i)}})});for(const s in this._attribute)typeof this._attribute[s]=="string"?t.setAttribute(s,this._attribute[s]):(t.setAttribute(s,this._attribute[s].value),this._attribute[s].subscribe(n=>{t&&t.setAttribute(s,n)}));return this._text&&(typeof this._text=="string"?t.textContent=this._text:(t.textContent=this._text.value,this._text.subscribe(s=>{t&&(t.textContent=s)}))),t}id(t){return this._id=t,this}class(t){return this._classes.push(t),this}tag(t){return this._tag=t,this}attribute(t){return this._attribute=Object.assign(this._attribute,t),this}style(t){return this._style=Object.assign(this._style,t),this}text(t){return this._text=t,this}type(t){return this._type=t,this}padding(t){if(t.unit)return this.style({padding:t});{const{top:s,left:n,right:i,bottom:u,vertical:a,horizontal:r}=t;return a||r?this.style({paddingTop:a,paddingBottom:a,paddingLeft:r,paddingRight:r}):this.style({paddingTop:s,paddingBottom:u,paddingLeft:n,paddingRight:i})}}get full(){return this.style({width:"100%",height:"100%"})}get expand(){return this.style({flex:"1"})}event(t){return this._events=Object.assign(this._events,t),this}}exports._currentBuilder=null;class m extends c{_func;_instanceElement;_states=new Map;_statePointer=0;constructor(t,s){super(),exports._currentBuilder=this,this._func=t,s&&s.forEach(n=>{n.subscribe(()=>{this.build()})})}subscribe(t){this._states.forEach((s,n)=>{const i=this._states.get(n);i instanceof h&&(i.builder=this,i.subscribe(t))})}render(){const t=super.render(this._func(this.build.bind(this)).render());return this._instanceElement?d(this._instanceElement,t):this._instanceElement=t,this._statePointer=0,t}build(){this.render()}}function d(e,t){if(!e||!t||e.isEqualNode(t))return;e.tagName!==t.tagName&&e.replaceWith(t);const s=e.attributes,n=t.attributes;if(s&&n){for(let r=0;r<s.length;r++){const o=s[r],f=n.getNamedItem(o.name);f?f.value!==o.value&&e.setAttribute(o.name,f.value):e.removeAttribute(o.name)}for(let r=0;r<n.length;r++){const o=n[r];s.getNamedItem(o.name)||e.setAttribute(o.name,o.value)}}const i=e.childNodes,u=t.childNodes,a=Math.max(i.length,u.length);if(a==0)e.textContent!==t.textContent&&(e.textContent=t.textContent);else for(let r=0;r<a;r++){if(r>=i.length){e.appendChild(u[r]);continue}if(r>=u.length){e.removeChild(i[r]);continue}d(i[r],u[r])}return e}function B(e,t){return new m(e,t)}class l extends c{constructor(t=[]){super(),typeof t=="string"?this.text(t):this._children=t}render(t){return t||(t=document.createElement("div")),this._children?.forEach(s=>{t?.appendChild(s.render())}),super.render(t)}}function T(e){return new l(e)}class S extends c{_type="text";constructor(t){super(),this._text=t}render(){const t=document.createElement("span");return super.render(t)}get center(){return this._style.verticalAlign="middle",this._style.textAlign="center",this}}function I(e){return new S(e)}class L extends l{_type="button";constructor(t=[]){super(t)}render(){const t=document.createElement("button");return super.render(t)}}function F(e){return new L(e)}class _ extends l{constructor(t=[]){super(t),this.style({display:"flex"})}get center(){return this._style.alignItems="center",this._style.justifyContent="center",this}}function k(e=[]){return new _(e)}class N extends _{constructor(t=[]){super(t),this.style({flexDirection:"column"})}}function W(e){return new N(e)}class P extends _{constructor(t=[]){super(t),this.style({flexDirection:"row"})}}function R(e){return new P(e)}class O extends l{_children;constructor(t=[]){super(),this._children=t,this._children.forEach(s=>{s._style.position="absolute"}),this.style({position:"relative"})}}function j(e){return new O(e)}class $ extends c{_type="textarea";_model;constructor(t){super(),this._model=t,t&&this.event({input:s=>{t.value=s.target.value}})}render(){const t=document.createElement("textarea");return t.value=this._model?.value||"",this._model?.subscribe(s=>{t.value=s}),super.render(t)}}function H(e){return new $(e)}class M extends c{_type="input";_model;constructor(t){super(),t&&(this._model=t,this.attribute({value:t.value}),this.event({input:s=>{t.value=s.target.value}}))}render(){const t=document.createElement("input");return this._model?.subscribe(s=>{t.value=s}),super.render(t)}}function q(e){return new M(e)}class D extends c{constructor(t){super(),this.style({height:t})}}function V(e){return new D(e)}class z extends c{constructor(t){super(),this.style({width:t})}}function G(e){return new z(e)}class J extends c{_type="image";_src;constructor(t){super(),this.attribute({src:t})}render(){const t=document.createElement("img");return super.render(t)}}function K(e){return new J(e)}class v extends l{_state;_builder;_instanceElement;_parent;constructor(t,s,n){super(),this._state=t,this._builder=s,this._parent=n,this._state.subscribe(()=>{this.build()})}build(){this._instanceElement&&d(this._instanceElement,this.render())}render(){let t=0;this._children=[];for(const n of this._state.value){const i=this._builder(n,t++);this._children.push(i)}const s=super.render(this._parent?.render());return this._instanceElement?s:this._instanceElement=s}}function Q(e,t,s){return new v(e,t,s)}exports.BuderState=h;exports.BuderUnits=p;exports.BuderWidget=c;exports.Builder=B;exports.Button=F;exports.Col=W;exports.Flex=k;exports.ForEach=Q;exports.H=V;exports.Image=K;exports.Input=q;exports.Row=R;exports.Stack=j;exports.State=b;exports.Text=I;exports.TextArea=H;exports.Theme=x;exports.View=T;exports.W=G;exports._Builder=m;exports._Flex=_;exports._ForEach=v;exports._View=l;exports.diffApply=d;exports.em=g;exports.percent=C;exports.px=y;exports.rem=E;exports.vh=A;exports.vw=w;
