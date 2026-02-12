import React from 'react';

// Warning words and phrases that should be highlighted in light red
const WARNING_PATTERNS = [
  // English patterns
  /\b(high|High|HIGH)\b/g,
  /\b(risk|Risk|RISK)\b/g,
  /\b(warning|Warning|WARNING)\b/g,
  /\b(critical|Critical|CRITICAL)\b/g,
  /\b(danger|Danger|DANGER)\b/g,
  /\b(fail|Fail|FAIL|fails|Fails|FAILS|failed|Failed|FAILED)\b/g,
  /\b(not profitable|not yet profitable)\b/gi,
  /\b(do not enter|Do not enter)\b/gi,
  /\b(not acceptable|not acceptable)\b/gi,
  /\b(volatility|Volatility)\b/g,
  /\b(unpredictability|Unpredictability)\b/g,
  /\b(takedown|Takedown|TAKEDOWN)\b/g,
  /\b(restricted|Restricted)\b/g,
  /\b(prohibited|Prohibited)\b/g,
  /\b(compliance burden|compliance burden)\b/gi,
  /\b(regulatory risk|regulatory risk)\b/gi,
  /\b(high cost|high cost)\b/gi,
  /\b(material cost|material cost)\b/gi,
  /\b(1,760×|1,760x)\b/gi,
  /\b(67,000|67k|67000)\b/g,
  /\b(\$320k\+|\$320k)\b/g,
  /\b(does not close|does not close)\b/gi,
  /\b(not credible|not credible)\b/gi,
  // Chinese patterns
  /(高|高风险|高风险)/g,
  /(失败|不成立|不可信)/g,
  /(不进入|不盈利|尚未盈利)/g,
  /(受限|禁止|限制)/g,
  /(监管风险|合规负担)/g,
  /(高成本|重大成本)/g,
  /(1,760倍|1760倍)/g,
  /(67,000|67000)/g,
  /(\$320k\+|\$320k)/g,
];

export const highlightWarningWords = (text: string): React.ReactNode => {
  if (!text) return text;

  // Find all matches with their positions
  const matches: Array<{ start: number; end: number; text: string }> = [];
  
  WARNING_PATTERNS.forEach(pattern => {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
    }
  });

  // Sort matches by position
  matches.sort((a, b) => a.start - b.start);

  // Remove overlapping matches (keep the first one)
  const nonOverlapping: typeof matches = [];
  let lastEnd = 0;
  matches.forEach(match => {
    if (match.start >= lastEnd) {
      nonOverlapping.push(match);
      lastEnd = match.end;
    }
  });

  if (nonOverlapping.length === 0) {
    return text;
  }

  // Build React elements
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  nonOverlapping.forEach((match, index) => {
    // Add text before match
    if (match.start > lastIndex) {
      elements.push(text.substring(lastIndex, match.start));
    }
    
    // Add highlighted match
    elements.push(
      <span key={`highlight-${index}`} className="text-[#ff6b6b] font-semibold">
        {match.text}
      </span>
    );
    
    lastIndex = match.end;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <>{elements}</>;
};
