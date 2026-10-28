'use client';

import React from 'react';
import Sheet, { SheetProps } from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { portfolioColors } from '../theme/portfolioTheme';

export interface HairlinePanelProps extends SheetProps {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export function HairlinePanel({
  title,
  action,
  children,
  sx,
  ...props
}: HairlinePanelProps) {
  return (
    <Sheet
      variant="outlined"
      sx={{
        backgroundColor: portfolioColors.parchmentSurface,
        border: `1px solid ${portfolioColors.parchmentBorder}`,
        borderRadius: '8px',
        p: { xs: 2, sm: 2.5 },
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
        ...sx,
      }}
      {...props}
    >
      {(title || action) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '12px',
            marginBottom: '14px',
            borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
          }}
        >
          {title && (
            <Typography
              level="title-sm"
              sx={{
                letterSpacing: '0.04em',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: portfolioColors.parchmentTextPrimary,
              }}
            >
              {title}
            </Typography>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </Sheet>
  );
}
