'use client';

import React, { useEffect } from 'react';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { portfolioColors, BarcodeStamp, StatusDot } from '@portfolio/ui';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Cpu } from 'lucide-react';
import { Work } from '@portfolio/types';

export interface ProjectModalProps {
  work: Work | null;
  onClose: () => void;
}

export function ProjectModal({ work, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (work) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(18, 19, 20, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          maxHeight: '90vh',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: `1px solid ${portfolioColors.parchmentBorder}`,
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FAFAF9',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BarcodeStamp code={work.recordId} />
            <StatusDot status={work.status === 'COMPLETED' ? 'Completed' : 'In progress'} />
          </div>

          <button
            type="button"
            aria-label="Close dossier"
            onClick={onClose}
            style={{
              background: 'none',
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              borderRadius: '6px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: portfolioColors.parchmentTextSecondary,
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = portfolioColors.parchmentBorderSubtle)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: '28px 24px',
            overflowY: 'auto',
          }}
        >
          {/* Title & Subtitle */}
          <div style={{ marginBottom: '20px' }}>
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
              {work.area} // {work.type}
            </span>
            <h2
              style={{
                margin: '6px 0 8px 0',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 400,
                fontSize: '1.75rem',
                letterSpacing: '-0.025em',
                color: portfolioColors.parchmentTextPrimary,
              }}
            >
              {work.title}
            </h2>
            {work.subtitle && (
              <p
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: portfolioColors.parchmentTextSecondary,
                }}
              >
                {work.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <div style={{ marginBottom: '28px' }}>
            <h3
              style={{
                margin: '0 0 10px 0',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: portfolioColors.parchmentTextPrimary,
                textTransform: 'uppercase',
              }}
            >
              System Architecture &amp; Scope
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '0.95rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: portfolioColors.parchmentTextSecondary,
              }}
            >
              {work.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ marginBottom: '28px' }}>
            <h3
              style={{
                margin: '0 0 12px 0',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: portfolioColors.parchmentTextPrimary,
                textTransform: 'uppercase',
              }}
            >
              Technical Stack &amp; Toolchain
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#F4F2EC',
                    border: `1px solid ${portfolioColors.parchmentBorder}`,
                    fontSize: '0.78rem',
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

          {/* Key Milestones & Verification */}
          {work.milestones && work.milestones.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  margin: '0 0 12px 0',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: portfolioColors.parchmentTextPrimary,
                  textTransform: 'uppercase',
                }}
              >
                Verification Evidence &amp; Milestones
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '16px',
                  borderRadius: '8px',
                  backgroundColor: '#F9F9F8',
                  border: `1px solid ${portfolioColors.parchmentBorder}`,
                }}
              >
                {work.milestones.map((ms) => (
                  <div key={ms.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color={ms.completed ? '#16A34A' : '#9C988D'} />
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: ms.completed ? 400 : 300,
                        color: ms.completed ? portfolioColors.parchmentTextPrimary : portfolioColors.parchmentTextTertiary,
                      }}
                    >
                      {ms.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
            backgroundColor: '#FAFAF9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '0.78rem', color: portfolioColors.parchmentTextTertiary }}>
            OWNER: <span style={{ color: portfolioColors.parchmentTextPrimary }}>{work.owner}</span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              size="sm"
              variant="outlined"
              onClick={onClose}
              sx={{
                color: portfolioColors.parchmentTextSecondary,
                borderColor: portfolioColors.parchmentBorder,
                fontWeight: 400,
              }}
            >
              Close
            </Button>
            <Button
              size="sm"
              variant="solid"
              component="a"
              href="https://github.com/Taha-Asad"
              target="_blank"
              rel="noopener noreferrer"
              endDecorator={<ExternalLink size={14} />}
              sx={{
                backgroundColor: portfolioColors.parchmentTextPrimary,
                color: portfolioColors.parchmentBg,
                fontWeight: 400,
              }}
            >
              View Repository
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
