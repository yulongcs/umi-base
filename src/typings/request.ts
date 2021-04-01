import type { ExtendOptionsInit } from 'umi-request';
import type { Context } from 'umi-request';

export interface RequestError extends Error {
  data?: any;
  info?: ErrorInfoStructure;
  request?: Context['req'];
  response?: Context['res'];
}

// 展示错误消息方式
export enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 4,
  REDIRECT = 9,
}

// 统一接口返回错误格式
export interface ErrorInfoStructure {
  success: boolean; // 是否正确返回
  data?: any; // 错误详情数据
  errorCode?: string; // 错误码
  errorMessage?: string; // 错误码国际化文案
  showType?: ErrorShowType; // 展示错误方式
  requestId?: string; // request ID
  [key: string]: any;
}

// 请求options
export interface RequestOptions extends ExtendOptionsInit {
  skipErrorHandler?: boolean;
}
