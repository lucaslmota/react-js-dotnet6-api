import React, {useState}from "react";
import Header from "./Header";

export default function App() {
const [conter, setConter] = useState(0);

function incremente(){
  setConter(conter + 1)
}

  return(
    <>
      <Header>Counter : {conter}</Header>
      <button onClick={incremente}>Add</button>
    </>
  );
}

