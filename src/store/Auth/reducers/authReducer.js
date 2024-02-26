import actionTypes from "../actions/actionTypes";
import { produce } from "immer";

const initialState = {
  isLogin: false,
  userIsSignUp: null,
  userInfo: null,
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.LOG_IN) {
      draft.isLogin = payload;
    } else if (type === actionTypes.USER_IS_LOGIN) {
      draft.isLogin = payload;
    } else if (type === actionTypes.SIGNUP) {
      draft.userInfo = payload;
    }
    return draft;
  });
};

export default reducer;
