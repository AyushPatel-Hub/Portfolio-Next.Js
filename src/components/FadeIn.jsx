// 'use client';

// import { motion } from 'framer-motion';

// export default function FadeIn({ 
//   children, 
//   delay = 0, 
//   direction = 'up',
//   className = "" 
// }) {
//   // Define directional offsets
//   const directions = {
//     up: { y: 30, x: 0 },
//     down: { y: -30, x: 0 },
//     left: { x: 30, y: 0 },
//     right: { x: -30, y: 0 },
//     none: { x: 0, y: 0 }
//   };

//   return (
//     <motion.div
//       className={className}
//       initial={{
//         opacity: 0,
//         ...directions[direction],
//       }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//         y: 0,
//       }}
//       // 'amount: 0.2' means trigger when 20% of the element enters the view
//       // 'once: true' prevents re-triggering when Lenis bounces back up
//       viewport={{ once: true, amount: 0.2 }} 
//       transition={{
//         duration: 0.6,
//         delay: delay,
//         ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic-bezier curve
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }
'use client';

import { motion } from 'framer-motion';

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "" 
}) {
  const directions = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { x: 25, y: 0 },
    right: { x: -25, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      // 'amount: "some"' triggers the instant even 1px enters the viewport
      // 'margin: "0px 0px -20px 0px"' fixes mobile intersection observer stalling on route changes
      viewport={{ once: true, amount: "some", margin: "0px 0px -20px 0px" }} 
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  );
}