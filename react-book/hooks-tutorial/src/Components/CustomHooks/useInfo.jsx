import React from "react";
import UseInputs from "./useInputs";

const UseInfo = () => {
  const [state, onChange] = UseInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b>
        {name}
        <b>닉네임: </b>
        {nickname}
      </div>
    </div>
  );
};

export default UseInfo;
