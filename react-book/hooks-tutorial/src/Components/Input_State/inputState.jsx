//TODO: MyCode

// import React, { useState } from "react";

// const InputState = () => {
//   const [input, setInput] = useState({
//     name: "",
//     nickname: "",
//   });
//   const onChange = (e) => {
//     const { name, value } = e.target;
//     console.log(e.target.name);
//     setInput({
//       ...input,
//       [name]: value,
//     });
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="name"
//         name="name"
//         onChange={onChange}
//       ></input>
//       <input
//         type="text"
//         name="nickname"
//         placeholder="nickname"
//         onChange={onChange}
//       ></input>
//       <p>이름: {input.name}</p>
//       <p>닉네임:{input.nickname}</p>
//     </div>
//   );
// };

// export default InputState;

//TODO: bookCode

import React, { useEffect, useState } from "react";

const InputState = (props) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  //   useEffect(() => {
  //     console.log("렌더링 완료되었습니다.");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   });

  //   useEffect(() => {
  //     console.log("마운트 될떄만 실행");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   }, []);

  //   useEffect(() => {
  //     console.log("특정값 업데이트  될떄만 실행");
  //     console.log({
  //       name,
  //     });
  //   }, [name]);

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("unmount");
    };
  }, []);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const nickNameChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="name" onChange={nameChange}></input>
      <input
        type="text"
        placeholder="nickName"
        onChange={nickNameChange}
      ></input>
      <p>이름: {name}</p>
      <p>닉네임 : {nickname}</p>
    </div>
  );
};

export default InputState;
