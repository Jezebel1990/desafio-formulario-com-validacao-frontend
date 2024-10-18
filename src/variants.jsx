
export const variantsButton = {
    hover: { scale: 1.1, backgroundColor: '#eab308' },
    tap: { scale: 0.9, backgroundColor: '#ca8a04' },
  };
  
  export const variantsSection = {
    initial: { boxShadow: '0 2px 10px -3px rgba(6,81,237,0.3)' },
    hover: { boxShadow: '0 4px 15px -3px rgba(79,232,249,0.6)' },
  };
  
  export const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  
  export const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  