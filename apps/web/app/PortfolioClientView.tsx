'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { WorksSection } from '../components/WorksSection';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { DashboardOverview } from '@portfolio/types';

export interface PortfolioClientViewProps {
  initialOverview?: DashboardOverview | null;
}

export function PortfolioClientView({ initialOverview }: PortfolioClientViewProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F9F9F8',
      }}
    >
      {/* 1. Sticky Responsive Navbar */}
      <Navbar />

      {/* 2. Main Page Flow */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <HeroSection />

        {/* Selected Works Section */}
        <WorksSection works={initialOverview?.recentWorks} />

        {/* Architectural Principles */}
        <ArchitectureSection />

        {/* Chronological Milestones & Experience */}
        <ExperienceSection />

        {/* About Taha Asadullah */}
        <AboutSection />

        {/* Direct Contact & Outreach */}
        <ContactSection />
      </main>

      {/* 3. Minimal Footer */}
      <Footer />
    </div>
  );
}
