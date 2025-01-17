import { sendGAEvent } from '@next/third-parties/google';

function sendEvent(eventName: string, data: any) {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;

  sendGAEvent('event', eventName, { data });
}

export const GAUtil = {
  sendEvent
};
