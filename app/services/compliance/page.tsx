import ServiceLayout from '@/components/service-layout'

const complianceData = {
  title: 'Compliance & Regulatory',
  description: 'Comprehensive compliance and regulatory services ensuring your projects meet all UK building codes and legal requirements.',
  image: '/service-compliance.jpg',
  features: [
    'Building Regulations compliance and approvals',
    'Health and Safety management on-site',
    'Environmental and sustainability compliance',
    'Planning permission and regulatory liaison',
    'Insurance and liability management',
    'Quality and safety certifications',
  ],
  benefits: [
    {
      title: 'Legal Protection',
      description: 'Full compliance with all UK regulations protects your business from legal and financial risks.',
    },
    {
      title: 'Safety Assurance',
      description: 'Our rigorous safety protocols and compliance checks ensure a safe working environment for all stakeholders.',
    },
    {
      title: 'Regulatory Expertise',
      description: 'Our team stays updated on all regulatory changes, ensuring your projects always meet current standards.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'Regulatory Assessment',
      description: 'We conduct thorough assessments to identify all applicable regulations and compliance requirements.',
    },
    {
      step: 2,
      title: 'Planning & Documentation',
      description: 'Comprehensive compliance documentation and regulatory submission preparation.',
    },
    {
      step: 3,
      title: 'Monitoring & Audits',
      description: 'Continuous monitoring and regular audits ensure ongoing compliance throughout the project.',
    },
    {
      step: 4,
      title: 'Certification & Sign-off',
      description: 'Final inspections, certifications, and regulatory sign-off confirm full compliance.',
    },
  ],
}

export default function Compliance() {
  return <ServiceLayout {...complianceData} />
}
