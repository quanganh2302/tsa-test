import actionTypes from "./actions/actionTypes";

export const signUp = (data) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.SIGN_UP,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.LOGIN,
        payload: data,
      });
      localStorage.setItem("mk", data.password);
    } catch (error) {
      console.log(error);
    }
  };
};

export const isLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.USER_IS_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
