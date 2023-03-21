# Editores de código

Un editor de código es una herramienta de software que se utiliza para escribir, editar y manipular código fuente de programas informáticos. Es una herramienta fundamental para los programadores y desarrolladores que trabajan en proyectos de programación, ya que les permite trabajar con el código de manera más eficiente y productiva.


## Visual Studio Code
En [Make It Real](https://makeitreal.camp/) recomendamos y sugerimos [Visual Studio Code (VS Code)](https://code.visualstudio.com/) es uno de los editores de código más populares en la actualidad. Una de las razones por las que VS Code es tan popular es que es un editor de código de fuente abierta y gratuito que funciona en diferentes sistemas operativos, como Windows, macOS y Linux. Además, VS Code cuenta con una amplia gama de extensiones y plugins que permiten a los desarrolladores personalizar y mejorar la funcionalidad del editor.


## EditorConfig
[EditorConfig](https://editorconfig.org/) ayuda a mantener estilos de codificación coherentes para varios desarrolladores que trabajan en el mismo proyecto en varios editores e IDE.

El archivo .`editorConfig` se utiliza para estandarizar el formato del código fuente en diferentes editores de código y sistemas operativos. Es una herramienta que ayuda a los desarrolladores a mantener una convención de formato coherente en todo el proyecto, independientemente de los diferentes editores de código que puedan estar utilizando.

Para configurar EditorConfig en Visual Studio Code, sigue estos pasos:

1. Instala la extensión [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) desde la tienda de extensiones de VS Code.

2. Asegúrate de que el archivo ".editorconfig" esté presente en el directorio raíz del proyecto.

3. Abre el archivo `.editorconfig` y define las reglas de formato que deseas aplicar a tu proyecto. Por ejemplo, puedes establecer el tamaño de tabulación, la indentación, el estilo de línea, entre otros.

Estas son algunas reglas sugeridas por el equipo de Make It Real:

```editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

Abre los archivos del proyecto en VS Code y verás que la extensión [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) automáticamente aplica las reglas de formato definidas en el archivo `.editorconfig`.

Con EditorConfig, puedes asegurarte de que tu código se formatee correctamente en todos los editores de código que utilices. Esto hace que sea más fácil de leer, entender y mantener, y mejora la calidad y eficiencia del desarrollo del proyecto en equipo.

hola
