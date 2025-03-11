import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/petlove/',
  plugins: [react()],
  server: {
    port: 5173, // Налаштовуємо порт для локального сервера
    open: true, // Автоматично відкривати браузер при старті сервера
  },
  build: {
    outDir: 'dist', // Директорія для збірки
    sourcemap: true, // Включає source maps для зручної налагодження
  },
  resolve: {
    alias: {
      '@': '/src', // Додаємо псевдонім для зручного імпорту
    },
  },
});
