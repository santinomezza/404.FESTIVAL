# 404. FESTIVAL - Landing Page

Una landing page moderna y responsiva para **404. FESTIVAL**, una organizadora de eventos de shows en vivo de artistas locales emergentes del género RAP.

## 🎤 Características Principales

✨ **Diseño Moderno**
- Paleta de colores oscuros minimalista
- Gradientes y efectos visuales atractivos
- Animaciones suaves y profesionales
- Totalmente responsivo (mobile, tablet, desktop)

📱 **Secciones incluidas:**
1. **UBICACIÓN** - Mapa integrado y detalles del evento
2. **ARTISTAS** - Galería de artistas emergentes
3. **CONTACTO Y REDES** - Formulario de contacto y enlaces a redes sociales

🎨 **Paleta de Colores**
- Primario: `#0a0e27` (Negro profundo)
- Secundario: `#1a1f3a` (Azul oscuro)
- Acentos:
  - Rosa/Magenta: `#ff006e`
  - Verde Neón: `#39ff14`
  - Púrpura: `#7c3aed`

## 📂 Estructura de Archivos

```
404.F/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS (responsive)
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Abrir el sitio
Simplemente abre `index.html` en tu navegador web.

### 2. Personalizar información

#### Actualizar datos de ubicación:
En `index.html`, busca la sección `<!-- SECCIÓN DE UBICACIÓN -->` y reemplaza:
- `[Tu dirección aquí]` - Dirección del evento
- `[Fecha del evento]` - Fecha del próximo show
- `[Hora del evento]` - Hora de inicio

**Para el mapa:**
- El iframe actual es un placeholder. Reemplázalo con el embed de Google Maps de tu ubicación
- Ve a [Google Maps](https://maps.google.com), busca tu lugar, haz clic en "Compartir" y copia el código embed

#### Agregar artistas:
En la sección `<!-- SECCIÓN DE ARTISTAS -->`, duplica un bloque `<div class="artist-card">` y personaliza:
```html
<h3>NOMBRE DEL ARTISTA</h3>
<p class="artist-genre">GÉNERO/ESTILO</p>
<div class="artist-social">
    <a href="[Instagram URL]" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="[Spotify URL]" title="Spotify"><i class="fab fa-spotify"></i></a>
</div>
```

#### Vincular redes sociales:
En la sección `<!-- SECCIÓN DE CONTACTO Y REDES -->`, reemplaza los `#` con tus enlaces:
```html
<a href="https://instagram.com/tuusuario" class="social-icon instagram">
```

#### Configurar WhatsApp:
```html
<a href="tel:+5491234567890" class="social-icon whatsapp">
```
(Reemplaza el número con tu código de país y teléfono)

### 3. Personalizar colores (Opcional)

Abre `styles.css` y busca `:root { ... }` al inicio para cambiar las variables de color:

```css
:root {
    --primary-dark: #0a0e27;        /* Fondo principal */
    --secondary-dark: #1a1f3a;      /* Fondo secundario */
    --tertiary-dark: #2a2f4a;       /* Fondo terciario */
    --accent-primary: #ff006e;      /* Rosa/Magenta - Color principal */
    --accent-secondary: #39ff14;    /* Verde Neón */
    --accent-tertiary: #7c3aed;     /* Púrpura */
    --text-primary: #ffffff;        /* Texto principal */
    --text-secondary: #b0b8cc;      /* Texto secundario */
    --border-color: #3a3f5a;        /* Color de bordes */
}
```

## ✅ Funcionalidades JavaScript Incluidas

- **Menú responsivo** con hamburguesa en móviles
- **Validación de formulario** con mensajes de error/éxito
- **Navegación suave** entre secciones
- **Animaciones de scroll** para elementos
- **Contador de visitas** (guardado en localStorage)
- **Tracking de eventos** para analytics

## 🔧 Integración con Servicios

### Formulario de contacto
Actualmente el formulario está configurado para mostrar una notificación de éxito. Para hacerlo funcional, puedes integrarlo con:

**Opción 1: EmailJS**
```javascript
// Instala EmailJS y configura tu servicio
emailjs.init('tu_public_key');
// Luego envía desde el formulario
```

**Opción 2: Backend propio**
Modifica `script.js`, función `contactForm.addEventListener`, para enviar a tu servidor

**Opción 3: Servicios externos**
- Formspree
- Basin
- Getform
- Netlify Forms

### Analytics
Integra Google Analytics, Mixpanel o similar. El sitio ya tiene una función `trackEvent()` lista.

## 📱 Responsividad

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎯 Tips para mejor SEO

1. Actualiza el `<title>` en `index.html`
2. Agrega meta etiquetas:
```html
<meta name="description" content="404. FESTIVAL - Shows en vivo de artistas locales emergentes de RAP">
<meta name="keywords" content="rap, festival, música en vivo, artistas emergentes">
```

3. Configura Open Graph para redes sociales:
```html
<meta property="og:title" content="404. FESTIVAL">
<meta property="og:description" content="Shows en vivo de artistas locales emergentes">
<meta property="og:image" content="[URL de imagen]">
```

## 🚀 Despliegue

### Opciones gratuitas:
- **GitHub Pages** - Perfecto para sitios estáticos
- **Netlify** - Fácil integración con repositorios
- **Vercel** - Rendimiento optimizado
- **Firebase Hosting** - Rápido y confiable

### Pasos para GitHub Pages:
1. Crea un repositorio llamado `404.festival`
2. Sube los archivos
3. Ve a Settings > Pages y selecciona `main` branch
4. ¡Listo! Tu sitio estará en `https://tuusuario.github.io/404.festival`

## 📞 Soporte

Para cualquier pregunta o problema:
1. Revisa el código JavaScript en la consola del navegador (F12)
2. Verifica la sintaxis del HTML
3. Asegúrate de que todos los archivos (html, css, js) están en la misma carpeta

## 📄 Licencia

Libre para usar y modificar para tu proyecto.

---

**Made with ♥ para la música local**

¡Buena suerte con 404. FESTIVAL! 🎤🎵
