import profile from "./profiles.json";
import Image from "next/image";
export default function Sidebar({ element, Array, palateQ }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="profile bg-sky-300 w-max rounded p-3">
        <div>
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
        <ul className="flex flex-wrap bg-blue-300">{Array} </ul>
      </div>
      <div className="legend"></div>
    </div>
  );
}
