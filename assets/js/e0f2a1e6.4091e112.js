"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[8476],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,l(l({ref:a},p),{},{components:t})):n.createElement(f,l({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3423:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={},l="Formularios",c={unversionedId:"react/formularios",id:"react/formularios",title:"Formularios",description:"Para trabajar con campos de entrada en React debes mantener sincronizado el valor de cada campo con el estado del componente. Esto requiere un poco m\xe1s de c\xf3digo en comparaci\xf3n a otros frameworks pero est\xe1 alineado con la filosof\xeda de React: que todos los cambios al estado sean expl\xedcitos.",source:"@site/docs/react/formularios.md",sourceDirName:"react",slug:"/react/formularios",permalink:"/docs/react/formularios",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/react/formularios.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"M\xe1s sobre estado",permalink:"/docs/react/mas-sobre-estado"},next:{title:"Peticiones HTTP con Axios",permalink:"/docs/react/peticiones-http-con-axios"}},i={},s=[],p={toc:s},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"formularios"},"Formularios"),(0,r.kt)("p",null,"Para trabajar con campos de entrada en React debes mantener sincronizado el valor de cada campo con el estado del componente. Esto requiere un poco m\xe1s de c\xf3digo en comparaci\xf3n a otros frameworks pero est\xe1 alineado con la filosof\xeda de React: que todos los cambios al estado sean expl\xedcitos."),(0,r.kt)("p",null,"Veamos el siguiente c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React, { useState } from \'react\';\n\nfunction App() {\n  const [name, setName] = useState("")\n\n  function updateName(e) {\n    setName(e.target.value);\n  }\n  \n  return (\n    <div>\n      <input type="text" value={name} onChange={updateName} />\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"El primer paso es inicializar el estado. En este caso vamos a tener un \xfanico campo de entrada que va a almacenar un nombre:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const [name, setName] = useState("")\n')),(0,r.kt)("p",null,"El siguiente paso es mantener sincronizado el campo el estado. Para eso necesitamos definir el campo de la siguiente forma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<input type="text" value={name} onChange={updateName} />\n')),(0,r.kt)("p",null,"El valor de este campo va a ser ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," y cuando cambie vamos a llamar al m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"updateName")," que se va a encargar de actualizar el estado con el nuevo valor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function updateName(e) {\n  setName(e.target.value);\n}\n")),(0,r.kt)("p",null,"La ventaja es que si queremos utilizar el valor en cualquier otro m\xe9todo simplemente necesitamos obtener el valor del estado. Veamos un ejemplo con un bot\xf3n que al hacerle click utiliza el valor del campo de entrada para mostrar una alerta:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function App() {\n  // ... el estado\n\n  function saluda() {\n    alert(`Hola ${name}!`);\n  }\n\n  return (\n    <div>\n      <input type="text" ... />\n      <button onClick={saluda}>Saluda</button>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"Al hacer click sobre el bot\xf3n se va a llamar el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"saluda")," que utiliza el estado ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," para mostrar la alerta. No es necesario obtener el valor directamente del campo de entrada."))}m.isMDXComponent=!0}}]);