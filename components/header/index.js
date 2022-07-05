import React from "react";
import Navigation from "./parts/navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const redirectToHome = () => router.push("/");
  return (
    <div id="header">
      <Navigation>
        <motion.div
          style={{ userSelect: "none" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -1000 }}
          initial={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            style={{ userSelect: "none" }}
            onClick={redirectToHome}
            className="logo-hn"
            src={require("/assets/images/logo.svg")}
            width="90"
            height="90"
            alt="logo high noon"
          />
        </motion.div>
      </Navigation>
    </div>
  );
};

export default Header;
