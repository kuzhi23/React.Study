const SET_DIFF = "counterModule/SET_DIFF";
const INCREASE = "counterModule/INCREASE";
const DECREASE = "counterModule/DECREASE";

//action 함수 생성

export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff: diff,
});

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

// initialState 설정
const initialState = {
  number: 0,
  diff: 1,
};

// reducer 작성

export default function counterModule(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
