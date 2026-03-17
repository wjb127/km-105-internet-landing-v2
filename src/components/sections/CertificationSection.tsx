"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// 인증 서류 목록
const CERTS = [
  {
    id: "business",
    title: "사업자등록증",
    src: "/images/cert-business.jpg",
  },
  {
    id: "sales",
    title: "통신판매업신고증",
    src: "/images/cert-sales.jpg",
  },
  {
    id: "kait",
    title: "KAIT 사전승낙서",
    src: "/images/cert-kait.png",
  },
] as const;

export default function CertificationSection() {
  // 모달에 표시할 인증서 (null이면 모달 닫힘)
  const [selected, setSelected] = useState<(typeof CERTS)[number] | null>(null);

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-[560px] mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-grey-900">정식 인가 사업자</h2>
          <p className="text-sm text-grey-500 mt-1">공식 인증서류를 확인하세요</p>
        </div>

        {/* 인증서 카드 3개 */}
        <div className="flex gap-3">
          {CERTS.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelected(cert)}
              className="flex-1 rounded-xl overflow-hidden border border-grey-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`${cert.title} 크게 보기`}
            >
              {/* 3:4 비율 이미지 영역 */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 560px) 33vw, 180px"
                />
              </div>
              {/* 카드 제목 */}
              <div className="py-2 px-1">
                <p className="text-xs font-medium text-grey-700 text-center">{cert.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* KAIT 공식 승낙 판매점 배지 */}
        <div className="text-center mt-4">
          <span className="inline-block bg-primary-50 text-primary-600 text-xs font-medium px-4 py-2 rounded-full">
            KAIT 공식 승낙 판매점
          </span>
        </div>
      </div>

      {/* 모달 오버레이 */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
            aria-label={`${selected.title} 상세 보기`}
          >
            {/* 모달 콘텐츠 */}
            <motion.div
              key="content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white hover:text-grey-300 transition-colors"
                aria-label="닫기"
              >
                <X size={28} />
              </button>

              {/* 인증서 이미지 */}
              <div className="relative w-[min(80vw,360px)] h-[min(80vh,480px)]">
                <Image
                  src={selected.src}
                  alt={selected.title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 560px) 80vw, 360px"
                />
              </div>

              {/* 인증서 제목 */}
              <p className="text-white text-sm font-medium text-center mt-3">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
