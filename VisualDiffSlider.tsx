import { FeatureItem, TestResult } from '../types';

export const INITIAL_TEST_REPORTS: TestResult[] = [
  {
    id: "VTEST-SAMPLE-01",
    url: "https://example.com",
    device: "desktop",
    testDate: "2026-07-21T10:15:00Z",
    uiScore: 92,
    uxScore: 90,
    performanceScore: 94,
    accessibilityScore: 96,
    responsiveScore: 95,
    overallStatus: "Excellent",
    colorContrastStatus: "Good",
    typographyStatus: "Good",
    navigationStatus: "Good",
    summary: "High visual consistency with compliant WCAG 2.1 AA color contrast and mathematically balanced typographic scale. All interactive elements provide visible focus outlines.",
    keyFindings: [
      {
        id: "f1",
        category: "UI Design",
        severity: "pass",
        title: "Clean Grid Alignment & Padding Math",
        description: "Child elements follow mathematical padding rules (inner padding <= outer padding) across primary layout blocks.",
        recommendation: "Maintain the 16px spatial grid unit across upcoming design iterations."
      },
      {
        id: "f2",
        category: "UX Evaluation",
        severity: "pass",
        title: "Clear Call-to-Action Hierarchy",
        description: "Primary CTA button uses high visual weight with 7.2:1 contrast against background canvas.",
        recommendation: "Ensure secondary actions maintain subtle contrast without competing for visual attention."
      },
      {
        id: "f3",
        category: "Color Contrast",
        severity: "pass",
        title: "WCAG 2.1 AA Compliant Palette",
        description: "All body text elements pass minimum 4.5:1 contrast requirement for maximum readability.",
        recommendation: "Keep contrast ratio above 7:1 for enhanced outdoor low-brightness viewing."
      },
      {
        id: "f4",
        category: "Typography",
        severity: "pass",
        title: "Structured Heading Scale",
        description: "Heading tags (H1 through H4) follow a 1.25 modular scale with optical line-height ratios.",
        recommendation: "Limit paragraph line lengths to 70 characters for optimal reading ergonomics."
      },
      {
        id: "f5",
        category: "Responsive Design",
        severity: "warning",
        title: "Mobile Touch Target Optimization",
        description: "Two secondary navigation links have touch hit targets under 40px on mobile screens.",
        recommendation: "Increase minimum tap target dimensions to 44px x 44px on viewport widths < 640px."
      }
    ],
    visualDiffs: [
      {
        element: "Primary Navbar Heights",
        standard: "64px baseline standard",
        detected: "64px (0px pixel drift)",
        score: 100
      },
      {
        element: "CTA Button Focus State Outline",
        standard: "2px solid blue outline",
        detected: "2px offset outline present",
        score: 98
      },
      {
        element: "Card Border Radius Nesting",
        standard: "Outer 16px / Inner 8px",
        detected: "Outer 16px / Inner 8px (Exact Match)",
        score: 96
      },
      {
        element: "Hero Subtitle Line Height",
        standard: "1.6 ratio (28px)",
        detected: "1.5 ratio (26px)",
        score: 91
      }
    ]
  },
  {
    id: "VTEST-SAMPLE-02",
    url: "https://stripe.com",
    device: "desktop",
    testDate: "2026-07-20T14:30:00Z",
    uiScore: 96,
    uxScore: 94,
    performanceScore: 91,
    accessibilityScore: 92,
    responsiveScore: 98,
    overallStatus: "Excellent",
    colorContrastStatus: "Optimal",
    typographyStatus: "Compliant",
    navigationStatus: "Intuitive",
    summary: "World-class visual polish with fluid gradient balance, instant responsive breakpoints, and tactile interactive micro-animations.",
    keyFindings: [
      {
        id: "f21",
        category: "UI Design",
        severity: "pass",
        title: "Pixel-Perfect Layout Precision",
        description: "Zero visual alignment shift detected across high-density retina viewports.",
        recommendation: "Continue preserving crisp vector SVG assets."
      },
      {
        id: "f22",
        category: "Accessibility",
        severity: "pass",
        title: "ARIA Labels & Focus Traps",
        description: "Interactive dropdown menus correctly manage keyboard navigation and aria-expanded attributes.",
        recommendation: "Ensure screen reader announcement for live status region."
      }
    ],
    visualDiffs: [
      {
        element: "Hero Gradient Mesh",
        standard: "Smooth color transition",
        detected: "GPU Hardware Accelerated",
        score: 99
      },
      {
        element: "Footer Column Alignment",
        standard: "Grid 4-column balanced",
        detected: "Balanced 4-column span",
        score: 97
      }
    ]
  }
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: "feat-1",
    title: "UI Design Check",
    category: "ui",
    description: "Evaluates layout balance, grid spacing math, padding consistency, and visual hierarchy across all rendered DOM nodes.",
    iconName: "Layout",
    metrics: ["Spacing Uniformity", "Grid Alignment", "Visual Balance Score"],
    sampleDiff: "16px padding verified (0px alignment deviation)"
  },
  {
    id: "feat-2",
    title: "UX Evaluation",
    category: "ux",
    description: "Measures navigation simplicity, visual noise level, interactive touch target sizes, and cognitive load indicators.",
    iconName: "UserCheck",
    metrics: ["Navigation Clarity", "Click Target Dimensions", "Friction Index"],
    sampleDiff: "Touch targets meet > 44px WCAG mobile standard"
  },
  {
    id: "feat-3",
    title: "Responsive Design Testing",
    category: "responsive",
    description: "Simulates viewports for Mobile (375px), Tablet (768px), and Desktop (1920px) to spot text clipping, overlap, or unexpected overflow.",
    iconName: "Smartphone",
    metrics: ["Fluid Breakpoints", "Zero Horizontal Overflow", "Media Query Fit"],
    sampleDiff: "Passed test on 3 device viewports"
  },
  {
    id: "feat-4",
    title: "Color Contrast Analysis",
    category: "accessibility",
    description: "Scans foreground text against background colors to calculate contrast ratios per WCAG 2.1 AA (4.5:1) & AAA (7:1) guidelines.",
    iconName: "Palette",
    metrics: ["Text-to-Background Ratio", "WCAG AA Pass/Fail", "Color Blindness Check"],
    sampleDiff: "Primary text ratio: 8.5:1 (Passed AA/AAA)"
  },
  {
    id: "feat-5",
    title: "Typography Check",
    category: "ui",
    description: "Validates font family availability, line-height proportions, font-weight scales, and characters per line limit.",
    iconName: "Type",
    metrics: ["Modular Scale Ratio", "Line-height Ergonomics", "Tracking & Spacing"],
    sampleDiff: "Heading scale ratio: 1.25 (Major Third)"
  },
  {
    id: "feat-6",
    title: "Button & Navigation Testing",
    category: "ux",
    description: "Checks button hover states, active press visual feedback, link integrity, and focused outline accessibility.",
    iconName: "MousePointerClick",
    metrics: ["Hover State Response", "Focus Outline Visible", "Dead Link Audit"],
    sampleDiff: "100% interactive elements feature visible focus rings"
  },
  {
    id: "feat-7",
    title: "Accessibility Check",
    category: "accessibility",
    description: "Performs full DOM inspection for missing image ALT text, unlabelled ARIA roles, header level jumping, and screen reader readiness.",
    iconName: "EyeCheck",
    metrics: ["ARIA Attributes", "Image ALT Text Coverage", "Semantic HTML Score"],
    sampleDiff: "Passed 24 automated WCAG a11y checks"
  },
  {
    id: "feat-8",
    title: "Screenshot Comparison",
    category: "ui",
    description: "Generates high-resolution viewport screenshots and compares them against baseline visual reference images.",
    iconName: "ImageCompare",
    metrics: ["Pixel Overlay Alignment", "Baseline vs Target", "Visual Drift Margin"],
    sampleDiff: "99.4% pixel structural similarity score"
  },
  {
    id: "feat-9",
    title: "Visual Difference Detection",
    category: "ui",
    description: "Highlights pixel deviations using color heatmaps and red bounding boxes so designers can instantly spot UI regressions.",
    iconName: "Sparkles",
    metrics: ["Pixel Heatmap Delta", "Layout Displacement", "Threshold Control"],
    sampleDiff: "2 minor pixel shifts detected in header badge"
  },
  {
    id: "feat-10",
    title: "Test Report Generation",
    category: "ux",
    description: "Compiles comprehensive executive test summaries with visual metric charts, audit findings, and exportable PDF reports.",
    iconName: "FileSpreadsheet",
    metrics: ["Executive Summary", "PDF Document Export", "Historical Trend Chart"],
    sampleDiff: "Instant printable / exportable PDF generated"
  }
];

export const PRESET_TEST_URLS = [
  { name: "Example.com (Simple Clean Site)", url: "https://example.com" },
  { name: "Stripe.com (Fintech & UI Design)", url: "https://stripe.com" },
  { name: "Tailwind CSS (Docs & Utility UI)", url: "https://tailwindcss.com" },
  { name: "React.dev (Tech Documentation)", url: "https://react.dev" },
  { name: "GitHub.com (Developer Platform)", url: "https://github.com" }
];
