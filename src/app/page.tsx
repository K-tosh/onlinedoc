"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedLogo from "@/components/AnimatedLogo";
import BackgroundShapes from "@/components/BackgroundShapes";
import CTAButton from "@/components/CTAButton";

// ============================================================
// 🔗 EASY LINK CONFIGURATION
// Replace this URL with your actual WhatsApp channel link
// ============================================================
const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb7ZynD3AzNNkb5uP53G";

export default function Home() {
  const [logoComplete, setLogoComplete] = useState(false);

  return (
    <main
      className="
        relative min-h-screen
        flex flex-col
        items-center justify-between
        px-4 py-8 md:py-12
      "
    >
      {/* Subtle floating medical background shapes */}
      <BackgroundShapes />

      {/* Top nav strip — minimal */}
      <motion.div
        className="w-full max-w-6xl flex items-center justify-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          {/* Small logo mark */}
          <div className="w-7 h-7 rounded-lg bg-[#1F3A8A] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
              <rect x="10" y="3" width="4" height="18" rx="2" />
              <rect x="3" y="10" width="18" height="4" rx="2" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[#1F3A8A] tracking-widest uppercase opacity-70">
            www.onlinedoc.co.ke
          </span>
        </div>
      </motion.div>

      {/* ─── HERO SECTION ─── */}
      <section className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl text-center gap-6 md:gap-8 py-8 md:py-12">

        {/* ANIMATED LOGO */}
        <div className="w-full px-2">
          <AnimatedLogo onComplete={() => setLogoComplete(true)} />
        </div>

        {/* Subtitle — fades in after logo completes */}
        <motion.div
          className="flex flex-col items-center gap-3 px-4"
          initial={{ opacity: 0, y: 24 }}
          animate={logoComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1E293B] tracking-tight leading-snug">
            Online Health Services
          </h1>
          <p className="text-sm md:text-base text-[#1E293B]/60 max-w-md leading-relaxed font-light">
            Structured online consultation, diagnosis, referrals, and follow&#8209;up care.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-12 h-px bg-gradient-to-r from-transparent via-[#1F3A8A]/30 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={logoComplete ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* ─── CTA SECTION ─── */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={logoComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <CTAButton href={WHATSAPP_CHANNEL_URL}>
            Join WhatsApp Channel for Health Tips
          </CTAButton>

          {/* Secondary info text */}
          <p className="text-xs md:text-sm text-[#1E293B]/50 max-w-sm leading-relaxed text-center px-4">
            Get practical medical tips, simple treatment guidance, and health education while we prepare the full platform.
          </p>
        </motion.div>


      </section>

      {/* ─── FOOTER ─── */}
      <motion.footer
        className="w-full max-w-4xl flex flex-col items-center gap-2 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {/* Thin top border */}
        <div className="w-16 h-px bg-[#1F3A8A]/15 mb-4" />

        <div className="flex flex-col items-center gap-1 text-center">
          <a
            href="https://www.onlinedoc.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1F3A8A] hover:text-[#FF3131] transition-colors duration-200 tracking-wide"
          >
            www.onlinedoc.co.ke
          </a>
          <p className="text-xs text-[#1E293B]/40 font-light">
            Eric Kantona &nbsp;·&nbsp; Online Health Services
          </p>
        </div>

        <p className="text-[10px] text-[#1E293B]/30 mt-2">
          © {new Date().getFullYear()} OnlineDoc. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
