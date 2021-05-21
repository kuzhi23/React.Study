import React, { useState } from "react";
import InputState from "./Input_State/inputState";

function App() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={handleClick}>{visible ? "숨기기" : "보이기"}</button>
      {/* {visible ? <p>숨겨짐</p> : <InputState />} */}
      <hr />
      {visible && <InputState />}
    </div>
  );
}

export default App;
