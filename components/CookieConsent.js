"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      setTimeout(() => setVisible(true), 1000); // show after 1s delay
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-white text-gray-800 shadow-lg rounded-2xl p-4 z-50 border border-gray-200 animate-slide-up">
      <p className="text-sm mb-3 text-center">
        🍪 We use cookies to improve your experience. By continuing to browse, you
        agree to our use of cookies.
      </p>
      <div className="flex justify-center">
        <button
          onClick={acceptCookies}
          className="bg-gray-900 text-white px-5 py-1.5 rounded-full text-sm hover:bg-gray-800 transition-all"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
