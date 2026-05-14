"use client";

import React from "react";

export default function CookieConsent() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const consent = localStorage.getItem("uzways-cookie-consent");
        if (!consent) {
            const t = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(t);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("uzways-cookie-consent", "accepted");
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("uzways-cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <>
            <div className="fixed inset-0 z-[9998] bg-black/45 backdrop-blur-sm" aria-hidden />
            <div
                className="fixed z-[9999] top-80 left-1/2 -translate-x-1/2 w-[min(480px,calc(100%-32px))] bg-white rounded-[22px] p-8 sm:p-10 shadow-2xl border border-gray-200 text-center"
                role="dialog"
                aria-label="Cookie consent"
            >
                <div className="w-[52px] h-[52px] mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center" aria-hidden>
                    <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="8" cy="8" r="1.2" fill="currentColor" />
                        <circle cx="15" cy="10" r="1" fill="currentColor" />
                        <circle cx="10" cy="14" r="1.4" fill="currentColor" />
                        <circle cx="16" cy="16" r="0.8" fill="currentColor" />
                    </svg>
                </div>
                <h3 className="text-[22px] uppercase tracking-wider font-bold text-gray-900 mb-2.5">
                    We use cookies 🍪
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    We use cookies and similar technologies to improve your experience,
                    analyze site traffic, and personalize content. By clicking
                    &ldquo;Accept&rdquo;, you consent to our use of cookies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        className="flex-1 py-2.5 px-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        onClick={handleAccept}
                    >
                        Accept
                    </button>
                    <button
                        className="flex-1 py-2.5 px-2 cursor-pointer bg-transparent text-gray-700 border border-gray-300 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:-translate-y-0.5"
                        onClick={handleDecline}
                    >
                        Decline
                    </button>
                </div>
            </div>
        </>
    );
}