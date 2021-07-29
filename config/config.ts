import routes from './routes';

import { defineConfig } from 'umi';
export default defineConfig({
  // https://github.com/umijs/umi-plugin-antd-icon-config
  // plugins: ['umi-plugin-antd-icon-config'],
  nodeModulesTransform: {
    type: 'none',
  },
  routes,

  fastRefresh: {},
  dva: {
    hmr: true,
    immer: true,
  },
});
