import personal from "./data.json";
import { ResendInfo } from "./type";

const resendInfo: ResendInfo = personal;

export const Resend = {
  Sender: {
    Email: `${resendInfo.senderEmailIdentifier}@${resendInfo.senderEmailDomain || "resend.dev"}`,
    Name: resendInfo.senderName
  },
  Receiver: {
    Email: resendInfo.receiverEmail
  }
};
