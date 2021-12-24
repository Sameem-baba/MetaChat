export const parent = {
  from: {},
  to: {
    transition: {
      delayChildren: 2.9,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const child = {
  from: { y: 500 },
  to: {
    y: 0,
    transition: {
      type: "tween",
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export const modalParent = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};

export const modalChild = {
  from: {
    opacity: 0,
    y: -800,
  },
  to: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -800,
  },
};