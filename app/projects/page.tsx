import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Projects - Chad Scoville',
  description: 'Portfolio of software development and DevSecOps projects.',
}

const projects = [
  {
    title: 'CMMC Compliance Toolkit',
    description: 'Comprehensive toolkit for implementing CMMC Level 2 controls with Terraform and Ansible automation for secure cloud infrastructure.',
    tech: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Python'],
    category: 'DevSecOps',
    status: 'In Development',
    github: null,
    demo: null,
  },
  {
    title: 'Water Testing Laboratory Management System',
    description: '.NET Core 8 Blazor application for managing water testing operations with real-time sample tracking and compliance reporting.',
    tech: ['.NET Core 8', 'Blazor', 'SQL Server', 'Azure'],
    category: 'Full-Stack',
    status: 'Active',
    github: null,
    demo: null,
  },
  {
    title: 'React Job Search Application',
    description: 'Modern job search platform with advanced filtering, resume management, and application tracking capabilities.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    status: 'Active',
    github: null,
    demo: null,
  },
  {
    title: 'FedRAMP Compliance Automation',
    description: 'Infrastructure as Code templates and automation scripts for achieving FedRAMP compliance in cloud environments.',
    tech: ['Terraform', 'AWS', 'Python', 'Docker'],
    category: 'Cloud Security',
    status: 'Planned',
    github: null,
    demo: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of software development and DevSecOps projects showcasing 
            expertise in cloud security, federal compliance, and modern application development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                        {project.category}
                      </span>
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        project.status === 'Active' 
                          ? 'bg-green-50 text-green-700' 
                          : project.status === 'In Development'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Interested in seeing more or discussing a project?
          </p>
          <Link
            href="/about#contact"
            className="inline-block rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-all"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
