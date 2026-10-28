'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import { portfolioColors } from '@portfolio/ui';
import { ShieldCheck, Cpu, Database, Eye, Terminal, Layers } from 'lucide-react';

export function ArchitectureSection() {
  const pillars = [
    {
      icon: <Eye size={22} color="#16A34A" />,
      tag: 'ETHOS',
      title: 'Observe, Build, Verify',
      desc: 'No code is written without observing the problem in context. No feature is marked complete without executed verification commands. We reject fabricated tests, hallucinated metrics, and premature complexity.',
    },
    {
      icon: <Cpu size={22} color="#2563EB" />,
      tag: 'CONCURRENCY',
      title: 'Deterministic Memory & State',
      desc: 'We construct low-latency, concurrent backends in Rust using strict ownership boundaries, type-driven state machines, and RAII resource management to guarantee memory safety without garbage collector pauses.',
    },
    {
      icon: <Database size={22} color="#D97706" />,
      tag: 'DATA INTEGRITY',
      title: 'Safe Expand / Contract Migrations',
      desc: 'Database schemas evolve through non-breaking, multi-step phases: Expand (additive fields), Migrate (dual-writes), and Contract (drop legacy columns). Zero downtime and zero data loss on schema updates.',
    },
    {
      icon: <Layers size={22} color="#7C3AED" />,
      tag: 'ERGONOMICS',
      title: 'Anti-Slop Usability',
      desc: 'We model interfaces for low cognitive load and immediate usability: keyboard-first navigation, spatial density without clutter, clear typographic contrast, and elimination of generic AI placeholder templates.',
    },
  ];

  return (
    <section
      id="architecture"
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
          02 // METHODOLOGY
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
          Architectural Principles &amp; Discipline
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
          Engineering is not about chasing novelty; it is about building software that behaves predictably under failure, scales cleanly, and honors real-world operational constraints.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            style={{
              padding: '24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#F7F5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {pillar.icon}
              </div>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: portfolioColors.parchmentTextTertiary,
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                {pillar.tag}
              </span>
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: '1.15rem',
                fontWeight: 500,
                letterSpacing: '-0.015em',
                color: portfolioColors.parchmentTextPrimary,
              }}
            >
              {pillar.title}
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: '0.88rem',
                fontWeight: 300,
                lineHeight: 1.65,
                color: portfolioColors.parchmentTextSecondary,
              }}
            >
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
