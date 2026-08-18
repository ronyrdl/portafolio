import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-orange-400"
        >
          Bienvenido a mi portafolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold  md:text-7xl"
        >
          Hi there, I'm{" "}
          <span className="text-orange-500">
            Ronaldo
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-2xl font-semibold text-gray-300 md:text-4xl"
        >
          Front-end junior developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          Creator of modern, intuitive, and user-friendly interfaces that combine functionality, performance, and clean design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-orange-600 px-7 py-3 font-medium transition hover:bg-orange-700"
          >
            See my projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:bg-white/10"
          >
            Contact me
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;