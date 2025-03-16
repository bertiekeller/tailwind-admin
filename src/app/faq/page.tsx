import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is SwitchDimension AI Platform?",
      answer: "SwitchDimension is a comprehensive AI development platform that allows you to build, deploy, and manage AI applications with ease. Our platform provides tools for training models, creating intelligent agents, and integrating AI capabilities into your existing workflows."
    },
    {
      question: "How does SwitchDimension differ from other AI platforms?",
      answer: "SwitchDimension offers an end-to-end solution that focuses on simplicity and power. Unlike other platforms that require extensive technical knowledge, our intuitive interface makes AI development accessible to developers of all skill levels while still providing advanced capabilities for AI experts."
    },
    {
      question: "Do I need to have AI expertise to use SwitchDimension?",
      answer: "No, you don't need extensive AI expertise to get started. Our platform is designed with user-friendly interfaces and pre-built components that allow anyone with basic programming knowledge to build AI applications. Of course, those with AI expertise will be able to leverage our advanced features for more sophisticated implementations."
    },
    {
      question: "What types of AI models can I build with SwitchDimension?",
      answer: "SwitchDimension supports a wide range of AI models including but not limited to natural language processing (NLP), computer vision, recommendation systems, and custom ML models. You can either use our pre-trained models, fine-tune existing models, or build your own from scratch."
    },
    {
      question: "How can I deploy my AI applications?",
      answer: "SwitchDimension offers multiple deployment options. You can deploy your AI applications directly to our cloud infrastructure with just a few clicks, integrate them into your existing applications via APIs, or deploy them to your own infrastructure using our containerized solutions."
    },
    {
      question: "What programming languages are supported?",
      answer: "Our platform primarily supports Python for AI model development, but our APIs and SDKs are available in multiple languages including JavaScript, Java, Go, and Ruby. This allows you to integrate AI capabilities into applications written in your preferred language."
    },
    {
      question: "Is SwitchDimension suitable for enterprise use?",
      answer: "Absolutely. SwitchDimension is built with enterprise needs in mind, offering robust security features, scalability, compliance with industry standards, and dedicated support. Our Enterprise plan includes features like single sign-on (SSO), audit logs, and custom SLAs to meet the requirements of large organizations."
    },
    {
      question: "How does pricing work?",
      answer: "We offer tiered pricing plans starting with a free tier for individuals and small projects. Our Professional and Enterprise plans are designed to scale with your needs. Pricing is based on a combination of compute resources, storage, and API calls. Visit our Pricing page for detailed information on each plan."
    },
    {
      question: "Can I try SwitchDimension before committing to a paid plan?",
      answer: "Yes, we offer a free tier that allows you to explore our platform's capabilities. Additionally, we provide a 14-day trial of our Professional plan so you can experience all our features before making a decision."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include access to our documentation, community forums, and tutorials. Professional and Enterprise plans include email support with varying response times. Enterprise customers also receive dedicated account management, priority support, and optional 24/7 coverage."
    },
    {
      question: "How secure is the SwitchDimension platform?",
      answer: "Security is a top priority for us. We implement industry-standard security measures including data encryption at rest and in transit, regular security audits, and compliance with SOC 2, GDPR, and HIPAA (where applicable). Our Enterprise plan offers additional security features such as VPC isolation and custom security configurations."
    },
    {
      question: "Can I use my own data to train models?",
      answer: "Yes, you can upload and use your own datasets to train or fine-tune models on our platform. We provide tools for data preprocessing, augmentation, and validation to ensure your models are trained on high-quality data. All data you upload remains your property and is handled according to our privacy policy."
    }
  ];

  const categories = [
    { name: "Getting Started", href: "#" },
    { name: "Pricing & Plans", href: "#" },
    { name: "Technical Questions", href: "#" },
    { name: "Enterprise Support", href: "#" },
    { name: "API & Integration", href: "#" },
    { name: "Security & Compliance", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our AI development platform. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Categories Sidebar */}
              <div className="w-full md:w-1/4">
                <div className="bg-gray-800 rounded-lg p-4 sticky top-20">
                  <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={category.href}
                          className="text-gray-300 hover:text-yellow-400 transition-colors block py-1"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <h4 className="text-sm font-semibold text-white mb-2">Still have questions?</h4>
                    <Button asChild className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="w-full md:w-3/4">
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between gap-2 p-6 text-white font-medium cursor-pointer list-none">
                          <span>{faq.question}</span>
                          <span className="transition group-open:rotate-180">
                            <ChevronDown size={20} />
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-300">
                          <p>{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses already building the future with SwitchDimension's AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Sign Up for Free</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:text-yellow-400 hover:border-yellow-400">
                <Link href="/docs">Read Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 