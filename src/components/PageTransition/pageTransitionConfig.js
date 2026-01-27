
export const BLOCKS = 4;

export const EASE = [ 0.645,
  0.045,
  0.355,
  1 ];

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: -0.1, 
    },
  },
};

export const slideInItem = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

export const slideOutItem = {
  hidden: { y: "0%" },
  show: {
    y: "-100%",
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};