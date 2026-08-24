"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },

  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },

  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },

  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   STAGGER CONTAINER
========================================================= */

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   STAGGER ITEM
========================================================= */

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className = "",
}: StaggerItemProps) {
  return (
    <motion.div
      layout
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },

        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      }}
    >
      {children}
    </motion.div>
  );
}