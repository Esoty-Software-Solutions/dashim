import path from "node:path";
import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv, type UserConfig, type ConfigEnv } from "vite";

import { visualizer } from "rollup-plugin-visualizer";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

function createServerConfig({ command, mode }: ConfigEnv) {
  let { SERVER_HOST, SERVER_BASE_URL, SERVER_TRPC_URL } = loadEnv(
    mode,
    process.cwd(),
    "",
  );

  // == dev serve proxy-ing config
  if (command === "serve") {
    if (SERVER_HOST == null) {
      SERVER_HOST = "http://localhost:3000";
    }

    if (SERVER_BASE_URL == null) {
      SERVER_BASE_URL = "/";
    }

    if (SERVER_TRPC_URL == null) {
      SERVER_TRPC_URL = "/trpc";
    }

    // prepare server urls
    const relativeToServerPath = path.join(SERVER_BASE_URL, SERVER_TRPC_URL);
    const baseURL = new URL(SERVER_BASE_URL, SERVER_HOST).href;
    const fullTrpcURL = new URL(relativeToServerPath, SERVER_HOST).href;

    console.log("Using server at", baseURL, "as tRPC server");
    console.log("Full tRPC target is:", fullTrpcURL);

    // expose these to the build bundle
    process.env.VITE_FULL_TRPC_URL = fullTrpcURL;
    process.env.VITE_RELATIVE_TRPC_URL = relativeToServerPath;

    return baseURL;
  }
}
export default defineConfig(({ command, mode }) => {
  const serverBaseURL = createServerConfig({ command, mode });
  const config: UserConfig = {
    // https://vitejs.dev/config/shared-options.html#base
    base: "./",
    // https://vitejs.dev/config/shared-options.html#define
    define: { "process.env": {} },
    plugins: [
      // Vue3
      vue({
        template: {
          // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin#image-loading
          transformAssetUrls,
        },
      }),
      // Vuetify Loader
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
      vuetify(),
    ],
    // https://vitejs.dev/config/server-options.html
    server: {
      port: 8080,
      // proxy: {
      //   "/trpc": {
      //     target: serverBaseURL,
      //     changeOrigin: true,
      //     secure: false,
      //   },
      // },
    },
    // Resolver
    resolve: {
      // https://vitejs.dev/config/shared-options.html#resolve-alias
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // Build Options
    // https://vitejs.dev/config/build-options.html
    build: {
      // Build Target
      // https://vitejs.dev/config/build-options.html#build-target
      target: "esnext",
      // Minify option
      // https://vitejs.dev/config/build-options.html#build-minify
      minify: "esbuild",
      // Rollup Options
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      rollupOptions: {
        output: {
          manualChunks: {
            // Split external library from transpiled code.
            vue: ["vue", "vue-router"],
            vuetify: [
              "vuetify",
              "vuetify/components",
              "vuetify/directives",
              // 'vuetify/lib/labs',
              "webfontloader",
            ],
          },
          plugins: [
            mode === "analyze"
              ? // rollup-plugin-visualizer
                // https://github.com/btd/rollup-plugin-visualizer
                visualizer({
                  open: true,
                  filename: "dist/stats.html",
                })
              : undefined,
          ],
        },
      },
    },
    esbuild: {
      // Drop console when production build.
      drop: command === "serve" ? [] : ["console"],
    },
  };

  return config;
});
