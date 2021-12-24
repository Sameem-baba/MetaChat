export const parent = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};

export const authVar = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
  bye: {},
};

export const headerVar = {
  hidden: {
    y: -800,
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  bye: {
    y: -800,
  },
};