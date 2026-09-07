# Portfolio de Sergio Requena

Portfolio profesional de **Sergio Requena**, Unity / Gameplay Developer. Es un sitio estático, responsive y accesible, pensado para presentar de forma directa el perfil y los proyectos principales **BreakBlock** y **ODSERVA** a estudios de videojuegos.

## Características

- Diseño oscuro con una dirección visual inspirada en interfaces y herramientas de videojuegos.
- Presentación concisa, sin dependencias externas ni información de proyecto no verificada.
- Navegación responsive con menú accesible en dispositivos móviles.
- Secciones de introducción, proyectos, perfil y contacto.
- Pequeñas animaciones de entrada que respetan la preferencia de movimiento reducido del sistema.
- HTML semántico, foco visible, enlace de salto al contenido y metadatos sociales básicos.
- Preparado para publicarse directamente mediante GitHub Pages.

## Estructura

```text
.
├── index.html          # Contenido y estructura de la página
├── styles.css          # Sistema visual, layout y estilos responsive
├── script.js           # Menú móvil y revelado progresivo
├── tests/
│   └── script.test.js  # Pruebas unitarias de las utilidades JavaScript
├── package.json        # Comandos del proyecto
└── README.md
```

## Desarrollo local

No es necesario instalar dependencias para visualizar la web. Puede abrirse `index.html` directamente o servirse con cualquier servidor HTTP estático:

```bash
python3 -m http.server 8000
```

Después, visita `http://localhost:8000`.

## Pruebas

Las pruebas utilizan el runner incorporado en Node.js y no requieren paquetes adicionales:

```bash
npm test
```

También puede comprobarse la sintaxis del JavaScript con:

```bash
npm run check
```

## Publicación en GitHub Pages

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, selecciona la rama que contiene el sitio.
3. Selecciona la carpeta raíz (`/`) como origen.
4. Guarda la configuración; GitHub Pages servirá `index.html` como página principal.

## Personalización

El contenido principal se encuentra en `index.html` y las variables de color al inicio de `styles.css`. Los enlaces públicos o detalles adicionales de los proyectos pueden incorporarse cuando estén disponibles, sin alterar la estructura general.

## Tecnologías

HTML5, CSS3 y JavaScript sin frameworks.
