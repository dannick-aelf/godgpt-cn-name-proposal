import type { Slide } from '../types/presentation.types';

export const slides: Slide[] = [
  // Slide 1: Title
  {
    id: 'title',
    type: 'title',
    title: 'GodGPT China Market: Research & Recommendation',
    content: {
      sections: [],
    },
    callouts: [
      {
        type: 'info',
        content: 'Board / Founder / Product decision brief',
      },
    ],
  },

  // Slide 2: Executive Summary
  {
    id: 'executive-summary',
    type: 'title',
    title: 'Executive Summary',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Recommendation: Do not enter China at this time',
            'Strategic fit score: 13/25 → Do not enter (threshold 15)',
            'Entry cost: ~$320k+; current China base: 38 paid subscribers',
            'To justify entry: ~67,000 paid subscribers in China would be required',
            'Engineering cost: 310–690 total hours (Frontend 110–230 hrs; Backend 200–460 hrs)',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'GodGPT is not currently profitable. Splitting into two apps would require allocating paid media budget and ongoing resources to run and maintain the China version.',
      },
    ],
  },

  // Slide 3: The Core Question
  {
    id: 'core-question',
    type: 'title',
    title: 'The Core Question',
    content: {
      sections: [
        {
          type: 'text',
          items: [
            'This is not "Can we launch in China?"',
            '',
            'It is: "Is the expected risk-adjusted return worth the regulatory, operational, and strategic constraints?"',
            '',
            'China is a separate operating environment: different app build, different name, different backend, different compliance and publisher expectations.',
          ],
        },
      ],
    },
  },

  // Slide 4: Strategic Fit Assessment
  {
    id: 'strategic-fit',
    type: 'title',
    title: 'Strategic Fit Assessment',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Strategic importance of China to company mission: 2/5',
            'Existing user/revenue base and growth potential: 3/5',
            'Ability to isolate China product and infrastructure: 3/5',
            'Willingness to accept content/feature restrictions: 3/5',
            'Long-term commitment to compliance, audits, and volatility: 2/5',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'Total: 13/25 → Do not enter (threshold 15)',
      },
    ],
  },

  // Slide 5: Regulatory Tolerance - Content Risk
  {
    id: 'regulatory-content',
    type: 'title',
    title: 'Regulatory Tolerance: Content Risk',
    content: {
      sections: [
        {
          type: 'text',
          title: 'Content Risk — High',
          items: [
            'Open-ended responses: Yes. GodGPT is conversational and reflective',
            'Current events: Possible depending on prompts and model behavior',
            'Political/social commentary: Spiritual wellness can border on sensitive topics',
            'Moderation would need to be strict and continuously updated',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'High compliance and moderation burden; ongoing content risk',
      },
    ],
  },

  // Slide 6: Regulatory Tolerance - Data Architecture
  {
    id: 'regulatory-data',
    type: 'title',
    title: 'Regulatory Tolerance: Data Architecture',
    content: {
      sections: [
        {
          type: 'text',
          title: 'Data Architecture Risk — Manageable at high cost',
          items: [
            'China user data fully isolated: Yes, if separate China backend (AliCloud/Tencent)',
            'Avoid cross-border transfer: Required; architecture must be designed for in-China only',
            'Separate moderation logs: Required for audits; adds operational and engineering cost',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'info',
        content: 'Feasible with 200–460 backend hours and ongoing ops, but cost is material',
      },
    ],
  },

  // Slide 7: Regulatory Tolerance - Operational Control
  {
    id: 'regulatory-operational',
    type: 'title',
    title: 'Regulatory Tolerance: Operational Control',
    content: {
      sections: [
        {
          type: 'text',
          title: 'Operational Control Risk — High',
          items: [
            'Publisher oversight: Likely required for App Store and local compliance',
            'Content audits: Must be accepted; may require disclosure of prompts/responses',
            'Sudden feature takedown: Real risk; AI and "spiritual" positioning are under scrutiny',
          ],
        },
      ],
    },
  },

  // Slide 8: Financial Model - Entry Cost
  {
    id: 'financial-entry',
    type: 'title',
    title: 'Financial Model: Entry Cost',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'One-time cost: ~$200k (duplicate app, China backend, compliance, localization, launch)',
            'Monthly burn (ramp): ~$20k',
            'Ramp period: 6 months or more before meaningful revenue',
            'Initial investment: $200k + ($20k × 6) ≈ $320k',
          ],
        },
      ],
    },
  },

  // Slide 9: Financial Model - Engineering Hours
  {
    id: 'financial-engineering',
    type: 'title',
    title: 'Financial Model: Engineering Hours',
    content: {
      sections: [
        {
          type: 'text',
          title: 'Total Engineering Hours Required',
          items: [
            'Frontend: 110–230 hours (Simplified Chinese localization, China-specific feature flags, remove/disable restricted features, privacy disclosures, ICP info, app name + metadata changes, environment config, testing)',
            'Backend: 200–460 hours (China cloud deployment, separate environment, data localization, content filtering, logging for audit compliance, moderation rules, domain + ICP alignment, DevOps + monitoring)',
            'Total: 310–690 engineering hours',
            '',
            'Delivery time: 1 Senior Full-Stack Engineer: ~8–17 weeks | Small team (2 engineers): ~4–9 weeks',
          ],
        },
      ],
    },
  },

  // Slide 10: Financial Model - Revenue Reality
  {
    id: 'financial-revenue',
    type: 'title',
    title: 'Financial Model: Revenue Reality',
    content: {
      sections: [
        {
          type: 'text',
          items: [
            'Assumptions: 30% Apple cut; 30% publisher rev share; effective retention ~49%',
            'Net per $10/month sub: ~$4.90',
            'Paid subscribers needed to reach $330k/year: 330,000 ÷ $4.90 ≈ 67,000 paid subscribers in China',
            'With 3% free-to-paid conversion rate: ~2.2 million active users in China would be required',
            '',
            'Current China base: 38 paid subscribers, $4,230 revenue',
            'Gap: From 38 to 67,000 paid subscribers is a ~1,760× increase',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'The financial model does not close at current or realistically projected scale',
      },
    ],
  },

  // Slide 11: Competitive Landscape
  {
    id: 'competitive',
    type: 'title',
    title: 'Competitive Landscape',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Local AI and "wellness" / spiritual apps already exist',
            'Some benefit from state alignment or ecosystem integration',
            'Regulatory and naming constraints (e.g. no "GPT" in app name) favor local players',
            'GodGPT\'s differentiation would need to be preserved under stricter content limits',
            'Possible feature cuts (e.g. open-ended current-events or sensitive themes)',
            'A new, China-only brand name and positioning would be required',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'info',
        content: 'Can GodGPT compete in China without open-ended knowledge, Western brand, and full global feature set?',
      },
    ],
  },

  // Slide 12: Entry Strategy Decision Matrix
  {
    id: 'decision-matrix',
    type: 'title',
    title: 'Entry Strategy Decision Matrix',
    content: {
      sections: [
        {
          type: 'text',
          title: 'Enter China (name change + duplicate app)',
          items: [
            'Upfront cost: ~$320k+',
            'Ongoing cost: Dual app, dual backend, compliance, audits',
            'Regulatory risk: High (AI, content, policy changes)',
            'Product integrity: Filtered, possibly restricted product',
            'Opportunity cost: 310-690 eng hours + ongoing paid media and ops',
          ],
        },
        {
          type: 'text',
          title: 'Exclude China (retain "GodGPT", invest elsewhere)',
          items: [
            'Upfront cost: $0',
            'Ongoing cost: None China-specific',
            'Regulatory risk: None in China',
            'Product integrity: Single global product',
            'Opportunity cost: Same hours and budget available for profit-making apps',
          ],
        },
      ],
    },
  },

  // Slide 13: Final Decision Filter
  {
    id: 'final-decision',
    type: 'title',
    title: 'Final Decision Filter',
    content: {
      sections: [
        {
          type: 'text',
          title: 'Enter China only if all of the following hold:',
          items: [
            '1. China infra can be fully isolated',
            '2. A filtered/restricted model and feature set are acceptable',
            '3. Sudden feature removal or takedown is acceptable',
            '4. There is a credible path to >70k paid subscribers in China',
            '5. The company accepts ongoing regulatory unpredictability and compliance burden',
          ],
        },
      ],
    },
    callouts: [
      {
        type: 'warning',
        content: 'Assessment: At least one critical condition fails. Do not enter.',
      },
    ],
  },

  // Slide 14: Recommendation
  {
    id: 'recommendation',
    type: 'title',
    title: 'Recommendation',
    content: {
      sections: [
        {
          type: 'text',
          items: [
            'Do not move forward with China as a market under the current strategy',
            '',
            'Retain the global app name "GodGPT" and choose Option B with Apple: resubmit the app excluding the China region from distribution',
            '',
            'Treat the ~$4,230 foregone China revenue as an acceptable loss in exchange for:',
            '• No China-specific build or compliance cost',
            '• No dual-app and dual-backend burden (310–690 dev hours retained)',
            '• No allocation of paid media budget or ongoing resources to run and maintain a China version',
            '• Full engineering and budget focus on profit-making apps and on making global GodGPT sustainable',
          ],
        },
      ],
    },
  },

  // Slide 15: Strategic Stance
  {
    id: 'strategic-stance',
    type: 'title',
    title: 'Strategic Stance',
    content: {
      sections: [
        {
          type: 'text',
          items: [
            'China remains a market on our mind',
            '',
            'Given current strict regulations on Western AI apps and the fact that GodGPT is not yet profitable, the better business decision is to:',
            '• Observe the China market first',
            '• Invest in our profit-making apps to strengthen the portfolio',
            '• When regulatory and economic conditions are more favorable, revisit expanding into China with a dedicated strategy and resources',
          ],
        },
      ],
    },
  },

  // Slide 16: Next Steps
  {
    id: 'next-steps',
    type: 'title',
    title: 'Next Steps',
    content: {
      sections: [
        {
          type: 'bullet-list',
          items: [
            'Product / Legal: Confirm with Apple the exact resubmission steps to exclude China while keeping the current app name and global distribution',
            'Finance: Book the ~$4,230 as foregone revenue and ensure it is reflected in forecasts; no China entry cost in P&L',
            'Strategy: Document "China out of scope for current planning horizon" and revisit only if strategic fit and regulatory tolerance are re-scored and reach ≥15 and "acceptable" respectively',
            'Product / Engineering: Allocate the 310–690 hours (Frontend 110–230, Backend 200–460) and associated budget to new / profit-making apps (priority) and global GodGPT: retention, conversion, and path to profitability',
          ],
        },
      ],
    },
  },

  // Slide 17: One-Page Summary
  {
    id: 'one-page-summary',
    type: 'summary',
    title: 'One-Page Summary for Board',
    content: {
      sections: [
        {
          type: 'comparison',
          items: [],
        },
      ],
    },
  },

  // Slide 18: Thank You
  {
    id: 'thank-you',
    type: 'title',
    title: 'Thank You',
    content: {
      sections: [],
    },
  },
];
