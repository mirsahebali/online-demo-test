import styles from "@/styles/Screen.module.css";
import { useState } from "react";
import phyData from "../questions/phy.json";
import chemData from "../questions/chem.json";
import mathsData from "../questions/maths.json";
import SubBtn from "./SubBtn";
import Result from "./Result";
import Sidebar from "./Sidebar";
import QuizTimer from "./QuizTimer";
import Link from "next/link";
export default function Screen({ score, state }) {
  const jsonData = [phyData, chemData, mathsData];
  const [marks, setMarks] = useState(0);
  const [qId, setQId] = useState(0);
  const [subNo, setSubNo] = useState(0);
  const [sub, setSub] = useState(jsonData[0]);
  const [end, setEnd] = useState(false);
  const [answered, setAnswered] = useState(0);

  //increases and decreases question number
  function increaseQId() {
    setQId(qId + 1);
    if (qId > 8) {
      setQId(0);
    }
  }

  function decreaseQId() {
    setQId(qId - 1);
    if (qId <= 0) {
      setQId(9);
    }
  }

  //increases and decreases subject no. here phy = 1, chem = 2, maths = 3
  function increaseSubNo() {
    if (subNo === 0) {
      setSubNo(1);
      setSub(jsonData[subNo]);
      setQId(0);
    }
    if (subNo === 1) {
      setSubNo(2);
      setSub(jsonData[subNo]);
      setQId(0);
    }
    if (subNo === 2) {
      setSubNo(0);
      setSub(jsonData[subNo]);
      setQId(0);
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

  //checks for answer is correct or not in backend.

  const optionClicked = (isCorrect, id) => {
    if (isCorrect) {
      setMarks(marks + 1);
    }
    if (qId < 9) {
      setQId(qId + 1);
    } else if (subNo === 0 && qId > 8) {
      setSub(jsonData[1]);
      setQId(0);
    } else if (subNo === 1 && qId > 9) {
      setSub(jsonData[2]);
      setQId(0);
    } else if (subNo === 2 && qId > 9) {
      setSub(jsonData[0]);
      setQId(0);
    }
    setAnswered(answered + 1);
    console.log(id);
  };

  function clearClicked() {
    optionClicked(null, null);
    if (!answered) {
      setAnswered(answered - 1);
    }
  }

  function endTest() {
    setEnd(true);
  }
  function setQ(n) {
    setQId(n);
  }
  function handleId(id) {
    setQId(id - 1);
  }

  return (
    <>
      {end ? (
        <div className="absolute top-[50%] left-[50%] p-5 rounded bg-slate-500">
          <Result marks={marks} answered={answered}/>
          <h1>
            <Link href="https://cv-website-nine.vercel.app/"></Link>
          </h1>
        </div>
      ) : (
        <div className="flex justify-center place-items-center">
          <div className={styles.screen}>
            <div className={styles.sub_btn}>
              <SubBtn onClick={setPhy} buttonName="Physics" />
              <SubBtn onClick={setChem} buttonName="Chemistry" />
              <SubBtn onClick={setMaths} buttonName="Maths" />
              <div className="flex justify-center items-center">
                <button
                  className="bg-red-700 border-black border-2 rounded"
                  onClick={endTest}
                >
                  End Test
                </button>
              </div>
            </div>
            <div className={styles.q_no}>
              <h2>Ques No. {qId + 1}</h2>
            </div>
            <div className={styles.q_container}>
              <div className={styles.question}>
                <div>
                  <h2 className="text-white">Question: </h2>
                  <h1 className="text-3xl font-bold text-cyan-200">
                    {jsonData[subNo].questions[qId].question}
                  </h1>

                  {qId === 9 ? (
                    <div className="flex justify-end items-center">
                      <p
                        className="p-3 border flex justify-center w-11 bg-black hover:bg-pink-300 text-purple-900"
                        onClick={increaseSubNo}
                      >
                        {" "}
                        Click Next or this!{" "}
                      </p>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {qId === 9 && subNo === 2 ? (
                    <p className="bg-red-500" onClick={endTest}>
                      Click on end test or click here
                    </p>
                  ) : (
                    " "
                  )}
                </div>{" "}
              </div>
              <div className={styles.options}>
                <ul className="flex flex-col">
                  {jsonData[subNo].questions[qId].options.map((option) => {
                    return (
                      <li
                        className="relative top-[4rem] flex flex-col justify-center items-center border border-black p-7 bg-yellow-400 center rounded hover:bg-blue-700 hover:scale-110"
                        onClick={() => {
                          optionClicked(option.isCorrect, option.id);
                        }}
                        // style={{
                        //   backgroundColor:
                        //     option.id === selectId ? "lightblue" : "",
                        // }}
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
              <button className={styles.button} onClick={clearClicked}>
                CLEAR RESPONSE
              </button>
              <button className={styles.button}>REVIEW</button>
              <button className={styles.button} onClick={decreaseQId}>
                PREVIOUS
              </button>
              <button className={styles.button} onClick={increaseQId}>
                NEXT
              </button>
            </div>
          </div>
          <>
            <Sidebar
              element={
                <QuizTimer end={<Result marks={marks}></Result>}></QuizTimer>
              }
              Array={jsonData[subNo].questions.map((question) => {
                return (
                  <li
                    className="m-2 text-lg border-4 cursor-pointer hover:bg-black hover:text-white hover:border-double hover:scale-110 p-1 hover:ease-in-out flex-wrap border-black "
                    onClick={() => handleId(question.id)}
                    key={question.id}
                  >
                    {" "}
                    {question.id}
                  </li>
                );
              })}
            >
              {console.log(jsonData[subNo].questions)}
            </Sidebar>
          </>
        </div>
      )}
    </>
  );
}
