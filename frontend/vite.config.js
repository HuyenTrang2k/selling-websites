import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  dotenv.config();

  return {
    plugins: [react()],
    define: {
      'process.env': {},
    },
  };
});
