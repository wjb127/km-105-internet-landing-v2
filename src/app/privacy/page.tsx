import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 라이프 허브",
  description: "라이프 허브 개인정보처리방침",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <article className="max-w-[560px] mx-auto prose prose-sm">
        <h1 className="text-2xl font-bold text-grey-900 mb-8">
          개인정보처리방침
        </h1>

        <p className="text-sm text-grey-600 mb-6">
          {BRAND.business.companyName}(이하 &quot;회사&quot;)는 개인정보 보호법에 따라 이용자의
          개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
          하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            1. 수집하는 개인정보 항목
          </h2>
          <div className="text-sm text-grey-600 space-y-2">
            <p><strong>필수 항목:</strong> 이름, 연락처(휴대전화번호), 희망 통신사, 희망 상품</p>
            <p><strong>선택 항목:</strong> 마케팅 수신 동의 여부, 제3자 정보 제공 동의 여부</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            2. 개인정보의 수집 및 이용 목적
          </h2>
          <ul className="text-sm text-grey-600 list-disc pl-5 space-y-1">
            <li>인터넷/TV/유심 가입 상담 서비스 제공</li>
            <li>상담 예약 및 진행 상황 안내</li>
            <li>서비스 관련 공지사항 전달</li>
            <li>마케팅 및 광고에의 활용 (동의한 경우에 한함)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <div className="text-sm text-grey-600 space-y-2">
            <p>
              회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를
              지체 없이 파기합니다.
            </p>
            <p><strong>상담 신청 정보:</strong> 상담 완료 후 <strong>6개월</strong> 보관 후 파기</p>
            <p><strong>마케팅 수신 동의 정보:</strong> 동의 철회 시까지</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            4. 개인정보의 제3자 제공
          </h2>
          <div className="text-sm text-grey-600 space-y-2">
            <p>
              회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
              다만, 이용자가 동의한 경우 아래와 같이 제공할 수 있습니다.
            </p>
            <p><strong>제공받는 자:</strong> SK, KT, LG U+ 등 통신사</p>
            <p><strong>제공 목적:</strong> 인터넷/TV/유심 가입 처리</p>
            <p><strong>제공 항목:</strong> 이름, 연락처, 희망 상품</p>
            <p><strong>보유 기간:</strong> 가입 처리 완료 후 6개월</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            5. 개인정보의 파기 절차 및 방법
          </h2>
          <div className="text-sm text-grey-600 space-y-2">
            <p>
              회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가
              불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <p><strong>전자적 파일:</strong> 복구 및 재생이 불가능한 방법으로 영구 삭제</p>
            <p><strong>종이 문서:</strong> 분쇄기로 분쇄하거나 소각</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            6. 개인정보 보호책임자
          </h2>
          <div className="text-sm text-grey-600 space-y-1">
            <p><strong>개인정보 보호책임자:</strong> {BRAND.business.privacyOfficer}</p>
            <p><strong>이메일:</strong> {BRAND.business.email}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-grey-900 mb-3">
            7. 개인정보처리방침 변경
          </h2>
          <p className="text-sm text-grey-600">
            이 개인정보처리방침은 2026년 3월 17일부터 적용됩니다.
            변경 사항이 있을 경우 웹사이트를 통해 공지합니다.
          </p>
        </section>

        {/* 메인으로 돌아가기 */}
        <div className="pt-8 border-t border-grey-200">
          <a
            href="/"
            className="text-sm text-primary-500 hover:text-primary-600 font-medium"
          >
            &larr; 메인으로 돌아가기
          </a>
        </div>
      </article>
    </div>
  );
}
