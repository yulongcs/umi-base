import component from './zh-CN/component';
import errorCode from './zh-CN/errorCode';
import menu from './zh-CN/menu';
import pages from './zh-CN/pages';

export default {
  loading: '加载中...',
  ...menu,
  ...component,
  ...pages,
  ...errorCode,
};
