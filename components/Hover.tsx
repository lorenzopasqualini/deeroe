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
  },
  animate: {
    opacity: 1,
  },
};

const imgAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
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
          className="h-[8rem] overflow-hidden relative cursor-pointer"
        >
          <motion.div
            id="texts"
            variants={textAnimation}
            className="flex justify-around items-center"
          >
            <div className="flex items-center">
              <h1 className="text-[6rem] uppercase font-medium">{i.address}</h1>
              <p className="text-[1.3rem] ml-6 mt-8 uppercase font-medium">
                / {i.city}
              </p>
            </div>
            <h1 className="text-[6rem] font-medium">*{idx + 1}</h1>
          </motion.div>

          <div className="absolute top-0 flex items-center">
            <motion.div variants={arrowAnimation} className="text-[6rem]">x</motion.div>
            <ul id="images" className="flex w-full">
              {i.images.map((url, idx) => (
                <motion.li
                  key={idx}
                  variants={imgAnimation}
                  className="mt-4 w-[16rem]"
                >
                  <div className="relative ml-[4rem]">
                    <Image
                      src={url}
                      alt="portfolio"
                      width={500}
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
