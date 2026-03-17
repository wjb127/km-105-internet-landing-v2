// 브랜드 정보
export const BRAND = {
  name: "라이프 허브",
  headline: "당근 이웃 전용 특별 혜택",
  subheadline: "인터넷 + TV + 유심 가입하고\n숨은 지원금 받아가세요",
  kakaoUrl: "http://pf.kakao.com/_KUhJn/chat",
  businessHours: "365일 10:00 ~ 20:00",
  business: {
    companyName: "Life Hub",
    ceo: "정성현",
    businessNumber: "345-68-00766",
    salesNumber: "2025-인천서구-1186",
    privacyOfficer: "이지수",
    email: "dagyaboy45@naver.com",
  },
} as const;

// 통신사별 상품 정보 (100mb+wifi 기준)
export const PRODUCTS = [
  {
    carrier: "SK",
    color: "#E4002B",
    note: "100mb+wifi 기준",
    plans: [
      {
        name: "인터넷",
        originalPrice: "23,100",
        discountPrice: "17,600",
      },
      {
        name: "인터넷 + TV",
        originalPrice: "36,300",
        discountPrice: "31,900",
      },
      {
        name: "인터넷 + TV + USIM",
        originalPrice: "69,300",
        discountPrice: "53,350",
      },
    ],
  },
  {
    carrier: "KT",
    color: "#ED1C24",
    note: "100mb+wifi 기준",
    plans: [
      {
        name: "인터넷",
        originalPrice: "23,100",
        discountPrice: "17,600",
      },
      {
        name: "인터넷 + TV",
        originalPrice: "39,600",
        discountPrice: "34,100",
      },
      {
        name: "인터넷 + TV + USIM",
        originalPrice: "76,600",
        discountPrice: "58,550",
      },
    ],
  },
  {
    carrier: "LG",
    color: "#A50034",
    note: "100MB+wifi 기준",
    plans: [
      {
        name: "인터넷",
        originalPrice: "22,000",
        discountPrice: "16,500",
      },
      {
        name: "인터넷 + TV",
        originalPrice: "39,600",
        discountPrice: "34,100",
      },
      {
        name: "인터넷 + TV + USIM",
        originalPrice: "72,600",
        discountPrice: "58,850",
      },
    ],
  },
] as const;

// 고객 약속 4가지
export const PROMISES = [
  {
    icon: "Rocket" as const,
    title: "로켓 설치",
    description: "상담 후 당일/익일 빠른 설치",
  },
  {
    icon: "Banknote" as const,
    title: "당일 입금",
    description: "설치 완료 즉시 현금 지급",
  },
  {
    icon: "BadgePercent" as const,
    title: "최저 통신비",
    description: "업계 최저가 요금제 보장",
  },
  {
    icon: "Gift" as const,
    title: "최대 사은품",
    description: "최대 150만원 지원금 혜택",
  },
] as const;

// 실시간 접수 현황 더미 데이터
export const RECENT_LIST = [
  { name: "김민수", phone: "010-1234-5678", product: "인터넷 + TV", status: "완료" },
  { name: "이수진", phone: "010-9876-5432", product: "인터넷", status: "접수중" },
  { name: "박정호", phone: "010-5555-1234", product: "인터넷 + TV + USIM", status: "완료" },
  { name: "최영미", phone: "010-3333-7890", product: "인터넷 + TV", status: "완료" },
  { name: "정대현", phone: "010-7777-4567", product: "인터넷", status: "접수중" },
  { name: "한소희", phone: "010-2222-8901", product: "인터넷 + TV + USIM", status: "완료" },
  { name: "윤서준", phone: "010-8888-2345", product: "인터넷 + TV", status: "완료" },
  { name: "강민지", phone: "010-4444-6789", product: "인터넷", status: "접수중" },
  { name: "조현우", phone: "010-6666-0123", product: "인터넷 + TV + USIM", status: "완료" },
  { name: "임지은", phone: "010-1111-3456", product: "인터넷 + TV", status: "완료" },
  { name: "오승환", phone: "010-9999-7890", product: "인터넷", status: "접수중" },
  { name: "신예린", phone: "010-5678-1234", product: "인터넷 + TV + USIM", status: "완료" },
  { name: "유재민", phone: "010-3456-7890", product: "인터넷 + TV", status: "완료" },
  { name: "배수연", phone: "010-7890-1234", product: "인터넷", status: "접수중" },
  { name: "송태호", phone: "010-2345-6789", product: "인터넷 + TV + USIM", status: "완료" },
  { name: "문지현", phone: "010-6789-0123", product: "인터넷 + TV", status: "접수중" },
  { name: "권도윤", phone: "010-0123-4567", product: "인터넷", status: "완료" },
  { name: "황서영", phone: "010-4567-8901", product: "인터넷 + TV + USIM", status: "완료" },
] as const;

// 폼 선택 옵션
export const CARRIERS = ["SK", "KT", "LG"] as const;
export const PRODUCT_TYPES = ["인터넷", "인터넷 + TV", "인터넷 + TV + USIM"] as const;
