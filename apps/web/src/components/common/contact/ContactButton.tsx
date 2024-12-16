import {FaEnvelope} from "react-icons/fa";
import {contactStyles} from "@/styles/components";

interface ContactButtonProps {
  onClick: () => void;
}

export default function ContactButton({ onClick }: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={contactStyles.buttonOpen}
      aria-label="Contact Me"
    >
      <FaEnvelope size={48}/>
    </button>
  );
}