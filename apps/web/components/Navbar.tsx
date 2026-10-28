'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { portfolioColors } from '@portfolio/ui';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Works', href: '/#works' },
    { label: 'Architecture', href: '/#architecture' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(249, 249, 248, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${portfolioColors.parchmentBorder}`,
        transition: 'all 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '6px',
              backgroundColor: portfolioColors.parchmentTextPrimary,
              color: portfolioColors.parchmentBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            TA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: portfolioColors.parchmentTextPrimary,
              }}
            >
              TAHA ASADULLAH
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 400,
                color: portfolioColors.parchmentTextSecondary,
                letterSpacing: '0.04em',
              }}
            >
              SYSTEMS &amp; FULL-STACK
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 400,
                color: portfolioColors.parchmentTextSecondary,
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = portfolioColors.parchmentTextPrimary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = portfolioColors.parchmentTextSecondary)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '14px',
          }}
          className="desktop-actions"
        >
          {/* Availability Status Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '5px 10px',
              borderRadius: '20px',
              backgroundColor: '#EAF7EE',
              border: '1px solid #D1EED7',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: '#1A6E3B',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#16A34A',
                boxShadow: '0 0 0 2px rgba(22, 163, 74, 0.2)',
              }}
            />
            Available for Roles
          </div>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/Taha-Asad"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              color: portfolioColors.parchmentTextPrimary,
              border: `1px solid ${portfolioColors.parchmentBorder}`,
              textDecoration: 'none',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = portfolioColors.parchmentBorderSubtle)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Contact Button */}
          <Button
            size="sm"
            component="a"
            href="#contact"
            variant="solid"
            sx={{
              backgroundColor: portfolioColors.parchmentTextPrimary,
              color: portfolioColors.parchmentBg,
              fontSize: '0.82rem',
              fontWeight: 400,
              px: 2,
              '&:hover': {
                backgroundColor: '#2A2C2E',
              },
            }}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: 'none',
            border: `1px solid ${portfolioColors.parchmentBorder}`,
            borderRadius: '6px',
            cursor: 'pointer',
            color: portfolioColors.parchmentTextPrimary,
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
            backgroundColor: portfolioColors.parchmentSurface,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 400,
                color: portfolioColors.parchmentTextPrimary,
                padding: '8px 0',
                borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
              }}
            >
              {item.label}
            </a>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#1A6E3B' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
              Available for Roles
            </div>
            <a
              href="https://github.com/Taha-Asad"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.85rem',
                color: portfolioColors.parchmentTextSecondary,
                textDecoration: 'none',
              }}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>

          <Button
            component="a"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              backgroundColor: portfolioColors.parchmentTextPrimary,
              color: portfolioColors.parchmentBg,
              mt: 1,
              width: '100%',
            }}
          >
            Get in Touch
          </Button>
        </div>
      )}

      {/* Responsive Breakpoint CSS */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
