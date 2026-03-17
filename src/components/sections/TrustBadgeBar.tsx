// 인증 배지 바 - 사업자 인증 정보를 텍스트+아이콘으로 표시하는 정적 컴포넌트
import { ShieldCheck, FileCheck, Award } from "lucide-react";

// 인증 배지 데이터
const badges = [
  {
    icon: ShieldCheck,
    label: "사업자등록 완료",
  },
  {
    icon: FileCheck,
    label: "통신판매업 신고",
  },
  {
    icon: Award,
    label: "KAIT 공식 승낙",
  },
];

export default function TrustBadgeBar() {
  return (
    <section className="py-6 px-4 bg-grey-50">
      <div className="max-w-[560px] mx-auto">
        {/* 배지 3개 가로 배열 */}
        <div className="flex justify-center gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-grey-600"
            >
              {/* 아이콘: success 색상 (#10B981) */}
              <Icon className="w-4 h-4 text-success" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
