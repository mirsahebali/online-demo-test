function Result(props) {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl">You scored : {props.marks}</h1>
      <h1> You answered: {props.answered}</h1>
    </div>
  );
}

export default Result;
