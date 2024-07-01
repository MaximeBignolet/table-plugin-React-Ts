// vite.config.ts
import { defineConfig } from "file:///Users/mbignolet/Documents/OC/Front/table-plugin-react-ts/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/mbignolet/Documents/OC/Front/table-plugin-react-ts/node_modules/vite-plugin-dts/dist/index.mjs";
import react from "file:///Users/mbignolet/Documents/OC/Front/table-plugin-react-ts/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { libInjectCss } from "file:///Users/mbignolet/Documents/OC/Front/table-plugin-react-ts/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///Users/mbignolet/Documents/OC/Front/table-plugin-react-ts/node_modules/glob/dist/esm/index.js";
var __vite_injected_original_dirname = "/Users/mbignolet/Documents/OC/Front/table-plugin-react-ts";
var __vite_injected_original_import_meta_url = "file:///Users/mbignolet/Documents/OC/Front/table-plugin-react-ts/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", {
          ignore: ["lib/**/*.d.ts"]
        }).map((file) => [
          //The name of the entry point
          //lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWJpZ25vbGV0L0RvY3VtZW50cy9PQy9Gcm9udC90YWJsZS1wbHVnaW4tcmVhY3QtdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYmlnbm9sZXQvRG9jdW1lbnRzL09DL0Zyb250L3RhYmxlLXBsdWdpbi1yZWFjdC10cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWJpZ25vbGV0L0RvY3VtZW50cy9PQy9Gcm9udC90YWJsZS1wbHVnaW4tcmVhY3QtdHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjtcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCB7IGdsb2IgfSBmcm9tIFwiZ2xvYlwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGxpYkluamVjdENzcygpLCBkdHMoeyBpbmNsdWRlOiBbXCJsaWJcIl0gfSldLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcImxpYi9tYWluLnRzXCIpLFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgfSxcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSxcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2JcbiAgICAgICAgICAuc3luYyhcImxpYi8qKi8qLnt0cyx0c3h9XCIsIHtcbiAgICAgICAgICAgIGlnbm9yZTogW1wibGliLyoqLyouZC50c1wiXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKGZpbGUpID0+IFtcbiAgICAgICAgICAgIC8vVGhlIG5hbWUgb2YgdGhlIGVudHJ5IHBvaW50XG4gICAgICAgICAgICAvL2xpYi9uZXN0ZWQvZm9vLnRzIGJlY29tZXMgbmVzdGVkL2Zvb1xuICAgICAgICAgICAgcmVsYXRpdmUoXCJsaWJcIiwgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VixTQUFTLG9CQUFvQjtBQUMxWCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsU0FBUyxVQUFVLGVBQWU7QUFDM0MsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxZQUFZO0FBTnJCLElBQU0sbUNBQW1DO0FBQWlMLElBQU0sMkNBQTJDO0FBUzNRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQzVELE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsZUFBZTtBQUFBLElBQ2YsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsbUJBQW1CO0FBQUEsTUFDdkMsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUsscUJBQXFCO0FBQUEsVUFDekIsUUFBUSxDQUFDLGVBQWU7QUFBQSxRQUMxQixDQUFDLEVBQ0EsSUFBSSxDQUFDLFNBQVM7QUFBQTtBQUFBO0FBQUEsVUFHYixTQUFTLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQ2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
