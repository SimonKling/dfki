import { motion, AnimatePresence } from "framer-motion";
import ArrowDown from "../../public/down-arrow-svgrepo-com.svg";

interface DropdownProps {
  isButtonHovered: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isButtonHovered }) => {
  return (
    <>
      {isButtonHovered ? (
        <motion.div
          animate={{ y: [10, 0, 15, 0, 10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <AnimatePresence>
            <motion.div
              className={` `}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              
              <ArrowDown  className="sm:w-24 z-50 sm:h-24  fill-white opacity-75" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : (
       ""
      )}
    </>
  );
};

export default Dropdown;
