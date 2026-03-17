import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, carrier, product, agreeMarketing, agreeThirdParty } = body;

    // 유효성 검사
    if (!name || !phone || !carrier || !product) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 전화번호 형식 검증
    const phoneRegex = /^010-\d{3,4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "올바른 전화번호 형식이 아닙니다." },
        { status: 400 }
      );
    }

    const emailContent = `
[km-105 당근 랜딩 - 새 상담 신청]

이름: ${name}
연락처: ${phone}
희망 통신사: ${carrier}
희망 상품: ${product}
마케팅 수신 동의: ${agreeMarketing ? "O" : "X"}
제3자 제공 동의: ${agreeThirdParty ? "O" : "X"}
신청일시: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
    `.trim();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // API 키 없으면 콘솔에 출력 (개발 환경 폴백)
      console.log("=== 상담 신청 (Resend API Key 없음 - 콘솔 폴백) ===");
      console.log(emailContent);
      return NextResponse.json({ success: true, fallback: true });
    }

    // Resend로 이메일 발송
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "noreply@resend.dev",
      to: "dagyaboy45@naver.com",
      subject: `[km-105] 새 상담 신청 - ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("상담 신청 처리 실패:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
