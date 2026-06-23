import React from "react";
import {motion} from "framer-motion"
const Loading = () => {
    
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="loader w-1 h-1 rounded-full text-cyan-400"></div>
    </div>
  );
};

export default Loading;
