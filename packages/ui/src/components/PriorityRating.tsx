'use client';

import React from 'react';
import { portfolioColors } from '../theme/portfolioTheme';

export interface PriorityRatingProps {
  priority: number; // 1 to 4 or 5
  max?: number;
}

export function PriorityRating({ priority, max = 4 }: PriorityRatingProps) {
  const dots = Array.from({ length: max }, (_, i) => i < priority);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      {dots.map((filled, idx) => (
        <span
          key={idx}
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            backgroundColor: filled
              ? portfolioColors.parchmentTextPrimary
              : portfolioColors.parchmentBorder,
            display: 'inline-block',
          }}
        />
      ))}
    </span>
  );
}
