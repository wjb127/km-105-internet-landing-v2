import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://km-105-internet-landing-v2.vercel.app"
  ),
  title: "당근 이웃 전용 특별 혜택 | 인터넷 가입 지원금 최대 150만원",
  description:
    "당근 이웃 전용! SK, KT, LG 전 통신사 인터넷, TV, 유심 가입하고 최대 150만원 지원금 받아가세요. 무료 상담 신청.",
  keywords:
    "인터넷 가입, TV 가입, 유심, KT, SK, LG, 지원금, 현금 지원, 인터넷 설치, 라이프허브, 당근",
  openGraph: {
    title: "당근 이웃 전용 특별 혜택 | 인터넷 가입 지원금 최대 150만원",
    description:
      "당근 이웃 전용! 인터넷·TV·유심 가입하고 최대 150만원 지원금 받아가세요. 무료 상담 신청.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "당근 이웃 전용 - 인터넷 가입 지원금 최대 150만원",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "당근 이웃 전용 특별 혜택 | 인터넷 가입 지원금 최대 150만원",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "48x48", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
