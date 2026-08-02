export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const fadeUp = (distance = 40) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
