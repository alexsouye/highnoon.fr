import HomePageApp from "./index";
import { motion, AnimatePresence } from "framer-motion";

// All scss files
import "../assets/styles/main.scss";

const App = () => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
    <HomePageApp />
  </AnimatePresence>
);

export default App;
