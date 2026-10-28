'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { portfolioColors, StatusDot } from '@portfolio/ui';
import { Work } from '@portfolio/types';

export interface RecentWorksProps {
  works?: Work[];
  selectedWorkId?: string;
  onSelectWork?: (work: Work) => void;
}

const defaultWorks: Partial<Work>[] = [
  {
    id: 'w-corbel',
    recordId: 'PRJ-2026-CORBEL',
    slug: 'corbel-erp-system',
    title: 'CORBEL ERP SYSTEM',
    type: 'PROJECT',
    status: 'IN_PROGRESS',
    area: 'Commercial Software',
    owner: 'Taha Asadullah',
    progress: 85,
    description:
      'Offline-First Desktop ERP & Financial Core for Wholesale, Retail & Distribution SMBs. Architected with Tauri 2, React 19, Mantine, and SQLite in Rust (sqlx) with 494 passing automated tests.',
    tags: ['rust', 'tauri-2', 'sqlite', 'react-19', 'financial-core', 'tdd'],
  },
  {
    id: 'w-bugbounty',
    recordId: 'RES-2026-BBT',
    slug: 'bugbountytrack-platform',
    title: 'BUGBOUNTYTRACK PLATFORM',
    type: 'RESEARCH',
    status: 'PLANNED',
    area: 'Academic / FYP Prototype',
    owner: 'Taha Asadullah',
    progress: 25,
    description:
      'Multi-Tenant Vulnerability Disclosure Platform with Cryptographic Payload Isolation and Evidence-Based Remediation Traceability.',
    tags: ['nextjs', 'postgresql', 'cryptography', 'security', 'zero-trust'],
  },
  {
    id: 'w-sandbox',
    recordId: 'SYS-2026-TBS',
    slug: 'token-bucket-trial-sandbox',
    title: 'TOKEN BUCKET SANDBOX',
    type: 'SYSTEM',
    status: 'COMPLETED',
    area: 'Systems Engineering',
    owner: 'Taha Asadullah',
    progress: 100,
    description:
      'Isolated verification trial for Token Bucket distributed rate limiting under strict test-driven development (TDD).',
    tags: ['rust', 'concurrency', 'tdd', 'algorithms'],
  },
  {
    id: 'w-portfolio',
    recordId: 'ENG-2026-PORTFOLIO',
    slug: 'engineering-portfolio-console',
    title: 'PORTFOLIO WORKSTATION',
    type: 'SYSTEM',
    status: 'IN_PROGRESS',
    area: 'Personal Engineering',
    owner: 'Taha Asadullah',
    progress: 90,
    description:
      'Decoupled monorepo with Next.js 16 (App Router), React Three Fiber wireframe viewports, NestJS API, PostgreSQL, and custom MUI Joy UI archival theme.',
    tags: ['nextjs-16', 'react-19', 'r3f', 'nestjs', 'mui-joy', 'pnpm'],
  },
];

export function RecentWorks({
  works = defaultWorks as Work[],
  selectedWorkId,
  onSelectWork,
}: RecentWorksProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <Typography
          level="body-xs"
          sx={{
            fontFamily: 'code',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: portfolioColors.parchmentTextPrimary,
          }}
        >
          FEATURED PROJECTS
        </Typography>
        <Typography
          level="body-xs"
          sx={{
            fontFamily: 'code',
            fontSize: '0.65rem',
            color: portfolioColors.parchmentTextSecondary,
          }}
        >
          CLICK TO INSPECT DOSSIER →
        </Typography>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
        }}
      >
        {works.map((work) => {
          const isSelected = work.id === selectedWorkId || (!selectedWorkId && work.id === 'w-corbel');
          return (
            <Card
              key={work.id}
              onClick={() => onSelectWork?.(work)}
              sx={{
                p: 1.25,
                backgroundColor: portfolioColors.parchmentSurface,
                border: isSelected
                  ? `2px solid ${portfolioColors.parchmentTextPrimary}`
                  : `1px solid ${portfolioColors.parchmentBorder}`,
                borderRadius: '1px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                '&:hover': {
                  borderColor: portfolioColors.parchmentTextPrimary,
                },
              }}
            >
              {/* Card Blueprint Preview Window */}
              <div
                style={{
                  height: 90,
                  backgroundColor: '#202224',
                  color: '#90CAF9',
                  border: `1px solid ${portfolioColors.parchmentBorder}`,
                  borderRadius: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  fontFamily: 'monospace',
                  fontSize: '0.62rem',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.12,
                    backgroundImage:
                      'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />
                <div style={{ zIndex: 1, textAlign: 'center', padding: '0 8px' }}>
                  <Typography level="body-xs" sx={{ color: '#E0E0E0', fontFamily: 'code', fontSize: '0.68rem', fontWeight: 700 }}>
                    {work.recordId}
                  </Typography>
                  <Typography level="body-xs" sx={{ color: '#9E9E9E', fontFamily: 'code', fontSize: '0.58rem' }}>
                    {work.area}
                  </Typography>
                </div>
              </div>

              {/* Title & Metadata */}
              <div style={{ marginTop: '8px' }}>
                <Typography
                  level="title-sm"
                  sx={{
                    fontFamily: 'code',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: portfolioColors.parchmentTextPrimary,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {work.title}
                </Typography>

                <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.64rem', fontFamily: 'monospace' }}>
                  <span style={{ color: portfolioColors.parchmentTextSecondary }}>Type: {work.type}</span>
                  <StatusDot status={work.status.replace('_', ' ')} />
                </div>

                <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', fontFamily: 'monospace', color: portfolioColors.parchmentTextTertiary }}>
                  <span>{work.tags?.[0] || 'code'}</span>
                  <span>{work.progress}% Complete</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
