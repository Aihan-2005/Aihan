"use client";

import { useState } from "react";

type Props = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "bash" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-xl bg-[#0d0d0d] border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-white/30">{language}</span>
        <button
          onClick={copy}
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          {copied ? "✅ کپی شد" : "📋 کپی"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-green-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
