import {animate, motion} from "framer-motion";

//variants
const StairAnimation = {
    initial:{
        top:"0%",
    },
    animate: {
        top : "100%",
    },
    exit: {
        top:["100%", "0%"]
    }
}
//Calculating the reversed index
const reversedIndex =(index) => {
    const totalSteps = 6; //Number of steps.
    return totalSteps-index-1;
};


const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs
    The delay for each div is calculated dynamically based on its reversed index
    creating a staggered effect with increaseing delay for each subsequent step.*/}
    {[...Array(6)].map((_, index) => {
       return (
         <motion.div
           key={index}
           variants={StairAnimation}
           initial="initial"
           animate="animate"
           exit="exit"
           transition={{
             duration: 0.4,
             ease: "easeInOut",
             delay: reversedIndex(index) * 0.1,
           }}
           className="h-full w-full bg-green-800 relative"
         />
       );
    })}
    </>
  );
}

export default Stairs