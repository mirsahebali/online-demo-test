function Result(props) {
  return (
    <div className="flex items-center justify-center text-white">
      <h1 className="text-2xl">You scored : {props.marks}</h1>
    </div>
  );
}

export default Result;
