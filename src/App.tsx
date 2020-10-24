import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db } from "./firebase";
import Test from "./Test";

const App = () => {
  const [data, setData] = useState<any>(null);

  const onPress = () => {
    db.ref("/test").set({ name: "chad", age: 29 });
  };

  db.ref("/test").once("value", (val) => {
    if (data === null) {
      setData(val.val());
    }
  });

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> HERE WE ARE.
        </p>
        {data ? <Test name={data?.name} age={data?.age} /> : null}
        <button onClick={onPress}>SET DATA</button>
        <a
          className="App-link"
          href="https://tommytreb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
