"use strict";(self.webpackChunkmir_guia=self.webpackChunkmir_guia||[]).push([[6570],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>v});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),c=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,l(l({ref:a},u),{},{components:n})):r.createElement(v,l({ref:a},u))}));function v(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:t,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9324:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),t=(n(7294),n(3905));const o={},l="Scope, hoisting, closures",i={unversionedId:"javascript/avanzado/scope-hoisting-closures",id:"javascript/avanzado/scope-hoisting-closures",title:"Scope, hoisting, closures",description:"En este capitulo vamos a hablar de algunos conceptos importantes que te van a ayudar a ser un(a) mejor programador(a) en JavaScript.",source:"@site/docs/javascript/avanzado/scope-hoisting-closures.md",sourceDirName:"javascript/avanzado",slug:"/javascript/avanzado/scope-hoisting-closures",permalink:"/docs/javascript/avanzado/scope-hoisting-closures",draft:!1,editUrl:"https://github.com/makeitrealcamp/new-guides/tree/main/docs/javascript/avanzado/scope-hoisting-closures.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Programaci\xf3n funcional",permalink:"/docs/javascript/avanzado/programacion-funcional"},next:{title:"Programaci\xf3n asincr\xf3nica",permalink:"/docs/javascript/avanzado/programacion-asincronica"}},s={},c=[{value:"Scope",id:"scope",level:2},{value:"Hoisting",id:"hoisting",level:2},{value:"Closures",id:"closures",level:2},{value:"<code>&quot;use strict&quot;</code>",id:"use-strict",level:2}],u={toc:c},p="wrapper";function d(e){let{components:a,...n}=e;return(0,t.kt)(p,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"scope-hoisting-closures"},"Scope, hoisting, closures"),(0,t.kt)("p",null,"En este capitulo vamos a hablar de algunos conceptos importantes que te van a ayudar a ser un(a) mejor programador(a) en JavaScript."),(0,t.kt)("h2",{id:"scope"},"Scope"),(0,t.kt)("p",null,"El scope define el alcance o la visibilidad de las variables en alg\xfan punto de la ejecuci\xf3n del c\xf3digo."),(0,t.kt)("p",null,"En los navegadores existe un ",(0,t.kt)("strong",{parentName:"p"},"scope global"),", que es el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"window"),"; en Node.js es el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"global"),"."),(0,t.kt)("p",null,"Con ",(0,t.kt)("inlineCode",{parentName:"p"},"var")," la \xfanica forma de limitar el alcance de una variable era defini\xe9ndola dentro de una funci\xf3n:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"var a = 5 // variable global\n\nfunction fn() {\n  var b = 5 // visible s\xf3lo dentro de la funci\xf3n\n}\nfn()\n\nconsole.log(a) // 5\nconsole.log(b) // undefined o error (b no est\xe1 definido)\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"let")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"const")," limitan el alcance por ",(0,t.kt)("strong",{parentName:"p"},"bloque"),", es decir, dentro de un condicional, ciclo, funci\xf3n, etc., que es como funcionan la mayor\xeda de lenguajes de programaci\xf3n."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"if (true) {\n  var a = 5\n  let b = 5\n  const c = 5\n}\n\nconsole.log(a) // 5\nconsole.log(b) // undefined o error (b no est\xe1 definido)\nconsole.log(c) // undefined o error (c no est\xe1 definido)\n")),(0,t.kt)("p",null,"No olvides la palabra ",(0,t.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"let")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"const")," al definir una variable o autom\xe1ticamente se crear\xe1 una ",(0,t.kt)("strong",{parentName:"p"},"variable global"),"."),(0,t.kt)("h2",{id:"hoisting"},"Hoisting"),(0,t.kt)("p",null,"Hoisting es el comportamiento por defecto de JavaScript en el que la declaraci\xf3n de variables y funciones se mueve autom\xe1ticamente al principio del scope (ya sea el principio del archivo, la funci\xf3n o el bloque). Veamos un ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'hello()\n\nfunction hello() {\n  console.log("Hola")\n}\n')),(0,t.kt)("p",null,"A pesar de que estamos invocando la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"hello")," antes de definirla, esto funciona: la declaraci\xf3n de la funci\xf3n se mueve al principio del archivo antes de ejecutarlo."),(0,t.kt)("p",null,"La declaraci\xf3n de las variables tambi\xe9n se mueve, pero no la inicializaci\xf3n. Considera el siguiente ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(x);\nlet x = 5;\n")),(0,t.kt)("p",null,"El resultado de este c\xf3digo es ",(0,t.kt)("inlineCode",{parentName:"p"},"undefined")," porque, aunque la declaraci\xf3n de ",(0,t.kt)("inlineCode",{parentName:"p"},"x")," se mueve al principio, la inicializaci\xf3n no. El anterior c\xf3digo es equivalente a lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let x;\nconsole.log(x);\nx = 5;\n")),(0,t.kt)("p",null,"De nuevo, ",(0,t.kt)("strong",{parentName:"p"},"lo que se mueve es la declaraci\xf3n de la variable, no la inicializaci\xf3n"),". Por esta raz\xf3n, si asignamos una funci\xf3n a una variable, la funci\xf3n no se mueve al principio y no la vamos a poder invocar antes:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'hello(); // Error, hello no es una funci\xf3n!!!\n\nconst hello = function() {\n  console.log("Hola");\n}\n')),(0,t.kt)("p",null,"Lo mismo ocurrir\xeda si cambiamos la funci\xf3n por una funci\xf3n flecha."),(0,t.kt)("h2",{id:"closures"},"Closures"),(0,t.kt)("p",null,"En JavaScript las funciones pueden referenciar variables externas. Por otro lado, las funciones se pueden mover de un lado a otro: se pueden asignar a variables, pasar como argumento de otra funci\xf3n y retornar desde otra funci\xf3n."),(0,t.kt)("p",null,"La pregunta es \xbfsi movemos una funci\xf3n, qu\xe9 pasa con las variables externas a las que ten\xeda acceso antes que se moviera?"),(0,t.kt)("p",null,"La respuesta es que, en JavaScript, cuando una funci\xf3n se mueve de un lado a otro, no s\xf3lo se mueve la funci\xf3n, tambi\xe9n se mantiene la referencia a las variables externas a las que ten\xeda acceso en un principio. A esto se le conoce como un ",(0,t.kt)("strong",{parentName:"p"},"closure")," (cerradura)."),(0,t.kt)("p",null,"En JavaScript todas las funciones son clousures."),(0,t.kt)("p",null,"Vemaos un ejemplo."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'const hello = function() {\n  const name = "Pedro"\n  return function() {\n    console.log(`Hello ${name}`) // mantiene la referencia a name\n  }\n}\n\nconst newHello = hello()\nnewHello() // "Hello Pedro"\n')),(0,t.kt)("p",null,"La funci\xf3n que retorna ",(0,t.kt)("inlineCode",{parentName:"p"},"hello")," utiliza una variable externa ",(0,t.kt)("inlineCode",{parentName:"p"},"name"),". En la l\xednea 8 estamos almacenando la funci\xf3n retornada en una variable ",(0,t.kt)("inlineCode",{parentName:"p"},"newHello"),". Cuando invocamos la funci\xf3n se mantiene la referencia a la variable ",(0,t.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,t.kt)("h2",{id:"use-strict"},(0,t.kt)("inlineCode",{parentName:"h2"},'"use strict"')),(0,t.kt)("p",null,"La directiva ",(0,t.kt)("inlineCode",{parentName:"p"},'"use strict"')," fue introducida en ES5 para evitar lo que se consideran malas pr\xe1cticas en JavaScript (p.e. utilizar variables no declaradas). En vez de ignorar la mala pr\xe1ctica se genera un error."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'"use strict"\n\nx = 5 // error, x no est\xe1 definida\n')),(0,t.kt)("p",null,"La directiva ",(0,t.kt)("inlineCode",{parentName:"p"},'"use strict"')," es ignorada por versiones anteriores de JavaScript."),(0,t.kt)("p",null,"Puedes ubicar ",(0,t.kt)("inlineCode",{parentName:"p"},'"use strict"')," al principio de un archivo (alcance global) o de una funci\xf3n (alcance local)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'function estricta() {\n  "use strict" // solo aplica a la funci\xf3n\n\n  // ...\n}\n')),(0,t.kt)("p",null,"Algunas de las malas pr\xe1cticas que ",(0,t.kt)("inlineCode",{parentName:"p"},'"use strict"')," evita son:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Utilizar variables no declaradas."),(0,t.kt)("li",{parentName:"ul"},"Utilizar ",(0,t.kt)("inlineCode",{parentName:"li"},"eval")," (",(0,t.kt)("inlineCode",{parentName:"li"},"eval")," permite evaluar c\xf3digo a partir de un string)."),(0,t.kt)("li",{parentName:"ul"},"Utilizar palabras reservadas en nombres de variables.")))}d.isMDXComponent=!0}}]);