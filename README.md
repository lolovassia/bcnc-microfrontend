# Proyecto de microfrontends

## Estructura del proyecto

Este repositorio contiene una implementación de microfrontends, diseñada para permitir la colaboración entre equipos de manera diferenciada y escalable. A continuación, se describe la estructura de los proyectos, la organización de las carpetas y algunas herramientas y prácticas destacadas que se han implementado.

## Microfrontends

Los microfrontends están gestionados en repositorios separados, permitiendo que cada equipo pueda trabajar de forma autónoma en su propio módulo. La interconexión entre estos módulos se realiza a través de **Module Federation** (Webpack 5). Este enfoque permite:

- **Carga Dinámica de Módulos**: Cada microfrontend puede ser cargado dinámicamente en tiempo de ejecución por el host (repositorio orquestador).
- **Gestión de Dependencias**: Las dependencias son cargadas en el host siguiendo el patrón **singleton**, asegurando que cada dependencia se cargue una única vez y evitando la duplicación de paquetes innecesarios, lo que optimiza el rendimiento.

### Alternativas Consideradas

Consideré la posibilidad de importar los módulos a través de paquetes versionados, lo que habría permitido un control más preciso sobre las dependencias y versiones utilizadas en cada proyecto. Sin embargo, opté por **Module Federation** debido a su flexibilidad y capacidad para manejar dependencias compartidas de manera eficiente en tiempo de ejecución.

## Organización del proyecto

El proyecto tiene la siguiente estructura:

```markdown
bcnc-microfrontend/
├── albums/
├── components/
├── host/
├── photos/
├── users/
├── .prettierrc.yml
├── init.js
├── package.json
└── README.md
```

Elegí esta manera de organizarlo para evitar tener que compartirles un enlace de Github por cada uno de los repositorios.

De todas maneras, para facilitarles la ejecución y prueba, opté por incorporarle a la carpeta padre (bcnc-microfrontend) un package.json que utiliza la librería "concurrently" y un archivo "init.js" encargado de realizar la lógica de todo el proyecto. Por lo tanto, para poder realizar la instalación de los módulos, lanzarlo, ejecutar los test y el linter, solamente hará falta ejecutar el script correspondiente desde el directorio raíz.

[Para un mayor detalle seguír los pasos de instalación.](#Instalacion)

## Instalación

Ejecutarlo desde la ruta raíz "bcnc-microfrontend" :

```markdown
yarn install
```

## Ejecutar el proyecto:

Ejecutarlo desde la ruta raíz "bcnc-microfrontend" :

```markdown
yarn start
```

El proyecto orquestador se podrá levantar en el puerto http://localhost:3000/

Actualmente la configuración está realizada para que se puedan cargar todos los microfrontends juntos.

## Tests

Ejecutarlo desde la ruta raíz "bcnc-microfrontend" :

```markdown
yarn test
```

## Linter

Ejecutarlo desde la ruta raíz "bcnc-microfrontend" :

```markdown
yarn eslint
```

## Estructura de carpetas por proyecto

Cada proyecto tiene su propia estructura de carpetas, diseñada según las necesidades específicas del módulo. A continuación, se describe la organización utilizada:

### 1. `albums`

- **Descripción**: Módulo responsable de mostrar la pantalla de "Álbums".
- **Estructura**: Está organizado por tipos, lo que significa que los archivos se agrupan según su función (componentes, servicios, estilos, etc.). Esta estructura es ideal para proyectos pequeños y con pocos archivos, como es el caso de esta prueba.

### 2. `components`

- **Descripción**: Módulo que contiene todos los componentes comunes que se utilizarán en los diferentes proyectos.
- **Estructura**: Organizado por módulos y tipos. Esta estructura es adecuada para proyectos simples, permitiendo una fácil localización y reutilización de componentes.

### 3. `host`

- **Descripción**: Módulo orquestador, encargado de importar y gestionar las páginas y componentes del resto de los microfrontends.
- **Estructura**: Organizado por tipos, facilitando la gestión y integración de los diferentes microfrontends.

### 4. `photos`

- **Descripción**: Módulo responsable de mostrar la pantalla de "Fotos".
- **Estructura**: Similar a `albums`, está organizado por tipos.

### 5. `users`

- **Descripción**: Módulo encargado de mostrar la pantalla de "Usuarios".
- **Estructura**: Organizado por tipos.

### Consideraciones de Escalabilidad

La estructura de carpetas utilizada en este proyecto ha sido elegida por su simplicidad, lo cual es adecuado para proyectos pequeños. Sin embargo, en proyectos medianos o grandes, esta estructura puede volverse ineficiente debido a su limitada escalabilidad. En dichos casos, se recomienda utilizar una **estructura "screaming"** o **basada en features**:

- **Screaming Structure**: Cada carpeta representa una función o feature específica, agrupando todo el código relacionado en un solo lugar. Esto mejora la mantenibilidad y facilita la colaboración entre equipos, al mantener el código organizado y modularizado.

## Herramientas y Prácticas Destacadas

Este proyecto incluye varias herramientas y prácticas recomendadas para mejorar la calidad y el rendimiento del código:

- **Styled-Components**: Gestión de estilos de forma independiente en cada proyecto, evitando colisiones de clases y asegurando un estilo consistente.
- **Prettier**: Formateo automático del código para mantener una estructura uniforme y legible.
- **Linter**: Detección y señalización de errores en el código, mejorando la calidad general del proyecto.
- **Strict Mode (TypeScript)**: Activación del modo estricto para una detección temprana de errores de tipo, promoviendo un código más robusto.
- **Lazy Loading**: Carga de componentes bajo demanda, optimizando el rendimiento.
- **Code Splitting**: División del código para cargar solo lo necesario, mejorando los tiempos de carga.
- **Module Federation**: Uso de componentes de otros proyectos durante el proceso de build, facilitando la reutilización.
- **Alias Paths**: Simplificación de rutas de importación, mejorando la legibilidad del código.
- **React-Query**: Manejo eficiente de caché y control de la latencia en llamadas a API.
- **Paginación**: Implementación de paginación para manejar grandes volúmenes de datos.
- **Separación de Lógica de Negocio y Diseño**: Mantenimiento de una clara separación entre la lógica de negocio y la presentación visual, favoreciendo la modularidad y reutilización del código.
- **Testing**: Uso de React Testing Library para pruebas unitarias, garantizando la fiabilidad del código.
- **Minificación**: Reducción del tamaño de los archivos JavaScript y CSS utilizando Terser y Cssnano en el módulo `albums`.
- **Compresión**: Uso de `compression-webpack-plugin` en el módulo `albums` para comprimir archivos estáticos en formatos gzip/brotli, mejorando el rendimiento.

## Aspectos a Mejorar

A pesar de los aspectos positivos, existen algunas áreas que pueden ser mejoradas pero no se realizaron por falta de tiempo:

- **Cliente HTTP**: Actualmente, el cliente HTTP se reutiliza en cada proyecto. Se sugiere crear un paquete compartido para este servicio e importarlo donde sea necesario.
- **Tipos (Types)**: De manera similar al cliente HTTP, se recomienda centralizar las definiciones de tipos en un paquete compartido para evitar la duplicación y mantener la consistencia.
- **Diseño**: Aunque se ha priorizado la lógica sobre el diseño, el diseño actual es totalmente responsive. No obstante, se podría mejorar dedicando más tiempo a los detalles visuales.
- **Variables de Entorno**: Aunque no se ha utilizado ningún archivo `.env` en este proyecto, es recomendable almacenar todas las variables sensibles en un archivo `.env` o en un sistema seguro como un vault.
- **Handle errors**: Debería haber un manejador de errores que puede aplicarse tanto de manera global como en cada uno de los microfronteds.
- **Optimización de la web**: Optimizar la web para obtener el 100% en cada una de las métricas de Google Lighthouse.
