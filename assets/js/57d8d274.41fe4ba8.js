"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[5205],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>v});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,v=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?t.createElement(v,i(i({ref:a},d),{},{components:n})):t.createElement(v,i({ref:a},d))}));function v(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8629:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const l={},i="Unidades en CSS",o={unversionedId:"html-y-css/unidades",id:"html-y-css/unidades",title:"Unidades en CSS",description:"Existe una gran variedad de unidades que podemos usar en CSS para expresar medidas (fuentes, m\xe1rgenes, ancho y alto de elementos, etc.). En esta gu\xeda vamos a ver las m\xe1s importantes y cu\xe1les usar para responsive design.",source:"@site/docs/html-y-css/unidades.md",sourceDirName:"html-y-css",slug:"/html-y-css/unidades",permalink:"/docs/html-y-css/unidades",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/html-y-css/unidades.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Media Queries",permalink:"/docs/html-y-css/media-queries"},next:{title:"Flexbox",permalink:"/docs/html-y-css/flexbox"}},s={},p=[{value:"Medidas relativas",id:"medidas-relativas",level:2},{value:"rem (root em)",id:"rem-root-em",level:3},{value:"em",id:"em",level:3},{value:"Porcentajes (%)",id:"porcentajes-",level:3},{value:"Viewport width (vw)",id:"viewport-width-vw",level:3},{value:"Viewport height (vh)",id:"viewport-height-vh",level:3},{value:"Otras",id:"otras",level:3},{value:"Medidas absolutas",id:"medidas-absolutas",level:2},{value:"Pixeles (px)",id:"pixeles-px",level:3}],d={toc:p},m="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unidades-en-css"},"Unidades en CSS"),(0,r.kt)("p",null,"Existe una gran variedad de unidades que podemos usar en CSS para expresar medidas (fuentes, m\xe1rgenes, ancho y alto de elementos, etc.). En esta gu\xeda vamos a ver las m\xe1s importantes y cu\xe1les usar para responsive design."),(0,r.kt)("p",null,"Existen dos tipos de unidades: relativas y absolutas."),(0,r.kt)("h2",{id:"medidas-relativas"},"Medidas relativas"),(0,r.kt)("p",null,"Las medidas relativas son las m\xe1s flexibles porque se adaptan a la pantalla y son las que m\xe1s se deber\xedan usar en el CSS. Las m\xe1s importantes son ",(0,r.kt)("inlineCode",{parentName:"p"},"rem"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"em"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vw"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vh")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),". Veamos cada una en detalle."),(0,r.kt)("h3",{id:"rem-root-em"},"rem (root em)"),(0,r.kt)("p",null,"Nos permite definir una medida de forma relativa al tama\xf1o de la fuente ra\xedz (la del elemento ",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"). Por ejemplo, si el tama\xf1o de la fuente ra\xedz es ",(0,r.kt)("inlineCode",{parentName:"p"},"16px")," (el valor por defecto de la mayor\xeda de navegadores) estas ser\xedan algunas conversiones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1rem = 16px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.5rem = 24px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0.5rem = 8px"))),(0,r.kt)("p",null,"Si el usuario cambia el tama\xf1o de la fuente en su navegador, las fuentes van a cambiar proporcionalmente. Por ejemplo, si se cambia el tama\xf1o de la fuente ra\xedz a ",(0,r.kt)("inlineCode",{parentName:"p"},"20px")," estas ser\xedan algunas conversiones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1rem = 20px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.5rem = 30px")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0.5rem = 10px"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rem")," se utiliza en tama\xf1os de fuentes, m\xe1rgenes, paddings, entre otros."),(0,r.kt)("h3",{id:"em"},"em"),(0,r.kt)("p",null,"Similar al ",(0,r.kt)("strong",{parentName:"p"},"rem")," pero, en vez de ser relativo a la fuente ra\xedz, es relativo al tama\xf1o de la fuente del elemento padre. Esto, en ocasiones, genera problemas porque los tama\xf1os se vuelven impredecibles a medida que cambiamos el tama\xf1o de la fuente de diferentes elementos."),(0,r.kt)("p",null,"Por ejemplo, en el siguiente c\xf3digo, asumiendo que el tama\xf1o de la fuente ra\xedz es de ",(0,r.kt)("inlineCode",{parentName:"p"},"10px"),", \xbfcu\xe1l va a ser el tama\xf1o de la fuente del ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," interno que tiene un tama\xf1o de fuente de ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5em"),"?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div style="font-size: 2em">\n  <div style="font-size: 1.5em">Esto es una prueba</div>\n</div>\n')),(0,r.kt)("p",null,"Si utiliz\xe1ramos ",(0,r.kt)("inlineCode",{parentName:"p"},"rem")," la respuesta ser\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"15px")," (",(0,r.kt)("inlineCode",{parentName:"p"},"10px x 1.5"),"). Sin embargo, con ",(0,r.kt)("inlineCode",{parentName:"p"},"em")," tenemos que tener en cuenta al padre que tiene una fuente de ",(0,r.kt)("inlineCode",{parentName:"p"},"10px * 2em = 20px"),", as\xed que la respuesta ser\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"30px"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"em")," es \xfatil cuando queremos mantener esa relaci\xf3n de tama\xf1o con la fuente del elemento padre, por ejemplo, para definir el ",(0,r.kt)("inlineCode",{parentName:"p"},"padding")," de los botones, los m\xe1rgenes entre p\xe1rrafos, o si queremos que el tama\xf1o de una fuente sea siempre la mitad de la del padre:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h1>\n  T\xedtulo\n  <small style="font-size: 0.5em">Subt\xedtulo</small>\n</h1>\n')),(0,r.kt)("p",null,"En este caso el tama\xf1o de la fuente del subt\xedtulo va a ser exactamente la mitad del tama\xf1o del t\xedtulo."),(0,r.kt)("h3",{id:"porcentajes-"},"Porcentajes ","(","%",")"),(0,r.kt)("p",null,"Permiten definir una medida como un porcentaje del elemento padre. En general los porcentajes no se recomiendan excepto en ocasiones muy puntuales, por ejemplo, cuando necesitamos un ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," que ocupe el 50% del elemento padre."),(0,r.kt)("p",null,"Sin embargo, un uso de los porcentajes es definir el tama\xf1o de la fuente ra\xedz del documento (la del elemento ",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"). Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"html {\n  font-size: 90%;\n}\n\n/* podemos cambiar el porcentaje utilizando media queries, por ejemplo: */\n@media (min-width: 768px) {\n  html { font-size: 100%; }\n}\n\n@media (min-width: 1200px) {\n  html { font-size: 110%; }\n}\n")),(0,r.kt)("p",null,"Esto le permite al usuario cambiar el tama\xf1o del navegador en las configuraciones y que el texto de nuestra p\xe1gina se ajuste acorde. En este ejemplo, si el usuario cambia la fuente del navegador a ",(0,r.kt)("inlineCode",{parentName:"p"},"20px"),", el tama\xf1o de la fuenta ser\xe1 de ",(0,r.kt)("inlineCode",{parentName:"p"},"18px")," (antes de aplicar los media queries)."),(0,r.kt)("p",null,"En la pr\xe1ctica no es muy com\xfan que las personas cambien el tama\xf1o de la fuente del navegador, pero es buena pr\xe1ctica permitir esta opci\xf3n."),(0,r.kt)("h3",{id:"viewport-width-vw"},"Viewport width ","(","vw",")"),(0,r.kt)("p",null,"El viewport es el \xe1rea visible que ve el usuario en el navegador. ",(0,r.kt)("inlineCode",{parentName:"p"},"1vw")," representa ",(0,r.kt)("inlineCode",{parentName:"p"},"1%")," del ",(0,r.kt)("strong",{parentName:"p"},"ancho")," del viewport. La diferencia con los porcentajes es que no depende del tama\xf1o del elemento padre, siempre se calcula sobre el tama\xf1o completo del viewport."),(0,r.kt)("h3",{id:"viewport-height-vh"},"Viewport height ","(","vh",")"),(0,r.kt)("p",null,"Similar al viewport width ","(",(0,r.kt)("inlineCode",{parentName:"p"},"vw"),")"," pero del ",(0,r.kt)("strong",{parentName:"p"},"alto")," del navegador."),(0,r.kt)("h3",{id:"otras"},"Otras"),(0,r.kt)("p",null,"Hay dos unidades que vale la pena mencionar. ",(0,r.kt)("inlineCode",{parentName:"p"},"vmin"),", que toma el tama\xf1o m\xednimo entre el alto y el ancho del viewport y ",(0,r.kt)("inlineCode",{parentName:"p"},"vmax"),", que toma el tama\xf1o m\xe1s grande entre el alto y el ancho del viewport."),(0,r.kt)("h2",{id:"medidas-absolutas"},"Medidas absolutas"),(0,r.kt)("p",null,"La \xfanica medida absoluta que vale la pena mencionar son los pixeles (",(0,r.kt)("inlineCode",{parentName:"p"},"px"),"). Existen otras que se utilizan cuando se va a imprimir una p\xe1gina (que hoy en d\xeda no es muy com\xfan que se haga): centr\xedmetos ","(",(0,r.kt)("inlineCode",{parentName:"p"},"cm"),")",", mil\xedmetros ","(",(0,r.kt)("inlineCode",{parentName:"p"},"mm"),")",", pulgadas ","(",(0,r.kt)("inlineCode",{parentName:"p"},"in"),")",", puntos ","(",(0,r.kt)("inlineCode",{parentName:"p"},"pt"),")"," y picas ","(",(0,r.kt)("inlineCode",{parentName:"p"},"pc"),")","."),(0,r.kt)("h3",{id:"pixeles-px"},"Pixeles ","(","px",")"),(0,r.kt)("p",null,"Los pixeles son \xfatiles en medidas que se deben mantener igual sin importar el tama\xf1o de la pantalla, por ejemplo para definir bordes, ciertos posicionamientos absolutos, los breakpoints de los media queries, entre otros."),(0,r.kt)("p",null,"En la pr\xe1ctica toma tiempo dejar de usar pixeles y acostumbrarse a usar unidades relativas. Sin embargo, las ventajas se vuelven evidentes cuando se trabaja con sitios o aplicaciones que se deben ajustar a diferentes tama\xf1os de pantallas, que hoy son la gran mayor\xeda (por no decir todas)."))}u.isMDXComponent=!0}}]);