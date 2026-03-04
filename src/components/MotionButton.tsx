import { motion, type HTMLMotionProps } from "framer-motion";

type MotionButtonProps = HTMLMotionProps<"a">;

function MotionButton({ children, ...props }: MotionButtonProps) {
  return (
    <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} {...props}>
      {children}
    </motion.a>
  );
}

export default MotionButton;
