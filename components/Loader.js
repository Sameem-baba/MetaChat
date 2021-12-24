import { motion } from "framer-motion";
import { variantsLeft, variantsRight } from "../animations/loaderVariants";

const Loader = ({ getSequence }) => {
  return (
    <div className='h-screen w-full fixed top-0 left-0 z-40'>
      <div className='relative w-full h-full'>
        <motion.div
          variants={variantsLeft}
          initial='from'
          exit='exit'
          onAnimationComplete={() => {
            getSequence();
          }}
          className='bg-gradient-to-b from-[#9E23A3] to-[#15151F] h-full w-1/2 absolute left-0'
        />
        <motion.div
          variants={variantsRight}
          initial='from'
          exit='exit'
          className='bg-gradient-to-b from-[#9E23A3] to-[#15151F] h-full w-1/2 absolute right-0'
        />
      </div>
    </div>
  );
};

export default Loader;
