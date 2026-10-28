'use client';

import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { portfolioTheme } from './portfolioTheme';

export interface PortfolioThemeProviderProps {
  children: React.ReactNode;
}

export function PortfolioThemeProvider({ children }: PortfolioThemeProviderProps) {
  return (
    <CssVarsProvider theme={portfolioTheme} defaultMode="light">
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}

