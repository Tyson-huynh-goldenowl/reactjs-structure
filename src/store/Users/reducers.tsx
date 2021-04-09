import { USERS } from "../../consts/users.const";

export function users(state = {}, action: any) {
  switch (action.type) {
    case USERS.fetchUserSuccess:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
