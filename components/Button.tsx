import { motion } from "framer-motion";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
};

const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <motion.button
      className={`flex gap-3 cursor-pointer rounded-full border text-sm whitespace-nowrap ${variant}`}
      type={type}
      transition={{
        duration: 200,
        ease: "easeInOut",
      }}
    >
      {title}
    </motion.button>
  );
};

export default Button;
