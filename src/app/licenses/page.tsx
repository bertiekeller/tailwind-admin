import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function LicensesPage() {
  const licenseSections = [
    {
      title: "Open Source Software",
      content: "SwitchDimension's AI development platform is built using various open source software components. We are grateful to the open source community for their contributions and want to acknowledge the following projects:",
    },
    {
      title: "Frontend Dependencies",
      packages: [
        {
          name: "React",
          version: "18.2.0",
          license: "MIT",
          url: "https://reactjs.org/",
          description: "A JavaScript library for building user interfaces"
        },
        {
          name: "Next.js",
          version: "15.2.2",
          license: "MIT",
          url: "https://nextjs.org/",
          description: "The React Framework for Production"
        },
        {
          name: "Tailwind CSS",
          version: "3.3.0",
          license: "MIT",
          url: "https://tailwindcss.com/",
          description: "A utility-first CSS framework for rapidly building custom designs"
        },
        {
          name: "Shadcn UI",
          version: "0.5.0",
          license: "MIT",
          url: "https://ui.shadcn.com/",
          description: "Beautifully designed components built with Radix UI and Tailwind CSS"
        },
        {
          name: "Lucide React",
          version: "0.279.0",
          license: "ISC",
          url: "https://lucide.dev/",
          description: "Beautiful & consistent icon toolkit made by the community"
        },
        {
          name: "Zustand",
          version: "4.4.1",
          license: "MIT",
          url: "https://github.com/pmndrs/zustand",
          description: "A small, fast and scalable bearbones state-management solution"
        }
      ]
    },
    {
      title: "Backend Dependencies",
      packages: [
        {
          name: "Node.js",
          version: "18.17.0",
          license: "MIT",
          url: "https://nodejs.org/",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine"
        },
        {
          name: "Drizzle ORM",
          version: "0.28.5",
          license: "MIT",
          url: "https://orm.drizzle.team/",
          description: "TypeScript ORM for SQL databases"
        },
        {
          name: "PostgreSQL",
          version: "15.x",
          license: "PostgreSQL License",
          url: "https://www.postgresql.org/",
          description: "Open source object-relational database system"
        },
        {
          name: "NextAuth.js",
          version: "4.24.5",
          license: "ISC",
          url: "https://next-auth.js.org/",
          description: "Authentication for Next.js"
        },
        {
          name: "Zod",
          version: "3.22.2",
          license: "MIT",
          url: "https://github.com/colinhacks/zod",
          description: "TypeScript-first schema validation with static type inference"
        }
      ]
    },
    {
      title: "AI Libraries and Tools",
      packages: [
        {
          name: "OpenAI Node.js SDK",
          version: "4.8.0",
          license: "MIT",
          url: "https://github.com/openai/openai-node",
          description: "The official OpenAI Node.js SDK"
        },
        {
          name: "LangChain.js",
          version: "0.0.173",
          license: "MIT",
          url: "https://js.langchain.com/",
          description: "Building applications with LLMs through composability"
        },
        {
          name: "TensorFlow.js",
          version: "4.10.0",
          license: "Apache-2.0",
          url: "https://www.tensorflow.org/js",
          description: "Library for machine learning in JavaScript"
        },
        {
          name: "Hugging Face Transformers.js",
          version: "2.6.2",
          license: "Apache-2.0",
          url: "https://huggingface.co/docs/transformers.js",
          description: "State-of-the-art Machine Learning for the web"
        }
      ]
    },
    {
      title: "Development Tools",
      packages: [
        {
          name: "TypeScript",
          version: "5.1.6",
          license: "Apache-2.0",
          url: "https://www.typescriptlang.org/",
          description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript"
        },
        {
          name: "ESLint",
          version: "8.48.0",
          license: "MIT",
          url: "https://eslint.org/",
          description: "Tool for identifying and reporting on patterns in JavaScript"
        },
        {
          name: "Prettier",
          version: "3.0.3",
          license: "MIT",
          url: "https://prettier.io/",
          description: "Opinionated code formatter"
        },
        {
          name: "Vitest",
          version: "0.34.4",
          license: "MIT",
          url: "https://vitest.dev/",
          description: "Blazing Fast Unit Test Framework"
        }
      ]
    },
    {
      title: "AI Models and Assets",
      description: "Our platform utilizes various pre-trained models and assets, subject to their respective licenses:",
      models: [
        {
          name: "GPT Models",
          provider: "OpenAI",
          license: "Commercial License",
          url: "https://openai.com/policies/terms-of-use",
          description: "Used through the OpenAI API under commercial licensing terms"
        },
        {
          name: "Open Source Models",
          provider: "Hugging Face",
          license: "Various Open Source Licenses",
          url: "https://huggingface.co/",
          description: "Various open source models available through Hugging Face, each with their own license"
        },
        {
          name: "Icons",
          provider: "Lucide",
          license: "ISC",
          url: "https://lucide.dev/license",
          description: "Icon set used throughout the application"
        },
        {
          name: "Fonts",
          provider: "Google Fonts",
          license: "SIL Open Font License",
          url: "https://fonts.google.com/",
          description: "Fonts used in the application interface"
        }
      ]
    },
    {
      title: "SwitchDimension Commercial License",
      content: "The SwitchDimension platform itself, excluding the open source components listed above, is proprietary software provided under our commercial license agreement. Users of our platform are granted a limited, non-exclusive, non-transferable license to use our services as outlined in our Terms of Service.",
      link: {
        text: "View Our Terms of Service",
        url: "/terms"
      }
    },
    {
      title: "Third-Party Services",
      content: "Our platform integrates with various third-party services, each with their own terms of service and licensing requirements. Users of these integrated services should review the relevant terms provided by those services.",
      services: [
        "Authentication providers",
        "Payment processing services",
        "Cloud storage providers",
        "Analytics services",
        "Communication services"
      ]
    },
    {
      title: "License Compliance",
      content: "We are committed to respecting the intellectual property rights of others and complying with the license terms of all software we use. If you believe that your work has been used in a way that constitutes copyright infringement, please contact us using the information provided below."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about our licensing or open source usage, please contact us:",
      contactInfo: [
        "By email: legal@switchdimension.ai",
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
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Licenses</h1>
            <p className="text-gray-300">Open Source Acknowledgements and Licensing Information</p>
          </div>
        </section>
        
        {/* License Content */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-10">
              {licenseSections.map((section, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  
                  {section.content && (
                    <p className="text-gray-300 mb-4">{section.content}</p>
                  )}
                  
                  {section.description && (
                    <p className="text-gray-300 mb-4">{section.description}</p>
                  )}
                  
                  {section.packages && (
                    <div className="mt-4 space-y-4">
                      {section.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex} className="bg-gray-900 p-4 rounded-md border border-gray-700">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300">
                                v{pkg.version}
                              </span>
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">
                                {pkg.license}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{pkg.description}</p>
                          <a 
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:underline text-sm"
                          >
                            {pkg.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.models && (
                    <div className="mt-4 space-y-4">
                      {section.models.map((model, modelIndex) => (
                        <div key={modelIndex} className="bg-gray-900 p-4 rounded-md border border-gray-700">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">
                                {model.provider}
                              </span>
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">
                                {model.license}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{model.description}</p>
                          <a 
                            href={model.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:underline text-sm"
                          >
                            {model.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.services && (
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                      {section.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.link && (
                    <div className="mt-4">
                      <Link 
                        href={section.link.url}
                        className="text-yellow-400 hover:underline"
                      >
                        {section.link.text} →
                      </Link>
                    </div>
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
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-6">
                If you have questions about our licensing or need additional information, please don't hesitate to reach out.
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
              <Link href="/cookie-policy" className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 