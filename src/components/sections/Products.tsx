"use client";

import { motion } from "framer-motion";
import { PRODUCTS, BRAND } from "@/lib/constants";

export default function Products() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[560px] mx-auto">
        <h2 className="text-2xl font-black text-center text-grey-900 mb-2">
          나의 지원금은 얼마일까?
        </h2>
        <p className="text-sm text-grey-400 text-center mb-8">
          통신사별 요금제를 비교해보세요
        </p>

        <div className="flex flex-col gap-6">
          {PRODUCTS.map((carrier, idx) => (
            <motion.div
              key={carrier.carrier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" as const }}
              className="bg-white rounded-lg overflow-hidden card-shadow"
            >
              {/* 통신사 컬러 바 */}
              <div
                className="h-2"
                style={{ backgroundColor: carrier.color }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black" style={{ color: carrier.color }}>
                    {carrier.carrier}
                  </h3>
                  <span className="text-[11px] text-grey-400">{carrier.note}</span>
                </div>

                <div className="flex flex-col gap-3">
                  {carrier.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="flex items-center justify-between py-2 border-b border-grey-100 last:border-0"
                    >
                      <span className="text-sm font-medium text-grey-700">
                        {plan.name}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-grey-400 line-through mr-2">
                          {plan.originalPrice}원
                        </span>
                        <span className="text-sm font-bold text-primary-500">
                          {plan.discountPrice}원
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={BRAND.kakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center bg-grey-100 text-grey-600 text-sm font-medium
                    py-2.5 rounded-lg hover:bg-grey-200 transition-colors"
                >
                  문의하기
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
