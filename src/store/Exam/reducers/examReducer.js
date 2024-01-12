import { produce } from "immer";
import actionTypes from "../actions/actionTypes";
const initialState = {
  answers: [],
  questionSelected: 1,
  index: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.CHOOSE_ANSWER) {
      draft.answers = payload;
    } else if (type === actionTypes.CHOOSE_QUESTION) {
      draft.questionSelected = payload;
    } else if (type === actionTypes.CHOOSE_INDEX) {
      draft.index = payload;
    }
    return draft;
  });
};
export default reducer;
