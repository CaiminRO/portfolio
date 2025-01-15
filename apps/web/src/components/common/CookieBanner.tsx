"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LocalStorageUtil } from "@/utils";

interface CookieBannerProps {
  forceShown?: boolean;
}

export default function CookieBanner({ forceShown = false }: CookieBannerProps) {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);

  useEffect(() => {
    setCookieConsent(LocalStorageUtil.getLocalStorage("cookie_consent", null));
  }, [setCookieConsent]);

  useEffect(() => {
    window.gtag("consent", "update", {
      analytics_storage: cookieConsent ? "granted" : "denied",
    });

    LocalStorageUtil.setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={
        `mx-3 my-3 max-w-max fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-left flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow z-50
        ${cookieConsent === null || cookieConsent === undefined || forceShown ? "flex" : "hidden"}`
      }
    >
      <div className="text-cente text-white-200">
        <p>I use Google Analytics to understand how you interact with my portfolio site.</p>
        <p>Do you consent to the use of these tracking technologies?</p>
      </div>

      <div className="flex gap-2">
        <button className="px-5 py-2 bg-gray-900 text-gray-300 rounded-md border-gray-900 hover:invert">
          <Link href="/info/cookies">
            Learn More
          </Link>
        </button>

        <button
          className="px-5 py-2 bg-gray-900 text-gray-300 rounded-md border-gray-900 hover:invert"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>

        <button
          className="bg-gray-900 px-5 py-2 text-white-200 rounded-lg hover:invert"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}