"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/docs/Sidebar";
import DocContent from "@/components/docs/DocContent";

export default function Documents() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex w-full min-h-screen direction-rtl" dir="rtl">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 px-10 py-12 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DocContent active={active} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
