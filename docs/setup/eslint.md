# Linters

Los linters son herramientas que analizan el código fuente en busca de errores, problemas de sintaxis y estilos de codificación inconsistentes. Son herramientas útiles para asegurarse de que el código cumpla con los estándares de codificación establecidos y que no contenga errores o problemas que puedan causar problemas en el funcionamiento del software.

## ESLint

[Eslint](https://eslint.org/) es un linter para JavaScript de código abierto y altamente configurable. Es una herramienta muy popular en la comunidad de desarrolladores de JavaScript y es compatible con muchos editores de código, incluyendo Visual Studio Code.

[Eslint](https://eslint.org/) permite a los desarrolladores configurar las reglas que se aplicarán a su código y analizarlo en busca de errores y problemas de estilo. También proporciona correcciones automáticas para algunos de los problemas detectados, lo que hace que sea más fácil corregir los problemas de código.

[Eslint](https://eslint.org/) también es altamente personalizable y se puede integrar con otras herramientas de desarrollo, como control de versiones y automatización de tareas. Esto hace que sea más fácil trabajar en proyectos de equipo y asegurarse de que el código sea consistente y cumpla con los estándares de codificación establecidos.

Dentro de Make It Real, usamos la guiá de estilos de [Airbnb](https://github.com/airbnb/javascript) para JavaScript. Esta guía de estilos es una guía de estilos de JavaScript popular que proporciona reglas para escribir código JavaScript consistente y legible. También proporciona reglas para escribir código React consistente y legible. Esta guía de estilos es ampliamente utilizada en la comunidad de desarrolladores de JavaScript y es compatible con [Eslint](https://eslint.org/).

### Instalación

Para instalar [Eslint](https://eslint.org/) en tu proyecto, debes ejecutar el siguiente comando en la terminal:

```bash
npm install eslint --save-dev
```

### Configuración

Para configurar [Eslint](https://eslint.org/) en tu proyecto, debes ejecutar el siguiente comando en la terminal:

```bash
npx eslint --init
```

Este comando te guiará a través de un proceso de configuración que te permitirá establecer las reglas que se aplicarán a tu código. Al final del proceso, se creará un archivo `.eslintrc.json` en el directorio raíz de tu proyecto.

### Ejecución

Para ejecutar [Eslint](https://eslint.org/) en tu proyecto, debes ejecutar el siguiente comando en la terminal:

```bash
npx eslint .
```

Este comando analizará el código fuente en busca de errores y problemas de estilo. Si encuentra algún problema, te mostrará un mensaje de error en la terminal.

### Integración con Visual Studio Code

Para integrar [Eslint](https://eslint.org/) con Visual Studio Code, debes instalar la extensión ["ESLint"](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) desde la tienda de extensiones de VS Code.

Una vez instalada la extensión, [Eslint](https://eslint.org/) se ejecutará automáticamente cada vez que guardes un archivo en tu proyecto. Si encuentra algún problema, se mostrará un mensaje de error en el editor.

### Integración con Git

Para integrar [Eslint](https://eslint.org/) con Git, debes instalar la librería [`husky`](https://www.npmjs.com/package/husky) y la librería [`lint-staged`](https://www.npmjs.com/package/lint-staged) en tu proyecto:

```bash
npm install husky lint-staged --save-dev
```

Luego, debes agregar los siguientes scripts en el archivo `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "npm run lint:fix"
    ]
  }
}
```

Estos scripts permiten ejecutar [Eslint](https://eslint.org/) en el directorio raíz de tu proyecto cada vez que guardes un archivo. Si encuentra algún problema, se mostrará un mensaje de error en la terminal.

### Integración con GitHub Actions

Para integrar [Eslint](https://eslint.org/) con GitHub Actions, debes crear un archivo `.github/workflows/eslint.yml` en el directorio raíz de tu proyecto:

```yml
name: ESLint

on: [push]

jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm install
      - run: npm run lint
```

Este archivo de configuración permite ejecutar [Eslint](https://eslint.org/) en el directorio raíz de tu proyecto cada vez que se realice un push a GitHub. Si encuentra algún problema, se mostrará un mensaje de error en la terminal.

### Integración con Prettier

Para integrar [Eslint](https://eslint.org/) con [Prettier](https://prettier.io/), debes instalar la librería [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) en tu proyecto:

```bash
npm install eslint-config-prettier --save-dev
```

Luego, debes agregar la siguiente regla en el archivo `.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ]
}
```

Esto deshabilitará todas las reglas que puedan entrar en conflicto con las reglas de [Prettier](https://prettier.io/).

### Integración con TypeScript

Para integrar [Eslint](https://eslint.org/) con TypeScript, debes instalar las siguientes librerías en tu proyecto:

```bash
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

Luego, debes agregar las siguientes reglas en el archivo `.eslintrc.json`:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ]
}
```

Esto permitirá a [Eslint](https://eslint.org/) analizar el código TypeScript en busca de errores y problemas de estilo.
