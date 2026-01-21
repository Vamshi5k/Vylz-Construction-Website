import ServiceLayout from '@/components/service-layout'

const architecturalDesignData = {
  title: 'Architectural Design',
  description: 'Innovative architectural design solutions that balance aesthetics, functionality, and sustainability for modern commercial spaces.',
  image: '/service-architectural-design.jpg',
  features: [
    'Conceptual design and 3D visualization',
    'Detailed architectural drawings and specifications',
    'Building Information Modeling (BIM) integration',
    'Sustainable and eco-friendly design practices',
    'Interior space planning and optimization',
    'Compliance with building codes and regulations',
  ],
  benefits: [
    {
      title: 'Creative Vision',
      description: 'Our architects create distinctive designs that reflect your brand identity while maximizing functionality.',
    },
    {
      title: 'Sustainability',
      description: 'We integrate sustainable design principles to reduce environmental impact and operational costs.',
    },
    {
      title: 'Innovation',
      description: 'Using cutting-edge technology and design trends, we create spaces that inspire and enhance productivity.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'Consultation & Analysis',
      description: 'We conduct in-depth consultations to understand your vision, requirements, and constraints.',
    },
    {
      step: 2,
      title: 'Conceptual Design',
      description: 'Our team develops multiple design concepts with 3D visualizations for your review and feedback.',
    },
    {
      step: 3,
      title: 'Detailed Design',
      description: 'Once approved, we create comprehensive architectural drawings, specifications, and BIM models.',
    },
    {
      step: 4,
      title: 'Design Delivery',
      description: 'Final design documentation is delivered in formats suitable for construction and regulatory submission.',
    },
  ],
}

export default function ArchitecturalDesign() {
  return <ServiceLayout {...architecturalDesignData} />
}
