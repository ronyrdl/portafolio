import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0A0B10]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale:1.4}}
          whileTap={{ scale: 1 }}
          className="text-3xl font-bold tracking-tight"
        >
          R<span className="text-orange-500">.</span>
        </motion.a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className=" text-white transition-colors hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#about"
            className=" text-white transition-colors hover:text-orange-500"
          >
            About me 
          </a>

          <a
            href="#projects"
            className=" text-white transition-colors hover:text-orange-500"
          >
            Projects
          </a>

          

        </div>

        {/* Contact button */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="rounded-full border border-orange-500/50 px-5 py-2 text-sm font-medium transition-colors hover:bg-orange-600"
        >
          Contacts
        </motion.a>

      </nav>
    </motion.header>
  );
};

export default Header;