import React from "react";
import CountUpLib from 'react-countup'
const CountUp = CountUpLib.default || CountUpLib

const comDetails=[
    {id:1,number:10,title:"Active students"},
    {id:2,number:25,title:"Project Shared"},
    {id:3,number:45,title:"Blogs Published"},
    {id:4,number:50,title:"Top collegs"},
    {id:5,number:100,title:"Recruters"},
]

const Community = () => {
  return (
    <div className="bg-[#040816] w-full py-10 text-white ">
      <div className="w-full max-w-7xl mx-auto bg-[#0d0d1c] p-5 rounded-2xl">
        <p className="uppercase mb-10 font-semibold text-primary text-center">
          Join a Thriving community
        </p>
        <div className="flex justify-evenly">
          {
            comDetails.map((card)=>(
                <div key={card.id} className='-mt-5 sm:-mt-0 flex flex-col text-center'>
                  <span className='text-2xl md:text-4xl'>
                    <CountUp end={card.number} duration={2} enableScrollSpy scrollSpyOnce/>+
                  </span>
                  <span className='text-xs md:text-sm text-text-secondary'>{card.title}</span>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Community;
