'use client';

import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import {
  portfolioColors,
  BarcodeStamp,
  ProgressRing,
  StatusDot,
} from '@portfolio/ui';
import { Work } from '@portfolio/types';
import { WireframeTurntable } from './3d/WireframeTurntable';
import { Check, Circle, Code2 } from 'lucide-react';

export interface RecordInspectorProps {
  work?: Work | null;
}

export function RecordInspector({ work }: RecordInspectorProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Default flagship project (Corbel ERP)
  const record: Partial<Work> = work || {
    recordId: 'PRJ-2026-CORBEL',
    title: 'CORBEL ERP SYSTEM',
    subtitle: 'Offline-First Desktop ERP & Financial Core for Wholesale, Retail & Distribution SMBs.',
    type: 'PROJECT',
    status: 'IN_PROGRESS',
    area: 'Commercial Software',
    owner: 'Taha Asadullah',
    progress: 85,
    description:
      'High-reliability desktop ERP built with Tauri 2, React 19, Mantine, and SQLite in Rust (sqlx). Engineered using strict TDD test-first methodology with 494 passing automated tests.',
    tags: ['rust', 'tauri-2', 'sqlite', 'react-19', 'financial-core', 'tdd'],
  };

  return (
    <aside
      style={{
        width: '340px',
        minWidth: '340px',
        backgroundColor: portfolioColors.parchmentSurface,
        borderLeft: `1px solid ${portfolioColors.parchmentBorder}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
        fontFamily: 'monospace',
      }}
    >
      {/* Dossier Header */}
      <div
        style={{
          padding: '12px',
          borderBottom: `1px solid ${portfolioColors.parchmentBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          level="title-sm"
          sx={{
            fontFamily: 'code',
            letterSpacing: '0.08em',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: portfolioColors.parchmentTextPrimary,
          }}
        >
          PROJECT DOSSIER
        </Typography>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <Code2 size={13} color={portfolioColors.parchmentTextSecondary} />
        </div>
      </div>

      {/* Accession Code & Status */}
      <div
        style={{
          padding: '12px',
          borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography level="body-xs" sx={{ color: portfolioColors.parchmentTextSecondary, fontSize: '0.62rem' }}>
            RECORD ID
          </Typography>
          <BarcodeStamp code={record.recordId || 'PRJ-2026-CORBEL'} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
          <Typography level="body-xs" sx={{ color: portfolioColors.parchmentTextSecondary, fontSize: '0.65rem' }}>
            CATEGORY: <strong style={{ color: portfolioColors.parchmentTextPrimary }}>{record.type}</strong>
          </Typography>
          <StatusDot status={record.status ? record.status.replace('_', ' ') : 'In progress'} />
        </div>
      </div>

      {/* Title & Core Overview */}
      <div style={{ padding: '12px', borderBottom: `1px solid ${portfolioColors.parchmentBorderSubtle}` }}>
        <Typography
          level="title-md"
          sx={{
            fontFamily: 'code',
            fontSize: '0.88rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: portfolioColors.parchmentTextPrimary,
            mb: 0.5,
          }}
        >
          {record.title}
        </Typography>
        <Typography
          level="body-xs"
          sx={{
            fontFamily: 'code',
            fontSize: '0.68rem',
            color: portfolioColors.parchmentTextSecondary,
            lineHeight: 1.4,
          }}
        >
          {record.subtitle || record.description}
        </Typography>

        {/* Metadata Specs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            marginTop: '12px',
            paddingTop: '8px',
            borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
            fontSize: '0.62rem',
          }}
        >
          <div>
            <span style={{ color: portfolioColors.parchmentTextSecondary }}>DOMAIN</span>
            <br />
            <strong>{record.area || 'Commercial Software'}</strong>
          </div>
          <div>
            <span style={{ color: portfolioColors.parchmentTextSecondary }}>LEAD ENGINEER</span>
            <br />
            <strong>{record.owner || 'Taha Asadullah'}</strong>
          </div>
          <div>
            <span style={{ color: portfolioColors.parchmentTextSecondary }}>ARCHITECTURE</span>
            <br />
            <strong>Offline-First / Desktop</strong>
          </div>
          <div>
            <span style={{ color: portfolioColors.parchmentTextSecondary }}>TEST SUITE</span>
            <br />
            <strong style={{ color: portfolioColors.statusGreen }}>494 Passing Tests</strong>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(_, val) => setActiveTab(val as number)}
        sx={{ backgroundColor: 'transparent', flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <TabList
          size="sm"
          sx={{
            backgroundColor: '#E6DFCF',
            borderBottom: `1px solid ${portfolioColors.parchmentBorder}`,
            p: 0.25,
            gap: 0.5,
          }}
        >
          {['OVERVIEW', 'TECH STACK', 'TEST EVIDENCE'].map((tabLabel) => (
            <Tab
              key={tabLabel}
              sx={{
                fontSize: '0.62rem',
                fontFamily: 'code',
                letterSpacing: '0.04em',
                py: 0.4,
                px: 1,
                borderRadius: '1px',
                '&.Mui-selected': {
                  backgroundColor: portfolioColors.parchmentSurface,
                  fontWeight: 700,
                  color: portfolioColors.parchmentTextPrimary,
                },
              }}
            >
              {tabLabel}
            </Tab>
          ))}
        </TabList>

        <TabPanel value={0} sx={{ p: 1.5, flex: 1 }}>
          {/* Interactive 3D Architecture Viewport */}
          <WireframeTurntable height={140} />

          {/* Description */}
          <div style={{ marginTop: '12px' }}>
            <Typography
              level="body-xs"
              sx={{
                color: portfolioColors.parchmentTextSecondary,
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                mb: 0.5,
              }}
            >
              SYSTEM DESCRIPTION
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                fontSize: '0.68rem',
                lineHeight: 1.45,
                color: portfolioColors.parchmentTextPrimary,
              }}
            >
              {record.description}
            </Typography>
          </div>

          {/* Tags / Stack */}
          <div style={{ marginTop: '12px' }}>
            <Typography
              level="body-xs"
              sx={{
                color: portfolioColors.parchmentTextSecondary,
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                mb: 0.5,
              }}
            >
              CORE TECHNOLOGIES
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {(record.tags || ['rust', 'tauri', 'sqlite']).map((tag) => (
                <Chip
                  key={tag}
                  size="sm"
                  variant="outlined"
                  sx={{
                    fontFamily: 'code',
                    fontSize: '0.62rem',
                    borderRadius: '1px',
                    borderColor: portfolioColors.parchmentBorder,
                    backgroundColor: portfolioColors.parchmentBg,
                    color: portfolioColors.parchmentTextPrimary,
                    py: 0.2,
                  }}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>

          {/* Progress & Milestones */}
          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: `1px solid ${portfolioColors.parchmentBorderSubtle}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div>
                <Typography level="body-xs" sx={{ color: portfolioColors.parchmentTextSecondary, fontSize: '0.62rem' }}>
                  COMPLETION
                </Typography>
                <ProgressRing progress={record.progress || 85} size={50} />
              </div>

              <div style={{ flex: 1, marginLeft: '16px' }}>
                <Typography level="body-xs" sx={{ color: portfolioColors.parchmentTextSecondary, fontSize: '0.62rem', mb: 0.5 }}>
                  SDLC MILESTONES
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Domain Architecture</span>
                    <Check size={11} color={portfolioColors.statusGreen} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Full-Stack Entity Parity</span>
                    <Check size={11} color={portfolioColors.statusGreen} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>QA &amp; Verification (494 Tests)</span>
                    <Check size={11} color={portfolioColors.statusGreen} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Release Packaging</span>
                    <Circle size={8} color={portfolioColors.parchmentBorder} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={1} sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontSize: '0.68rem', lineHeight: 1.5 }}>
            Detailed breakdown of Rust backend crates, SQLite schema migrations, Tauri 2 IPC boundaries, and React 19 UI state synchronization.
          </Typography>
        </TabPanel>

        <TabPanel value={2} sx={{ p: 1.5 }}>
          <Typography level="body-xs" sx={{ fontSize: '0.68rem', lineHeight: 1.5 }}>
            Automated test results, property-based tests, SQL integrity assertions, and benchmark logs.
          </Typography>
        </TabPanel>
      </Tabs>
    </aside>
  );
}
