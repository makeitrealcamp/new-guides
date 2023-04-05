"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[6125],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>v});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?t.createElement(v,l(l({ref:n},u),{},{components:a})):t.createElement(v,l({ref:n},u))}));function v(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4744:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(7462),o=(a(7294),a(3905));const r={},l="Escuchando eventos",i={unversionedId:"javascript/navegador/escuchando-eventos",id:"javascript/navegador/escuchando-eventos",title:"Escuchando eventos",description:"Para escuchar eventos (del mouse, teclado, etc.) utiliza el m\xe9todo addEventListener sobre cualquier elemento. Por ejemplo, si queremos escuchar el evento click del primer p\xe1rrafo utilizar\xedamos el siguiente c\xf3digo:",source:"@site/docs/javascript/navegador/escuchando-eventos.md",sourceDirName:"javascript/navegador",slug:"/javascript/navegador/escuchando-eventos",permalink:"/docs/javascript/navegador/escuchando-eventos",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/javascript/navegador/escuchando-eventos.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Manipulando HTML",permalink:"/docs/javascript/navegador/manipulando-html"},next:{title:"local-storage",permalink:"/docs/javascript/navegador/local-storage"}},s={},c=[{value:"Eventos del mouse",id:"eventos-del-mouse",level:2},{value:"Eventos del teclado",id:"eventos-del-teclado",level:2},{value:"Eventos sobre formularios",id:"eventos-sobre-formularios",level:2},{value:"Evitando la acci\xf3n por defecto",id:"evitando-la-acci\xf3n-por-defecto",level:2},{value:"Delegaci\xf3n de eventos",id:"delegaci\xf3n-de-eventos",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"escuchando-eventos"},"Escuchando eventos"),(0,o.kt)("p",null,"Para escuchar eventos (del mouse, teclado, etc.) utiliza el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," sobre cualquier elemento. Por ejemplo, si queremos escuchar el evento ",(0,o.kt)("inlineCode",{parentName:"p"},"click")," del primer p\xe1rrafo utilizar\xedamos el siguiente c\xf3digo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let p = document.querySelector("p");\np.addEventListener("click", function() {\n  alert("Hello");\n});\n')),(0,o.kt)("p",null,"Primero estamos seleccionamos el elemento sobre el que queremos escuchar los eventos. El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," recibe el nombre del evento ","(","en este caso el ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),")"," y una funci\xf3n que se ejecuta cuando ocurre el evento."),(0,o.kt)("p",null,"A la ",(0,o.kt)("strong",{parentName:"p"},"funci\xf3n")," que recibe el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," se le llama un ",(0,o.kt)("strong",{parentName:"p"},"callback")," y puede recibir un argumento con ",(0,o.kt)("strong",{parentName:"p"},"informaci\xf3n del evento"),". De esto hablaremos m\xe1s adelante."),(0,o.kt)("p",null,"Para escuchar los eventos de varios elementos seleccionados con ",(0,o.kt)("inlineCode",{parentName:"p"},"querySelectorAll")," debes realizar lo siguiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let ps = document.querySelectorAll("p");\n\nps.forEach(function(p) {\n    p.addEventListener("click", function() {\n        alert("Hello");\n    });\n});\n')),(0,o.kt)("h2",{id:"eventos-del-mouse"},"Eventos del mouse"),(0,o.kt)("p",null,"Los eventos m\xe1s comunes que puedes escuchar del mouse son los siguientes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"click")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dblclick")," - doble click"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mouseenter")," - se dispara cuando el mouse ",(0,o.kt)("strong",{parentName:"li"},"entra")," sobre alguno de los elementos seleccionados."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mouseleave")," - se dispara cuando el mouse ",(0,o.kt)("strong",{parentName:"li"},"sale")," de alguno de los elementos seleccionados."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mouseover")," - se dispara cuando el mouse ",(0,o.kt)("strong",{parentName:"li"},"entra o sale")," de alguno de los elementos seleccionados."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mousemove")," - se dispara cuando el mouse ",(0,o.kt)("strong",{parentName:"li"},"se mueve")," dentro de alguno de los elementos seleccionados.")),(0,o.kt)("p",null,"La funci\xf3n que le pasamos al m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," recibe un argumento con informaci\xf3n del evento. Por ejemplo, a trav\xe9s de este objeto podemos obtener la posici\xf3n del mouse cada vez que se mueve:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'document.addEventListener(\'mousemove\', function(e) {\n  console.log("El mouse se encuentra en las coordenadas:" + e.pageX + ", " + e.pageY);\n});\n')),(0,o.kt)("h2",{id:"eventos-del-teclado"},"Eventos del teclado"),(0,o.kt)("p",null,"Existen tres eventos que puedes escuchar del teclado:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keydown")," - se dispara cuando oprimes una tecla."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keypress")," - similar a ",(0,o.kt)("inlineCode",{parentName:"li"},"keydown")," pero no aplica para teclas como ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Esc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Alt"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keyup")," - se dispara cuando ",(0,o.kt)("strong",{parentName:"li"},"sueltas")," una tecla.")),(0,o.kt)("p",null,"El m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"which")," del evento retorna el c\xf3digo de la tecla oprimida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('keyup', function(e) {\n  console.log(\"La tecla oprimida fue \" + e.which);\n});\n")),(0,o.kt)("p",null,"Para ver la lista de c\xf3digos y a qu\xe9 tecla corresponden sigue ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/javascript/javascript-keycodes/"},"este enlace"),"."),(0,o.kt)("h2",{id:"eventos-sobre-formularios"},"Eventos sobre formularios"),(0,o.kt)("p",null,"Sobre los formularios ","(","y los elementos del formulario",")"," puedes escuchar los siguientes eventos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blur")," - se dispara cuando un elemento pierde el foco."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"change")," - se dispara cuando un elemento cambia."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"focus")," - se dispara cuando un elemento recibe el foco."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"submit")," - se dispara cuando el formulario se env\xeda.")),(0,o.kt)("h2",{id:"evitando-la-acci\xf3n-por-defecto"},"Evitando la acci\xf3n por defecto"),(0,o.kt)("p",null,"Para evitar que ocurra la acci\xf3n por defecto ","(","p.e. que un link no cambie la p\xe1gina o que un formulario no sea enviado",")"," puedes utilizar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"preventDefault()")," sobre el argumento que llega en la funci\xf3n."),(0,o.kt)("p",null,"Por ejemplo, el siguiente ejemplo intercepta todos los clicks sobre links y evita que cambie la p\xe1gina:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let a = document.querySelector("a");\na.addEventListener(\'click\', function(e) {\n  e.preventDefault();\n  alert("Oprimiste un link pero ha sido interceptado ... muajaja");\n});\n')),(0,o.kt)("h2",{id:"delegaci\xf3n-de-eventos"},"Delegaci\xf3n de eventos"),(0,o.kt)("p",null,"La mayor\xeda de eventos se disparan primero sobre el elemento que ocurren, y despu\xe9s se disparan sobre el elemento padre, el padre del padre, y as\xed sucesivamente hasta ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),", y por \xfaltimo ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,o.kt)("p",null,"Para detener este proceso puedes utilizar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"stopPropagation")," del evento:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let p = document.querySelector("p");\np.addEventListener(\'click\', function(e) {\n  e.stopPropagation();\n  alert("Este evento no se va a propagar a los padres");\n});\n')))}d.isMDXComponent=!0}}]);