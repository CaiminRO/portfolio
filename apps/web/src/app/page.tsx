"use client";
import ContactButton from "@/components/common/contact/ContactButton";
import Hero from "@/components/common/Hero";
import { useState } from "react";

export default function Home() {
  return <Hero />;
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Hero/>
      <ContactButton onClick={() => setIsContactOpen(true)}/>
    </>
  );
}
