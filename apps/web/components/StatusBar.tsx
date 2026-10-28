'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import { portfolioColors } from '@portfolio/ui';
import { CircleDot, GitBranch } from 'lucide-react';

export function StatusBar() {
  return (
    <footer
      style={{
        height: '26px',
        minHeight: '26px',
        backgroundColor: portfolioColors.slateDockBg,
        borderTop: `1px solid ${portfolioColors.slateDockBorder}`,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'monospace',
        fontSize: '0.64rem',
        color: portfolioColors.slateTextSecondary,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Typography level="body-xs" sx={{ color: portfolioColors.slateTextSecondary, fontSize: '0.62rem' }}>
          ENGINEERING PORTFOLIO //
        </Typography>
        <Typography level="body-xs" sx={{ color: portfolioColors.slateTextPrimary, fontSize: '0.62rem', fontWeight: 600 }}>
          TAHA ASADULLAH
        </Typography>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <GitBranch size={11} color={portfolioColors.slateTextSecondary} />
        <Typography level="body-xs" sx={{ color: portfolioColors.slateTextSecondary, fontSize: '0.62rem' }}>
          STACK: NEXT.JS 16 • R3F • NESTJS • POSTGRESQL
        </Typography>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Typography level="body-xs" sx={{ color: portfolioColors.slateTextSecondary, fontSize: '0.62rem' }}>
          SYSTEM HEALTH:
        </Typography>
        <Typography level="body-xs" sx={{ color: portfolioColors.statusGreen, fontSize: '0.62rem', fontWeight: 700 }}>
          ALL CHECKS GREEN
        </Typography>
        <CircleDot size={8} color={portfolioColors.statusGreen} />
      </div>
    </footer>
  );
}
