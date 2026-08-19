import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/10 px-6 py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row bg">

        <div>
          <h2 className="text-2xl font-bold">
            Ronaldo<span className="text-orange-500">.</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Front-end junior developer
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white">

          <a
            href="https://github.com/ronyrdl"
            className="transition hover:text-orange-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ronaldo-rodriguez-de-lima-b777b6345"
            className="transition hover:text-orange-500"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ronaldorodriguezdelima@gmail.com"
            className="transition hover:text-orange-500"
          >
            Email
          </a>

        </div>

      </div>

      <p className="mx-auto mt-12 max-w-6xl text-center text-xs text-gray-600">
        © 2026 Ronaldo. All rights reserved.
      </p>

    </motion.footer>
  );
};

export default Footer;