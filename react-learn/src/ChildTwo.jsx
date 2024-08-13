import { useContext } from "react";
import { Context } from "./App";

export default function ChildTwo() {
  const { number } = useContext(Context);
  return (
    <div className="App">
      <h2>Child Page!</h2>
      <h3>{number}</h3>
    </div>
  );
}
