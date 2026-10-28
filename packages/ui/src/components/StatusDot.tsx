'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import { portfolioColors } from '../theme/portfolioTheme';

export type StatusVariant = 'inProgress' | 'toDo' | 'waiting' | 'completed' | 'ok';

export interface StatusDotProps {
  status: string;
  variant?: StatusVariant;
}

const colorMap: Record<StatusVariant, string> = {
  inProgress: portfolioColors.statusGreen,
  toDo: portfolioColors.parchmentTextSecondary,
  waiting: portfolioColors.statusBlue,
  completed: portfolioColors.statusGreen,
  ok: portfolioColors.statusGreen,
};

export function StatusDot({ status, variant }: StatusDotProps) {
  let resolvedVariant = variant;
  if (!resolvedVariant) {
    const s = status.toLowerCase();
    if (s.includes('progress') || s === 'ok' || s.includes('active')) resolvedVariant = 'inProgress';
    else if (s.includes('wait')) resolvedVariant = 'waiting';
    else if (s.includes('complete') || s.includes('done')) resolvedVariant = 'completed';
    else resolvedVariant = 'toDo';
  }

  const dotColor = colorMap[resolvedVariant] || portfolioColors.parchmentTextSecondary;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          backgroundColor: dotColor,
          display: 'inline-block',
          boxShadow: resolvedVariant === 'inProgress' ? `0 0 5px ${dotColor}88` : 'none',
        }}
      />
      <Typography
        level="body-xs"
        sx={{
          fontFamily: 'code',
          fontSize: '0.74rem',
          color: 'text.primary',
          textTransform: 'capitalize',
        }}
      >
        {status}
      </Typography>
    </span>
  );
}
