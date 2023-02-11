import profile from "./profiles.json";
import Image from "next/image";
export default function Sidebar(props) {
  return (

    <div className="flex flex-col items-start justify-center left-3" >
      <div className="profile bg-sky-300">
        <div>
          <Image
            src={profile.img}
            alt="student_img"
            width={100}
            height={100}
            style={{ borderRadius: "10rem" }}
          ></Image>
        </div>
        <div> Name: {profile.name}</div>
        <div>Roll No: {profile.roll}</div>
        {props.element}
        </div>
      <div className="q_pallate border border-black">
<ul className="flex">
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>1</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>2</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>3</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>4</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>5</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>6</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>7</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>8</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>9</li>
  <li className="border rounded m-2 flex-wrap" onClick={props.setQuestion}>10</li>
</ul>
      </div>
      <div className="legend"></div>
    </div>
  );
}
