import React from "react";
import Child from "./components/Child";
import { useSelector } from "react-redux";

const App = () => {
  const data = useSelector((store) => store.show.number);
  return (
    <div>
      <h1>App, {data}</h1>
      <Child />
    </div>
  );
};

export default App;
