import profile from "./profiles.json";
import Image from "next/image";
export default function Sidebar({style, element}) {
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
        {element}
        </div>
      <div className="q_pallate border border-black">
<ul className="flex">
 {}
 </ul>
      </div>
      <div className="legend"></div>
    </div>
  );
}
