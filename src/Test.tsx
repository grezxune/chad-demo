import React from "react";

const Test = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <span>How are you today, {name}</span>
      <h3>Holy shit, you are {age} years old!</h3>
    </div>
  );
};
export default Test;
