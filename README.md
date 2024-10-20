# ⚡ React + Vite Template

A minimal setup to get **React** running on **Vite** with **Hot Module Replacement (HMR)** and ESLint rules for consistent code quality. This template ensures fast development with modern tools.

---

## 🚀 Features

- 🔥 **Fast Refresh** with HMR  
- 📦 Optimized builds with **Vite**  
- 🛠 **ESLint** pre-configured to maintain code standards  
- 🌐 Supports both **Babel** and **SWC** for transpilation  
- 💻 Compatible with **Windows, macOS, and Linux**

---

## 🧑‍💻 Getting Started

Follow these steps to run the project locally:

1. **Create a new project:**

   ```bash
   npm create vite@latest my-react-app -- --template react
   cd my-react-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Vite will start your server at http://localhost:5173.

🛠 Available Plugins
You can use either of the following plugins based on your preference for transpilation:

1. @vitejs/plugin-react
Uses Babel for fast refresh.

Example configuration in vite.config.js:

javascript
Copy code
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
2. @vitejs/plugin-react-swc
Uses SWC for a faster development experience.

Example configuration in vite.config.js:

javascript
Copy code
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
});
