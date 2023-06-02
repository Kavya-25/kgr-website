import React from 'react'
import { motion, useScroll } from "framer-motion";
import './FramerScroll.scss'

export const FramerScroll = () => {
    const { scrollYProgress } = useScroll();
  return (
    <>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}
