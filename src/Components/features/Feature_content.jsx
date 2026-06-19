import React from "react";
import {
  FaBolt,
  FaUsers,
  FaLock,
  FaPuzzlePiece,
  FaCloud,
  FaChartLine,
} from "react-icons/fa6";
import img1 from "../../assets/authenticationImg/1.png"
import img2 from "../../assets/authenticationImg/2.png"
import img3 from "../../assets/authenticationImg/3.png"
import img4 from "../../assets/authenticationImg/4.png"
import img5 from "../../assets/authenticationImg/5.png"
import img6 from "../../assets/authenticationImg/6.png"

const Feature_content = () => {
  const data = [
    {
      title: "Blazing Fast",
      text: "Experience near-instant builds, hot reloads, and optimized performance for every project.",
      icon: <FaBolt className="text-purple-400"/>,
      img:img1
    },

    {
      title: "Real-time Collaboration",
      text: "Code together in real-time with live cursors, inline comments, and instant updates.",
      icon: <FaUsers className="text-blue-400"/>,
      img:img2
    },

    {
      title: "Secure by Default",
      text: "Enterprise-grade security with role-based access, encryption, and audit logs.",
      icon: <FaLock className="text-green-300"/>,
      img:img3
    },

    {
      title: "Extensible",
      text: "Thousands of plugins and integrations to supercharge your workflow.",
      icon: <FaPuzzlePiece className="text-orange-300"/>,
      img:img4
    },

    {
      title: "Cloud Powered",
      text: "Access your projects anywhere with our global cloud infrastructure.",
      icon: <FaCloud className="text-purple-400"/>,
      img:img5
    },

    {
      title: "Insights & Analytics",
      text: "Understand your codebase with powerful analytics and performance insights.",
      icon: <FaChartLine className="text-blue-400"/>,
      img:img6
    },
  ];
  return (
    <div className="bg-black text-white py-5 px-5 ">
      <div className="res space-y-3 ">
       {
        data.map((card,ind)=>(
            <div key={ind} className="flex flex-col-reverse md:flex-row gap-5 bg-[#050a186a] bg-[#0015157e] p-5 md:justify-between">
                <div className="flex gap-2 items-center">
                      <div className="text-5xl bg-[#000110] border-2 border-[#ffffff0b] rounded-sm p-5">
                        {card.icon}
                      </div>
                      <div>
                        <h1 className="text-xl font-light">{card.title}</h1>
                        <p className="text-gray-500 font-light">{card.text}</p>
                      </div>
                </div>
                <div>
                    <img src={card.img} alt="" className="w-full max-w-120"/>
                </div>
            </div>
        ))
       }
      </div>
    </div>
  );
};

export default Feature_content;
