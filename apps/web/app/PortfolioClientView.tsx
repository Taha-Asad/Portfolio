'use client';

import React, { useState } from 'react';
import { DockSidebar } from '../components/DockSidebar';
import { TopBar } from '../components/TopBar';
import { OverviewRow } from '../components/OverviewRow';
import { RecentWorks } from '../components/RecentWorks';
import { ScheduleAndLog } from '../components/ScheduleAndLog';
import { RecordInspector } from '../components/RecordInspector';
import { StatusBar } from '../components/StatusBar';
import { portfolioColors } from '@portfolio/ui';
import { DashboardOverview, Work } from '@portfolio/types';

export interface PortfolioClientViewProps {
  initialOverview?: DashboardOverview | null;
}

export function PortfolioClientView({ initialOverview }: PortfolioClientViewProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: portfolioColors.parchmentBg,
      }}
    >
      {/* Main Workstation Layout (Sidebar + Content Workspace + Inspector) */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {/* Left Dark Navigation Dock */}
        <DockSidebar />

        {/* Center Workspace Canvas */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          {/* Top Bar Header */}
          <TopBar />

          {/* Scrollable Canvas */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              backgroundColor: portfolioColors.parchmentBg,
            }}
          >
            {/* 1. Overview Metric Tiles */}
            <OverviewRow overview={initialOverview ?? undefined} />

            {/* 2. Recent Works Grid */}
            <RecentWorks
              works={initialOverview?.recentWorks}
              selectedWorkId={selectedWork?.id}
              onSelectWork={(work) => setSelectedWork(work)}
            />

            {/* 3. Upcoming Sprints & Technical Notes */}
            <ScheduleAndLog
              actions={initialOverview?.upcomingActions}
              log={initialOverview?.latestDailyLog}
            />
          </div>
        </div>

        {/* Right Record Inspector Panel */}
        <RecordInspector work={selectedWork} />
      </div>

      {/* Bottom Technical Status Bar */}
      <StatusBar />
    </div>
  );
}
