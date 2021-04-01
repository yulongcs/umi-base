import { request } from 'umi';
import type { RequestOptions } from '@/typings';

const serviceName = 'resource';

export async function getSite(options?: RequestOptions) {
  return request(`/${serviceName}/getSite`, options);
}
