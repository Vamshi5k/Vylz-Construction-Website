import ServiceLayout from '@/components/service-layout'

const commercialConstructionData = {
  title: 'Commercial Construction',
  description: 'Full-scale commercial construction services for office complexes, retail developments, and institutional buildings with expert oversight and quality assurance.',
  image: '/service-commercial-construction.jpg',
  features: [
    'Complete project planning and feasibility studies',
    'Professional construction management and oversight',
    'Comprehensive quality assurance and compliance',
    'Detailed budget and timeline management',
    'Advanced safety and risk management protocols',
    'Sustainable building practices and materials',
  ],
  benefits: [
    {
      title: 'Expert Management',
      description: 'Our experienced team manages every aspect of your commercial construction project with precision and attention to detail.',
    },
    {
      title: 'On-Time Delivery',
      description: 'We maintain strict timelines and deliver projects on schedule while maintaining the highest quality standards.',
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimized budgeting and resource management ensure your project stays within budget without compromising quality.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'Planning & Design',
      description: 'We begin with comprehensive planning, site analysis, and design collaboration to establish project requirements and objectives.',
    },
    {
      step: 2,
      title: 'Permitting & Preparation',
      description: 'Our team handles all necessary permits, regulatory approvals, and site preparation to ensure smooth construction startup.',
    },
    {
      step: 3,
      title: 'Construction',
      description: 'Skilled construction teams execute the project with rigorous quality control, safety protocols, and regular progress monitoring.',
    },
    {
      step: 4,
      title: 'Completion & Handover',
      description: 'Final inspections, testing, and quality verification ensure the project meets all standards before handover.',
    },
  ],
}

export default function CommercialConstruction() {
  return <ServiceLayout {...commercialConstructionData} />
}
