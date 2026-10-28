'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import { portfolioColors, BarcodeStamp } from '@portfolio/ui';
import { CheckCircle2, Terminal } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      period: '2026 — PRESENT',
      role: 'Principal Systems Architect & Lead Engineer',
      project: 'Corbel ERP Desktop Platform',
      code: 'PRJ-2026-CORBEL',
      summary:
        'Architected and constructed a commercial-grade offline-first desktop financial core and POS platform in Rust, Tauri v2, SQLite FTS5, and React 19. Engineered atomic invoice voiding state machines with full stock restoration, isolated POS walk-in customer receivables, and verified 540 automated tests with zero regressions.',
      highlights: [
        '540+ passing Rust and TypeScript automated unit & integration tests',
        'Sub-10ms full-text search over 50,000+ inventory SKUs using SQLite FTS5',
        'Zero-downtime expand/contract schema migrations for desktop client databases',
      ],
    },
    {
      period: '2026',
      role: 'Security Architect & Lead Requirements Engineer',
      project: 'BugBountyTrack Platform',
      code: 'PRJ-2026-BBT',
      summary:
        'Authored and frozen formal IEEE 830 / ISO/IEC/IEEE 29148 software requirements specification (SRS Rev 2.8) for an enterprise vulnerability lifecycle management and bounty tracking platform. Built STRIDE threat models and bidirectional traceability matrix across 100+ formal system requirements.',
      highlights: [
        'STRIDE threat analysis identifying and mitigating OWASP Top 10 vulnerabilities',
        'Bidirectional Requirements Traceability Matrix linking requirements to test vectors',
        'Full multi-tenant role-based access control and cryptographic audit logging',
      ],
    },
    {
      period: '2026',
      role: 'Systems & Concurrency Engineer',
      project: 'Distributed Token Bucket Sandbox',
      code: 'PRJ-2026-TBS',
      summary:
        'Implemented and benchmarked concurrent rate-limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window Counter) in Rust using Tokio and Redis. Conducted Criterion benchmarks demonstrating sustained throughput under simulated multi-threaded traffic surges.',
      highlights: [
        'Sustained 120,000 req/sec benchmark verification in concurrent Rust harness',
        'Sub-0.2ms p99 latency under simulated high-contention traffic bursts',
      ],
    },
    {
      period: '2026',
      role: 'Systems Creator & Agentic SDLC Architect',
      project: 'Crow Parliament Autonomous Framework',
      code: 'PRJ-2026-ASE',
      summary:
        'Designed a deterministic 9-agent autonomous software engineering system coordinating requirements engineering (DoR), architectural design (DoAC), test-driven implementation (DoCC), and independent verification (DoQV). Eliminated simulated test reporting through strictly observable command verification.',
      highlights: [
        'Automated 7 Phase Gates with formal artifact integrity validation',
        'Autonomous daily skills evolution protocol (Protocol DAWN) across 8 specialist domains',
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '56px 20px 72px',
        borderTop: `1px solid ${portfolioColors.parchmentBorder}`,
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '36px' }}>
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
          03 // CHRONOLOGY
        </span>

        <h2
          style={{
            margin: '8px 0 10px 0',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            letterSpacing: '-0.03em',
            color: portfolioColors.parchmentTextPrimary,
          }}
        >
          Engineering Milestones &amp; Experience
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
          A proven trajectory of designing, constructing, and verifying software across desktop platforms, distributed backends, and full-stack systems.
        </p>
      </div>

      {/* Experience Timeline */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              padding: '24px 28px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* Top Row: Period & Code */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: portfolioColors.parchmentTextTertiary,
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  {exp.period}
                </span>
                <span style={{ color: portfolioColors.parchmentBorder }}>|</span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: portfolioColors.statusBlue,
                  }}
                >
                  {exp.project}
                </span>
              </div>

              <BarcodeStamp code={exp.code} />
            </div>

            {/* Role Title */}
            <h3
              style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: portfolioColors.parchmentTextPrimary,
              }}
            >
              {exp.role}
            </h3>

            {/* Summary */}
            <p
              style={{
                margin: 0,
                fontSize: '0.92rem',
                fontWeight: 300,
                lineHeight: 1.68,
                color: portfolioColors.parchmentTextSecondary,
              }}
            >
              {exp.summary}
            </p>

            {/* Bullets */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginTop: '4px',
              }}
            >
              {exp.highlights.map((item, hIdx) => (
                <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      color: portfolioColors.parchmentTextPrimary,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
