import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "For individuals getting started with AI development",
      features: [
        "Access to basic AI training materials",
        "Community forum access",
        "1 project deployment",
        "Limited API calls",
        "Email support"
      ],
      cta: "Get Started",
      href: "/signup",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "For developers building AI-powered applications",
      features: [
        "All Starter features",
        "Advanced AI training courses",
        "5 project deployments",
        "10,000 monthly API calls",
        "Priority email support",
        "AI model fine-tuning tools",
        "Custom agent templates"
      ],
      cta: "Subscribe Now",
      href: "/signup?plan=professional",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations with advanced needs",
      features: [
        "All Professional features",
        "Unlimited project deployments",
        "Unlimited API calls",
        "Dedicated account manager",
        "24/7 phone & email support",
        "Custom AI model development",
        "Private cloud deployment",
        "Enterprise SSO"
      ],
      cta: "Contact Sales",
      href: "/contact",
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "What is included in the free tier?",
      answer: "Our free tier includes access to basic AI training materials, community forum access, the ability to deploy one project, and limited API calls for testing purposes."
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle."
    },
    {
      question: "Are there any long-term contracts?",
      answer: "No, our Professional plan is billed monthly with no long-term commitment. Enterprise plans may offer discounted annual billing options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal. Enterprise customers may also pay via invoice."
    },
    {
      question: "Do you offer discounts for educational institutions?",
      answer: "Yes, we offer special pricing for educational institutions and non-profit organizations. Please contact our sales team for more information."
    },
    {
      question: "What kind of support is included?",
      answer: "Free tier includes email support with 48-hour response time. Professional includes priority email support (24-hour response). Enterprise includes 24/7 support via email and phone, plus a dedicated account manager."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Choose the plan that fits your needs. Start for free, upgrade as you grow.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              All plans include access to our community and basic resources.
            </p>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`rounded-lg overflow-hidden border ${
                    plan.highlighted 
                      ? 'border-yellow-500 shadow-lg shadow-yellow-500/10' 
                      : 'border-gray-700'
                  } bg-gray-800 flex flex-col`}
                >
                  <div className="p-6 border-b border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 border-t border-gray-700">
                    <Button 
                      asChild 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enterprise Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Need a custom solution?
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Our enterprise plan is designed for larger organizations with specific needs.
                    Get a tailored solution with dedicated support and custom features.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-2" />
                      <span className="text-gray-300">Custom AI models</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-2" />
                      <span className="text-gray-300">Private deployment</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-2" />
                      <span className="text-gray-300">Dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-2" />
                      <span className="text-gray-300">SLA guarantees</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                    <Link href="/contact">Contact Our Sales Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and companies building the future with AI.
              Start for free, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Sign Up for Free</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 