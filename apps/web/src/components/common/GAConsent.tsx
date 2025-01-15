"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

interface GAConsentProps {
  gaId: string;
}

export default function GAConsent({ gaId }: GAConsentProps) {
  return <GoogleAnalytics gaId={gaId}/>;
}
