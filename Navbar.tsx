export type Page = 'home' | 'about' | 'features' | 'visual-testing' | 'test-report' | 'contact';

export type DeviceType = 'desktop' | 'tablet' | 'mobile';

export type Severity = 'pass' | 'warning' | 'critical';

export interface AuditFinding {
  id: string;
  category: string;
  severity: Severity;
  title: string;
  description: string;
  recommendation: string;
}

export interface VisualDiffItem {
  element: string;
  standard: string;
  detected: string;
  score: number;
}

export interface TestResult {
  id: string;
  url: string;
  device: DeviceType;
  testDate: string;
  uiScore: number;
  uxScore: number;
  performanceScore: number;
  accessibilityScore: number;
  responsiveScore: number;
  overallStatus: 'Excellent' | 'Good' | 'Needs Improvement';
  colorContrastStatus: 'Good' | 'Optimal' | 'Needs Adjustment';
  typographyStatus: 'Good' | 'Compliant' | 'Inconsistent Hierarchy';
  navigationStatus: 'Good' | 'Intuitive' | 'Requires Optimization';
  summary: string;
  keyFindings: AuditFinding[];
  visualDiffs: VisualDiffItem[];
}

export interface FeatureItem {
  id: string;
  title: string;
  category: 'ui' | 'ux' | 'responsive' | 'accessibility';
  description: string;
  iconName: string;
  metrics: string[];
  sampleDiff: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
