"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[680],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||t;return n?a.createElement(g,i(i({ref:r},p),{},{components:n})):a.createElement(g,i({ref:r},p))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<t;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6738:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const t={},i="Descripci\xf3n de un algoritmo",l={unversionedId:"algoritmos/describiendo-algoritmos",id:"algoritmos/describiendo-algoritmos",title:"Descripci\xf3n de un algoritmo",description:"Un algoritmo se puede escribir en palabras, en pseudoc\xf3digo o en un lenguaje de programaci\xf3n. Muchas veces se escribe de las tres formas. Por ejemplo:",source:"@site/docs/algoritmos/describiendo-algoritmos.md",sourceDirName:"algoritmos",slug:"/algoritmos/describiendo-algoritmos",permalink:"/docs/algoritmos/describiendo-algoritmos",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/algoritmos/describiendo-algoritmos.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Algoritmos",permalink:"/docs/algoritmos/"},next:{title:"Complejidad de un algoritmo (notaci\xf3n Big-O)",permalink:"/docs/algoritmos/complejidad"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"descripci\xf3n-de-un-algoritmo"},"Descripci\xf3n de un algoritmo"),(0,o.kt)("p",null,"Un algoritmo se puede escribir en palabras, en pseudoc\xf3digo o en un lenguaje de programaci\xf3n. Muchas veces se escribe de las tres formas. Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"La b\xfasqueda lineal nos permite encontrar un elemento en una lista.\n\nRecorremos la lista empezando por la primera posici\xf3n. Para cada posici\xf3n comparamos el valor con el elemento que estamos buscando. Si el valor coincide imprimimos la posici\xf3n y finalizamos el programa. De lo contrario, continuamos con la siguiente posici\xf3n hasta que terminemos de recorrer la lista.\n")),(0,o.kt)("p",null,"Pseudoc\xf3digo es m\xe1s formal que en palabras pero no tan exacto como un lenguaje de programaci\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Entrada:\n* lista: arreglo de elementos\n* valor: el valor que estamos buscando\n\nSalida: la posici\xf3n en la que se encuentra el valor (o vac\xedo si no la encuentra)\n\npor cada posici\xf3n de la lista\n  si valor de la posici\xf3n == valor de b\xfasqueda\n     imprima la posici\xf3n\n     finalice el programa\n")),(0,o.kt)("p",null,"No hay una regla exacta de c\xf3mo escribir pseudoc\xf3digo as\xed que ac\xe1 hay mucha flexibilidad."),(0,o.kt)("p",null,"Por \xfaltimo podemos escribir el algoritmo en alg\xfan lenguaje de programaci\xf3n como JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function buscar(lista, valor) {\n  for (var i=0; i < lista.length; i++) {\n    if (lista[i] === valor) {\n      return i;\n    }\n  }\n\n  return -1;\n}\n")),(0,o.kt)("p",null,"Los algoritmos no siempre se deben implementar como funciones, pero una funci\xf3n nos permite definir claramente qu\xe9 se va a recibir y qu\xe9 se va a retornar, y nos da la flexibilidad de usarla en diferentes contextos."),(0,o.kt)("p",null,"Al describir un algoritmo se debe definir:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los datos de entrada y las restricciones que puedan existir sobre esos datos de entrada."),(0,o.kt)("li",{parentName:"ul"},"El resultado esperado."),(0,o.kt)("li",{parentName:"ul"},"Las instrucciones paso a paso para lograr el resultado esperado.")))}m.isMDXComponent=!0}}]);