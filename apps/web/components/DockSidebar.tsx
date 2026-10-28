'use client';

import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {
  LayoutDashboard,
  FolderGit2,
  ListTodo,
  FileCode2,
  Cpu,
  FileText,
  Mail,
  CircleDot,
  Terminal,
} from 'lucide-react';
import { portfolioColors } from '@portfolio/ui';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: 'OVERVIEW', icon: <LayoutDashboard size={15} />, active: true },
  { label: 'PROJECTS', icon: <FolderGit2 size={15} /> },
  { label: 'SPRINTS & ROADMAP', icon: <ListTodo size={15} /> },
  { label: 'TECHNICAL LOGS', icon: <FileCode2 size={15} /> },
  { label: 'STACK & SKILLS', icon: <Cpu size={15} /> },
  { label: 'RESUME', icon: <FileText size={15} /> },
  { label: 'CONTACT', icon: <Mail size={15} /> },
];

const activeProjects = [
  { name: 'Corbel ERP (v1.3.0)', tag: 'Rust • Tauri 2' },
  { name: 'BugBountyTrack FYP', tag: 'Next.js • Crypto' },
  { name: 'TrialSandbox', tag: 'TDD • Concurrency' },
];

export function DockSidebar() {
  return (
    <Box
      component="aside"
      sx={{
        width: 250,
        minWidth: 250,
        backgroundColor: portfolioColors.slateDockBg,
        borderRight: `1px solid ${portfolioColors.slateDockBorder}`,
        color: portfolioColors.slateTextPrimary,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflowY: 'auto',
        userSelect: 'none',
      }}
    >
      {/* Engineer Profile Header */}
      <Box
        component="div"
        sx={{
          p: 2,
          borderBottom: `1px solid ${portfolioColors.slateDockBorder}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div
            style={{
              width: 28,
              height: 28,
              backgroundColor: portfolioColors.slateDockSurface,
              border: `1.5px solid ${portfolioColors.slateDockBorder}`,
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Terminal size={15} color={portfolioColors.slateTextPrimary} />
          </div>
          <div>
            <Typography
              level="title-sm"
              sx={{
                color: portfolioColors.slateTextPrimary,
                fontFamily: 'code',
                letterSpacing: '0.08em',
                fontWeight: 800,
                fontSize: '0.85rem',
                lineHeight: 1.2,
              }}
            >
              TAHA ASADULLAH
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                color: portfolioColors.slateTextSecondary,
                fontSize: '0.64rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              SOFTWARE ENGINEER
            </Typography>
          </div>
        </div>

        {/* Availability & Stack Status */}
        <div
          style={{
            marginTop: '12px',
            padding: '10px',
            backgroundColor: portfolioColors.slateDockSurface,
            border: `1px solid ${portfolioColors.slateDockBorder}`,
            borderRadius: '1px',
            fontSize: '0.68rem',
            fontFamily: 'code',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <Typography level="body-xs" sx={{ color: portfolioColors.slateTextSecondary, fontSize: '0.64rem' }}>
              AVAILABILITY
            </Typography>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Typography level="body-xs" sx={{ color: portfolioColors.statusGreen, fontSize: '0.64rem', fontWeight: 700 }}>
                OPEN TO WORK
              </Typography>
              <CircleDot size={8} color={portfolioColors.statusGreen} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography level="body-xs" sx={{ color: portfolioColors.slateTextSecondary, fontSize: '0.64rem' }}>
              PRIMARY FOCUS
            </Typography>
            <Typography level="body-xs" sx={{ color: portfolioColors.slateTextPrimary, fontSize: '0.64rem', fontWeight: 600 }}>
              BACKEND &amp; SYSTEMS
            </Typography>
          </div>
        </div>
      </Box>

      {/* Navigation */}
      <Box component="div" sx={{ p: 1, flex: 1 }}>
        <Typography
          level="body-xs"
          sx={{
            color: portfolioColors.slateTextSecondary,
            fontSize: '0.64rem',
            fontFamily: 'code',
            letterSpacing: '0.1em',
            px: 1,
            py: 0.5,
            textTransform: 'uppercase',
          }}
        >
          SECTIONS
        </Typography>
        <List size="sm" sx={{ gap: 0.25 }}>
          {navItems.map((item) => (
            <ListItem key={item.label}>
              <ListItemButton
                selected={item.active}
                sx={{
                  borderRadius: '1px',
                  py: 0.6,
                  px: 1.25,
                  fontSize: '0.74rem',
                  fontFamily: 'code',
                  letterSpacing: '0.04em',
                  color: item.active
                    ? portfolioColors.parchmentBg
                    : portfolioColors.slateTextSecondary,
                  backgroundColor: item.active
                    ? `${portfolioColors.slateDockSurface}`
                    : 'transparent',
                  border: item.active
                    ? `1px solid ${portfolioColors.slateDockBorder}`
                    : '1px solid transparent',
                  '&:hover': {
                    backgroundColor: portfolioColors.slateDockSurface,
                    color: portfolioColors.slateTextPrimary,
                  },
                }}
              >
                <ListItemDecorator sx={{ color: 'inherit', minInlineSize: 24 }}>
                  {item.icon}
                </ListItemDecorator>
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Featured Codebases */}
        <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: `1px solid ${portfolioColors.slateDockBorder}` }}>
          <Typography
            level="body-xs"
            sx={{
              color: portfolioColors.slateTextSecondary,
              fontSize: '0.64rem',
              fontFamily: 'code',
              letterSpacing: '0.1em',
              px: 1,
              py: 0.5,
              textTransform: 'uppercase',
            }}
          >
            ACTIVE CODEBASES
          </Typography>
          <List size="sm" sx={{ gap: 0.2 }}>
            {activeProjects.map((proj) => (
              <ListItem key={proj.name}>
                <ListItemButton
                  sx={{
                    borderRadius: '1px',
                    py: 0.4,
                    px: 1.25,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    '&:hover': {
                      backgroundColor: portfolioColors.slateDockSurface,
                    },
                  }}
                >
                  <Typography level="body-xs" sx={{ color: portfolioColors.slateTextPrimary, fontSize: '0.72rem', fontFamily: 'code' }}>
                    {proj.name}
                  </Typography>
                  <Typography level="body-xs" sx={{ color: portfolioColors.slateTextSecondary, fontSize: '0.6rem', fontFamily: 'code' }}>
                    {proj.tag}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Box>

      {/* Engineering Environment Specs */}
      <Box
        component="div"
        sx={{
          p: 1.5,
          borderTop: `1px solid ${portfolioColors.slateDockBorder}`,
          backgroundColor: portfolioColors.slateDockSurface,
          fontFamily: 'code',
        }}
      >
        <Typography
          level="body-xs"
          sx={{
            color: portfolioColors.slateTextSecondary,
            fontSize: '0.62rem',
            letterSpacing: '0.1em',
            mb: 0.75,
            textTransform: 'uppercase',
          }}
        >
          ENVIRONMENT STACK
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px', fontSize: '0.66rem' }}>
          <span style={{ color: portfolioColors.slateTextSecondary }}>CORE TECH</span>
          <span style={{ color: portfolioColors.slateTextPrimary }}>Rust • Next.js • NestJS</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px', fontSize: '0.66rem' }}>
          <span style={{ color: portfolioColors.slateTextSecondary }}>DATABASE</span>
          <span style={{ color: portfolioColors.slateTextPrimary }}>PostgreSQL • SQLite</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem' }}>
          <span style={{ color: portfolioColors.slateTextSecondary }}>PORTFOLIO RUNTIME</span>
          <span style={{ color: portfolioColors.statusGreen }}>Next.js 16 • React 19</span>
        </div>
      </Box>
    </Box>
  );
}
