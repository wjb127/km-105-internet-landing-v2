"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { CARRIERS, PRODUCT_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ConsultForm() {
  const [name, setName] = useState("");
  const [phone1] = useState("010");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [carrier, setCarrier] = useState("");
  const [product, setProduct] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [agreeThirdParty, setAgreeThirdParty] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);

  // 전화번호 입력 시 자동 포커스
  const handlePhone2Change = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    setPhone2(digits);
    if (digits.length === 4) {
      phone3Ref.current?.focus();
    }
  };

  const handlePhone3Change = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    setPhone3(digits);
  };

  const isValid =
    name.trim().length >= 2 &&
    phone2.length >= 3 &&
    phone3.length === 4 &&
    carrier &&
    product &&
    agreePrivacy;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: `${phone1}-${phone2}-${phone3}`,
          carrier,
          product,
          agreeMarketing,
          agreeThirdParty,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // 성공 화면
  if (status === "success") {
    return (
      <section id="consult-form" className="py-12 px-4 bg-primary-50">
        <div className="max-w-[560px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 text-center card-shadow"
          >
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-xl font-bold text-grey-900 mb-2">
              상담 신청이 완료되었습니다!
            </h3>
            <p className="text-sm text-grey-500 leading-relaxed">
              입력하신 연락처로 빠른 시간 내에
              <br />
              전문 상담사가 연락드리겠습니다.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="consult-form" className="py-12 px-4 bg-primary-50">
      <div className="max-w-[560px] mx-auto">
        <h2 className="text-2xl font-black text-center text-grey-900 mb-2">
          무료 상담 신청
        </h2>
        <p className="text-sm text-grey-400 text-center mb-8">
          아래 정보를 입력하시면 빠르게 연락드릴게요
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 card-shadow">
          {/* 이름 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-grey-700 mb-1.5">
              이름 <span className="text-primary-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
              className="w-full border border-grey-200 rounded-lg px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500
                placeholder:text-grey-300"
            />
          </div>

          {/* 연락처 3분할 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-grey-700 mb-1.5">
              연락처 <span className="text-primary-500">*</span>
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={phone1}
                readOnly
                className="w-16 text-center border border-grey-200 rounded-lg px-2 py-3 text-sm
                  bg-grey-50 text-grey-500"
              />
              <span className="text-grey-300">-</span>
              <input
                ref={phone2Ref}
                type="tel"
                inputMode="numeric"
                value={phone2}
                onChange={(e) => handlePhone2Change(e.target.value)}
                placeholder="0000"
                maxLength={4}
                className="flex-1 text-center border border-grey-200 rounded-lg px-2 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500
                  placeholder:text-grey-300"
              />
              <span className="text-grey-300">-</span>
              <input
                ref={phone3Ref}
                type="tel"
                inputMode="numeric"
                value={phone3}
                onChange={(e) => handlePhone3Change(e.target.value)}
                placeholder="0000"
                maxLength={4}
                className="flex-1 text-center border border-grey-200 rounded-lg px-2 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500
                  placeholder:text-grey-300"
              />
            </div>
          </div>

          {/* 통신사 선택 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-grey-700 mb-1.5">
              희망 통신사 <span className="text-primary-500">*</span>
            </label>
            <div className="flex gap-2">
              {CARRIERS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCarrier(c)}
                  className={cn(
                    "flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all",
                    carrier === c
                      ? "bg-primary-500 text-white border-primary-500"
                      : "bg-white text-grey-600 border-grey-200 hover:border-primary-300"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* 상품 선택 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-grey-700 mb-1.5">
              희망 상품 <span className="text-primary-500">*</span>
            </label>
            <div className="flex flex-col gap-2">
              {PRODUCT_TYPES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProduct(p)}
                  className={cn(
                    "w-full py-2.5 rounded-lg text-sm font-medium border transition-all text-left px-4",
                    product === p
                      ? "bg-primary-500 text-white border-primary-500"
                      : "bg-white text-grey-600 border-grey-200 hover:border-primary-300"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* 동의 체크박스 */}
          <div className="mb-6 space-y-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                className="mt-0.5 accent-primary-500"
              />
              <span className="text-xs text-grey-600">
                [필수] 개인정보 수집 및 이용에 동의합니다
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeThirdParty}
                onChange={(e) => setAgreeThirdParty(e.target.checked)}
                className="mt-0.5 accent-primary-500"
              />
              <span className="text-xs text-grey-600">
                [선택] 제3자 정보 제공에 동의합니다
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeMarketing}
                onChange={(e) => setAgreeMarketing(e.target.checked)}
                className="mt-0.5 accent-primary-500"
              />
              <span className="text-xs text-grey-600">
                [선택] 마케팅 정보 수신에 동의합니다
              </span>
            </label>
          </div>

          {/* 에러 메시지 */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>신청 중 오류가 발생했습니다. 다시 시도해주세요.</span>
            </div>
          )}

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={!isValid || status === "loading"}
            className={cn(
              "w-full py-4 rounded-xl text-base font-bold transition-all",
              isValid
                ? "bg-primary-500 text-white hover:bg-primary-600 active:scale-[0.98]"
                : "bg-grey-200 text-grey-400 cursor-not-allowed"
            )}
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              "상담 신청하기"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
