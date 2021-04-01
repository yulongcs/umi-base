import React from 'react';
import type { RequestConfig } from 'umi';
import PageLoading from '@/components/PageLoading';
import type { ErrorInfoStructure, RequestError } from '@/typings';
import './global.less';

/**
 * 在整个应用最开始执行，返回值会作为全局共享的数据
 * 可以通过 useModel('@@initialState') 直接获取到这份数据。
 * @umijs/plugin-initial-state
 * https://umijs.org/zh-CN/plugins/plugin-initial-state
 * @returns Promise<any>
 */
export async function getInitialState() {
  return {
    userId: 'xxxxxxxxx',
    userName: 'endy',
    role: 'admin',
  };
}

/**
 * 初始化数据没有返回时，会显示loading
 */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * 异常处理程序
 */
const errorHandler = (error: RequestError) => {
  // 跳过统一错误处理
  // @ts-ignore
  if (error?.request?.options?.skipErrorHandler) {
    throw error;
  }

  const { name, response, request, data } = error;
  // 统一错误格式
  let errorInfo: ErrorInfoStructure | undefined;
  if (name === 'ResponseError' && data && request) {
    // const ctx: Context = {
    //   req: error.request,
    //   res: error.response,
    // };
    // errorInfo = request.errorConfig.errorAdaptor(error.data, ctx);
    const errorCode = data?.errorCode ?? data?.code ?? response?.status;
    errorInfo = {
      success: response.ok ?? data?.success,
      data: data?.data,
      errorCode,
      errorMessage: errorCode,
      showType: 2, // 错误提示方式 0 不展示; 1 warn; 2 error; 4 notification; 9 page
      requestId: data?.requestId,
    };
    error.message = errorInfo?.errorMessage ?? error.message;
    error.info = errorInfo;
  }

  throw error;
};

export const request: RequestConfig = {
  prefix: 'api',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  middlewares: [
    // 处理上传文件，不需要设置Content-Type
    async function handleContentType(ctx: any, next: any) {
      // 判断data是否是 FormData类型
      if (ctx.req.options?.data instanceof FormData) {
        delete ctx.req.options.headers['Content-Type'];
      }
      await next();
    },
  ],
  requestInterceptors: [], // request 拦截器
  responseInterceptors: [], // response 拦截器
  errorHandler,
};
