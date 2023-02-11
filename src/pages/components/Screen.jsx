import styles from "@/styles/Screen.module.css";
import { useState } from "react";
import phyData from "../questions/phy.json";
import chemData from "../questions/chem.json";
import mathsData from "../questions/maths.json";
import SubBtn from "./SubBtn";
import { redirect } from "next/dist/server/api-utils";
export default function Screen(props) {

  const jsonData = [phyData, chemData, mathsData];
  const [marks, setMarks] = useState(0);
  const [qNo, setQNo] = useState(0);
  const [subNo, setSubNo] = useState(0);
  const [sub, setSub] = useState(jsonData[0]);
  function increaseQNo() {
    setQNo(qNo + 1);
    if (qNo > 8) {
      setQNo(0);
    }
  }

  function decreaseQNo() {
    setQNo(qNo - 1);
    if (qNo <= 0) {
      setQNo(9);
    }
  }
function increaseSubNo(){
if (subNo === 0) {
  setSubNo(1)
  setSub(jsonData[subNo])
  setQNo(0)
}
if (subNo === 1) {
  setSubNo(2)
  setSub(jsonData[subNo])
  setQNo(0)
  
}
if (subNo === 2) {
  setSubNo(0)
  setSub(jsonData[subNo])
  setQNo(0)

  
}
}
  function setPhy() {
    setSubNo(0);
    setSub(jsonData[subNo]);
  }
  function setChem() {
    setSubNo(1);
    setSub(jsonData[subNo]);
  }
  function setMaths() {
    setSubNo(2);
    setSub(jsonData[subNo]);
  }

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setMarks(marks + 1);
    }
    if (qNo < 9) {
      setQNo(qNo + 1);
    } else if (subNo === 0 && qNo > 8) {
      setSub(jsonData[1]);
      setQNo(0);
    } else if (subNo === 1 && qNo > 9) {
      setSub(jsonData[2]);
      setQNo(0);
    } else if (subNo === 2 && qNo > 9) {
      setSub(jsonData[0]);
      setQNo(0);

    }

    console.log(marks);
  };
  function clearClicked() {
    optionClicked(null);
  }

function toResult() {
  return redirect("../Result")
}

  return (
    <div className={styles.screen}>
      <div className={styles.sub_btn}>
        <SubBtn onClick={setPhy} buttonName="Physics" />
        <SubBtn onClick={setChem} buttonName="Chemistry" />
        <SubBtn onClick={setMaths} buttonName="Maths" />
        <div className="flex justify-center items-center">
<button className="bg-red-700 border-black border-2 rounded" onClick={toResult}>End Test</button>
</div>
      </div>
      <div className={styles.q_no}>
        <h2>Ques No. {qNo + 1}</h2>
      </div>
      <div className={styles.q_container}>
        <div className={styles.question}>
          <div>
            <h2>Question: </h2>
            <h1 className="text-3xl font-bold">
              {jsonData[subNo].questions[qNo].question}
            </h1>
            
              {qNo === 9 ? <p className="p-3 border hover:bg-pink-300 text-purple-900" onClick={increaseSubNo}> Click Next!   </p>: ""}
          
          </div>{" "}
        </div>
        <div className={styles.options}>
          <ul className="flex flex-col">
            {jsonData[subNo].questions[qNo].options.map((option) => {
              return (
                <li
                  className="relative top-[4rem] flex flex-col justify-center items-center border border-black p-7 bg-yellow-400 center rounded hover:bg-blue-700 hover:scale-110"
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.option}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.response_buttons}>
        <button className={styles.button}>CLEAR RESPONSE</button>
        <button className={styles.button}>REVIEW</button>
        <button className={styles.button} onClick={decreaseQNo}>
          PREVIOUS
        </button>
        <button className={styles.button} onClick={increaseQNo}>
          NEXT
        </button>
      </div>
    </div>
  );


}
