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
  assetsInclude: ["**/*.obj", "**/*.mtl"],
  build: {
    manifest: false,
    outDir: "../../../docs/project_13",
    assetsDir: "./src/assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpg|jpeg|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          if (/mp3/i.test(extType)) {
            extType = "media";
          }
          if (/mtl|obj/i.test(extType)) {
            extType = "roomArea";
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
