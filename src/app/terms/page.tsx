import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "These Terms of Service constitute a legally binding agreement made between you and SwitchDimension, concerning your access to and use of our website and AI development platform. You agree that by accessing the Platform, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Platform and you must discontinue use immediately."
    },
    {
      title: "Platform Use and Account Registration",
      content: "To access certain features of the Platform, you may be required to register for an account. When you register for an account, you agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password you use to access the Platform and for any activities or actions under your password. SwitchDimension will not be liable for any loss or damage arising from your failure to comply with this security obligation.",
      subsections: [
        {
          title: "User Representations",
          content: "By using the Platform, you represent and warrant that: (1) you have the legal capacity to accept these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Platform through automated or non-human means; (4) you will not use the Platform for any illegal or unauthorized purpose; and (5) your use of the Platform will not violate any applicable law or regulation."
        },
        {
          title: "Prohibited Activities",
          content: "You may not access or use the Platform for any purpose other than that for which we make the Platform available. The Platform may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by SwitchDimension."
        }
      ]
    },
    {
      title: "User-Generated Contributions",
      content: "The Platform may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Platform, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 'Contributions'). Contributions may be viewable by other users of the Platform and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary."
    },
    {
      title: "Contribution License",
      content: "By posting Contributions on any part of the Platform, or making Contributions accessible to the Platform by linking your account from the Platform to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to SwitchDimension an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing."
    },
    {
      title: "AI Generation and Outputs",
      content: "Our Platform includes AI-powered features that generate various outputs based on your inputs. By submitting inputs to our AI models, you grant us the necessary rights to use your inputs to generate outputs. For AI-generated content:",
      bullets: [
        "SwitchDimension may retain and use the AI outputs and inputs to improve our services",
        "You are responsible for reviewing all AI-generated content for accuracy before using it",
        "We do not guarantee that AI-generated content will be free from errors, biases, or inaccuracies",
        "You are responsible for ensuring that your use of AI-generated content complies with applicable laws, including intellectual property laws"
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: "Unless otherwise indicated, the Platform is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Platform (collectively, the 'Content') and the trademarks, service marks, and logos contained therein (the 'Marks') are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. Except as expressly provided in these Terms of Service, no part of the Platform and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission."
    },
    {
      title: "Platform Management",
      content: "We reserve the right, but not the obligation, to: (1) monitor the Platform for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Platform or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Platform in a manner designed to protect our rights and property and to facilitate the proper functioning of the Platform."
    },
    {
      title: "Privacy Policy",
      content: "We care about data privacy and security. Please review our Privacy Policy at switchdimension.ai/privacy. By using the Platform, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Service. Please be advised the Platform is hosted in the United States. If you access the Platform from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Platform, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States."
    },
    {
      title: "Term and Termination",
      content: "These Terms of Service shall remain in full force and effect while you use the Platform. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE PLATFORM (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE PLATFORM OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION."
    },
    {
      title: "Modifications and Interruptions",
      content: "We reserve the right to change, modify, or remove the contents of the Platform at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Platform without notice at any time. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Platform. We cannot guarantee the Platform will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Platform, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Platform at any time or for any reason without notice to you."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed by and defined following the laws of the United States and the State of California. SwitchDimension and yourself irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms."
    },
    {
      title: "Dispute Resolution",
      content: "You agree to irrevocably submit all disputes related to Terms or the relationship established by this Agreement to the jurisdiction of the California courts. SwitchDimension shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Terms are entered into in the course of your trade or profession, the state of your principal place of business."
    },
    {
      title: "Corrections",
      content: "There may be information on the Platform that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Platform at any time, without prior notice."
    },
    {
      title: "Contact Us",
      content: "In order to resolve a complaint regarding the Platform or to receive further information regarding use of the Platform, please contact us at:",
      contactInfo: [
        "SwitchDimension, Inc.",
        "1234 Innovation Way",
        "San Francisco, CA 94103",
        "legal@switchdimension.ai",
        "www.switchdimension.ai/contact"
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
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-300">Last Updated: May 15, 2024</p>
          </div>
        </section>
        
        {/* Terms Content */}
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
                By using our Platform, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
              </p>
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/contact">Questions? Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Related Links */}
        <section className="py-10 px-4 bg-gray-800">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Legal Information</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Privacy Policy
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