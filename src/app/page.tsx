"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Zap, FileText, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 border rounded-full border-primary/20 bg-primary/5">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">AI-Powered Content Creation</span>
              </div>
              <h1 className="max-w-4xl mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Create Engaging Content with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  AI Magic
                </span>
              </h1>
              <p className="max-w-2xl mb-10 text-lg text-muted-foreground">
                Transform your content creation process with AI-powered tools. Generate high-quality articles,
                blog posts, and social media content in minutes, not hours.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link href='/dashboard'><Button size="lg" className="text-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button></Link>
                <Button size="lg" variant="outline" className="text-lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-14">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Why Choose ContentFlow.AI?</h2>
              <p className="text-lg text-muted-foreground">
                Powerful features to streamline your content creation workflow
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Bot className="w-10 h-10" />,
                  title: "AI-Powered Writing",
                  description:
                    "Advanced AI algorithms that understand your brand voice and create consistent content.",
                },
                {
                  icon: <Zap className="w-10 h-10" />,
                  title: "Lightning Fast",
                  description:
                    "Generate multiple pieces of content in seconds, saving you hours of work.",
                },
                {
                  icon: <FileText className="w-10 h-10" />,
                  title: "Multiple Formats",
                  description:
                    "Create blog posts, social media content, product descriptions, and more.",
                },
                {
                  icon: <Shield className="w-10 h-10" />,
                  title: "Plagiarism Free",
                  description:
                    "100% original content that passes all plagiarism checks.",
                },
                {
                  icon: <Clock className="w-10 h-10" />,
                  title: "24/7 Generation",
                  description:
                    "Create content whenever you need it, day or night.",
                },
                {
                  icon: <Sparkles className="w-10 h-10" />,
                  title: "Smart Templates",
                  description:
                    "Pre-built templates for various content types and industries.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 transition-all duration-200 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-card hover:border-primary/20"
                >
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="p-8 text-center bg-gradient-to-r from-primary to-purple-500 rounded-2xl sm:p-16">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-lg text-primary-foreground/90">
                Join thousands of content creators who are already using ContentFlow.AI to
                streamline their workflow.
              </p>
              <Button size="lg"  variant="secondary" className="text-lg bg-purple-200">
                Start Creating Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-purple-100 ">
        <div className="container px-4 mx-auto max-w-7xl text-purple-100">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2 text-purple-100">
              <h3 className="mb-4 text-2xl font-bold">ContentFlow.AI</h3>
              <p className="mb-4 text-purple-100 ">
                AI-powered content creation platform that helps you create engaging content
                faster than ever.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Templates", "Examples"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-purple-100 hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase">Company</h4>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-purple-100 hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t">
            <p className="text-center text-purple-100">
              © {new Date().getFullYear()} ContentFlow.AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}