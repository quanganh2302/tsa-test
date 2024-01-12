import actionTypes from "./actions/actionTypes";

export const chooseAnswer = (answer) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CHOOSE_ANSWER,
      payload: answer,
    });
  } catch (e) {
    console.log(e);
  }
};

export const chooseQuestion = (id) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CHOOSE_QUESTION,
      payload: id,
    });
  } catch (e) {
    console.log(e);
  }
};

export const chooseIndex = (index) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CHOOSE_INDEX,
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};
