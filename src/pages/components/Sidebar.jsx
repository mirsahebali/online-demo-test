import profile from "./profiles.json";
import Image from "next/image";
export default function Sidebar({element, Array, palateQ}) {
  Array = []
  return (

    <div className="flex flex-col items-center justify-center " >
      <div className="profile bg-sky-300 w-max rounded p-3">
        <div >
          <Image
            src={profile.img}
            alt="student_img"
            width={100}
            height={100}
            style={{ borderRadius: "100rem" }}
          ></Image>
        </div>
        <div> Name: {profile.name}</div>
        <div>Roll No: {profile.roll}</div>
        {element}
        </div>
      <div className="q_pallate border border-black">
<ul className="flex flex-wrap bg-blue-300">
 {Array.questions.map((question)=> {return <li className="m-2 text-lg border-4 cursor-pointer hover:bg-black hover:text-white hover:border-double hover:scale-110 p-1 hover:ease-in-out flex-wrap border-black " onClick={()=> palateQ(question.id)} key={question.id}> {question.id}</li>})}
 </ul>
      </div>
      <div className="legend"></div>
    </div>
  );
}
