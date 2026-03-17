"use client";

import { RECENT_LIST } from "@/lib/constants";

// 이름 마스킹: 김민수 → 김*수
function maskName(name: string) {
  if (name.length <= 1) return name;
  if (name.length === 2) return name[0] + "*";
  return name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
}

// 전화번호 마스킹: 010-1234-5678 → 010-****-5678
function maskPhone(phone: string) {
  const parts = phone.split("-");
  if (parts.length === 3) {
    return `${parts[0]}-****-${parts[2]}`;
  }
  return phone;
}

export default function RecentList() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;

  // 리스트를 두 번 반복해서 무한 스크롤 효과
  const doubled = [...RECENT_LIST, ...RECENT_LIST];

  return (
    <section className="py-12 px-4 bg-grey-50">
      <div className="max-w-[560px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-grey-900">
            실시간 상담신청 현황
          </h2>
          <span className="text-xs text-grey-400">{dateStr} 기준</span>
        </div>

        {/* 무한 스크롤 컨테이너 */}
        <div className="bg-white rounded-xl overflow-hidden card-shadow">
          <div className="max-h-[360px] overflow-hidden relative">
            <div className="animate-scroll">
              {doubled.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="flex items-center justify-between px-4 py-3 border-b border-grey-50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-grey-800">
                      {maskName(item.name)}
                    </span>
                    <span className="text-xs text-grey-400">
                      {maskPhone(item.phone)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-grey-500">{item.product}</span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        item.status === "완료"
                          ? "bg-success/10 text-success"
                          : "bg-primary-50 text-primary-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 상하 페이드 */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* CSS 무한 스크롤 애니메이션 */}
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll {
          animation: scrollUp 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
