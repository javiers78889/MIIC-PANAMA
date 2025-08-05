"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Loading from './Loading'; // Asegúrate que este componente exista

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className="relative isolate overflow-hidden bg-general min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 w-full">
        
        {/* Sección de texto (izquierda) */}
        <div className="flex-1 text-white flex flex-col justify-center items-start text-left">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl uppercase leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase text-5xl leading-tight">
              APP MIIC ( Metodología Invertida para la Investigación Científica)
            </span>
          </motion.h1>

          <motion.div
            className="mt-10 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/miic"
              className="group text-white font-black transition-all duration-500 "
            >
              <span className="inline-block bg-red-500 rounded-full p-4 animate-bounce group-hover:animate-none transition-transform duration-500">
                Acceder al APP
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Sección de imagen (derecha) */}
        <motion.div
          className="flex-1 mx-auto mt-16 lg:mt-0 flex justify-center"
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
              className="w-[500px]"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}