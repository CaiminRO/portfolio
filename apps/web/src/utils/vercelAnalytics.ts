import { track } from "@vercel/analytics";

function sendEvent(eventName: string, data: Record<string, any>) {
  if (process.env.NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS !== 'allowed') return;

  track(eventName, data);
}

export const VAUtil = {
  sendEvent
};
