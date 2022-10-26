const path = require('path');


module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components"),
      '@assets': path.resolve(__dirname, "src/assets"),
      '@constants': path.resolve(__dirname, "src/constants"),
      '@containers': path.resolve(__dirname, "src/containers"),
      '@screens': path.resolve(__dirname, "src/screens"),
      '@store': path.resolve(__dirname, "src/store"),
      '@styles': path.resolve(__dirname, "src/styles"),
      '@types': path.resolve(__dirname, "src/types"),
      '@helpers': path.resolve(__dirname, "src/helpers"),
      '@utils': path.resolve(__dirname, "src/utils"),
    }
  },
}
