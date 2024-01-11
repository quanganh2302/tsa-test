import { produce } from "immer";
import actionTypes from "../actions/actionTypes";
const initialState = {
  answers: [],
  questionSelected: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.CHOOSE_ANSWER) {
      draft.answers = payload;
    } else if (type === actionTypes.CHOOSE_QUESTION) {
      draft.questionSelected = payload;
    }
    return draft;
  });
};
export default reducer;
