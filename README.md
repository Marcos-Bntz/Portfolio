# Portfolio - Desarrollador Web

Mi portfolio personal desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Despliegue en GitHub Pages

### Pasos para desplegar:

1. **Crear repositorio en GitHub**
   - Ve a GitHub y crea un nuevo repositorio llamado `Portfolio`
   - Asegúrate de que sea público

2. **Configurar el repositorio local**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUUSUARIO/Portfolio.git
   git push -u origin main
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Configurar GitHub Pages**
   - Ve a Settings > Pages en tu repositorio
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` y la carpeta `/ (root)`
   - Guarda los cambios

5. **Desplegar**
   ```bash
   npm run deploy
   ```

### Despliegue automático

El proyecto está configurado con GitHub Actions para desplegar automáticamente cada vez que hagas push a la rama main.

## 🛠️ Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## 📦 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run deploy` - Despliega a GitHub Pages

## 🌐 URL del sitio

Una vez desplegado, tu portfolio estará disponible en:
`https://tuusuario.github.io/Portfolio`

**Nota:** Reemplaza `tuusuario` con tu nombre de usuario real de GitHub. 