// utils
import * as methods from '../../utils/methods';

import { GET, POST, PUT, DELETE } from '../request';


export async function loginFunc(payload) {
  return POST('/api/users/login', payload);
}

export async function registerFunc(payload) {
  return POST('/api/users/register', payload);
}
