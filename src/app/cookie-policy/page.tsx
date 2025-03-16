import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content: "This Cookie Policy explains how SwitchDimension (\"we\", \"us\", or \"our\") uses cookies and similar tracking technologies on our website and AI development platform. This policy is designed to help you understand what cookies are, why we use them, and the types of cookies we use."
    },
    {
      title: "What Are Cookies",
      content: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies allow us to recognize your device and store information about your preferences or past actions on our website."
    },
    {
      title: "Why We Use Cookies",
      content: "We use cookies for various reasons, including to:",
      bullets: [
        "Make our website and platform work as you'd expect",
        "Remember your settings during and between visits",
        "Improve the speed and security of our services",
        "Allow you to share pages with social networks",
        "Continuously improve our website and platform for you",
        "Make our marketing more efficient",
        "Provide personalized AI experiences based on your interactions"
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: "We use the following types of cookies:",
      subsections: [
        {
          title: "Essential Cookies",
          content: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions."
        },
        {
          title: "Analytical/Performance Cookies",
          content: "These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily."
        },
        {
          title: "Functionality Cookies",
          content: "These cookies are used to recognize you when you return to our website. They enable us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region)."
        },
        {
          title: "Targeting Cookies",
          content: "These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and the advertising displayed on it more relevant to your interests."
        },
        {
          title: "AI Session Cookies",
          content: "These specialized cookies help us maintain consistent AI experiences during your session, enabling continuous learning and personalization of AI features across multiple interactions."
        }
      ]
    },
    {
      title: "Cookie Duration",
      content: "In terms of duration, we may use two different types of cookies on our website:",
      subsections: [
        {
          title: "Session Cookies",
          content: "These cookies are temporary and are deleted from your device when your web browser closes. They are essential for certain functions of our website to work properly."
        },
        {
          title: "Persistent Cookies",
          content: "These cookies remain on your device for a set period or until you delete them manually. They help us remember your preferences and settings when you visit our website again."
        }
      ]
    },
    {
      title: "Third-Party Cookies",
      content: "In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These cookies may be placed by services we use such as:",
      bullets: [
        "Google Analytics (for website analytics)",
        "Stripe (for payment processing)",
        "Intercom or Zendesk (for customer support)",
        "LinkedIn, Twitter, Facebook (for social sharing and marketing)",
        "Amplitude or Mixpanel (for product analytics)",
        "Hubspot or Marketo (for marketing automation)"
      ]
    },
    {
      title: "Specific Cookies We Use",
      content: "Below is a detailed list of the cookies we use on our website:",
      subsections: [
        {
          title: "Essential Cookies",
          description: [
            "auth_token: Used to authenticate logged-in users (Duration: Session)",
            "xsrf-token: Helps protect against cross-site request forgery attacks (Duration: Session)",
            "session_id: Maintains user session information (Duration: Session)"
          ]
        },
        {
          title: "Analytical/Performance Cookies",
          description: [
            "ga: Google Analytics cookie used to distinguish users (Duration: 2 years)",
            "_ga_[ID]: Google Analytics cookie used to persist session state (Duration: 2 years)",
            "_gid: Google Analytics cookie used to distinguish users (Duration: 24 hours)",
            "_gat: Google Analytics cookie used to throttle request rate (Duration: 1 minute)"
          ]
        },
        {
          title: "Functionality Cookies",
          description: [
            "ui_preference: Remembers user interface preferences (Duration: 1 year)",
            "language: Stores language preference (Duration: 1 year)",
            "theme: Stores dark/light mode preference (Duration: 1 year)"
          ]
        },
        {
          title: "AI Functionality Cookies",
          description: [
            "ai_session: Maintains AI interaction context (Duration: Session)",
            "ai_preferences: Stores AI customization settings (Duration: 1 year)",
            "model_settings: Records preferred AI model configurations (Duration: 6 months)"
          ]
        }
      ]
    },
    {
      title: "Managing Cookies",
      content: "You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie preferences. You can:",
      bullets: [
        "Delete cookies from your device",
        "Block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies",
        "Set your browser to notify you when you receive a cookie"
      ],
      furtherContent: "Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org or www.aboutcookies.org."
    },
    {
      title: "Cookie Consent",
      content: "When you first visit our website, we will ask for your consent to use cookies through a cookie banner. You can choose to accept all cookies, only essential cookies, or customize your preferences. You can change your cookie preferences at any time by clicking on the 'Cookie Settings' link in the footer of our website."
    },
    {
      title: "Changes to This Cookie Policy",
      content: "We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the 'Last Updated' date. We encourage you to review this Cookie Policy periodically for any changes."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about our Cookie Policy, please contact us:",
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
            <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-300">Last Updated: May 15, 2024</p>
          </div>
        </section>
        
        {/* Policy Content */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="space-y-8">
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
                            
                            {subsection.description && (
                              <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-6">
                                {subsection.description.map((desc, descIndex) => (
                                  <li key={descIndex}>{desc}</li>
                                ))}
                              </ul>
                            )}
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
                    
                    {section.furtherContent && (
                      <p className="text-gray-300 mt-4">{section.furtherContent}</p>
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
                Have questions about how we use cookies? We're here to help.
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
              <Link href="/privacy" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Terms of Service
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