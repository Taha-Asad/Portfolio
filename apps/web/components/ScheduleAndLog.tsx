'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { portfolioColors, HairlinePanel, PriorityRating, StatusDot } from '@portfolio/ui';
import { ActionItem, DailyLog } from '@portfolio/types';

export interface ScheduleAndLogProps {
  actions?: ActionItem[];
  log?: DailyLog | null;
}

const defaultActions: ActionItem[] = [
  {
    id: 'a-1',
    time: '09:30',
    title: 'Audit Corbel ERP sqlx Query Isolation & Parity',
    workTitle: 'Corbel ERP System',
    status: 'IN_PROGRESS',
    priority: 4,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a-2',
    time: '11:00',
    title: 'Finalize HOD Academic Proposal for BugBountyTrack',
    workTitle: 'BugBountyTrack FYP',
    status: 'TO_DO',
    priority: 4,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a-3',
    time: '14:00',
    title: 'Verify Token Bucket concurrency tests in Rust',
    workTitle: 'TrialSandbox',
    status: 'COMPLETED',
    priority: 3,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a-4',
    time: '16:00',
    title: 'Refactor Monorepo Workspace & Decouple Joy UI Themes',
    workTitle: 'Portfolio Workstation',
    status: 'IN_PROGRESS',
    priority: 4,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'a-5',
    time: '17:30',
    title: 'Implement Next.js ISR on-demand revalidation webhook',
    workTitle: 'Portfolio Workstation',
    status: 'TO_DO',
    priority: 2,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function ScheduleAndLog({ actions = defaultActions, log }: ScheduleAndLogProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '12px',
        marginBottom: '16px',
      }}
    >
      {/* Left: ACTIVE SPRINTS & ROADMAP */}
      <HairlinePanel
        title="ACTIVE SPRINTS &amp; ROADMAP"
        action={
          <Typography
            level="body-xs"
            sx={{
              fontFamily: 'code',
              fontSize: '0.62rem',
              color: portfolioColors.parchmentTextSecondary,
            }}
          >
            REAL-TIME ENGINEERING SCHEDULE
          </Typography>
        }
        sx={{ p: 1.5 }}
      >
        <Sheet
          variant="plain"
          sx={{
            backgroundColor: 'transparent',
            overflowX: 'auto',
          }}
        >
          <Table
            size="sm"
            aria-label="Upcoming Sprints Table"
            sx={{
              fontFamily: 'code',
              fontSize: '0.7rem',
              '& th': {
                color: portfolioColors.parchmentTextSecondary,
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderBottom: `1px solid ${portfolioColors.parchmentBorder}`,
                py: 0.5,
              },
              '& td': {
                borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
                py: 0.75,
              },
            }}
          >
            <thead>
              <tr>
                <th style={{ width: 60 }}>SLOT</th>
                <th>ENGINEERING TASK</th>
                <th style={{ width: 170 }}>TARGET PROJECT</th>
                <th style={{ width: 100 }}>STATUS</th>
                <th style={{ width: 60, textAlign: 'right' }}>PRIORITY</th>
              </tr>
            </thead>
            <tbody>
              {actions.map((act) => (
                <tr key={act.id}>
                  <td style={{ fontWeight: 600 }}>{act.time}</td>
                  <td style={{ fontWeight: 500 }}>{act.title}</td>
                  <td style={{ color: portfolioColors.parchmentTextSecondary }}>
                    {act.workTitle || 'General'}
                  </td>
                  <td>
                    <StatusDot status={act.status.replace('_', ' ')} />
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <PriorityRating priority={act.priority} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '12px',
            paddingTop: '8px',
            borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
            fontSize: '0.62rem',
            fontFamily: 'monospace',
            color: portfolioColors.parchmentTextSecondary,
          }}
        >
          <span>{actions.length} TASKS TRACKED</span>
          <span>HIGH SIGNAL-TO-NOISE EXECUTION</span>
        </div>
      </HairlinePanel>

      {/* Right: TECHNICAL NOTES */}
      <HairlinePanel
        title="TECHNICAL LOG"
        action={
          <Typography
            level="body-xs"
            sx={{
              fontFamily: 'code',
              fontSize: '0.62rem',
              color: portfolioColors.parchmentTextSecondary,
            }}
          >
            DAILY REFLECTION
          </Typography>
        }
        sx={{ p: 1.5 }}
      >
        <div style={{ marginBottom: '8px' }}>
          <Typography
            level="body-xs"
            sx={{
              fontFamily: 'code',
              fontSize: '0.64rem',
              color: portfolioColors.parchmentTextSecondary,
              textTransform: 'uppercase',
              mb: 0.5,
            }}
          >
            ENGINEERING NOTE
          </Typography>
          <div
            style={{
              padding: '10px',
              backgroundColor: '#EDE7DC',
              border: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
              borderRadius: '1px',
              fontFamily: 'monospace',
              fontSize: '0.72rem',
              lineHeight: 1.5,
              color: portfolioColors.parchmentTextPrimary,
            }}
          >
            {log?.content ||
              'Decoupled the personal portfolio into a high-performance Next.js 16 + NestJS monorepo. Focused on clean information architecture, strict TDD verification evidence, and responsive spatial viewports without bloated fluff.'}
          </div>
        </div>

        {/* Development Discipline Focus */}
        <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}` }}>
          <Typography
            level="body-xs"
            sx={{
              fontFamily: 'code',
              fontSize: '0.64rem',
              color: portfolioColors.parchmentTextSecondary,
              textTransform: 'uppercase',
              mb: 0.5,
            }}
          >
            OPERATING ETHOS
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              fontSize: '0.7rem',
            }}
          >
            <span>METHODOLOGY</span>
            <strong style={{ color: portfolioColors.parchmentTextPrimary }}>OBSERVE • BUILD • VERIFY</strong>
          </div>
        </div>
      </HairlinePanel>
    </div>
  );
}
