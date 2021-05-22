import { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const UseInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
};

export default UseInputs;
