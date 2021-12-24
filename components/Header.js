import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { itemVar, parentVar } from "../animations/headerVariant";
import Avatar from "./Avatar";
import ChangeProfile from "./ChangeProfile";

function Header() {
    const { user, logout } = useMoralis();
    const [isActive, setIsActive] = useState(true);
    const [hover, setHover] = useState(false);
    const [direction, setDirection] = useState(0);

    return (
    <motion.div
      drag='y'
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.01}
      onDragEnd={(_, info) => {
        if (info.offset.y > 20) {
          setDirection(0);
          setIsActive(true);
        }
        if (info.offset.y < -25) {
          setIsActive(false);
          setDirection(0);
        }
      }}
      onDrag={(_, info) => {
        if (info.offset.y > 2) {
          setDirection(-1);
        }
        if (info.offset.y < -2) {
          setDirection(2);
        }
      }}
    >
      <motion.div variants={parentVar} className='h-full w-full'>
        <motion.div
          animate={{ y: isActive ? -10 : "calc(-100% + 4rem)" }}
          transition={{ stiffness: 150, damping: 10 }}
          className='sticky top-0 py-8 mx-5 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 p-5 rounded-xl shadow-2xl z-40 text-purple-500 border-b-2 border-purple-500 rounded-b-2'
        >
          <motion.div
            variants={parentVar}
            initial='from'
            animate='to'
            exit='exit'
            className='relative grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'
          >
            <motion.div
              variants={itemVar}
              className='relative z-40 h-24 w-24 mx-auto hidden lg:inline-grid'
            >
              <Image
                objectFit='cover'
                src='https://i.imgur.com/mEWrdvi.png'
                layout='fill'
                className='rounded-full'
              />
            </motion.div>

            <motion.div
              variants={itemVar}
              className='text-left lg:text-center col-span-4'
            >
              <div
                className='h-48 w-48 relative lg:mx-auto border-purple-500 border-8 rounded-full mb-1'
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onClick={() => logout()}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: hover ? 1 : 0, scale: 1 }}
                  className='absolute top-0 left-0 bottom-0 right-0 z-50 flex flex-col items-center justify-center bg-black rounded-full backdrop-blur bg-opacity-50'
                >
                  <span className='label z-50 font-medium leading-5'>
                    Exit the
                  </span>
                  <span className='label z-50 font-bold leading-3 text-xl'>
                    METAVERSE
                  </span>
                  <span className='absolute'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-28 w-28 opacity-20'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                      />
                    </svg>
                  </span>
                </motion.div>

                <Avatar logoutOnPress profilePicture={user.get("profilePicture")}/>
              </div>

              <h1 className='text-3xl font-medium'>
                Welcome to the METAVERSE,
              </h1>
              <h2 className='text-5xl font-bold truncate'>
                {user?.getUsername()}
              </h2>

              <ChangeProfile />
            </motion.div>
          </motion.div>

          <div className='flex items-center justify-center mt-6'>
            <motion.div
              initial={{ rotate: 0, x: 0 }}
              animate={{
                rotate: direction > 0 ? -40 : direction < 0 ? 40 : 0,
                x: direction > 0 ? 6 : direction < 0 ? 6 : 0,
              }}
              className='w-6 h-2 bg-gray-300 rounded-l-full'
            />
            <motion.div
              animate={{
                rotate: direction > 0 ? 40 : direction < 0 ? -40 : 0,
                x: direction > 0 ? -6 : direction < 0 ? -6 : 0,
              }}
              className='w-6 h-2 bg-gray-300 rounded-r-full'
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
    )
}

export default Header