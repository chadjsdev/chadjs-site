import Link from 'next/link'
import { ArrowRight, Shield, Code, Cloud } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              DevSecOps Engineer &<br />
              <span className="text-primary-600">Software Developer</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Senior Software Developer with 10+ years of experience in full-stack development, 
              cloud infrastructure, and federal compliance. Specializing in CMMC, FedRAMP, and 
              secure government contracting solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
              >
                View Projects
              </Link>
              <Link 
                href="/about" 
                className="text-base font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive skills across security, development, and cloud infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* DevSecOps */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 rounded-lg">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">DevSecOps</h3>
              <p className="text-gray-600 mb-4">
                Security-first development practices with CMMC Level 2, FedRAMP, and NIST compliance expertise.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• CISSP & Security+ Certified</li>
                <li>• Zero Trust Architecture</li>
                <li>• Security Automation</li>
              </ul>
            </div>

            {/* Software Development */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 rounded-lg">
                <Code className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 mb-4">
                Modern application development with .NET Core, React, and enterprise-grade solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• .NET Core 8 / Blazor</li>
                <li>• React / Next.js</li>
                <li>• API Design & Integration</li>
              </ul>
            </div>

            {/* Cloud Infrastructure */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 rounded-lg">
                <Cloud className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Multi-cloud expertise with AWS and Azure, focusing on secure government workloads.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AWS Certified Developer</li>
                <li>• Azure Certified Developer</li>
                <li>• Terraform & Ansible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Insights
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Thoughts on DevSecOps, cloud security, and government contracting
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog posts will be dynamically loaded here */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-sm text-primary-600 font-semibold mb-2">COMING SOON</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started with CMMC 2.0
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to understanding and implementing CMMC Level 2 requirements.
              </p>
              <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View all posts <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Available for government contracting opportunities in the Northern Virginia area.
          </p>
          <Link
            href="/about#contact"
            className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-all"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}
