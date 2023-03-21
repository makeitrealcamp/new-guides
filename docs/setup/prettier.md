# Formateadores de código

Los formateadores de código son herramientas de software que se utilizan para aplicar un estilo consistente y ordenado a un código fuente. Estas herramientas permiten a los programadores automatizar el proceso de dar formato al código, lo que puede ahorrar tiempo y reducir los errores humanos.

Los formateadores de código pueden utilizarse para aplicar una amplia variedad de estilos de formato, incluyendo la indentación, la alineación de los paréntesis y los corchetes, el uso de espacios en blanco, la longitud de las líneas, entre otros. Algunas herramientas incluso pueden aplicar reglas específicas de estilo de código para diferentes lenguajes de programación.

Además de ayudar a mantener un código fuente más legible y fácil de entender, los formateadores de código también pueden ser útiles para asegurarse de que el código cumpla con los estándares de codificación establecidos en una organización o equipo de desarrollo.

## Prettier

[Prettier](https://prettier.io/) es un formateador de código de código abierto y altamente configurable. Es una herramienta muy popular en la comunidad de desarrolladores de JavaScript y es compatible con muchos editores de código, incluyendo Visual Studio Code. [Prettier](https://prettier.io/) permite a los desarrolladores configurar las reglas que se aplicarán a su código y darle formato. También proporciona correcciones automáticas para algunos de los problemas detectados, lo que hace que sea más fácil corregir los problemas de código.


## Instalación
El proceso de instalación de [Prettier](https://prettier.io/) en tu proyecto de JavaScript es relativamente sencillo, debes ejecutar el siguiente comando en la terminal:

```bash
npm install -D prettier
```

## Configuración

Para configurar [Prettier](https://prettier.io/), debes crear un archivo llamado `.prettierrc` en la raíz de tu proyecto. Este archivo debe contener las reglas que se aplicarán a tu código. Por ejemplo, si deseas configurar [Prettier](https://prettier.io/) para que use comillas simples en lugar de comillas dobles, debes agregar el siguiente código al archivo `.prettierrc`:

```json
{
  "singleQuote": true
}
```

## Uso

Para usar [Prettier](https://prettier.io/), debes ejecutar el siguiente comando en la terminal:

```bash
npx prettier --write .
```

Este comando formateará todo el código fuente de tu proyecto. Si deseas formatear un archivo específico, debes reemplazar el punto (`.`) por el nombre del archivo.

## Integración con Visual Studio Code

Para integrar [Prettier](https://prettier.io/) con Visual Studio Code, debes instalar la extensión [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Esta extensión te permitirá formatear el código de tu proyecto con un solo clic.

## Integración con ESLint

Para integrar [Prettier](https://prettier.io/) con ESLint, debes instalar la extensión [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier). Esta extensión te permitirá deshabilitar las reglas de ESLint que pueden entrar en conflicto con las reglas de [Prettier](https://prettier.io/).

```bash
npm install -D eslint-config-prettier
```

Luego, debes agregar la extensión `prettier` a la sección `extends` de tu archivo `.eslintrc.json`:

```json
{
  "extends": ["prettier"]
}
```

Esto deshabilitará todas las reglas que puedan entrar en conflicto con las reglas de [Prettier](https://prettier.io/).
