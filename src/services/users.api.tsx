import { API_KEY, METHODS } from "../consts";
import API from './api';

function fetchUsers(param?: any) {
  return API.get('/users', { ...param })
};

export {
  fetchUsers
}

