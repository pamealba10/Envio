# Proyecto Express: Formulario de Contacto con "Hola Mundo"

Este proyecto es una práctica de introducción a **Node.js** y **Express**. Consiste en la creación de un servidor web básico que sirve una interfaz de usuario (front-end) con un formulario de contacto estilizado y procesa los datos enviados en el back-end sin necesidad de recargar la página.

## 🎯 Objetivo
Comprender el funcionamiento de un servidor Express, la configuración de middlewares para el manejo de datos y la comunicación asíncrona entre el front-end y el back-end utilizando `fetch`.

## ✨ Características principales
*   **Servidor Express básico:** Configurado para escuchar en el puerto `3000`.
*   **Endpoint de prueba:** Ruta inicial (`/`) que responde con un "Hola Mundo" (si se accede sin el HTML) y ruta principal que sirve la interfaz.
*   **Archivos estáticos:** Servidor configurado para entregar archivos HTML y CSS desde la carpeta `public`.
*   **Formulario interactivo:** Interfaz moderna con un formulario que captura Nombre y Correo Electrónico.
*   **Envío asíncrono (AJAX):** Uso de `fetch` en el navegador para enviar los datos en formato JSON al servidor sin recargar la página.
*   **Feedback visual:** El botón cambia a "Enviando..." y muestra un mensaje de éxito (o error) estilizado tras la respuesta del servidor.
*   **Procesamiento en Back-end:** El servidor recibe los datos, los imprime en consola y devuelve un mensaje personalizado.

## 🛠️ Tecnologías utilizadas
*   **Node.js** (Entorno de ejecución de JavaScript)
*   **Express.js** (Framework web para Node.js)
*   **HTML5** y **CSS3** (Estructura y diseño del front-end)
*   **JavaScript Vanilla** (Lógica del cliente y peticiones `fetch`)
*   **Nodemon** (Herramienta de desarrollo para reinicio automático)


![Texto alternativo](/public/img/imgform1.png)
![Texto alternativo](/public/img/imgform2.png)
![Texto alternativo](/public/img/imgform3.png)


## 📁 Estructura del proyecto
```text
mi-proyecto-express/
├── node_modules/       # Dependencias instaladas (no se sube a repositorios)
├── public/             # Carpeta de archivos estáticos (Front-end)
│   ├── index.html      # Estructura del formulario y script de fetch
│   └── styles.css      # Estilos visuales del formulario
├── index.js            # Archivo principal del servidor Express (Back-end)
├── package.json        # Configuración del proyecto y scripts
├── package-lock.json   # Registro exacto de las dependencias
└── README.md           # Documentación del proyecto