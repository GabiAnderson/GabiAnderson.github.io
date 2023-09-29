// framer motion variants to add animation
export const springInVariant = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  export const rotateInVariant = {
    offscreen: {
      opacity: 0,
      rotate: -90,
    },
    onscreen: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  export const scaleInVariant = {
    offscreen: {
      opacity: 0,
      scale: 0.5,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
      },
    },
  };

  export const fadeAndSlideInVariant = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  
  export const bounceInVariant = {
    offscreen: {
      opacity: 0,
      y: -100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
      },
    },
  };