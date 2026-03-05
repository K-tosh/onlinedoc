"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedLogoProps {
    onComplete?: () => void;
}

export default function AnimatedLogo({ onComplete }: AnimatedLogoProps) {
    const textRef = useRef<SVGTextElement>(null);
    const [animating, setAnimating] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [bounds, setBounds] = useState({ startX: 0, endX: 0 });

    const revealX = useMotionValue(0);
    // Clip rect: starts at text's left edge, width grows rightward
    const clipWidth = useTransform(revealX, (v) =>
        Math.max(0, v - bounds.startX)
    );
    // Pen tip travels exactly with revealX
    const penX = useTransform(revealX, (v) => v);

    // Step 1: measure actual text bounds after first render
    useEffect(() => {
        if (!textRef.current) return;
        try {
            const bbox = textRef.current.getBBox();
            const startX = bbox.x;
            const endX = bbox.x + bbox.width;
            setBounds({ startX, endX });
            revealX.set(startX); // pen starts exactly at left edge of text
        } catch {
            setBounds({ startX: 4, endX: 694 });
            revealX.set(4);
        }
    }, [revealX]);

    // Step 2: run animation after bounds are measured
    useEffect(() => {
        if (bounds.endX === 0) return; // not yet measured
        setAnimating(true);

        const timeout = setTimeout(() => {
            const anim = animate(revealX, bounds.endX, {
                duration: 2.4,
                ease: [0.08, 0.0, 0.55, 1.0], // slow start → confident middle → slight ease-out
                onComplete: () => {
                    setAnimating(false);
                    setShowCursor(true);
                    onComplete?.();
                },
            });
            return () => anim.stop();
        }, 400);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bounds.endX]);

    return (
        <div className="flex items-center justify-center w-full">
            <svg
                viewBox="0 0 700 128"
                className="w-full max-w-[560px] md:max-w-[700px] select-none"
                xmlns="http://www.w3.org/2000/svg"
                overflow="visible"
                aria-label="OnlineDoc"
                role="img"
            >
                <defs>
                    <clipPath id="text-reveal-clip">
                        <motion.rect
                            x={bounds.startX}
                            y="-10"
                            height="160"
                            style={{ width: clipWidth }}
                        />
                    </clipPath>
                    <filter id="text-shadow" x="-5%" y="-10%" width="120%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3"
                            floodColor="#1F3A8A" floodOpacity="0.09" />
                    </filter>
                </defs>

                {/* Ghost layer — very faint, shows full word before reveal */}
                <text
                    x="350"
                    y="106"
                    textAnchor="middle"
                    fontFamily="'Poppins', 'Inter', sans-serif"
                    fontWeight="800"
                    fontSize="104"
                    letterSpacing="-2"
                    aria-hidden="true"
                >
                    <tspan fill="#E8EEF8">Online</tspan>
                    <tspan fill="#FDEAEA" dx="0">Doc</tspan>
                </text>

                {/* Colored text — revealed left→right via clip */}
                <text
                    ref={textRef}
                    x="350"
                    y="106"
                    textAnchor="middle"
                    fontFamily="'Poppins', 'Inter', sans-serif"
                    fontWeight="800"
                    fontSize="104"
                    letterSpacing="-2"
                    clipPath="url(#text-reveal-clip)"
                    filter="url(#text-shadow)"
                >
                    <tspan fill="#1F3A8A">Online</tspan>
                    <tspan fill="#FF3131" dx="0">Doc</tspan>
                </text>

                {/* Moving pen tip — only visible while animating */}
                {animating && (
                    <motion.line
                        style={{ x: penX }}
                        x1="0" y1="14"
                        x2="0" y2="112"
                        stroke="#1F3A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity={0.25}
                    />
                )}

                {/* Blinking cursor — appears only after animation fully done */}
                {showCursor && (
                    <motion.rect
                        x={bounds.endX + 5}
                        y="14"
                        width="3.5"
                        height="98"
                        fill="#FF3131"
                        rx="2"
                        className="cursor-blink"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </svg>
        </div>
    );
}
