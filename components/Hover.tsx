"use client";
import { data } from "@/portfolio/data";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

const parent = {
  initial: {},
  animate: {},
};

const textAnimation: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
};

const arrowAnimation: Variants = {
  initial: {
    opacity: 0,
    transform: 'translate3d(-101%, 0, 0)',
  },
  animate: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
};

const imgAnimation: Variants = {
  initial: {
    opacity: 0,
    transform: 'translate3d(0, 101%, 0)',
  },
  animate: (i) => ({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: "easeOut",
      easings: '',
    },
  }),
};

const Hover = () => {
  return (
    <>
      {data.map((i, idx) => (
        <motion.div
          key={idx}
          variants={parent}
          initial={"initial"}
          whileHover={"animate"}
          className="md:h-[8rem] overflow-hidden relative cursor-pointer"
        >
          <motion.div
            id="texts"
            variants={textAnimation}
            className="flex justify-around items-center"
          >
            <div className="flex flex-col sm:flex-row items-center">
              <h1 className="text-[3rem] md:text-[6rem] uppercase font-medium">{i.address}</h1>
              <p className="md:text-[1.2rem] ml-6 mb-6 sm:mb-0 uppercase font-medium">
                / / {i.city}
              </p>
            </div>
            <h1 className="text-[1rem] md:text-[6rem] font-medium hidden sm:block">*{idx + 1}</h1>
          </motion.div>

          <div className="absolute top-0 flex">
            <motion.div variants={arrowAnimation} className="md:text-[6rem]">#</motion.div>
            <ul id="images" className="flex w-full">
              {i.images.map((url, idx) => (
                <motion.li
                  key={idx}
                  variants={imgAnimation}
                  custom={idx + i.images.length}
                  className="mt-4 md:w-[16rem]"
                >
                  <div className="relative ml-[4rem]">
                    <Image
                      src={url}
                      alt="portfolio"
                      width={250}
                      height={250}
                      className="h-full object-cover"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Hover;
