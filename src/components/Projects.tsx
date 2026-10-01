import { motion } from "motion/react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-orange-600">
            Proyects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Some of my {" "}
            <span className="text-orange-600">
              projects.
            </span>
          </h2>


        </motion.div>

        {/* Projects */}
        <div className="mt-16 space-y-24">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="grid items-center gap-10 md:grid-cols-2"
            >

              {/* Video */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-black ${index % 2 !== 0 ? "md:order-2" : ""
                  }`}
              >
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-100 "
                />
              </motion.div>

              {/* Content */}
              <div
                className={
                  index % 2 !== 0
                    ? "md:order-1"
                    : ""
                }
              >

                {/* Project number */}
                <span className="text-sm  font-bold text-white">
                  0{project.id}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-3xl font-bold md:text-4xl text-orange-600">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <div className="mt-8">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 0.9,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-orange-600 hover:bg-orange-800"
                  >
                    GitHub
                    <span>↗</span>
                  </motion.a>
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;