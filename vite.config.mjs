import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import path from "path";

export default defineConfig({
  build: {
  outDir: "dist", // 👈 This is the default Vercel expects
  chunkSizeWarningLimit: 2000,
},
  plugins: [tsconfigPaths(), react(), tagger()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});
