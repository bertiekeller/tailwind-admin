"use client";

import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Community } from "@/components/landing/community";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
