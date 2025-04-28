"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Se ejecuta después de que los estilos se apliquen
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // unos 100ms para asegurarnos

    return () => clearTimeout(timeout);
  }, []);
  if (!isLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <div className="relative isolate overflow-hidden bg-general">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex  lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 text-white">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white uppercase">proyecto miic panamá</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where minimal design meets floral artistry. We craft elegant experiences that inspire and elevate your
            space.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://www.flowersandsaints.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white font-black transition-all duration-500 "
            >
              <span className="inline-block  bg-red-500  rounded-full p-4 animate-bounce group-hover:animate-none transition-transform duration-500">
                Acceder al APP
              </span>
            </a>
            <a
              href="https://www.flowersandsaints.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/miic.png"
              alt="Proyecto MIIC"
              width={600}
              height={600}
              className="w-[500px] "
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
