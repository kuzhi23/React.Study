// import React, { useState } from "react";

// const Counter = () => {
//   const [number, setNumber] = useState(0);

//   const handleIncrease = (number) => {
//     setNumber(number + 1);
//   };

//   const handleDecrease = (number) => {
//     setNumber(number - 1);
//   };
//   return (
//     <div>
//       <p>현재 카운터 값은 {number < 0 ? 0 : number} 입니다.</p>
//       <button onClick={() => handleIncrease(number)}>+1</button>
//       <button onClick={() => handleDecrease(number)}>-1</button>
//     </div>
//   );
// };

// export default Counter;

//TODO: 책 내용
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
