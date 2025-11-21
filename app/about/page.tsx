import { Mail, MapPin, Award, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'About - Chad Scoville',
  description: 'Learn more about Chad Scoville - DevSecOps Engineer, Software Developer, and Federal Compliance Expert.',
}

const certifications = [
  'CISSP - Certified Information Systems Security Professional',
  'Security+ - CompTIA Security+',
  'AWS Certified Developer - Associate',
  'Azure Developer Associate',
  'Public Trust Clearance',
]

const expertise = [
  {
    category: 'Federal Compliance',
    skills: ['CMMC Level 2', 'FedRAMP', 'NIST 800-171', 'NIST 800-53', 'FISMA'],
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS GovCloud', 'Azure Government', 'Multi-Cloud Architecture', 'Infrastructure as Code'],
  },
  {
    category: 'Development',
    skills: ['.NET Core', 'C#', 'React', 'Next.js', 'TypeScript', 'Python', 'Node.js'],
  },
  {
    category: 'DevSecOps Tools',
    skills: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Security',
    skills: ['Zero Trust Architecture', 'SIEM', 'Vulnerability Management', 'Security Automation', 'Compliance Auditing'],
  },
  {
    category: 'Databases',
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                I&apos;m Chad Scoville, a Senior Software Developer and DevSecOps Engineer with over 10 years
                of experience building secure, compliant solutions for government and enterprise clients.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Operating through Smartsby Software LLC, I specialize in helping organizations navigate 
                the complex landscape of federal compliance, particularly CMMC and FedRAMP requirements, 
                while delivering robust cloud infrastructure and modern software solutions.
              </p>
              <div className="flex items-center gap-2 text-gray-700 mb-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Fairfax, Virginia, US</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Briefcase className="w-5 h-5 text-primary-600" />
                <span>Available for Government Contracting Opportunities</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-primary-600 mr-2" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Professional Background
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Current Focus: CMMC & Government Contracting
              </h3>
              <p className="text-gray-700 mb-4">
                I&apos;m actively pursuing CMMC (Cybersecurity Maturity Model Certification) credentials
                and building expertise in government contracting services. With Level 2 CMMC assessments
                ranging from $30,000-$150,000 per client, I&apos;m positioning myself to provide comprehensive
                compliance assessment and implementation services to DoD contractors.
              </p>
              <p className="text-gray-700">
                My approach combines technical expertise with business acumen, helping organizations 
                not just achieve compliance, but build sustainable security programs that protect 
                their operations and support their growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Technical Leadership</h4>
                <p className="text-gray-700">
                  Over 10 years of experience in full-stack development, with deep expertise in
                  cloud infrastructure and security. I&apos;ve built systems handling sensitive data
                  in regulated environments, always with security and compliance as primary concerns.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Federal Compliance</h4>
                <p className="text-gray-700">
                  Specialized knowledge in NIST frameworks, CMMC requirements, and FedRAMP compliance. 
                  I help organizations implement security controls that satisfy auditors while 
                  remaining practical for development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area) => (
              <div key={area.category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill) => (
                    <li key={skill} className="text-gray-700 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary-600 font-semibold mb-2">
                Florida Gulf Coast University
              </p>
              <p className="text-gray-700">
                Graduated Magna Cum Laude with 3.74 GPA
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Graduate Certificate in Senior Living Administration
              </h3>
              <p className="text-primary-600 font-semibold mb-2">
                Completed 2020
              </p>
              <p className="text-gray-700">
                Supporting development of healthcare SaaS solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Community Involvement
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Audio Engineer & Board Member
            </h3>
            <p className="text-primary-600 font-semibold mb-3">
              Alex Bryant Ministries
            </p>
            <p className="text-gray-700 mb-4">
              Volunteer audio engineer and board member for a faith-based podcast running 
              weekly since March 2020. The show has produced 297 episodes with over 59,000 downloads.
            </p>
            <p className="text-gray-700">
              This role has honed my skills in content production, team leadership, and 
              consistent delivery of high-quality output on tight schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
            <Mail className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Available for government contracting opportunities in the Northern Virginia area. 
              Specializing in CMMC assessment, FedRAMP compliance, and secure cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:chad@smartsby.com"
                className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-all"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/chadscoville"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white border-2 border-white hover:bg-primary-400 transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
