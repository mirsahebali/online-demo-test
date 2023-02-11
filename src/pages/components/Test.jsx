import Screen from "./Screen";
import { useState } from "react";

function Test() {
  const [end, setEnd] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div>
        <Screen></Screen>
      </div>
     
      {console.log(Screen.score)}
    </div>
  );
}

export default Test;
