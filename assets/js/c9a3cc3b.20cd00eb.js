"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[1609],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>v});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=o.createContext({}),l=function(e){var a=o.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=l(e.components);return o.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=t,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(v,s(s({ref:a},c),{},{components:n})):o.createElement(v,s({ref:a},c))}));function v(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7010:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7462),t=(n(7294),n(3905));const r={},s="Canvas",i={unversionedId:"javascript/navegador/canvas",id:"javascript/navegador/canvas",title:"Canvas",description:"Canvas es una etiqueta de HTML5 que nos permite trabajar con animaciones avanzadas, dibujar elementos, crear juegos, entre otros.",source:"@site/docs/javascript/navegador/canvas.md",sourceDirName:"javascript/navegador",slug:"/javascript/navegador/canvas",permalink:"/docs/javascript/navegador/canvas",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/javascript/navegador/canvas.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"History API",permalink:"/docs/javascript/navegador/history"},next:{title:"Notificaciones Web",permalink:"/docs/javascript/navegador/notificaciones"}},p={},l=[{value:"Primeros pasos",id:"primeros-pasos",level:2},{value:"El contexto",id:"el-contexto",level:2},{value:"Algunos ejemplos",id:"algunos-ejemplos",level:2}],c={toc:l},d="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"canvas"},"Canvas"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Canvas")," es una etiqueta de ",(0,t.kt)("strong",{parentName:"p"},"HTML5")," que nos permite trabajar con animaciones avanzadas, dibujar elementos, crear juegos, entre otros."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Canvas")," es un plano cartesiano invertido donde la esquina superior izquierda es el punto (0,0). Si nos movemos hacia la derecha aumentamos nuestra posici\xf3n en el eje horizontal o eje X y si nos movemos hacia abajo aumentamos nuestra posici\xf3n en el eje vertical o eje Y."),(0,t.kt)("p",null,"Es importante conocer c\xf3mo funciona este sistema de coordenadas ya que por medio de este posicionaremos todos nuestros elementos dentro del ",(0,t.kt)("strong",{parentName:"p"},"canvas"),". Dibujar una linea entre en punto A y un punto B, dibujar un cuadro de 100px por 100px en las coordenadas definidas, pintar una imagen en las coordenadas (100, 100), son solo el principio de lo que podemos lograr con ",(0,t.kt)("strong",{parentName:"p"},"canvas"),"."),(0,t.kt)("p",null,"Todas las interacciones que vayamos a tener con nuestro ",(0,t.kt)("strong",{parentName:"p"},"canvas")," se deben realizar a trav\xe9s de un lenguaje de scripting. En este caso vamos a utilizar JavaScript."),(0,t.kt)("h2",{id:"primeros-pasos"},"Primeros pasos"),(0,t.kt)("p",null,"Para empezar a trabajar con el API de ",(0,t.kt)("strong",{parentName:"p"},"canvas"),", primero debemos crear el elemento en nuestro HTML, luego lo seleccionamos con nuestro JavaScript, y por \xfaltimo obtenemos el ",(0,t.kt)("strong",{parentName:"p"},"contexto")," sobre el cual vamos a trabajar."),(0,t.kt)("p",null,"Cabe resaltar que si queremos cambiar el tama\xf1o del canvas lo debemos hacer a trav\xe9s de las propiedades ",(0,t.kt)("strong",{parentName:"p"},"width")," y ",(0,t.kt)("strong",{parentName:"p"},"height")," de la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<canvas>")," y no usando CSS. De la primera manera definimos la resoluci\xf3n actual del ",(0,t.kt)("strong",{parentName:"p"},"canvas"),", de la segunda manera el contenido del ",(0,t.kt)("strong",{parentName:"p"},"canvas")," se estira o encoge para coincidir con el espacio definido."),(0,t.kt)("h2",{id:"el-contexto"},"El contexto"),(0,t.kt)("p",null,"El ",(0,t.kt)("strong",{parentName:"p"},"contexto")," es el plano sobre el cual vamos a trabajar, este puede ser 2D, 3D usando WebGL, o un renderizado de Bitmap."),(0,t.kt)("p",null,"El ",(0,t.kt)("strong",{parentName:"p"},"contexto")," lo obtenemos utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"getContext()")," sobre nuestro elemento ",(0,t.kt)("strong",{parentName:"p"},"canvas"),". Este m\xe9todo recibe como argumento el contexto sobre el cual vamos a trabajar. Ejemplo: 2d, webgl, bitmaprenderer."),(0,t.kt)("h2",{id:"algunos-ejemplos"},"Algunos ejemplos"),(0,t.kt)("p",null,"En este primer ejemplo veamos dos opciones para dibujar un cuadrado en nuestro ",(0,t.kt)("strong",{parentName:"p"},"canvas"),". En la primera opci\xf3n vamos a construir un cuadrado utilizando 4 lineas individuales, y en la segunda opci\xf3n usamos el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"rect()")," del API de ",(0,t.kt)("strong",{parentName:"p"},"canvas"),"."),(0,t.kt)("p",null,'{% embed url="',(0,t.kt)("a",{parentName:"p",href:"https://codepen.io/simonhoyos/pen/yLLYrpw%22"},'https://codepen.io/simonhoyos/pen/yLLYrpw"')," %}"),(0,t.kt)("p",null,"En este segundo ejemplo vamos a usar ",(0,t.kt)("inlineCode",{parentName:"p"},"arc()"),", el API para dibujar c\xedrculos; lineas; y traslaciones, y rotaciones para dibujar un Pacman."),(0,t.kt)("p",null,'{% embed url="',(0,t.kt)("a",{parentName:"p",href:"https://codepen.io/simonhoyos/pen/BaaoeQM%22"},'https://codepen.io/simonhoyos/pen/BaaoeQM"')," %}"),(0,t.kt)("p",null,"Algo a resaltar de este ejemplo es c\xf3mo manejamos los estilos dentro del canvas. Colores, tama\xf1o, y dem\xe1s, lo manejamos desde nuestro JavaScript y no desde el CSS como lo hemos venido haciendo hasta ahora."),(0,t.kt)("p",null,"En este \xfaltimo ejemplo veremos c\xf3mo podemos usar ",(0,t.kt)("strong",{parentName:"p"},"canvas")," para crear animaciones."),(0,t.kt)("p",null,'{% embed url="',(0,t.kt)("a",{parentName:"p",href:"https://codepen.io/simonhoyos/pen/dyyYxVp%22"},'https://codepen.io/simonhoyos/pen/dyyYxVp"')," %}"),(0,t.kt)("p",null,"Podemos notar que en nuestra animaci\xf3n utilizamos el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame()")," este m\xe9todo es un m\xe9todo global de JavaScript. Este m\xe9todo es un ciclo que nos permite sincronizar nuestra animaci\xf3n con la tasa de actualizaci\xf3n de pantalla del navegador."),(0,t.kt)("p",null,"Para conocer m\xe1s sobre el API de contexto 2D de canvas puedes visitar ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"MDN web docs")))}m.isMDXComponent=!0}}]);