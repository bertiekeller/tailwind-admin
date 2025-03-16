"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const serviceLinks = [
  {
    title: "AI Training",
    href: "/services/ai-training",
    description: "Learn how to build and deploy AI models"
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Integrate AI into modern web applications"
  },
  {
    title: "Agent Building",
    href: "/services/agent-building",
    description: "Create powerful AI agents and automations"
  },
];

export function ServicesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h2 className="mb-6 text-xl font-bold text-white">Our Services</h2>
                <div className="space-y-4">
                  {serviceLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-lg p-4 transition-colors ${
                          isActive
                            ? "bg-gray-800 border-l-4 border-yellow-500"
                            : "bg-gray-800/50 hover:bg-gray-800"
                        }`}
                      >
                        <h3 className={`font-medium ${isActive ? "text-yellow-400" : "text-white"}`}>
                          {link.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400">{link.description}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:w-3/4">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 