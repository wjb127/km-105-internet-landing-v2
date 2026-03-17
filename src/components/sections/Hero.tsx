"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("consult-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-12 px-4">
      <div className="max-w-[560px] mx-auto text-center">
        {/* 이벤트 배지 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="inline-block bg-accent text-grey-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4"
        >
          선착순 이벤트 진행중
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
          className="text-3xl font-black text-grey-900 mb-3 leading-tight"
        >
          인터넷 가입하고
          <br />
          <span className="text-primary-500">최대 150만원</span> 받아가세요
        </motion.h2>

        {/* 서브 텍스트 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="text-grey-500 text-sm mb-6 leading-relaxed"
        >
          SK · KT · LG 전 통신사 비교하고
          <br />
          나에게 딱 맞는 요금제를 찾아보세요
        </motion.p>

        {/* 혜택 배지 3개 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" as const }}
          className="flex justify-center gap-2 mb-8"
        >
          {["당일 설치", "현금 지급", "최저가 보장"].map((badge) => (
            <span
              key={badge}
              className="bg-white border border-primary-200 text-primary-600 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA 버튼 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" as const }}
          onClick={scrollToForm}
          className="bg-primary-500 text-white text-lg font-bold px-8 py-4 rounded-full
            shadow-lg hover:bg-primary-600 active:scale-95 transition-all w-full max-w-xs"
        >
          무료 상담 신청하기
        </motion.button>
      </div>
    </section>
  );
}
