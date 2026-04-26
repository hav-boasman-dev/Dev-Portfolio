import React from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: any;
  children: any;
}) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`${buttonClasses} mr-3`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='mt-2 mr-3 h-1 bg-[#00e58e]'
      ></motion.div>
    </button>
  );
};

export default TabButton;
