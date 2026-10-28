'use client';

import React from 'react';
import { portfolioColors } from '@portfolio/ui';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${portfolioColors.parchmentBorder}`,
        backgroundColor: '#FFFFFF',
        padding: '32px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.82rem',
          fontWeight: 300,
          color: portfolioColors.parchmentTextSecondary,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 500, color: portfolioColors.parchmentTextPrimary }}>
            TAHA ASADULLAH
          </span>
          <span>© {new Date().getFullYear()}</span>
          <span>— Systems &amp; Full-Stack Engineering</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="#hero"
            style={{
              color: portfolioColors.parchmentTextSecondary,
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = portfolioColors.parchmentTextPrimary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = portfolioColors.parchmentTextSecondary)}
          >
            Back to Top ↑
          </a>

          <a
            href="/admin"
            style={{
              color: portfolioColors.parchmentTextTertiary,
              textDecoration: 'none',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.72rem',
            }}
          >
            /admin
          </a>
        </div>
      </div>
    </footer>
  );
}
