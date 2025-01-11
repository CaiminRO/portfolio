"use client";

import { useState } from "react";
import ContactButton from "@/components/common/contact/ContactButton";
import ContactForm from "@/components/common/contact/ContactForm";

export default function ContactSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return <>
    <ContactButton onClick={() => setIsContactOpen(true)} />
    <ContactForm
      isOpen={isContactOpen}
      onClose={() => setIsContactOpen(false)}
    />
  </>
}
