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

export const chooseQuestion = (index) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CHOOSE_QUESTION,
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const submitAnswer = (score) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.SUBMIT_ANSWER,
      payload: score,
    });
  } catch (e) {
    console.log(e);
  }
};


export const timeTodo = (time) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.TIME_TODO,
      payload: time,
    });
  } catch (e) {
    console.log(e);
  }
};