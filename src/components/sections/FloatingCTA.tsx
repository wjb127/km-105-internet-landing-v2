"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" as const }}
          className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
        >
          {/* 카카오 상담 버튼 */}
          <a
            href={BRAND.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-kakao rounded-full flex items-center justify-center shadow-lg
              hover:scale-110 transition-transform"
            aria-label="카카오톡 상담"
          >
            <MessageCircle className="w-6 h-6 text-grey-900" />
          </a>

          {/* 스크롤 투 탑 */}
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-grey-100
              hover:bg-grey-50 transition-colors"
            aria-label="맨 위로"
          >
            <ChevronUp className="w-5 h-5 text-grey-400" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
