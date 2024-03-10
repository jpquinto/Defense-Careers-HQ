"use client";

import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";

const Hero = () => {

    const images = [
        "/img/hero/1.jpg",
        "/img/hero/2.jpg",
        "img/hero/3.jpg",
    ];

    return (
        <ImagesSlider className="h-[100dvh] shadow-2xl" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-white py-4">
                Defense Careers HQ
            </motion.p>
            <motion.p className="text-sm md:text-xl lg:text-2xl text-center py-4 px-20 drop-shadow-md">
                The premier resource for transitioning military members, verterns, or anyone interested in starting a career as a United States Department of Defense (DoD) contractor.
            </motion.p>
            <div className="flex space-x-5">

                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Learn More</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Get Help</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </div>
          </motion.div>
        </ImagesSlider>
      );
}

export default Hero;