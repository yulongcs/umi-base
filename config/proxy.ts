export default {
  dev: {
    '/api/': {
      target: 'http://npm.huayun.org/data/archer_1.5_endy',
      changeOrigin: true,
      secure: false,
    },
    '/websocket': {
      target: 'http://172.118.38.10',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/websocket': '/websocket/alarm/',
      },
    },
  },
};
