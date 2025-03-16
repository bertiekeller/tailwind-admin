"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Training", href: "/services/ai-training" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Agent Building", href: "/services/agent-building" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Tutorials", href: "/tutorials" },
      { label: "Community", href: "/community" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Licenses", href: "/licenses" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full mb-12 lg:mb-0 lg:w-1/3 lg:pr-12">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-yellow-400">Switch</span>Dimension
              </h2>
            </Link>
            <p className="mb-4 max-w-md text-gray-400">
              Empowering developers and businesses to harness the power of artificial intelligence through cutting-edge training and community support.
            </p>
            <div className="flex space-x-4">
              {["twitter", "github", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3.25c0-.66-.17-1.16-.94-1.16s-1.06.52-1.06 1.16V17h-2v-6h2v.8c.37-.55 1.18-1.08 2.16-1.08 1.29 0 2.27.81 2.27 2.57V17z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    {column.title}
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SwitchDimension. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 