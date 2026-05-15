export const projects = [
  {
    slug: 'uk-firm-profitability-analysis',
    title: 'UK Firm Profitability Analysis',
    description:
      'Econometric analysis of UK company profitability using Python and Stata, covering data cleaning, regression modelling, diagnostics, and business-focused recommendations.',
    image: '/analysis2.png',
    githubUrl: 'https://github.com/wlodzimierrr/econometrics',
    tags: ['Python', 'Stata', 'Econometrics', 'Data Analysis'],
  },
  {
    slug: 'ufc-fight-predictor-model',
    title: 'UFC Fight Predictor Model',
    description:
      'Machine learning project for predicting UFC fight outcomes using Python, PostgreSQL, feature engineering, leakage-safe validation, and model evaluation.',
    image: '/ufc2.png',
    githubUrl: 'https://github.com/wlodzimierrr/ufc-predictor',
    tags: ['Python', 'PostgreSQL', 'Machine Learning', 'Feature Engineering'],
  },
  {
    slug: 'ufc-analytics-dashboard',
    title: 'UFC Analytics Dashboard',
    description:
      'Power BI analytics dashboard for exploring UFC fighter performance, matchup statistics, trends, and model insights using structured fight data.',
    image: '/ufcanalytics.png',
    githubUrl: 'https://github.com/wlodzimierrr/ufc-dashboard',
    tags: ['Power BI', 'Data Visualisation', 'Sports Analytics'],
  },
  {
    slug: 'kubernetes-gitops-homelab-platform',
    title: 'Kubernetes GitOps Homelab Platform',
    description:
      'Self-hosted Kubernetes platform running on three Dell mini PCs with OPNsense routing, VLAN segmentation, k3s, GitOps deployment, and observability.',
    image: '/homelab.png',
    githubUrl: 'https://github.com/wlodzimierrr/homelab-infra',
    tags: ['Kubernetes', 'GitOps', 'DevOps', 'FastAPI', 'React'],
  },
  {
    slug: 'building-products-comparison-platform',
    title: 'Building Products Comparison Platform',
    description:
      'Product comparison platform for UK building materials with Python scrapers, PostgreSQL storage, Algolia search, Dockerised workflows, AWS automation, and monitoring.',
    image: '/compare.png',
    githubUrl: 'https://github.com/wlodzimierrr/CompareBuildingProducts_Scrapers',
    tags: ['Python', 'PostgreSQL', 'AWS', 'Docker', 'Next.js'],
  },
  {
    slug: 'ooni-strategic-management-report',
    title: 'Ooni Strategic Management Report',
    description:
      'University business strategy case study analysing Ooni’s competitive position, financial performance, supply-chain risk, recurring revenue opportunities, and implementation plan using strategic management frameworks.',
    image: '/business.png',
    githubUrl: 'https://github.com/wlodzimierrr/business_strategy',
    tags: ['Strategy', 'Business Analysis', 'Consulting', 'Management'],
  }
];

export type Project = (typeof projects)[number];
