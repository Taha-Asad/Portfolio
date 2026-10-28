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
        borderRadius: '1px',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
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
            paddingBottom: '10px',
            marginBottom: '10px',
            borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
          }}
        >
          {title && (
            <Typography
              level="title-sm"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'code',
                fontSize: '0.78rem',
                fontWeight: 700,
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
