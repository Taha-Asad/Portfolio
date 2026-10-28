'use client';

import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { portfolioColors, BarcodeStamp, StatusDot } from '@portfolio/ui';
import { ArrowUpRight, ExternalLink, Code2, Cpu, Shield, Sparkles } from 'lucide-react';
import { Work } from '@portfolio/types';
import { ProjectModal } from './ProjectModal';

export const DEFAULT_WORKS: Work[] = [
  {
    id: 'corbel-erp',
    recordId: 'PRJ-2026-CORBEL',
    slug: 'corbel-erp',
    title: 'Corbel ERP',
    subtitle: 'High-Density Desktop Financial Core & POS Engine',
    description:
      'Commercial-grade desktop financial core and POS platform built with Rust, Tauri v2, SQLite FTS5, and React 19. Implements double-entry ledger bookkeeping, atomic invoice voiding with stock restoration, sub-10ms query execution across 50,000+ SKUs, and zero-regression database schema evolution.',
    type: 'SYSTEM',
    status: 'COMPLETED',
    area: 'FINANCIAL CORE',
    owner: 'Taha Asadullah',
    progress: 100,
    tags: ['Rust', 'Tauri v2', 'SQLite FTS5', 'TypeScript', 'React 19', 'Joy UI'],
    milestones: [
      { id: 'm1', workId: 'corbel-erp', title: '540+ automated unit & integration tests passing', completed: true, order: 1 },
      { id: 'm2', workId: 'corbel-erp', title: 'Atomic invoice voiding & stock reversal state machine', completed: true, order: 2 },
      { id: 'm3', workId: 'corbel-erp', title: 'Sub-10ms full-text search over 50,000 inventory items', completed: true, order: 3 },
      { id: 'm4', workId: 'corbel-erp', title: 'Production release v1.3.2 verified on Linux/Windows', completed: true, order: 4 },
    ],
    createdAt: '2026-09-01T00:00:00Z',
    updatedAt: '2026-10-28T00:00:00Z',
  },
  {
    id: 'bugbountytrack',
    recordId: 'PRJ-2026-BBT',
    slug: 'bugbountytrack',
    title: 'BugBountyTrack Platform',
    subtitle: 'Academic Vulnerability Lifecycle & Bounty Tracking System',
    description:
      'Formal vulnerability management and bounty workflow engine architected to ISO/IEC/IEEE 29148 and IEEE 830 standards. Features STRIDE threat modeling, multi-tenant RBAC, automated cryptographic audit trails, and strict bidirectional SRS traceability.',
    type: 'RESEARCH',
    status: 'IN_PROGRESS',
    area: 'APPLICATION SECURITY',
    owner: 'Taha Asadullah',
    progress: 65,
    tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'STRIDE', 'Docker'],
    milestones: [
      { id: 'm1', workId: 'bugbountytrack', title: 'Formal SRS Revision 2.8 frozen & verified', completed: true, order: 1 },
      { id: 'm2', workId: 'bugbountytrack', title: 'STRIDE threat analysis & OWASP Top 10 mitigation design', completed: true, order: 2 },
      { id: 'm3', workId: 'bugbountytrack', title: 'Bidirectional Requirements Traceability Matrix (RTM)', completed: true, order: 3 },
    ],
    createdAt: '2026-09-15T00:00:00Z',
    updatedAt: '2026-10-28T00:00:00Z',
  },
  {
    id: 'roost-deck',
    recordId: 'PRJ-2026-ROOST',
    slug: 'roost-deck',
    title: 'The Roost Command Deck',
    subtitle: 'Low-Cognitive-Load Developer Cockpit & Ambient Assistant',
    description:
      'Minimalist developer workspace and ambient paired-engineering cockpit. Features responsive bento ergonomics, Tailwind CSS v4 styling, deterministic Pomodoro state machines, and real-time developer focus telemetry.',
    type: 'CREATIVE',
    status: 'IN_PROGRESS',
    area: 'DEVELOPER TOOLS',
    owner: 'Taha Asadullah',
    progress: 75,
    tags: ['Tauri v2', 'React 19', 'Tailwind v4', 'Zustand', 'TypeScript', 'Rust'],
    milestones: [
      { id: 'm1', workId: 'roost-deck', title: 'Adaptive viewport layout (390px mobile to 1440px wide)', completed: true, order: 1 },
      { id: 'm2', workId: 'roost-deck', title: 'State machine driven focus & break cycles', completed: true, order: 2 },
    ],
    createdAt: '2026-10-01T00:00:00Z',
    updatedAt: '2026-10-28T00:00:00Z',
  },
  {
    id: 'token-bucket-sandbox',
    recordId: 'PRJ-2026-TBS',
    slug: 'token-bucket-sandbox',
    title: 'Token Bucket Rate Limiter',
    subtitle: 'High-Throughput Distributed Rate Limiting Engine',
    description:
      'Concurrent rate limiting engine benchmarking Token Bucket, Leaky Bucket, and Sliding Window Counter algorithms under synthetic distributed traffic bursts. Benchmarked with Rust and Criterion to achieve sub-millisecond p99 latencies.',
    type: 'SYSTEM',
    status: 'COMPLETED',
    area: 'DISTRIBUTED SYSTEMS',
    owner: 'Taha Asadullah',
    progress: 100,
    tags: ['Rust', 'Tokio', 'Redis', 'Criterion', 'Docker', 'Concurrency'],
    milestones: [
      { id: 'm1', workId: 'token-bucket-sandbox', title: 'Sustained 120,000 req/sec benchmark verification', completed: true, order: 1 },
      { id: 'm2', workId: 'token-bucket-sandbox', title: 'Lock-free atomic token bucket state model', completed: true, order: 2 },
    ],
    createdAt: '2026-08-10T00:00:00Z',
    updatedAt: '2026-10-28T00:00:00Z',
  },
  {
    id: 'crow-parliament',
    recordId: 'PRJ-2026-ASE',
    slug: 'crow-parliament',
    title: 'Crow Parliament Orchestrator',
    subtitle: 'Autonomous Software Engineering Multi-Agent Framework',
    description:
      'Deterministic 9-agent autonomous orchestration system governing the end-to-end SDLC lifecycle across 7 Phase Gates (DoR, DoAC, DoCC, DoQV, DoSA, DoOR, DoRG). Enforces empirical verification before assertions, eliminating simulated testing and hallucinated status claims.',
    type: 'SYSTEM',
    status: 'IN_PROGRESS',
    area: 'AGENTIC SYSTEMS',
    owner: 'Taha Asadullah',
    progress: 80,
    tags: ['TypeScript', 'Node.js', 'LLM Agentic SDK', 'JSON Schema', 'Docker'],
    milestones: [
      { id: 'm1', workId: 'crow-parliament', title: '7 Phase Gate automated governance protocol', completed: true, order: 1 },
      { id: 'm2', workId: 'crow-parliament', title: 'Autonomous skills evolution standup (Protocol DAWN)', completed: true, order: 2 },
    ],
    createdAt: '2026-09-20T00:00:00Z',
    updatedAt: '2026-10-28T00:00:00Z',
  },
];

export interface WorksSectionProps {
  works?: Work[];
}

export function WorksSection({ works }: WorksSectionProps) {
  const displayWorks = works && works.length > 0 ? works : DEFAULT_WORKS;
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'SYSTEM' | 'RESEARCH' | 'CREATIVE'>('ALL');
  const [activeModalWork, setActiveModalWork] = useState<Work | null>(null);

  const filteredWorks = displayWorks.filter((w) => {
    if (selectedFilter === 'ALL') return true;
    return w.type === selectedFilter;
  });

  return (
    <section
      id="works"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '56px 20px 72px',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '36px',
        }}
      >
        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: portfolioColors.parchmentTextTertiary,
            textTransform: 'uppercase',
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          01 // SELECTED PORTFOLIO
        </span>

        <h2
          style={{
            margin: 0,
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            letterSpacing: '-0.03em',
            color: portfolioColors.parchmentTextPrimary,
          }}
        >
          Featured Engineering Works
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.6,
            color: portfolioColors.parchmentTextSecondary,
            maxWidth: '680px',
          }}
        >
          A selection of desktop financial systems, security lifecycle platforms, concurrent distributed engines, and developer tools built with high rigor.
        </p>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          {[
            { id: 'ALL', label: 'All Works' },
            { id: 'SYSTEM', label: 'Systems & Distributed' },
            { id: 'RESEARCH', label: 'Security & Research' },
            { id: 'CREATIVE', label: 'Tools & Frontend' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id as any)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: selectedFilter === tab.id ? 500 : 400,
                backgroundColor: selectedFilter === tab.id ? portfolioColors.parchmentTextPrimary : '#FFFFFF',
                color: selectedFilter === tab.id ? portfolioColors.parchmentBg : portfolioColors.parchmentTextSecondary,
                border: `1px solid ${selectedFilter === tab.id ? portfolioColors.parchmentTextPrimary : portfolioColors.parchmentBorder}`,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
            }}
            className="project-card"
          >
            <div>
              {/* Card Header (Barcode + Area + Status) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <BarcodeStamp code={work.recordId} />
                <StatusDot status={work.status === 'COMPLETED' ? 'Completed' : 'In progress'} />
              </div>

              {/* Title & Subtitle */}
              <h3
                style={{
                  margin: '0 0 6px 0',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: '1.35rem',
                  letterSpacing: '-0.02em',
                  color: portfolioColors.parchmentTextPrimary,
                }}
              >
                {work.title}
              </h3>

              {work.subtitle && (
                <p
                  style={{
                    margin: '0 0 14px 0',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: portfolioColors.statusBlue,
                  }}
                >
                  {work.subtitle}
                </p>
              )}

              {/* Description */}
              <p
                style={{
                  margin: '0 0 20px 0',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: portfolioColors.parchmentTextSecondary,
                }}
              >
                {work.description}
              </p>

              {/* Tech Stack Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '20px',
                }}
              >
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 9px',
                      borderRadius: '4px',
                      backgroundColor: '#F5F3EC',
                      border: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
                      fontSize: '0.72rem',
                      fontWeight: 400,
                      color: portfolioColors.parchmentTextPrimary,
                      fontFamily: '"JetBrains Mono", monospace',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
              }}
            >
              <Button
                size="sm"
                variant="outlined"
                onClick={() => setActiveModalWork(work)}
                sx={{
                  color: portfolioColors.parchmentTextPrimary,
                  borderColor: portfolioColors.parchmentBorder,
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  '&:hover': {
                    backgroundColor: '#F7F5EE',
                  },
                }}
              >
                Inspect Dossier
              </Button>

              <a
                href="https://github.com/Taha-Asad"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  color: portfolioColors.parchmentTextSecondary,
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = portfolioColors.parchmentTextPrimary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = portfolioColors.parchmentTextSecondary)}
              >
                Source ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dossier Modal */}
      <ProjectModal work={activeModalWork} onClose={() => setActiveModalWork(null)} />

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.04) !important;
          border-color: #CDC9BF !important;
        }
      `}</style>
    </section>
  );
}
