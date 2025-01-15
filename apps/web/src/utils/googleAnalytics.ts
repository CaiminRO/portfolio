import { sendGAEvent } from '@next/third-parties/google';

function sendEvent(eventName: string, data: any) {
  sendGAEvent('event', eventName, { data });
}

export const GAUtil = {
  sendEvent
};
