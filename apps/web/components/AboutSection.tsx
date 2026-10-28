'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import { portfolioColors } from '@portfolio/ui';
import { Code2, Terminal, Shield, Cpu, Layers } from 'lucide-react';

export function AboutSection() {
  const skillCategories = [
    {
      title: 'Systems & Core Languages',
      skills: ['Rust (Tokio, Actix, Tauri v2)', 'TypeScript / JavaScript', 'SQL (PostgreSQL, SQLite FTS5)', 'C / Low-Level Primitives', 'Shell / Bash / Linux'],
    },
    {
      title: 'Full-Stack & Web Architectures',
      skills: ['Next.js 15 / 16 (App Router, RSC, ISR)', 'React 19 / Modern Hooks', 'Joy UI / Tailwind CSS v4', 'Node.js & NestJS Microservices', 'REST, GraphQL, gRPC Contracts'],
    },
    {
      title: 'Data Storage & Performance',
      skills: ['PostgreSQL & Connection Pooling', 'SQLite with Write-Ahead Logging (WAL)', 'Redis Caching & Token Limiting', 'Prisma ORM & Raw SQL Optimizations', 'Expand/Contract Safe Migrations'],
    },
    {
      title: 'Security & DevSecOps',
      skills: ['STRIDE Threat Modeling', 'OWASP Top 10 Mitigation', 'Docker Containerization & Multi-Stage Builds', 'GitHub Actions CI/CD GitOps', 'Linux Performance Profiling'],
    },
  ];

  return (
    <section
      id="about"
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
          04 // PROFILE
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
          About Taha Asadullah
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
          Systems software engineer focused on building robust backends, concurrent engines, and meticulous web applications.
        </p>
      </div>

      {/* Main About Layout: Bio + Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Narrative Bio */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color: portfolioColors.parchmentTextSecondary,
          }}
        >
          <p style={{ margin: 0 }}>
            I am a software engineer based in Karachi, dedicated to building software that holds up under intense operational scrutiny.
            My approach is grounded in first principles: identifying the precise problem, establishing type-safe invariants, and verifying
            system behavior empirically through concrete test evidence.
          </p>
          <p style={{ margin: 0 }}>
            Whether constructing a desktop financial core with atomic invoice state machines in Rust, designing formal vulnerability
            lifecycles to IEEE standards, or engineering zero-downtime database migrations, I prioritize clarity, determinism, and performance over unnecessary complexity.
          </p>
          <p style={{ margin: 0 }}>
            I believe that great software engineering combines deep systems understanding with clean user ergonomics—interfaces that are responsive, accessible, and free of superficial fluff.
          </p>

          <div
            style={{
              padding: '16px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              marginTop: '8px',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: portfolioColors.parchmentTextTertiary,
                fontFamily: '"JetBrains Mono", monospace',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              CORE PRINCIPLE
            </span>
            <div style={{ fontSize: '0.92rem', fontWeight: 400, color: portfolioColors.parchmentTextPrimary }}>
              &ldquo;Observe thoroughly before changing code. Build with minimal, robust edits. Verify with executed tests before asserting completion.&rdquo;
            </div>
          </div>
        </div>

        {/* Right Column: Technical Competencies Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                padding: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: `1px solid ${portfolioColors.parchmentBorder}`,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
              }}
            >
              <h3
                style={{
                  margin: '0 0 10px 0',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: portfolioColors.parchmentTextPrimary,
                  letterSpacing: '-0.01em',
                }}
              >
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '4px',
                      backgroundColor: '#F6F4EE',
                      border: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      color: portfolioColors.parchmentTextPrimary,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
