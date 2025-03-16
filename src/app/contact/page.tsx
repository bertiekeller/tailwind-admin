import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare,
  HeadphonesIcon,
  CreditCard
} from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6 text-yellow-400" />,
      title: "General Inquiries",
      description: "For general questions about our services or company.",
      contact: "info@switchdimension.com"
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-yellow-400" />,
      title: "Technical Support",
      description: "Need help with your account or one of our services?",
      contact: "support@switchdimension.com"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-yellow-400" />,
      title: "Sales",
      description: "Interested in our enterprise plans or bulk pricing.",
      contact: "sales@switchdimension.com"
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
              Get in <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions, feedback, or interested in our services? We'd love to hear from you. Our team is ready to assist you.
            </p>
          </div>
        </section>
        
        {/* Contact Methods */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <a href={`mailto:${method.contact}`} className="text-yellow-400 hover:text-yellow-300 font-medium">
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Our Office</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-yellow-400 mt-1 mr-3" />
                    <div>
                      <p className="text-white font-medium">SwitchDimension HQ</p>
                      <p className="text-gray-300">123 AI Innovation Center</p>
                      <p className="text-gray-300">San Francisco, CA 94103</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                    <a href="mailto:hello@switchdimension.com" className="text-gray-300 hover:text-yellow-400">
                      hello@switchdimension.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                    <a href="tel:+14155551234" className="text-gray-300 hover:text-yellow-400">
                      +1 (415) 555-1234
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-400 mt-1 mr-3" />
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p className="text-gray-300">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-white mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe" 
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="How can we help you?" 
                      className="bg-gray-700 border-gray-600 text-white focus:border-yellow-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your inquiry..." 
                      className="min-h-32 bg-gray-700 border-gray-600 text-white focus:border-yellow-500"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ CTA Section */}
        <section className="py-16 px-4 bg-gray-800/50 mt-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Looking for quick answers?
            </h2>
            <p className="text-gray-300 mb-8">
              Check out our frequently asked questions for immediate assistance.
            </p>
            <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              <Link href="/faq">Visit FAQ Page</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 