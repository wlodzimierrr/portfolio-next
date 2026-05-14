export const projects = [
  {
    slug: 'uk-firm-profitability-analysis',
    title: 'UK Firm Profitability Analysis',
    description:
      'Econometric analysis of UK company profitability using Python and Stata, covering data cleaning, regression modelling, diagnostics, and business-focused recommendations.',
    image: '/analysis2.png',
    tags: ['Python', 'Stata', 'Econometrics', 'Data Analysis'],
  },
  {
    slug: 'ufc-fight-predictor-model',
    title: 'UFC Fight Predictor Model',
    description:
      'Machine learning project for predicting UFC fight outcomes using Python, PostgreSQL, feature engineering, leakage-safe validation, and model evaluation.',
    image: '/ufc2.png',
    tags: ['Python', 'PostgreSQL', 'Machine Learning', 'Feature Engineering'],
  },
  {
    slug: 'ufc-analytics-dashboard',
    title: 'UFC Analytics Dashboard',
    description:
      'Power BI analytics dashboard for exploring UFC fighter performance, matchup statistics, trends, and model insights using structured fight data.',
    image: '/ufcanalytics.png',
    tags: ['Power BI', 'Data Visualisation', 'Sports Analytics'],
  },
  {
    slug: 'kubernetes-gitops-homelab-platform',
    title: 'Kubernetes GitOps Homelab Platform',
    description:
      'Self-hosted Kubernetes platform running on three Dell mini PCs with OPNsense routing, VLAN segmentation, k3s, GitOps deployment, and observability.',
    image: '/homelab.png',
    tags: ['Kubernetes', 'GitOps', 'DevOps', 'FastAPI', 'React'],
  },
  {
    slug: 'building-products-comparison-platform',
    title: 'Building Products Comparison Platform',
    description:
      'Product comparison platform for UK building materials with Python scrapers, PostgreSQL storage, Algolia search, Dockerised workflows, AWS automation, and monitoring.',
    image: '/compare.png',
    tags: ['Python', 'PostgreSQL', 'AWS', 'Docker', 'Next.js'],
  },
  {
    slug: 'cloud-native-developer-portal',
    title: 'Cloud-Native Developer Portal',
    description:
      'Internal developer portal for services, deployments, logs, metrics, alerts, release traceability, and rollout actions across a GitOps-managed Kubernetes environment.',
    image: '/portal.png',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Observability'],
  },
];

export type Project = (typeof projects)[number];
