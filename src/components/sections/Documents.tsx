"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Documents() {
  const [active, setActive] = useState("overview");

  const sections = [
    { id: "overview", title: "نمای کلی" },
    { id: "quickstart", title: "شروع سریع" },
    { id: "auth", title: "احراز هویت API" },
    { id: "models", title: "مدل‌های WiserAI" },
    { id: "api", title: "درخواست‌های API" },
    { id: "errors", title: "کدهای خطا" },
    { id: "faq", title: "سوالات متداول" },
  ];

  const renderContent = () => {
    switch (active) {
      case "overview":
        return (
          <div>
            <h1>مستندات WiserAI</h1>
            <p>
              این بخش، مستندات رسمی WiserAI است؛ مجموعه‌ای از مدل‌های هوشمند
              که بر پایه هسته پردازشی اختصاصی ما طراحی شده‌اند. تمامی ساختارها
              — از مدل‌ها تا موتور استنتاج — کاملاً توسعه‌یافته در WiserLab هستند.
            </p>
          </div>
        );

      case "quickstart":
        return (
          <div>
            <h2>شروع سریع</h2>
            <p>
              برای استفاده از WiserAI ابتدا یک API Key ایجاد کنید و سپس درخواست
              خود را به مسیرهای مخصوص موتور هوش مرکزی ارسال نمایید.
            </p>

            <pre>
{`POST https://api.wiser.ai/wiser/v1/brain/text/dana-x
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json

{
  "prompt": "یک متن آزمایشی تولید کن."
}`}
            </pre>
          </div>
        );

      case "auth":
        return (
          <div>
            <h2>احراز هویت API</h2>
            <p>
              تمام درخواست‌ها با هدر Authorization انجام می‌شود. هر کلید دارای سطح دسترسی مستقل است.
            </p>

            <pre>
{`Authorization: Bearer YOUR_API_KEY`}
            </pre>
          </div>
        );

      case "models":
        return (
          <div>
            <h2>مدل‌های ترکیبی WiserAI</h2>

            <h3>مدل‌های متنی</h3>
            <ul>
              <li>Wiser-DANA-X</li>
              <li>Wiser-MEHR-Core</li>
              <li>Wiser-SAHAR-Alpha</li>
            </ul>

            <h3>مدل‌های مکالمه</h3>
            <ul>
              <li>Wiser-HOMA-Dialogue</li>
              <li>Wiser-GOYA-Chat</li>
            </ul>

            <h3>مدل‌های بینایی</h3>
            <ul>
              <li>Wiser-BINA-Vision</li>
              <li>Wiser-SIMORGH-Spectra</li>
            </ul>

            <h3>مولتی‌مدال</h3>
            <ul>
              <li>Wiser-AZAR-Fusion</li>
              <li>Wiser-AFRA-Unity</li>
            </ul>
          </div>
        );

      case "api":
        return (
          <div>
            <h2>درخواست‌های API</h2>

            <h3>تولید متن</h3>
            <pre>
{`POST /wiser/v1/brain/text/dana-x`}
            </pre>

            <h3>چت هوشمند</h3>
            <pre>
{`POST /wiser/v1/brain/chat/homa-dialogue`}
            </pre>

            <h3>بینایی ماشین</h3>
            <pre>
{`POST /wiser/v1/brain/vision/bina`}
            </pre>

            <h3>مولتی‌مدال</h3>
            <pre>
{`POST /wiser/v1/brain/multi/azar-fusion`}
            </pre>
          </div>
        );

      case "errors":
        return (
          <div>
            <h2>کدهای خطا</h2>
            <ul>
              <li>401 — کلید نامعتبر</li>
              <li>429 — محدودیت فراخوانی</li>
              <li>500 — خطای هسته پردازشی</li>
            </ul>
          </div>
        );

      case "faq":
        return (
          <div>
            <h2>سوالات متداول</h2>
            <p>چطور API Key بگیرم؟ از داشبورد WiserAI.</p>
            <p>آیا مدل‌های سفارشی دارید؟ بله، نسخه Enterprise وجود دارد.</p>
          </div>
        );

      default:
        return <div>بخش یافت نشد.</div>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        direction: "rtl",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          borderLeft: "1px solid #e5e5e5",
          padding: "20px",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>مستندات</h3>
        {sections.map((s) => (
          <div
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              cursor: "pointer",
              padding: "10px 0",
              fontWeight: active === s.id ? "bold" : "normal",
              color: active === s.id ? "#0d6efd" : "#333",
            }}
          >
            {s.title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
