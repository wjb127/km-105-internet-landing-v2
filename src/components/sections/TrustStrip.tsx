// 신뢰 스트립 - Footer 위에 배치되는 인증 서류 썸네일 섹션
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

// 인증 서류 목록
const CERTS = [
  {
    label: "사업자등록증",
    src: "/images/cert-business.jpg",
    alt: "사업자등록증 썸네일",
  },
  {
    label: "통신판매업신고증",
    src: "/images/cert-sales.jpg",
    alt: "통신판매업신고증 썸네일",
  },
  {
    label: "KAIT 사전승낙서",
    src: "/images/cert-kait.png",
    alt: "KAIT 사전승낙서 썸네일",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-grey-100 py-6 px-4">
      <div className="max-w-[560px] mx-auto">
        {/* 상단 한 줄 타이틀 */}
        <div className="flex items-center justify-center gap-1 mb-3">
          <ShieldCheck className="w-4 h-4 text-grey-700" aria-hidden="true" />
          <span className="text-sm font-bold text-grey-700">
            정식 인가 사업자
          </span>
        </div>

        {/* 인증 서류 썸네일 3개 */}
        <div className="flex gap-2">
          {CERTS.map((cert) => (
            <div key={cert.label} className="flex-1">
              {/* 썸네일 이미지 */}
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-grey-200">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 560px) 30vw, 168px"
                />
              </div>
              {/* 라벨 */}
              <p className="text-[10px] text-grey-500 text-center mt-1">
                {cert.label}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 보유 문구 */}
        <p className="text-[11px] text-grey-400 text-center mt-3">
          사업자등록증 · 통신판매업신고증 · KAIT 사전승낙서 보유
        </p>
      </div>
    </section>
  );
}
