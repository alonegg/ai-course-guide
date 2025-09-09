export interface AITool {
  id: string;
  name: string;
  category: 'language' | 'vision' | 'audio' | 'agent';
  description: string;
  features: string[];
  link: string;
  icon: string;
  detailedDescription?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  tools: string[]; // AI工具ID数组
  examples: string[];
  painPoints: string[];
}

export interface PromptTemplate {
  role: string;
  goal: string;
  task: string;
  example?: string;
  output: string;
}

export interface GrowthStrategy {
  id: string;
  title: string;
  description: string;
  steps: string[];
  benefits: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}