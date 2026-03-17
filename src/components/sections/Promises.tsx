"use client";

import { motion } from "framer-motion";
import { Rocket, Banknote, BadgePercent, Gift } from "lucide-react";
import { PROMISES, BRAND } from "@/lib/constants";

const iconMap = {
  Rocket,
  Banknote,
  BadgePercent,
  Gift,
} as const;

export default function Promises() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[560px] mx-auto">
        <h2 className="text-2xl font-black text-center text-grey-900 mb-2">
          고객님께 드리는 약속!
        </h2>
        <p className="text-sm text-grey-400 text-center mb-8">
          라이프 허브가 확실하게 보장합니다
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {PROMISES.map((promise, idx) => {
            const IconComp = iconMap[promise.icon];
            return (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" as const }}
                className="bg-primary-50 rounded-xl p-5 text-center"
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-grey-900 mb-1">
                  {promise.title}
                </h3>
                <p className="text-xs text-grey-500 leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 CTA */}
        <a
          href={BRAND.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-kakao text-grey-900 text-center text-sm font-bold
            py-3.5 rounded-xl hover:brightness-95 transition-all"
        >
          카카오톡으로 빠르게 상담받기
        </a>
      </div>
    </section>
  );
}
