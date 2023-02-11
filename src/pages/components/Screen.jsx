import styles from "@/styles/Screen.module.css";
import { useState } from "react";
import phyData from "../questions/phy.json"
import chemData from "../questions/chem.json"
import mathsData from "../questions/maths.json"
export default function Screen() {
  const subject = ["phy", "chem", "maths"];
  const [qNo, setQNo] = useState(0);

  function increaseQNo() {
    setQNo(qNo + 1);
    if (qNo > 18) {
      setQNo(0);
    }
    console.log(qNo);
  }

  return (
    <div>
      <div className={styles.q_no}>
        <p>Ques No. {qNo + 1}</p>
      </div>
      <div className={styles.q_container}>
        <div className={styles.question}>
          <h3>Question: </h3>
          <p>{phyData.questions[qNo].question}</p>
          {console.log(phyData.questions[0].options[0])}
        </div>
        <div className={styles.options}>
          <div>
            <input
              type="radio"
              value={phyData.questions[qNo].options[0]}
              name="answer"
            />{" "}
            {phyData.questions[qNo].options[0]}
            <input
              type="radio"
              value={phyData.questions[qNo].options[1]}
              name="answer"
            />{" "}
            {phyData.questions[qNo].options[1]}
            <input
              type="radio"
              value={phyData.questions[qNo].options[2]}
              name="answer"
            />{" "}
            {phyData.questions[qNo].options[2]}
            <input
              type="radio"
              value={phyData.questions[qNo].options[3]}
              name="answer"
            />{" "}
            {phyData.questions[qNo].options[3]}
          </div>
        </div>
        <div className={styles.response_buttons}>
          <button>CLEAR RESPONSE</button>
          <button>REVIEW</button>
          <button>DUMP</button>
          <button>PREVIOUS</button>
          <button onClick={increaseQNo}>NEXT</button>
        </div>
      </div>
    </div>
  );
}
