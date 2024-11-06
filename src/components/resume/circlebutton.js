import React from "react";
import {motion} from "framer-motion";

const CircleButton=(module,index,onClick,totalModule)=>{
    const angle = (index / totalModule)*2*Math.PI;//计算按钮位置的角度
    const x = 100*Math.cos(angle);
    const y = 100*Math.sin(angle);

    return (
        <motion.button
        className="circle-button"
        onClick={onClick}
        initial={{x:0,y:0,opacity:0}}
        animate={{x,y,opacity:1}}
        transition={{type:"spring",stiffness:300,damping:20}}
        whileTap={{scale:0.9}}
        >
            {module.label}
        </motion.button>
    );
}

export default CircleButton;