import { motion } from 'framer-motion';
import { premiumReveal, premiumStagger } from '../utils/motion';

/**
 * Premium scroll reveal wrapper — fade, lift, subtle blur.
 * Use as drop-in for section content blocks.
 */
const Reveal = ({
  children,
  className = '',
  as: Component = motion.div,
  delay = 0,
  stagger = false,
}) => {
  if (stagger) {
    return (
      <Component
        className={className}
        variants={premiumStagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={premiumReveal.hidden}
      whileInView={premiumReveal.visible}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...premiumReveal.transition, delay }}
    >
      {children}
    </Component>
  );
};

export const RevealItem = ({ children, className = '' }) => (
  <motion.div className={className} variants={premiumStagger.item}>
    {children}
  </motion.div>
);

export default Reveal;
