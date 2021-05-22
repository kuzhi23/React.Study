import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(action.name);
  console.log(action.value);
  console.log(state);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InPutReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <h3>
        이름:{name} 닉네임:{nickname}
      </h3>
    </div>
  );
};

export default InPutReducer;
