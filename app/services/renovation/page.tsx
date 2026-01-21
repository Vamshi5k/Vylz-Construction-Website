import ServiceLayout from '@/components/service-layout'

const renovationData = {
  title: 'Building Renovation',
  description: 'Professional building renovation services that transform existing structures into modern, efficient, and sustainable spaces.',
  image: '/service-renovation.jpg',
  features: [
    'Comprehensive structural assessment and planning',
    'Modern interior and exterior refurbishment',
    'Mechanical and electrical system upgrades',
    'Energy efficiency and sustainability improvements',
    'Minimal disruption renovation strategies',
    'Preservation of architectural heritage elements',
  ],
  benefits: [
    {
      title: 'Extended Building Life',
      description: 'Professional renovation extends the lifespan of your building and improves its market value.',
    },
    {
      title: 'Modern Efficiency',
      description: 'Upgraded systems and modern design enhance operational efficiency and reduce running costs.',
    },
    {
      title: 'Minimal Disruption',
      description: 'We plan renovations to minimize disruption to ongoing operations and tenant activities.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Detailed structural assessment and renovation planning with minimal disruption strategies.',
    },
    {
      step: 2,
      title: 'Design & Approvals',
      description: 'Renovation designs developed and approved by all stakeholders and regulatory bodies.',
    },
    {
      step: 3,
      title: 'Renovation Execution',
      description: 'Systematic renovation with careful management of existing structures and systems.',
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'Complete inspection and quality verification ensures the renovation meets all standards.',
    },
  ],
}

export default function Renovation() {
  return <ServiceLayout {...renovationData} />
}
