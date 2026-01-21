import ServiceLayout from '@/components/service-layout'

const projectManagementData = {
  title: 'Project Management',
  description: 'Comprehensive project management ensuring timely, cost-effective delivery of your construction and architectural vision.',
  image: '/service-project-management.jpg',
  features: [
    'Strategic stakeholder coordination and communication',
    'Detailed schedule and budget management',
    'Resource planning and allocation',
    'Risk management strategies and mitigation',
    'Quality assurance and progress monitoring',
    'Documentation and compliance management',
  ],
  benefits: [
    {
      title: 'Efficient Delivery',
      description: 'Professional project management ensures your project is completed on time and within budget.',
    },
    {
      title: 'Risk Mitigation',
      description: 'We identify and manage potential risks proactively to prevent delays and cost overruns.',
    },
    {
      title: 'Stakeholder Communication',
      description: 'Clear communication and regular updates keep all stakeholders informed and aligned throughout the project.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'Project Initiation',
      description: 'We establish project objectives, scope, timeline, and budget with all stakeholders.',
    },
    {
      step: 2,
      title: 'Planning & Scheduling',
      description: 'Detailed project plans, schedules, and resource allocations are developed for smooth execution.',
    },
    {
      step: 3,
      title: 'Execution & Monitoring',
      description: 'We oversee day-to-day project activities with continuous monitoring and quality assurance.',
    },
    {
      step: 4,
      title: 'Closure & Handover',
      description: 'Final project review, documentation, and smooth transition to operational phase.',
    },
  ],
}

export default function ProjectManagement() {
  return <ServiceLayout {...projectManagementData} />
}
