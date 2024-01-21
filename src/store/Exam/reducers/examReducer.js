import { produce } from "immer";
import actionTypes from "../actions/actionTypes";
const initialState = {
  answers: [],
  questionSelected: 0,
  score: 0,
  time: 0,
  position: [],
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.CHOOSE_ANSWER) {
      draft.answers = payload;
    } else if (type === actionTypes.CHOOSE_QUESTION) {
      draft.questionSelected = payload;
    } else if (type === actionTypes.SUBMIT_ANSWER) {
      draft.score = payload;
    } else if (type === actionTypes.TIME_TODO) {
      draft.time = payload;
    } else if (type === actionTypes.DETECT_SPACE) {
      draft.position = payload;
    }
    return draft;
  });
};
export default reducer;
