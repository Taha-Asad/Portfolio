'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import { portfolioColors, HairlinePanel } from '@portfolio/ui';
import { DashboardOverview } from '@portfolio/types';
import { ShieldCheck } from 'lucide-react';

export interface OverviewRowProps {
  overview?: DashboardOverview;
}

export function OverviewRow({ overview }: OverviewRowProps) {
  const activeDay = overview?.today.dayNumber ?? 28;

  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography
        level="body-xs"
        sx={{
          fontFamily: 'code',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: portfolioColors.parchmentTextPrimary,
          mb: 1,
        }}
      >
        ENGINEERING OVERVIEW
      </Typography>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
        }}
      >
        {/* 1. SCHEDULE / DATE */}
        <HairlinePanel sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.66rem', color: portfolioColors.parchmentTextSecondary, textTransform: 'uppercase' }}>
            DATE &amp; STATUS
          </Typography>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '4px 0' }}>
            <Typography level="h1" sx={{ fontFamily: 'code', fontSize: '2.2rem', lineHeight: 1, fontWeight: 700 }}>
              {String(activeDay).padStart(2, '0')}
            </Typography>
            <div>
              <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.62rem', fontWeight: 700, lineHeight: 1.2 }}>
                {overview?.today.dayOfWeek ?? 'WEDNESDAY'}
              </Typography>
              <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.58rem', color: portfolioColors.parchmentTextSecondary }}>
                {overview?.today.monthYear ?? 'OCT 2026'}
              </Typography>
            </div>
          </div>
          <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`, fontSize: '0.62rem', fontFamily: 'code' }}>
            <span style={{ color: portfolioColors.statusGreen, fontWeight: 600 }}>● AVAILABLE FOR WORK</span>
          </div>
        </HairlinePanel>

        {/* 2. ACTIVE PROJECTS */}
        <HairlinePanel sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.66rem', color: portfolioColors.parchmentTextSecondary, textTransform: 'uppercase' }}>
            FEATURED PROJECTS
          </Typography>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '4px 0' }}>
            <Typography level="h1" sx={{ fontFamily: 'code', fontSize: '2.2rem', lineHeight: 1, fontWeight: 700 }}>
              03
            </Typography>
            <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.62rem', color: portfolioColors.parchmentTextSecondary }}>
              PRODUCTION / FYP
            </Typography>
          </div>
          <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`, fontSize: '0.62rem', fontFamily: 'code', color: portfolioColors.parchmentTextSecondary }}>
            <div>● Corbel ERP (Tauri + Rust)</div>
            <div>● BugBountyTrack (FYP)</div>
          </div>
        </HairlinePanel>

        {/* 3. VERIFIED TESTS */}
        <HairlinePanel sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.66rem', color: portfolioColors.parchmentTextSecondary, textTransform: 'uppercase' }}>
            VERIFICATION
          </Typography>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '4px 0' }}>
            <Typography level="h1" sx={{ fontFamily: 'code', fontSize: '2.2rem', lineHeight: 1, fontWeight: 700, color: portfolioColors.statusGreen }}>
              494
            </Typography>
            <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.62rem', color: portfolioColors.parchmentTextSecondary }}>
              TESTS GREEN
            </Typography>
          </div>
          <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`, fontSize: '0.62rem', fontFamily: 'code', color: portfolioColors.parchmentTextSecondary }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={11} color={portfolioColors.statusGreen} />
              <span>Strict TDD Red-Green Rigor</span>
            </div>
          </div>
        </HairlinePanel>

        {/* 4. ACTIVE SPRINT ACTIONS */}
        <HairlinePanel sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.66rem', color: portfolioColors.parchmentTextSecondary, textTransform: 'uppercase' }}>
            ACTIVE SPRINTS
          </Typography>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '4px 0' }}>
            <Typography level="h1" sx={{ fontFamily: 'code', fontSize: '2.2rem', lineHeight: 1, fontWeight: 700 }}>
              05
            </Typography>
            <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.62rem', color: portfolioColors.parchmentTextSecondary }}>
              MILESTONES
            </Typography>
          </div>
          <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`, fontSize: '0.62rem', fontFamily: 'code', color: portfolioColors.parchmentTextSecondary }}>
            <div>● 2 In Progress • 3 Planned</div>
          </div>
        </HairlinePanel>

        {/* 5. PRIMARY SPECIALIZATION */}
        <HairlinePanel sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.66rem', color: portfolioColors.parchmentTextSecondary, textTransform: 'uppercase' }}>
            SPECIALIZATION
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '4px 0' }}>
            <div>
              <Typography level="title-md" sx={{ fontFamily: 'code', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.2 }}>
                SYSTEMS &amp; BACKEND
              </Typography>
              <Typography level="body-xs" sx={{ fontFamily: 'code', fontSize: '0.62rem', color: portfolioColors.parchmentTextSecondary }}>
                RUST • NEXT.JS • POSTGRES
              </Typography>
            </div>
          </div>
          <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`, fontSize: '0.62rem', fontFamily: 'code', color: portfolioColors.statusGreen }}>
            ▲ Production Rigor
          </div>
        </HairlinePanel>
      </div>
    </div>
  );
}
