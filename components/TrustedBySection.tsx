import { motion } from "framer-motion";

const TrustedBySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="py-24 text-center relative w-full h-[50vh] "
    >
      <p className="text-gray-400 text-sm uppercase tracking-wide">
        TRUSTED BY TEAMS FROM AROUND THE WORLD
      </p>
      <div className="flex justify-center gap-12 flex-wrap mt-6">
        <img
          src="https://cdn.magicui.design/companies/Google.svg"
          alt="Google"
          className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
        />
        <img
          src="https://cdn.magicui.design/companies/Microsoft.svg"
          alt="Microsoft"
          className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
        />
        <img
          src="https://cdn.magicui.design/companies/GitHub.svg"
          alt="GitHub"
          className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
        />
        <img
          src="https://cdn.magicui.design/companies/Uber.svg"
          alt="Uber"
          className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
        />
        <img
          src="https://cdn.magicui.design/companies/Notion.svg"
          alt="Notion"
          className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
        />
      </div>
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-700 via-transparent to-transparent w-full h-full rounded-full blur-[50px] opacity-80"></div>
      </div>

      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-full h-[120%] z-10 overflow-hidden pointer-events-none [clip-path:ellipse(50%_50%_at_50%_100%)]">
        <div className="absolute inset-0 bg-black w-full h-full"></div>
      </div>
    </motion.div>
  );
};

export default TrustedBySection;
