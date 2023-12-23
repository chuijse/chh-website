"use client";
import React, { useState, useRef, use } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
//import { wrap } from "@motionone/utils";
import { strengths } from "./Strengths";
import Divider from "../../components/Divider";
import "./_aptitude.scss";

export default function Aptitudes() {
  const [titleY, setTitleY] = useState(0);
  const refTitle = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refTitle,
    offset: ["start end", "end end"],
  });

  const springScroll = useSpring(0, { stiffness: 500, damping: 100 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("current: ", scrollYProgress);
    springScroll.set(latest);
  });

  useMotionValueEvent(springScroll, "change", (latest) => {
    console.log(latest);
    setTitleY(latest * -120);
  });

  //console.log(scrollYProgress);

  return (
    <section className="aptitudes-root" ref={refTitle}>
      <h2
        className="aptitudes-title"
        style={{
          transform: `translateY(${titleY}%)`,
          //marginTop: `${titleY}px`,
        }}
      >
        Aptitudes
      </h2>
      <div className="aptitudes-strengths">
        {strengths.map((strength) => (
          <Item
            main={strength.main}
            categories={strength.categories}
            key={`Aptitud-${strength.main}`}
            baseVelocity={strength.baseVelocity}
          />
        ))}
      </div>
    </section>
  );
}

function Item({ main, categories, baseVelocity = -5 }) {
  const [isActive, setActive] = useState(false);
  const textSize = useRef(null);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);
    moveBy += directionFactor.current * moveBy;
    if (baseX.get() >= -33.333) {
      baseX.set(baseX.get() + moveBy);
    } else {
      baseX.set(0);
    }
  });

  return (
    <motion.div
      className="aptitudes-item-root"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      animate={{
        marginTop: isActive ? "30px" : "10px",
        marginBottom: isActive ? "30px" : "10px",
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="aptitude-divider">
        <motion.h3
          animate={{ scale: isActive ? 1.4 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {main}
        </motion.h3>
      </div>
      <div className="aptitude-divider">
        <Divider size="light" />
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.p
            style={{ x }}
            initial={{ height: "0px", opacity: 0, margin: "0px" }}
            animate={{
              opacity: 1,
              height: "10px",
              margin: "15px",
            }}
            exit={{ opacity: 0, height: "0px", margin: "0px" }}
            transition={{ duration: 0.2 }}
          >
            <span>
              {categories.map((categorie, i) =>
                i !== categories.length - 1
                  ? `${categorie} - `
                  : `${categorie} - `
              )}
              {categories.map((categorie, i) =>
                i !== categories.length - 1
                  ? `${categorie} - `
                  : `${categorie} - `
              )}
              {categories.map((categorie, i) =>
                i !== categories.length - 1
                  ? `${categorie} - `
                  : `${categorie} - `
              )}
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
