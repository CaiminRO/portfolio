"use client";
import ContactButton from "@/components/common/contact/ContactButton";
import ContactForm from "@/components/common/contact/ContactForm";
import Hero from "@/components/common/Hero";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Hero/>
      <ContactButton onClick={() => setIsContactOpen(true)}/>
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
