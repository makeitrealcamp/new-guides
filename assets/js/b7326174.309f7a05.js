"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[6062],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>k});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?t.createElement(k,l(l({ref:n},d),{},{components:a})):t.createElement(k,l({ref:n},d))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7887:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=a(7462),r=(a(7294),a(3905));const o={},l="Flexbox",i={unversionedId:"html-y-css/flexbox",id:"html-y-css/flexbox",title:"Flexbox",description:"Flexbox es una nueva forma de organizar y distribuir los elementos HTML.",source:"@site/docs/html-y-css/flexbox.md",sourceDirName:"html-y-css",slug:"/html-y-css/flexbox",permalink:"/docs/html-y-css/flexbox",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/html-y-css/flexbox.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Unidades en CSS",permalink:"/docs/html-y-css/unidades"},next:{title:"JavaScript",permalink:"/docs/javascript/"}},p={},s=[{value:"Contenedor",id:"contenedor",level:4},{value:"\xcdtems",id:"\xedtems",level:4},{value:"Algunos ejemplos",id:"algunos-ejemplos",level:2},{value:"Propiedades para el contenedor",id:"propiedades-para-el-contenedor",level:2},{value:"Direcci\xf3n",id:"direcci\xf3n",level:3},{value:"Wrap",id:"wrap",level:3},{value:"Alineaci\xf3n horizontal",id:"alineaci\xf3n-horizontal",level:3},{value:"Alineaci\xf3n vertical",id:"alineaci\xf3n-vertical",level:3},{value:"Propiedades para los \xedtems",id:"propiedades-para-los-\xedtems",level:2},{value:"Orden",id:"orden",level:3},{value:"Incrementar el tama\xf1o",id:"incrementar-el-tama\xf1o",level:3},{value:"Encoger el tama\xf1o",id:"encoger-el-tama\xf1o",level:3},{value:"Definir el ancho",id:"definir-el-ancho",level:3},{value:"Atajo",id:"atajo",level:3},{value:"Alineaci\xf3n",id:"alineaci\xf3n",level:3}],d={toc:s},m="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flexbox"},"Flexbox"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flexbox")," es una nueva forma de organizar y distribuir los elementos HTML."),(0,r.kt)("p",null,"{% youtube %} ",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=cjsvASZWsxs"},"https://youtube.com/watch?v=cjsvASZWsxs")," {% endyoutube %}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flexbox")," incluye un nuevo valor ",(0,r.kt)("inlineCode",{parentName:"p"},"flex")," para la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"display")," de CSS y un conjunto de nuevas ",(0,r.kt)("strong",{parentName:"p"},"propiedades de CSS")," como ",(0,r.kt)("inlineCode",{parentName:"p"},"justify-content"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"align-items")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction"),", entre otros."),(0,r.kt)("p",null,"La mayor\xeda de navegadores ya soportan ",(0,r.kt)("strong",{parentName:"p"},"Flexbox")," a excepci\xf3n de Internet Explorer 8 y 9."),(0,r.kt)("p",null,"Los conceptos m\xe1s importantes de ",(0,r.kt)("strong",{parentName:"p"},"Flexbox")," son el ",(0,r.kt)("strong",{parentName:"p"},"contenedor")," y los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems"),":"),(0,r.kt)("h4",{id:"contenedor"},"Contenedor"),(0,r.kt)("p",null,"Es el elemento padre de los elementos que queremos organizar."),(0,r.kt)("h4",{id:"\xedtems"},"\xcdtems"),(0,r.kt)("p",null,"Los hijos directos del ",(0,r.kt)("strong",{parentName:"p"},"contenedor"),". Un ",(0,r.kt)("strong",{parentName:"p"},"\xedtem")," tambi\xe9n puede ser el ",(0,r.kt)("strong",{parentName:"p"},"contenedor")," de otros elementos."),(0,r.kt)("p",null,"Algunas de las ",(0,r.kt)("strong",{parentName:"p"},"propiedades de CSS")," que introduce ",(0,r.kt)("strong",{parentName:"p"},"Flexbox")," aplican a los ",(0,r.kt)("strong",{parentName:"p"},"contenedores")," y otras a los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems"),"."),(0,r.kt)("h2",{id:"algunos-ejemplos"},"Algunos ejemplos"),(0,r.kt)("p",null,"Antes de describir las ",(0,r.kt)("strong",{parentName:"p"},"propiedades de CSS")," veamos algunos ejemplos para que te des una idea de lo que se puede hacer con ",(0,r.kt)("strong",{parentName:"p"},"Flexbox"),"."),(0,r.kt)("p",null,"Veamos un primer ejemplo. Imag\xedna que queremos mostrar tres elementos dentro de un ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," separados por espacios iguales ","(","consulta el HTML y CSS haciendo click en la pesta\xf1a respectiva",")",":   "),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/opZxBp%22"},'https://codepen.io/germanescobar/pen/opZxBp"')," %}"),(0,r.kt)("p",null,"Aunque antes exist\xedan varios trucos para obtener el mismo resultado, con ",(0,r.kt)("strong",{parentName:"p"},"Flexbox")," ahora tenemos una forma m\xe1s f\xe1cil y est\xe1ndar de hacerlo."),(0,r.kt)("p",null,"Veamos otro ejemplo, uno que es particularmente dif\xedcil sin ",(0,r.kt)("strong",{parentName:"p"},"Flexbox"),": centrar un elemento vertical y horizontalmente:"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/KZWQxV%22"},'https://codepen.io/germanescobar/pen/KZWQxV"')," %}"),(0,r.kt)("h2",{id:"propiedades-para-el-contenedor"},"Propiedades para el contenedor"),(0,r.kt)("p",null,"Para utilizar ",(0,r.kt)("strong",{parentName:"p"},"Flexbox")," debes aplicarle ",(0,r.kt)("inlineCode",{parentName:"p"},"display: flex")," al ",(0,r.kt)("strong",{parentName:"p"},"contendor"),". Por ejemplo, si el contenedor tiene clase ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," definir\xedamos la siguiente regla CSS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  display: flex;\n}\n")),(0,r.kt)("p",null,"Eso es todo! Por defecto, los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," ","(","los hijos del ",(0,r.kt)("strong",{parentName:"p"},"contenedor"),")"," se van a posicionar de forma horizontal de izquierda a derecha ",(0,r.kt)("strong",{parentName:"p"},"en una misma l\xednea"),", sin importar si son elementos de bloque o en l\xednea:"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/PEpQLr%22"},'https://codepen.io/germanescobar/pen/PEpQLr"')," %}"),(0,r.kt)("p",null,"Para cambiar la distribuci\xf3n de los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," se utilizan las propiedades ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"justify-content")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"align-items")," sobre el ",(0,r.kt)("strong",{parentName:"p"},"contenedor"),"."),(0,r.kt)("h3",{id:"direcci\xf3n"},"Direcci\xf3n"),(0,r.kt)("p",null,"Por defecto los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," se ubican de izquierda a derecha. Sin embargo podemos cambiar la direcci\xf3n utilizando la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," que puede tener alguno de los siguientes valores:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"row"),": es el valor por defecto, los ",(0,r.kt)("strong",{parentName:"li"},"\xedtems")," se posicionan de izquierda a derecha."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"row-reverse"),": los ",(0,r.kt)("strong",{parentName:"li"},"\xedtems")," se posici\xf3nan de derecha a izquierda."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column"),": los ",(0,r.kt)("strong",{parentName:"li"},"items")," se posicionan verticalmente, de arriba hacia abajo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column-reverse"),": los ",(0,r.kt)("strong",{parentName:"li"},"\xedtems")," se posicionan verticalmente, de abajo hacia arriba.")),(0,r.kt)("p",null,"Por ejemplo, para mostrar los elementos de derecha a izquierda podemos utilizar el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"row-reverse"),":"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/xpqWZz%22"},'https://codepen.io/germanescobar/pen/xpqWZz"')," %}"),(0,r.kt)("p",null,"Puedes editar este ejemplo y cambiar el valor de ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," para experimentar."),(0,r.kt)("h3",{id:"wrap"},"Wrap"),(0,r.kt)("p",null,"Por defecto, si no hay suficiente espacio en el ",(0,r.kt)("strong",{parentName:"p"},"contenedor"),", los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," se salen del espacio. Sin embargo, utilizando la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap")," puedes modificar este comportamiento. Los valores que puede recibir ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap")," son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no-wrap"),": es el valor por defecto, los ",(0,r.kt)("strong",{parentName:"li"},"\xedtems")," se salen del ",(0,r.kt)("strong",{parentName:"li"},"contenedor")," si no hay espacio."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wrap"),": los ",(0,r.kt)("strong",{parentName:"li"},"\xedtems")," se posicionan en nuevas filas si no hay espacio."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wrap-reverse"),": similar a ",(0,r.kt)("inlineCode",{parentName:"li"},"wrap")," pero en vez de agregar filas debajo, se agregan encima.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," si cambias la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"column-reverse"),", los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," se ubican en nuevas columnas, no filas, cuando utilizas el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap-reverse"),"."),(0,r.kt)("p",null,"Por ejemplo, si queremos que los elementos que no quepan se ubiquen en nuevas filas podemos asignarle el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap"),":"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/rpydLp%22"},'https://codepen.io/germanescobar/pen/rpydLp"')," %}"),(0,r.kt)("h3",{id:"alineaci\xf3n-horizontal"},"Alineaci\xf3n horizontal"),(0,r.kt)("p",null,"Para alinear los \xedtems de forma horizontal se utiliza la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"justify-content")," sobre el contendedor. Los posibles valores son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex-start"),": es el valor por defecto, los items se al\xednean a la izquierda del contenedor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex-end"),": los \xedtems se al\xednean a la derecha del contenedor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"center"),": los \xedtems se al\xednean en el centro del contenedor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"space-between"),": los \xedtems se separan por espacios iguales ocupando todo el contenedor ","(","los \xedtems de los extremos se ubican en los extremos del contendor",")","."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"space-around"),": los \xedtems se distribuyen uniformemente en el contenedor.")),(0,r.kt)("p",null,"Por ejemplo, el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"space-around")," se ve de la siguiente forma:"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/vpxzJy%22"},'https://codepen.io/germanescobar/pen/vpxzJy"')," %}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," si cambias la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"column-reverse"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"justify-content")," se utiliza para alinear los \xedtems de forma vertical ","(","por eso se utiliza ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-start")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-end")," en vez de ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),")","."),(0,r.kt)("h3",{id:"alineaci\xf3n-vertical"},"Alineaci\xf3n vertical"),(0,r.kt)("p",null,"Para alinear los \xedtems de forma vertical se utiliza la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"align-items")," sobre el contenedor. Los posibles valores son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stretch"),": el valor por defecto, los \xedtems se estiran para ocupar todo el espacio vertical."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex-start"),": los \xedtems se al\xednean en la parte superior del contenedor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex-end"),": los \xedtems se al\xednean en la parte inferior del contendor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"center"),": los \xedtems se al\xednean en el medio del contendor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseline"),": se posicionan con respecto a la l\xednea base del texto del contenedor.")),(0,r.kt)("p",null,"Por ejemplo, el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-end")," se ve de la siguiente forma cuando los \xedtems tienen diferentes tama\xf1os:"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/germanescobar/pen/xpqaXb%22"},'https://codepen.io/germanescobar/pen/xpqaXb"')," %}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," si cambias la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"column-reverse"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"align-items")," se utiliza para alinear los \xedtems de forma horizontal ","(","por eso se utiliza ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-start")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-end")," en vez de ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),")","."),(0,r.kt)("h2",{id:"propiedades-para-los-\xedtems"},"Propiedades para los \xedtems"),(0,r.kt)("p",null,"Con lo que has visto hasta ahora puedes solucionar la mayor\xeda de distribuciones utilizando ",(0,r.kt)("strong",{parentName:"p"},"Flexbox"),". Incluso las propiedades m\xe1s comunes son s\xf3lo ",(0,r.kt)("inlineCode",{parentName:"p"},"justify-content")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"align-items"),"."),(0,r.kt)("p",null,"Sin embargo, existen otras propiedades que puedes aplicar sobre los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," como ",(0,r.kt)("inlineCode",{parentName:"p"},"order"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-grow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-shrink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-basis"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flex")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"align-self"),":"),(0,r.kt)("h3",{id:"orden"},"Orden"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," te permite cambiar el orden de los ",(0,r.kt)("strong",{parentName:"p"},"\xedtems")," en un ",(0,r.kt)("strong",{parentName:"p"},"contenedor"),"."),(0,r.kt)("h3",{id:"incrementar-el-tama\xf1o"},"Incrementar el tama\xf1o"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-grow")," te permite incrementar el tama\xf1o de un ",(0,r.kt)("strong",{parentName:"p"},"item")," con respecto a los dem\xe1s."),(0,r.kt)("h3",{id:"encoger-el-tama\xf1o"},"Encoger el tama\xf1o"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-shrink")," te permite definir cu\xe1nto se va a encoger un ",(0,r.kt)("strong",{parentName:"p"},"\xedtem")," con respecto a los dem\xe1s cuando el espacio es reducido."),(0,r.kt)("h3",{id:"definir-el-ancho"},"Definir el ancho"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-basis")," te permite definir el ancho de un ",(0,r.kt)("strong",{parentName:"p"},"\xedtem"),"."),(0,r.kt)("h3",{id:"atajo"},"Atajo"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"flex")," es un atajo para definir las propiedades ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-grow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-shrink")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-basis")," de un ",(0,r.kt)("strong",{parentName:"p"},"\xedtem"),"."),(0,r.kt)("h3",{id:"alineaci\xf3n"},"Alineaci\xf3n"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"self-align")," permite sobrescribir el valor de la pripiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"align-items")," del ",(0,r.kt)("strong",{parentName:"p"},"contenedor"),"."))}c.isMDXComponent=!0}}]);