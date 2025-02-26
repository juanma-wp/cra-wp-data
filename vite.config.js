import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".js", ".jsx"],
    },
    server: {
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    define: {
      "process.env": JSON.stringify(env),
      "import.meta.env": JSON.stringify({
        ...env,
        DEV: mode === "development",
        PROD: mode === "production",
        MODE: mode,
      }),
      "import.meta.env.REACT_APP_RESOURCE_ADDRESS": JSON.stringify(
        env.REACT_APP_RESOURCE_ADDRESS
      ),
    },
  };
});
