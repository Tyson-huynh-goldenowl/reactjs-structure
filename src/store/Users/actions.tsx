import { USERS } from "../../consts/users.const";
export const fetchUser = () => {
  return {
    type: USERS.fetchUsers,
  };
};

export const fetchUserSuccess = (data: any) => {
  return {
    type: USERS.fetchUserSuccess,
    payload: data,
  };
};

export const fetchUserError = (data: any) => {
  return {
    type: USERS.fetchUserError,
    payload: data,
  };
};
