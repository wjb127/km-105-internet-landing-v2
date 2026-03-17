import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-grey-900 text-white py-10 px-4">
      <div className="max-w-[560px] mx-auto">
        {/* 브랜드 & 상담시간 */}
        <h2 className="text-lg font-bold mb-1">{BRAND.name}</h2>
        <p className="text-xs text-grey-400 mb-6">
          운영시간: {BRAND.businessHours}
        </p>

        {/* 사업자 정보 */}
        <div className="text-[11px] text-grey-500 leading-relaxed space-y-1 mb-6">
          <p>
            상호: {BRAND.business.companyName} | 대표자명: {BRAND.business.ceo} | 사업자등록번호: {BRAND.business.businessNumber}
          </p>
          <p>
            통신판매번호: {BRAND.business.salesNumber} | 개인정보보호책임자: {BRAND.business.privacyOfficer}
          </p>
          <p>이메일: {BRAND.business.email}</p>
        </div>

        {/* 링크 */}
        <div className="pt-6 border-t border-grey-800 flex items-center justify-between">
          <a
            href="/privacy"
            className="text-[11px] text-grey-400 hover:text-white transition-colors"
          >
            개인정보처리방침
          </a>
          <span className="text-[11px] text-grey-600">
            &copy; {new Date().getFullYear()} {BRAND.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
