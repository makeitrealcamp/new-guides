"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[100],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>g});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),l=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},m=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=t,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(g,i(i({ref:a},m),{},{components:r})):n.createElement(g,i({ref:a},m))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[u]="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8593:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),t=(r(7294),r(3905));const o={},i="Programaci\xf3n din\xe1mica",c={unversionedId:"algoritmos/programacion-dinamica",id:"algoritmos/programacion-dinamica",title:"Programaci\xf3n din\xe1mica",description:"La programaci\xf3n din\xe1mica es una t\xe9cnica que se utiliza para optimizar algunos algoritmos.",source:"@site/docs/algoritmos/programacion-dinamica.md",sourceDirName:"algoritmos",slug:"/algoritmos/programacion-dinamica",permalink:"/docs/algoritmos/programacion-dinamica",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/algoritmos/programacion-dinamica.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Algoritmos de b\xfasqueda",permalink:"/docs/algoritmos/busqueda"},next:{title:"Bases de datos",permalink:"/docs/bases-de-datos/"}},s={},l=[],m={toc:l},u="wrapper";function p(e){let{components:a,...r}=e;return(0,t.kt)(u,(0,n.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"programaci\xf3n-din\xe1mica"},"Programaci\xf3n din\xe1mica"),(0,t.kt)("p",null,"La programaci\xf3n din\xe1mica es una t\xe9cnica que se utiliza para optimizar algunos algoritmos."),(0,t.kt)("p",null,"Los algoritmos que se pueden optimizar con esta t\xe9cnica son los que realizan varias veces los mismos c\xe1lculos y que, por lo tanto, se pueden optimizar almacenando los resultados en memoria para solo tener que realizarlos una \xfanica vez."),(0,t.kt)("p",null,"El ejemplo m\xe1s com\xfan de programaci\xf3n din\xe1mica es calcular alg\xfan valor de la ",(0,t.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci"},"Secuencia de Fibonacci"),", que se puede solucionar de forma recursiva:"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/dynamic-programming-1.png",alt:"\xc1rbol de recursi\xf3n para el quinto elemento de la secuencia de fibonacci"})),(0,t.kt)("p",null,"El problema es que estamos calculando ",(0,t.kt)("inlineCode",{parentName:"p"},"f(3)")," dos veces y ",(0,t.kt)("inlineCode",{parentName:"p"},"f(2)")," tres veces. Podemos optimizar este algoritmos para que utilice un objeto (un diccionario) en donde se almacene el resultado de estos valores y s\xf3lo sea necesario calcularlos una \xfanica vez."),(0,t.kt)("p",null,"Utilizando el objeto adicional, nuestra recursi\xf3n quedar\xeda de la siguiente forma, en donde los valores en naranja ya se encuentran en el objeto:"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/dynamic-programming-2.png",alt:"Los valores en naranja ya est\xe1n calculados o son casos base"})))}p.isMDXComponent=!0}}]);