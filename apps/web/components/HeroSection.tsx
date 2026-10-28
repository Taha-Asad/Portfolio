'use client';

import React from 'react';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { portfolioColors } from '@portfolio/ui';
import { ArrowUpRight, Sparkles, Terminal, Layers, Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '72px 20px 56px',
      }}
    >
      {/* Top Engineering Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '24px',
          backgroundColor: '#FFFFFF',
          border: `1px solid ${portfolioColors.parchmentBorder}`,
          marginBottom: '28px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: portfolioColors.statusGreen,
            boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.15)',
          }}
        />
        <Typography
          level="body-xs"
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: portfolioColors.parchmentTextSecondary,
            textTransform: 'uppercase',
          }}
        >
          Systems &amp; Full-Stack Software Engineer // Lahore
        </Typography>
      </div>

      {/* Hero Headline (Slim Display Typography) */}
      <h1
        style={{
          margin: '0 0 24px 0',
          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
          lineHeight: 1.15,
          letterSpacing: '-0.035em',
          color: portfolioColors.parchmentTextPrimary,
          maxWidth: '960px',
        }}
      >
        Building resilient systems, high-performance engines, and meticulous software.
      </h1>

      {/* Subtext */}
      <p
        style={{
          margin: '0 0 36px 0',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          lineHeight: 1.68,
          color: portfolioColors.parchmentTextSecondary,
          maxWidth: '720px',
        }}
      >
        Hi, I&apos;m <strong style={{ fontWeight: 500, color: portfolioColors.parchmentTextPrimary }}>Taha Asadullah</strong>. I specialize in
        concurrent backend architectures in Rust, robust database systems, and type-safe full-stack web applications.
        Committed to first-principles problem solving and honest verification.
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          alignItems: 'center',
          marginBottom: '64px',
        }}
      >
        <Button
          component="a"
          href="#works"
          size="lg"
          variant="solid"
          endDecorator={<ArrowUpRight size={18} />}
          sx={{
            backgroundColor: portfolioColors.parchmentTextPrimary,
            color: portfolioColors.parchmentBg,
            fontWeight: 400,
            fontSize: '0.92rem',
            px: 3,
            py: 1.2,
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
            '&:hover': {
              backgroundColor: '#2A2C2E',
            },
          }}
        >
          Explore Selected Works
        </Button>

        <Button
          component="a"
          href="#architecture"
          size="lg"
          variant="outlined"
          sx={{
            color: portfolioColors.parchmentTextPrimary,
            borderColor: portfolioColors.parchmentBorder,
            backgroundColor: '#FFFFFF',
            fontWeight: 400,
            fontSize: '0.92rem',
            px: 2.8,
            py: 1.2,
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: '#F3F1EC',
            },
          }}
        >
          Architecture Philosophy
        </Button>

        <Button
          component="a"
          href="#contact"
          size="lg"
          variant="plain"
          sx={{
            color: portfolioColors.parchmentTextSecondary,
            fontWeight: 400,
            fontSize: '0.92rem',
            '&:hover': {
              color: portfolioColors.parchmentTextPrimary,
              backgroundColor: 'transparent',
            },
          }}
        >
          Get in Touch
        </Button>
      </div>

      {/* Systems Architecture Highlights Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          paddingTop: '28px',
          borderTop: `1px solid ${portfolioColors.parchmentBorder}`,
        }}
      >
        {[
          {
            icon: <Terminal size={18} color="#16A34A" />,
            label: 'TESTED VERIFICATION',
            value: '540+ Passed Tests',
            desc: 'Zero regressions across financial core',
          },
          {
            icon: <Cpu size={18} color="#2563EB" />,
            label: 'QUERY PERFORMANCE',
            value: 'Sub-10ms Latency',
            desc: 'SQLite FTS5 across 50,000+ SKUs',
          },
          {
            icon: <Layers size={18} color="#D97706" />,
            label: 'CONCURRENT THROUGHPUT',
            value: '120k req / sec',
            desc: 'Synthetic rate limiting benchmark',
          },
          {
            icon: <Sparkles size={18} color="#7C3AED" />,
            label: 'DESKTOP PLATFORMS',
            value: 'Tauri v2 & Rust',
            desc: 'Cross-platform native financial engines',
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px 18px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              {stat.icon}
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: portfolioColors.parchmentTextTertiary,
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                {stat.label}
              </span>
            </div>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: portfolioColors.parchmentTextPrimary,
                letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 300,
                color: portfolioColors.parchmentTextSecondary,
              }}
            >
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
