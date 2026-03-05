"use client";

export default function BackgroundShapes() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Large cross / plus sign - top right */}
            <svg
                className="absolute top-[8%] right-[5%] w-32 h-32 md:w-48 md:h-48 float-1"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="43" y="10" width="14" height="80" rx="7" fill="#1F3A8A" />
                <rect x="10" y="43" width="80" height="14" rx="7" fill="#1F3A8A" />
            </svg>

            {/* Heartbeat / pulse line - bottom left */}
            <svg
                className="absolute bottom-[15%] left-[3%] w-40 h-20 md:w-64 md:h-32 float-2"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polyline
                    points="0,40 30,40 45,15 60,65 75,10 95,70 110,40 200,40"
                    stroke="#1F3A8A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>

            {/* Circle outline - top left */}
            <svg
                className="absolute top-[20%] left-[8%] w-20 h-20 md:w-32 md:h-32 float-3"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="42" stroke="#1F3A8A" strokeWidth="4" />
                <circle cx="50" cy="50" r="28" stroke="#FF3131" strokeWidth="2" />
            </svg>

            {/* DNA strand / dots - bottom right */}
            <svg
                className="absolute bottom-[25%] right-[6%] w-16 h-40 md:w-24 md:h-56 float-1"
                viewBox="0 0 60 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <g key={i}>
                        <circle cx="15" cy={12 + i * 22} r="5" fill="#1F3A8A" />
                        <circle cx="45" cy={12 + i * 22} r="5" fill="#FF3131" />
                        <line x1="15" y1={12 + i * 22} x2="45" y2={12 + i * 22} stroke="#1F3A8A" strokeWidth="1.5" strokeDasharray="4 3" />
                    </g>
                ))}
            </svg>

            {/* Small stethoscope-like arc - center right */}
            <svg
                className="absolute top-[55%] right-[12%] w-16 h-16 md:w-24 md:h-24 float-2"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 60 C20 35, 60 35, 60 10"
                    stroke="#1F3A8A"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                />
                <circle cx="60" cy="70" r="10" stroke="#FF3131" strokeWidth="4" fill="none" />
                <circle cx="20" cy="10" r="5" fill="#1F3A8A" />
            </svg>
        </div>
    );
}
