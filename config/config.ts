// https://umijs.org/config/
import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

const { ENV = 'dev' } = process.env;

export default defineConfig({
  hash: true,
  targets: {
    ie: 11,
  },
  esbuild: {
    target: 'es5',
  },
  antd: {},
  // layout: {
  //   ...LayoutSettings
  // },
  devtool: ENV === 'dev' ? 'source-map' : false,
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  // umi routes: https://umijs.org/docs/routing
  // routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // theme,
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[ENV],
  history: {
    type: 'browser',
  },
  manifest: {
    basePath: '/',
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes,
});
