import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-orange-600">
            About me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            working on intuitive
            <span className="text-orange-600"> designs</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-400"
          >
            <p className="leading-8">
           I'm a Junior Software Developer focused on creating modern and engaging web experiences. 
           I combine clean code, thoughtful design, and intuitive interactions to build interfaces 
           that are both visually appealing and functional.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <h3 className="text-2xl font-bold text-white text-center mt-3">
                React
              </h3>

           
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <h3 className="text-2xl font-bold text-white text-center mt-3 ">
                TypeScript
              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <h3 className="text-2xl font-bold text-white text-center mt-3">
                HTML
              </h3>
              
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <h3 className="text-2xl font-bold text-white text-center mt-3">
                CSS
              </h3>
            </div>

              <div className="rounded-2xl border border-white/10 bg-white/3 p-6 ">
              <h3 className="text-2xl font-bold text-white text-center mt-3">
                JS
              </h3>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;