import {animate, motion} from "framer-motion";

//variants
const StairAnimation = {
  initial: {
    left: "0%", // Bars start off-screen to the left
  },
  animate: {
    left: "100%", // Bars move to the right edge of the screen
  },
  exit: {
    left: ["100%", "0%"], // Bars move off-screen to the right
  },
};
//Calculating the reversed index
const reversedIndex = (index) => {
  const totalSteps = 5; //Number of steps.
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs
    The delay for each div is calculated dynamically based on its reversed index
    creating a staggered effect with increaseing delay for each subsequent step.*/}
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={StairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.25, // Adjusted delay for staggered effect
            }}
            // className="h-[16.666%] w-full bg-green-800 relative" // Each stair takes 1/6th of the height
            style={{
              position: "absolute",
              top: `${index * (100 / 5)}%`, // Position each bar below the previous one
              left: 0,
              width: "100%",
              height: `${100 / 5}%`, // Each bar takes 1/6th of the height
              backgroundColor: "green",
            }}
            className="pointer-events-none"
          />
        );
      })}
    </>
  );
};

export default Stairs