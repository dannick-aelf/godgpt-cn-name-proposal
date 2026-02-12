import React from 'react';
import type { Slide } from '../types/presentation.types';
import type { Language } from '../contexts/LanguageContext';
import { 
  Question, 
  WarningCircle, 
  Database, 
  ShieldWarning, 
  CurrencyDollar, 
  Clock, 
  Users, 
  XCircle, 
  CheckCircle, 
  FileText, 
  Target,
  Eye,
  ArrowRight,
  Check,
  Warning,
  TrendDown,
  TrendUp,
  Lock,
  Globe,
  Buildings,
  Code,
  Money,
  Calculator,
  UserCircle,
  ChartBar,
  ChartLine
} from 'phosphor-react';

export const getSlides = (language: Language): Slide[] => {
  const isEnglish = language === 'en';

  return [
    // Slide 1: Title
    {
      id: 'title',
      type: 'title',
      title: isEnglish 
        ? 'GodGPT China Market: Research & Recommendation'
        : 'GodGPT中国市场：研究与建议',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish 
            ? 'Board / Founder / Product decision brief'
            : '董事会/创始人/产品决策简报',
          icon: React.createElement(FileText, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
      ],
    },

    // Slide 2: Executive Summary
    {
      id: 'executive-summary',
      type: 'title',
      title: isEnglish ? 'Executive Summary' : '执行摘要',
      content: {
        sections: [
          {
            type: 'bullet-list',
            icon: React.createElement(FileText, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            items: isEnglish ? [
              'Recommendation: Do not enter China at this time',
              'Strategic fit score: 13/25 → Do not enter (threshold 15)',
              'Entry cost: ~$320k+; current China base: 38 paid subscribers',
              'To justify entry: ~67,000 paid subscribers in China would be required',
              'Engineering cost: 310–690 total hours (Frontend 110–230 hrs; Backend 200–460 hrs)',
            ] : [
              '建议：此时不进入中国',
              '战略契合度得分：13/25 → 不进入（阈值15）',
              '进入成本：约$320k+；当前中国基数：38个付费订阅者',
              '为证明进入合理性：需要约67,000个中国付费订阅者',
              '工程成本：总计310–690小时（前端110–230小时；后端200–460小时）',
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'warning',
          content: isEnglish
            ? 'GodGPT is not currently profitable. Splitting into two apps would require allocating paid media budget and ongoing resources to run and maintain the China version.'
            : 'GodGPT目前尚未盈利。拆分为两个应用需要分配付费媒体预算和持续资源来运营和维护中国版本。',
          icon: React.createElement(TrendDown, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 3: The Core Question
    {
      id: 'core-question',
      type: 'title',
      title: isEnglish ? 'The Core Question' : '核心问题',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'This is not "Can we launch in China?"'
            : '这不是"我们能否在中国推出？"',
          icon: React.createElement(XCircle, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'emphasis',
          content: isEnglish
            ? 'It is: "Is the expected risk-adjusted return worth the regulatory, operational, and strategic constraints?"'
            : '而是："预期的风险调整回报是否值得监管、运营和战略约束？"',
          icon: React.createElement(Question, { size: 20, weight: "regular", className: "text-[#ececec]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'China is a separate operating environment: different app build, different name, different backend, different compliance and publisher expectations.'
            : '中国是一个独立的运营环境：不同的应用构建、不同的名称、不同的后端、不同的合规和发布商期望。',
          icon: React.createElement(Globe, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'This is a strategic business decision, not a technical feasibility question'
            : '这是一个战略商业决策，而不是技术可行性问题',
          icon: React.createElement(Target, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
      ],
    },

    // Slide 4: Strategic Fit Assessment
    {
      id: 'strategic-fit',
      type: 'title',
      title: isEnglish ? 'Strategic Fit Assessment' : '战略契合度评估',
      content: {
        sections: [
          {
            type: 'chart',
            chartType: 'horizontal-bar',
            icon: React.createElement(Target, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            chartData: isEnglish ? [
              { name: 'Strategic importance to mission', value: 2, color: '#ff6b6b' },
              { name: 'User/revenue base & growth', value: 3, color: '#ffa500' },
              { name: 'Ability to isolate infrastructure', value: 3, color: '#ffa500' },
              { name: 'Willingness to accept restrictions', value: 3, color: '#ffa500' },
              { name: 'Long-term compliance commitment', value: 2, color: '#ff6b6b' },
            ] : [
              { name: '对使命的战略重要性', value: 2, color: '#ff6b6b' },
              { name: '用户/收入基数与增长', value: 3, color: '#ffa500' },
              { name: '隔离基础设施的能力', value: 3, color: '#ffa500' },
              { name: '接受限制的意愿', value: 3, color: '#ffa500' },
              { name: '长期合规承诺', value: 2, color: '#ff6b6b' },
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'warning',
          content: isEnglish
            ? 'Total: 13/25 → Do not enter (threshold 15)'
            : '总计：13/25 → 不进入（阈值15）',
          icon: React.createElement(XCircle, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 5: Regulatory Tolerance - Content Risk
    {
      id: 'regulatory-content',
      type: 'title',
      title: isEnglish ? 'Regulatory Tolerance: Content Risk — High' : '监管容忍度：内容风险 — 高',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'warning',
          content: isEnglish
            ? 'Open-ended responses: Yes. GodGPT is conversational and reflective'
            : '开放式回应：是。GodGPT是对话式和反思性的',
          icon: React.createElement(WarningCircle, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Current events: Possible depending on prompts and model behavior'
            : '时事：可能取决于提示和模型行为',
          icon: React.createElement(Globe, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Political/social commentary: Spiritual wellness can border on sensitive topics'
            : '政治/社会评论：精神健康可能涉及敏感话题',
          icon: React.createElement(ShieldWarning, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Moderation would need to be strict and continuously updated'
            : '审核需要严格并持续更新',
          icon: React.createElement(Lock, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'High compliance and moderation burden; ongoing content risk'
            : '高合规和审核负担；持续的内容风险',
          icon: React.createElement(Warning, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 6: Regulatory Tolerance - Data Architecture
    {
      id: 'regulatory-data',
      type: 'title',
      title: isEnglish ? 'Regulatory Tolerance: Data Architecture — Manageable at high cost' : '监管容忍度：数据架构 — 高成本下可管理',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'China user data fully isolated: Yes, if separate China backend (AliCloud/Tencent)'
            : '中国用户数据完全隔离：是，如果使用独立中国后端（阿里云/腾讯云）',
          icon: React.createElement(Database, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Avoid cross-border transfer: Required; architecture must be designed for in-China only'
            : '避免跨境传输：必需；架构必须设计为仅在中国境内',
          icon: React.createElement(Lock, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Separate moderation logs: Required for audits; adds operational and engineering cost'
            : '独立审核日志：审计必需；增加运营和工程成本',
          icon: React.createElement(FileText, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Feasible with 200–460 backend hours and ongoing ops, but cost is material'
            : '通过200–460后端小时和持续运营可行，但成本重大',
          icon: React.createElement(Money, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 7: Regulatory Tolerance - Operational Control
    {
      id: 'regulatory-operational',
      type: 'title',
      title: isEnglish ? 'Regulatory Tolerance: Operational Control — High' : '监管容忍度：运营控制 — 高',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'warning',
          content: isEnglish
            ? 'Publisher oversight: Likely required for App Store and local compliance'
            : '发布商监督：可能需要在App Store和本地合规方面',
          icon: React.createElement(Buildings, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Content audits: Must be accepted; may require disclosure of prompts/responses'
            : '内容审计：必须接受；可能需要披露提示/回应',
          icon: React.createElement(ShieldWarning, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Sudden feature takedown: Real risk; AI and "spiritual" positioning are under scrutiny'
            : '突然功能下架：真实风险；AI和"精神"定位受到审查',
          icon: React.createElement(WarningCircle, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 8: Financial Model - Entry Cost
    {
      id: 'financial-entry',
      type: 'title',
      title: isEnglish ? 'Financial Model: Entry Cost' : '财务模型：进入成本',
      content: {
        sections: [
          {
            type: 'chart',
            chartType: 'bar',
            icon: React.createElement(CurrencyDollar, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            chartData: isEnglish ? [
              { name: 'One-time Cost', value: 200, color: '#ff6b6b' },
              { name: '6-Month Ramp', value: 120, color: '#ffa500' },
              { name: 'Total Investment', value: 320, color: '#ff4444' },
            ] : [
              { name: '一次性成本', value: 200, color: '#ff6b6b' },
              { name: '6个月增长期', value: 120, color: '#ffa500' },
              { name: '总投资', value: 320, color: '#ff4444' },
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'warning',
          content: isEnglish
            ? 'Initial investment: $200k (one-time) + $120k (6-month ramp) = $320k total'
            : '初始投资：$200k（一次性）+ $120k（6个月增长期）= 总计$320k',
          icon: React.createElement(CurrencyDollar, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 9: Financial Model - Engineering Hours
    {
      id: 'financial-engineering',
      type: 'title',
      title: isEnglish ? 'Financial Model: Engineering Hours' : '财务模型：工程小时',
      content: {
        sections: [
          {
            type: 'chart',
            chartType: 'pie',
            icon: React.createElement(Code, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            chartData: isEnglish ? [
              { name: 'Frontend (110-230h)', value: 170, color: '#5755EE' },
              { name: 'Backend (200-460h)', value: 330, color: '#ff6b6b' },
            ] : [
              { name: '前端 (110-230小时)', value: 170, color: '#5755EE' },
              { name: '后端 (200-460小时)', value: 330, color: '#ff6b6b' },
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'Total: 310–690 engineering hours'
            : '总计：310–690工程小时',
          icon: React.createElement(Code, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Delivery time: 1 Senior Full-Stack Engineer: ~8–17 weeks | Small team (2 engineers): ~4–9 weeks'
            : '交付时间：1名高级全栈工程师：约8–17周 | 小团队（2名工程师）：约4–9周',
          icon: React.createElement(Clock, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'This engineering effort would be diverted from global GodGPT improvements and new profit-making apps'
            : '这些工程工作将从全球GodGPT改进和新盈利应用中转移',
          icon: React.createElement(TrendDown, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 10: Financial Model - Revenue Reality
    {
      id: 'financial-revenue',
      type: 'title',
      title: isEnglish ? 'Financial Model: Revenue Reality' : '财务模型：收入现实',
      content: {
        sections: [
          {
            type: 'chart',
            chartType: 'bar',
            icon: React.createElement(ChartBar, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            chartData: isEnglish ? [
              { name: 'Current Base', value: 38, color: '#5755EE' },
              { name: 'Required', value: 67000, color: '#ff6b6b' },
            ] : [
              { name: '当前基数', value: 38, color: '#5755EE' },
              { name: '所需数量', value: 67000, color: '#ff6b6b' },
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'Net per $10/month sub: ~$4.90'
            : '每个$10/月订阅的净收入：约$4.90',
          icon: React.createElement(Calculator, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Required: 67,000 paid subscribers to justify $320k entry cost'
            : '所需：67,000个付费订阅者以证明$320k进入成本合理',
          icon: React.createElement(Users, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Current: 38 paid subscribers'
            : '当前：38个付费订阅者',
          icon: React.createElement(UserCircle, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Gap: ~1,760× increase needed'
            : '差距：需要约1,760倍增长',
          icon: React.createElement(TrendUp, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'The financial model does not close at current or realistically projected scale'
            : '财务模型在当前或现实预测规模下不成立',
          icon: React.createElement(XCircle, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 11: Competitive Landscape
    {
      id: 'competitive',
      type: 'title',
      title: isEnglish ? 'Competitive Landscape' : '竞争格局',
      content: {
        sections: [
          {
            type: 'bullet-list',
            icon: React.createElement(Users, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            items: isEnglish ? [
              'Local AI and "wellness" / spiritual apps already exist',
              'Some benefit from state alignment or ecosystem integration',
              'Regulatory and naming constraints (e.g. no "GPT" in app name) favor local players',
              'GodGPT\'s differentiation would need to be preserved under stricter content limits',
              'Possible feature cuts (e.g. open-ended current-events or sensitive themes)',
              'A new, China-only brand name and positioning would be required',
            ] : [
              '本地AI和"健康"/精神应用已经存在',
              '一些受益于国家对齐或生态系统整合',
              '监管和命名约束（例如应用名称中不能有"GPT"）有利于本地玩家',
              'GodGPT的差异化需要在更严格的内容限制下保持',
              '可能的功能削减（例如开放式时事或敏感主题）',
              '需要新的、仅限中国的品牌名称和定位',
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'warning',
          content: isEnglish
            ? 'GodGPT\'s core differentiation (open-ended, reflective AI) would be compromised under China\'s content restrictions'
            : 'GodGPT的核心差异化（开放式、反思性AI）将在中国的内容限制下受到损害',
          icon: React.createElement(ShieldWarning, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Can GodGPT compete in China without open-ended knowledge, Western brand, and full global feature set?'
            : 'GodGPT能否在没有开放式知识、西方品牌和完整全球功能集的情况下在中国竞争？',
          icon: React.createElement(Question, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
      ],
    },

    // Slide 12: Entry Strategy Decision Matrix
    {
      id: 'decision-matrix',
      type: 'title',
      title: isEnglish ? 'Entry Strategy Decision Matrix' : '进入战略决策矩阵',
      content: {
        sections: [
          {
            type: 'chart',
            chartType: 'comparison',
            icon: React.createElement(ChartLine, { size: 20, weight: "regular", className: "text-[#5755EE]" }),
            chartData: isEnglish ? [
              { name: 'Upfront Cost ($k)', enter: 320, exclude: 0 },
              { name: 'Ongoing Cost ($k/yr)', enter: 120, exclude: 0 },
              { name: 'Regulatory Risk (1-5)', enter: 5, exclude: 1 },
              { name: 'Eng Hours (hundreds)', enter: 5, exclude: 0 },
            ] : [
              { name: '前期成本 ($k)', enter: 320, exclude: 0 },
              { name: '持续成本 ($k/年)', enter: 120, exclude: 0 },
              { name: '监管风险 (1-5)', enter: 5, exclude: 1 },
              { name: '工程小时 (百)', enter: 5, exclude: 0 },
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'emphasis',
          content: isEnglish
            ? 'Excluding China avoids large fixed cost, limits regulatory exposure, and keeps focus on higher-ROI uses of capital and engineering'
            : '排除中国避免了大量固定成本，限制了监管风险，并将重点放在资本和工程的高投资回报率用途上',
          icon: React.createElement(CheckCircle, { size: 20, weight: "regular", className: "text-[#ececec]" }),
        },
      ],
    },

    // Slide 13: Final Decision Filter
    {
      id: 'final-decision',
      type: 'title',
      title: isEnglish ? 'Final Decision Filter' : '最终决策过滤器',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'Enter China only if all of the following hold:'
            : '只有在以下所有条件都满足时才进入中国：',
          icon: React.createElement(Check, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '1. China infra can be fully isolated'
            : '1. 中国基础设施可以完全隔离',
          icon: React.createElement(Database, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '2. A filtered/restricted model and feature set are acceptable'
            : '2. 过滤/受限的模型和功能集是可接受的',
          icon: React.createElement(Lock, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '3. Sudden feature removal or takedown is acceptable'
            : '3. 突然的功能移除或下架是可接受的',
          icon: React.createElement(WarningCircle, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '4. There is a credible path to >70k paid subscribers in China'
            : '4. 在中国有可信的路径达到>70k付费订阅者',
          icon: React.createElement(Users, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '5. The company accepts ongoing regulatory unpredictability and compliance burden'
            : '5. 公司接受持续的监管不可预测性和合规负担',
          icon: React.createElement(ShieldWarning, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'warning',
          content: isEnglish
            ? 'Assessment: At least one critical condition fails. Do not enter.'
            : '评估：至少一个关键条件失败。不进入。',
          icon: React.createElement(XCircle, { size: 20, weight: "regular", className: "text-[#ff6b6b]" }),
        },
      ],
    },

    // Slide 14: Recommendation
    {
      id: 'recommendation',
      type: 'title',
      title: isEnglish ? 'Recommendation' : '建议',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'emphasis',
          content: isEnglish
            ? 'Do not move forward with China as a market under the current strategy'
            : '在当前战略下不将中国作为市场推进',
          icon: React.createElement(XCircle, { size: 20, weight: "regular", className: "text-[#ececec]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Retain the global app name "GodGPT" and choose Option B with Apple: resubmit the app excluding the China region from distribution'
            : '保留全球应用名称"GodGPT"，并选择与苹果的选项B：重新提交应用，从分发中排除中国地区',
          icon: React.createElement(CheckCircle, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Treat the ~$4,230 foregone China revenue as an acceptable loss in exchange for:'
            : '将约$4,230的损失中国收入视为可接受的损失，以换取：',
          icon: React.createElement(Money, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• No China-specific build or compliance cost'
            : '• 无中国特定构建或合规成本',
          icon: React.createElement(Code, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• No dual-app and dual-backend burden (310–690 dev hours retained)'
            : '• 无双应用和双后端负担（保留310–690开发小时）',
          icon: React.createElement(Clock, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• No allocation of paid media budget or ongoing resources to run and maintain a China version'
            : '• 不分配付费媒体预算或持续资源来运营和维护中国版本',
          icon: React.createElement(ChartBar, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• Full engineering and budget focus on profit-making apps and on making global GodGPT sustainable'
            : '• 将工程和预算完全专注于盈利应用和使全球GodGPT可持续发展',
          icon: React.createElement(Target, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'emphasis',
          content: isEnglish
            ? 'The $4,230 "loss" is small relative to the $320k+ entry cost and the value of focusing on profit-making apps'
            : '$4,230的"损失"相对于$320k+的进入成本和专注于盈利应用的价值来说很小',
          icon: React.createElement(ChartLine, { size: 20, weight: "regular", className: "text-[#ececec]" }),
        },
      ],
    },

    // Slide 15: Strategic Stance
    {
      id: 'strategic-stance',
      type: 'title',
      title: isEnglish ? 'Strategic Stance' : '战略立场',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'China remains a market on our mind'
            : '中国仍然是我们关注的市场',
          icon: React.createElement(Globe, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Given current strict regulations on Western AI apps and the fact that GodGPT is not yet profitable, the better business decision is to:'
            : '鉴于当前对西方AI应用的严格监管以及GodGPT尚未盈利的事实，更好的商业决策是：',
          icon: React.createElement(ChartLine, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• Observe the China market first'
            : '• 首先观察中国市场',
          icon: React.createElement(Eye, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• Invest in our profit-making apps to strengthen the portfolio'
            : '• 投资我们的盈利应用以加强投资组合',
          icon: React.createElement(TrendUp, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? '• When regulatory and economic conditions are more favorable, revisit expanding into China with a dedicated strategy and resources'
            : '• 当监管和经济条件更加有利时，用专门的战略和资源重新考虑扩展到中国',
          icon: React.createElement(ArrowRight, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
      ],
    },

    // Slide 16: Next Steps
    {
      id: 'next-steps',
      type: 'title',
      title: isEnglish ? 'Next Steps' : '下一步',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: isEnglish
            ? 'Product / Legal: Confirm with Apple the exact resubmission steps to exclude China while keeping the current app name and global distribution'
            : '产品/法律：与苹果确认确切的重新提交步骤，以排除中国，同时保留当前应用名称和全球分发',
          icon: React.createElement(FileText, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Finance: Book the ~$4,230 as foregone revenue and ensure it is reflected in forecasts; no China entry cost in P&L'
            : '财务：将约$4,230记为损失收入，并确保反映在预测中；P&L中无中国进入成本',
          icon: React.createElement(Calculator, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Strategy: Document "China out of scope for current planning horizon" and revisit only if strategic fit and regulatory tolerance are re-scored and reach ≥15 and "acceptable" respectively'
            : '战略：记录"中国在当前规划范围内不在范围内"，只有在战略契合度和监管容忍度重新评分并分别达到≥15和"可接受"时才重新考虑',
          icon: React.createElement(Target, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
        {
          type: 'info',
          content: isEnglish
            ? 'Product / Engineering: Allocate the 310–690 hours (Frontend 110–230, Backend 200–460) and associated budget to new / profit-making apps (priority) and global GodGPT: retention, conversion, and path to profitability'
            : '产品/工程：将310–690小时（前端110–230，后端200–460）和相关预算分配给新/盈利应用（优先）和全球GodGPT：留存、转化和盈利路径',
          icon: React.createElement(Code, { size: 20, weight: "regular", className: "text-[#9b9b9b]" }),
        },
      ],
    },

    // Slide 17: One-Page Summary
    {
      id: 'one-page-summary',
      type: 'summary',
      title: isEnglish ? 'One-Page Summary for Board' : '董事会一页摘要',
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
      title: isEnglish ? 'Thank You' : '谢谢',
      content: {
        sections: [],
      },
    },
  ];
};
