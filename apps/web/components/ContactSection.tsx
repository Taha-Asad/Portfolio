'use client';

import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { portfolioColors } from '@portfolio/ui';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'tahaasad709@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '56px 20px 80px',
        borderTop: `1px solid ${portfolioColors.parchmentBorder}`,
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: `1px solid ${portfolioColors.parchmentBorder}`,
          padding: '40px 32px',
          boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Availability Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 12px',
            borderRadius: '20px',
            backgroundColor: '#EAF7EE',
            border: '1px solid #D1EED7',
            marginBottom: '20px',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: '#1A6E3B',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#16A34A',
              boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.15)',
            }}
          />
          Open to Systems &amp; Full-Stack Software Engineering Opportunities
        </div>

        {/* Headline */}
        <h2
          style={{
            margin: '0 0 12px 0',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            letterSpacing: '-0.03em',
            color: portfolioColors.parchmentTextPrimary,
            maxWidth: '640px',
          }}
        >
          Let&apos;s build resilient systems together.
        </h2>

        <p
          style={{
            margin: '0 0 32px 0',
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.65,
            color: portfolioColors.parchmentTextSecondary,
            maxWidth: '560px',
          }}
        >
          Whether discussing high-performance backend architecture, Rust concurrency, or modern full-stack web platforms, I welcome thoughtful technical conversations.
        </p>

        {/* Email Copy Card */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '12px 20px',
            backgroundColor: '#F9F9F8',
            borderRadius: '8px',
            border: `1px solid ${portfolioColors.parchmentBorder}`,
            marginBottom: '28px',
          }}
        >
          <Mail size={18} color={portfolioColors.parchmentTextSecondary} />
          <span
            style={{
              fontSize: '0.95rem',
              fontWeight: 400,
              color: portfolioColors.parchmentTextPrimary,
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            {email}
          </span>
          <Button
            size="sm"
            variant="plain"
            onClick={handleCopy}
            startDecorator={copied ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
            sx={{
              fontSize: '0.78rem',
              color: copied ? '#16A34A' : portfolioColors.parchmentTextPrimary,
              fontWeight: 400,
            }}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>

        {/* Direct Action Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Button
            component="a"
            href={`mailto:${email}`}
            variant="solid"
            size="md"
            endDecorator={<ArrowUpRight size={16} />}
            sx={{
              backgroundColor: portfolioColors.parchmentTextPrimary,
              color: portfolioColors.parchmentBg,
              fontWeight: 400,
              fontSize: '0.88rem',
              px: 2.8,
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: '#2A2C2E',
              },
            }}
          >
            Send Direct Email
          </Button>

          <Button
            component="a"
            href="https://github.com/Taha-Asad"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="md"
            endDecorator={<ArrowUpRight size={16} />}
            sx={{
              color: portfolioColors.parchmentTextPrimary,
              borderColor: portfolioColors.parchmentBorder,
              fontWeight: 400,
              fontSize: '0.88rem',
              px: 2.5,
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: '#F7F5EE',
              },
            }}
          >
            GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
