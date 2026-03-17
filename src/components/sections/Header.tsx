"use client";

import { BRAND } from "@/lib/constants";

export default function Header() {
  const scrollToForm = () => {
    document.getElementById("consult-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-500 text-white shadow-md">
      <div className="max-w-[560px] mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-base font-bold">{BRAND.name}</h1>
          <p className="text-[10px] text-white/70">{BRAND.businessHours}</p>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-white text-primary-600 text-sm font-bold px-4 py-2 rounded-full
            hover:bg-primary-50 transition-colors"
        >
          무료 상담 신청
        </button>
      </div>
    </header>
  );
}
