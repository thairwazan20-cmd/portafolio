# Portafolio – Thair Bazan (Guía Práctica #4)

Portafolio de desarrollador de software e Ingeniería de Software con IA, construido con **React + Vite** y CSS puro (sin librerías de UI).

```
npm install
npm run dev      # http://localhost:5173
npm run build    # versión de producción en /dist
```

## Características
- Pantalla de carga estilo terminal y **cursor personalizado** (punto + anillo con inercia).
- Hero con **fondo de red neuronal animada** (canvas) que reacciona al mouse y efecto de máquina de escribir.
- Navbar de vidrio esmerilado con barra de progreso de scroll y sección activa resaltada.
- Tarjetas con brillo que sigue al mouse, inclinación 3D, sombras y animaciones al hacer scroll.
- Tech Stack filtrable con `useState`, logos oficiales y barras de nivel.
- Visor de certificados con navegación por teclado (Esc, ←, →).
- Formulario controlado con etiquetas flotantes, validación y notificación.
- Diseño responsive y respeto de `prefers-reduced-motion`.

## Estructura
```
src/components/
  Preloader/  Cursor/  Navbar/  Banner/ (+ NeuralCanvas)
  Perfil/  Habilidades/  Proyectos/  Certificados/  Contacto/  Footer/
```

## Personalizar
- Datos de contacto (correo, teléfono, WhatsApp, LinkedIn, GitHub): todo está en `src/data/contacto.js`.
- Foto: `src/assets/miFoto.png` (se usa en el Hero y en la tarjeta de identidad de "Sobre mí").
- Proyectos: reemplaza `src/assets/proyecto-*.png` por capturas reales y edita `linkDemo` / `linkCodigo` en `Proyectos.jsx` (si un enlace es `'#'`, el botón aparece deshabilitado).
- Logos: marcas en `src/components/Iconos/Iconos.jsx` (Simple Icons) y tecnologías con Devicon.
