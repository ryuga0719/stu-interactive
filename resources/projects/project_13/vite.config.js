import { splitVendorChunkPlugin } from "vite";
import path from "path";

export default {
  lang: "ja-JP",
  base: "./",
  assetsDir: "./",
  server: {
    host: true,
    port: 8888, // 任意のポート番号を書く
  },
  build: {
    manifest: false,
    outDir: "../../../docs/project_13",
    assetsDir: "./assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/vendor/[name]-[hash].js", // ビルド後のチャンクファイル名
        entryFileNames: "assets/js/[name].js", // ビルド後のjsファイル名
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  plugins: [splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
};
