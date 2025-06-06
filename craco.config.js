const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new CopyPlugin({
          // Use copy plugin to copy *.wasm to output folder.
          patterns: [
            { from: "node_modules/onnxruntime-web/dist/*.wasm", to: "static/js/[name][ext]" },
            { from: './public/model/model.onnx', to: '[name][ext]'},
            { from: './public/model/nms-yolov8.onnx', to: '[name][ext]'},
            { from: './public/model/mask-yolov8-seg.onnx', to: '[name][ext]'}
          ],
        }),
      ],
    },
    configure: (config) => {
      // set resolve.fallback for opencv.js
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
      };
      return config;
    },
  },
};