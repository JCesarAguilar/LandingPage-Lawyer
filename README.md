# ⚖️ Canales Hernández Abogados — Landing Page Profesional

Landing page moderna, informativa y responsiva para el estudio **Canales Hernández Abogados**, orientada a mostrar los servicios legales ofrecidos, el equipo profesional, áreas de práctica, contacto directo y agendamiento de consultas.

🌐 **Sitio en producción**:  
👉 [Ver sitio desplegado en Vercel](https://landingpage-lawyer.vercel.app)

---

## 🧠 Funcionalidades principales

- ✅ Sección Banner con llamada a la acción clara
- ✅ Navegación entre páginas: Inicio, Servicios, Detalle de abogado y Contacto
- ✅ Página de servicios con filtro por categoría
- ✅ Página individual para abogado (detalle completo)
- ✅ Acordeones por áreas de práctica, educación y publicaciones
- ✅ Botón flotante de WhatsApp en todas las páginas
- ✅ Footer informativo con contacto, redes sociales y horarios
- ✅ Totalmente responsivo (desktop, tablet y móvil)

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **Next.js 14** (App Router)
- ✨ **TypeScript**
- 🎨 **TailwindCSS**
- 🖼️ `next/image` (optimización de imágenes)
- 💬 `react-icons` para íconos de redes y contacto
- 📱 Deploy en **Vercel**

---

## 📱 Diseño y experiencia de usuario

- ✔️ Enfoque mobile-first
- ✔️ Paleta corporativa seria (azul oscuro, naranja legal, blanco)
- ✔️ Tipografía profesional y legible
- ✔️ UX orientado a facilitar contacto rápido (WhatsApp y correo)
- ✔️ Accesibilidad visual (contrastes y jerarquía clara)

---

## 🖼️ Capturas del sitio

| Página de inicio                           | Servicios filtrables                              | Perfil de abogado completo                    |
| ------------------------------------------ | ------------------------------------------------- | --------------------------------------------- |
| ![Inicio](frontend/public/assets/home.png) | ![Servicios](frontend/public/assets/services.png) | ![Abogado](frontend/public/assets/lawyer.png) |

---

## 📁 Estructura del proyecto

````bash
frontend/
├── app/                      # App Router (Next.js 13+)
│   ├── layout.tsx            # Layout raíz con Header/Footer
│   ├── page.tsx              # Página de inicio
│   ├── contact/              # Ruta /contact
│   └── services/             # Ruta /services
│
├── components/               # Componentes reutilizables
│   ├── common/               # Tipografía, botones, layouts
│   ├── contact/              # Componentes de contacto
│   └── home/                 # Componentes de la Home
│
├── helpers/                  # Archivos mock y utilidades
├── interfaces/               # Tipado global (TypeScript)
├── public/                   # Imágenes y recursos públicos
├── styles/                   # (si aplicara) Estilos globales (Tailwind incluido en `globals.css`)



## 📦 Instalación local

```bash
git clone https://github.com/JCesarAguilar/landingpage-lawyer.git
cd front
npm install
npm run dev
````
