import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content: "At SwitchDimension, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI development platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
    },
    {
      title: "Collection of Your Information",
      content: "We may collect information about you in a variety of ways. The information we may collect via the Platform includes:",
      subsections: [
        {
          title: "Personal Data",
          content: "Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Platform or when you choose to participate in various activities related to the Platform. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Platform."
        },
        {
          title: "Usage Data",
          content: "Information our servers automatically collect when you access the Platform, such as your native actions that are integral to the Platform, as well as other interactions with the Platform and other users via server log files."
        },
        {
          title: "AI Model Interactions",
          content: "The content of your interactions with our AI models, which may include text, data, or inputs you provide. We use this information to improve our services and provide better AI development tools."
        }
      ]
    },
    {
      title: "Use of Your Information",
      content: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Platform to:",
      bullets: [
        "Assist you in creating and optimizing AI applications",
        "Create and manage your account",
        "Email you regarding your account or order",
        "Fulfill and manage purchases, orders, payments, and other transactions related to the Platform",
        "Increase the efficiency and operation of the Platform",
        "Monitor and analyze usage and trends to improve your experience with the Platform",
        "Notify you of updates to the Platform",
        "Offer new products, services, and/or recommendations to you",
        "Prevent fraudulent transactions, monitor against theft, and protect against criminal activity",
        "Process payments and refunds",
        "Request feedback and contact you about your use of the Platform",
        "Resolve disputes and troubleshoot problems"
      ]
    },
    {
      title: "Disclosure of Your Information",
      content: "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:",
      subsections: [
        {
          title: "By Law or to Protect Rights",
          content: "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation."
        },
        {
          title: "Third-Party Service Providers",
          content: "We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance."
        },
        {
          title: "Marketing Communications",
          content: "With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law."
        },
        {
          title: "Business Transfers",
          content: "If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your personal information is transferred and becomes subject to a different Privacy Policy."
        }
      ]
    },
    {
      title: "Security of Your Information",
      content: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."
    },
    {
      title: "Data Retention",
      content: "We will keep your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies."
    },
    {
      title: "Children's Privacy",
      content: "Our Platform is not intended for children under 13 years of age. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions."
    },
    {
      title: "Your Rights",
      content: "You have certain rights in relation to your personal information. This includes:",
      bullets: [
        "The right to access the personal information we hold about you",
        "The right to request the correction of inaccurate personal information we hold about you",
        "The right to request we delete your personal information",
        "The right to restrict or object to processing of your personal information",
        "The right to data portability in certain circumstances",
        "The right to withdraw consent at any time for processing based on consent"
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us:",
      contactInfo: [
        "By email: privacy@switchdimension.ai",
        "By visiting the contact page on our website: switchdimension.ai/contact"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Last Updated: May 15, 2024</p>
          </div>
        </section>
        
        {/* Policy Content */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index} className="pb-6 last:pb-0 border-b border-gray-700 last:border-0">
                    <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                    <p className="text-gray-300 mb-4">{section.content}</p>
                    
                    {section.subsections && (
                      <div className="space-y-4 mt-4 ml-4">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex}>
                            <h3 className="text-lg font-semibold text-white mb-2">{subsection.title}</h3>
                            <p className="text-gray-300">{subsection.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {section.bullets && (
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    
                    {section.contactInfo && (
                      <ul className="pl-0 mt-2 space-y-1 text-gray-300">
                        {section.contactInfo.map((info, infoIndex) => (
                          <li key={infoIndex}>{info}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-6">
                If you have questions or concerns about our privacy practices, please contact us.
              </p>
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Related Links */}
        <section className="py-10 px-4 bg-gray-800">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Legal Information</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/licenses" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Licenses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 