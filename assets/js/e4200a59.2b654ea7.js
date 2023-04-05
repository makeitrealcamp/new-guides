"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[3734],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>v});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(v,i(i({ref:a},d),{},{components:t})):r.createElement(v,i({ref:a},d))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3513:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={},i="History API",l={unversionedId:"javascript/navegador/history",id:"javascript/navegador/history",title:"History API",description:"El History API nos permite cambiar la URL del navegador sin refrescar la p\xe1gina, ver el n\xfamero de URL's visitadas (la historia) y navegar por la historia de URL's (ir atr\xe1s o adelante).",source:"@site/docs/javascript/navegador/history.md",sourceDirName:"javascript/navegador",slug:"/javascript/navegador/history",permalink:"/docs/javascript/navegador/history",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/javascript/navegador/history.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"local-storage",permalink:"/docs/javascript/navegador/local-storage"},next:{title:"Canvas",permalink:"/docs/javascript/navegador/canvas"}},s={},p=[{value:"Cambiando la ruta de la URL",id:"cambiando-la-ruta-de-la-url",level:3},{value:"Atr\xe1s y adelante",id:"atr\xe1s-y-adelante",level:3},{value:"Eventos sobre la historia",id:"eventos-sobre-la-historia",level:3}],d={toc:p},c="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"history-api"},"History API"),(0,n.kt)("p",null,"El History API nos permite cambiar la URL del navegador sin refrescar la p\xe1gina, ver el n\xfamero de URL's visitadas (la historia) y navegar por la historia de URL's (ir atr\xe1s o adelante)."),(0,n.kt)("p",null,"El History API es muy \xfatil en aplicaciones que nunca se refrescan, tambi\xe9n conocidas como SPAs (Single Page Applications)."),(0,n.kt)("p",null,"El objeto principal para utilizar el History API se llama ",(0,n.kt)("inlineCode",{parentName:"p"},"history"),"."),(0,n.kt)("h3",{id:"cambiando-la-ruta-de-la-url"},"Cambiando la ruta de la URL"),(0,n.kt)("p",null,"Para cambiar la ruta de la URL utiliza los m\xe9todos ",(0,n.kt)("inlineCode",{parentName:"p"},"pushState")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"replaceState")," de ",(0,n.kt)("inlineCode",{parentName:"p"},"history"),"."),(0,n.kt)("p",null,"La diferencia entre los dos m\xe9todos es que ",(0,n.kt)("inlineCode",{parentName:"p"},"pushState")," agrega una entrada a la historia de URLs mientras que ",(0,n.kt)("inlineCode",{parentName:"p"},"replaceState")," reemplaza la \xfaltima entrada."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"pushState")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"replaceState")," reciben tres argumentos: un objeto, un t\xedtulo y la nueva ruta."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// agrega una ruta /users a la historia de la sesi\xf3n\nhistory.pushState(null, null, "users");\n')),(0,n.kt)("p",null,"Puedes abrir la consola en las herramientas del desarrollador y ejecutar esa l\xednea sobre cualquier sitio o aplicaci\xf3n Web. La ruta de la URL deber\xeda cambiar a ",(0,n.kt)("inlineCode",{parentName:"p"},"/users"),"."),(0,n.kt)("h3",{id:"atr\xe1s-y-adelante"},"Atr\xe1s y adelante"),(0,n.kt)("p",null,"Para navegar en la historia utiliza los m\xe9todos ",(0,n.kt)("inlineCode",{parentName:"p"},"back")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"forward")," del objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"history"),". Es lo equivalente a oprimir el bot\xf3n atr\xe1s o adelante del navegador."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// equivalente a oprimir el bot\xf3n de atr\xe1s del navegador\nhistory.back();\n\n// equivalente a oprimir el bot\xf3n de adelante del navegador\nhistory.forward();\n")),(0,n.kt)("h3",{id:"eventos-sobre-la-historia"},"Eventos sobre la historia"),(0,n.kt)("p",null,"Cuando una persona oprime el bot\xf3n atr\xe1s o adelante, o se ejecutan los m\xe9todos ",(0,n.kt)("inlineCode",{parentName:"p"},"back")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"forward")," del ",(0,n.kt)("inlineCode",{parentName:"p"},"history,")," se dispara el evento ",(0,n.kt)("inlineCode",{parentName:"p"},"popstate")," sobre ",(0,n.kt)("inlineCode",{parentName:"p"},"window"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onpopstate = function(e) {\n  alert("location: " + document.location + ", state: " + JSON.stringify(e.state));\n};\n')))}u.isMDXComponent=!0}}]);