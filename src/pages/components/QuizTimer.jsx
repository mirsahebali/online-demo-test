import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

export default function QuizTimer(props) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [timeLeft]);

 
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  return (
    <div>{timeLeft ? <p>{`${minutes}: ${seconds}`}</p> : props.msg}</div>
  );
}
