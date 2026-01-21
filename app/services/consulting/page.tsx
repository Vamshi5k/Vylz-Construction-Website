import ServiceLayout from '@/components/service-layout'

const consultingData = {
  title: 'Consulting Services',
  description: 'Expert consulting services providing strategic guidance for construction, architectural, and development projects of all scales.',
  image: '/service-consulting.jpg',
  features: [
    'Strategic project planning and feasibility analysis',
    'Cost estimation and budget optimization',
    'Risk assessment and mitigation strategies',
    'Technology and process improvement consulting',
    'Sustainability and green building consulting',
    'Expert advice on complex technical challenges',
  ],
  benefits: [
    {
      title: 'Strategic Guidance',
      description: 'Our experienced consultants provide strategic guidance to optimize your project outcomes and investment returns.',
    },
    {
      title: 'Cost Optimization',
      description: 'Expert analysis identifies opportunities to optimize budgets and improve cost-effectiveness.',
    },
    {
      title: 'Risk Reduction',
      description: 'Comprehensive risk analysis and mitigation strategies protect your investment and ensure project success.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We meet with your team to understand your project goals, challenges, and requirements.',
    },
    {
      step: 2,
      title: 'Analysis & Assessment',
      description: 'Comprehensive analysis of your project, identifying opportunities and potential challenges.',
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'Development of strategic recommendations and action plans tailored to your needs.',
    },
    {
      step: 4,
      title: 'Implementation Support',
      description: 'Ongoing support to help implement recommendations and monitor progress.',
    },
  ],
}

export default function Consulting() {
  return <ServiceLayout {...consultingData} />
}
