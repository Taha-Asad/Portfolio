'use client';

import { extendTheme } from '@mui/joy/styles';

export const portfolioColors = {
  // Refined modern neutral canvas (clean, slim, high-end editorial)
  parchmentBg: '#F9F9F8',
  parchmentSurface: '#FFFFFF',
  parchmentBorder: '#E8E6DF',
  parchmentBorderSubtle: '#F2EFEB',
  parchmentTextPrimary: '#141413',
  parchmentTextSecondary: '#5A5852',
  parchmentTextTertiary: '#8C887E',

  // Dark slate accents
  slateDockBg: '#0F1012',
  slateDockSurface: '#18191C',
  slateDockBorder: '#27292D',
  slateTextPrimary: '#F2F2F2',
  slateTextSecondary: '#94969C',

  // Semantic status indicators
  statusGreen: '#16A34A',
  statusBlue: '#2563EB',
  statusAmber: '#D97706',
  statusRed: '#DC2626',
};

export const portfolioTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: portfolioColors.parchmentBg,
          surface: portfolioColors.parchmentSurface,
          level1: portfolioColors.parchmentSurface,
          level2: '#F4F2EC',
          level3: '#EBE7DE',
        },
        text: {
          primary: portfolioColors.parchmentTextPrimary,
          secondary: portfolioColors.parchmentTextSecondary,
          tertiary: portfolioColors.parchmentTextTertiary,
        },
        neutral: {
          50: '#FDFCFB',
          100: '#F9F9F8',
          200: '#F2EFEB',
          300: '#E8E6DF',
          400: '#CDC9BF',
          500: '#9C988D',
          600: '#69665E',
          700: '#42403B',
          800: '#232220',
          900: '#141413',
          outlinedBorder: portfolioColors.parchmentBorder,
        },
        primary: {
          50: '#F9F9F8',
          100: '#F2EFEB',
          200: '#E8E6DF',
          300: '#CDC9BF',
          400: '#69665E',
          500: '#141413',
          600: '#10100F',
          700: '#0C0D0D',
          800: '#080808',
          900: '#000000',
        },
        success: {
          solidBg: portfolioColors.statusGreen,
          outlinedColor: portfolioColors.statusGreen,
        },
        warning: {
          solidBg: portfolioColors.statusAmber,
          outlinedColor: portfolioColors.statusAmber,
        },
        danger: {
          solidBg: portfolioColors.statusRed,
          outlinedColor: portfolioColors.statusRed,
        },
      },
    },
  },
  fontFamily: {
    body: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    code: '"JetBrains Mono", Menlo, Monaco, Consolas, monospace',
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadow: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.03)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
    xl: 'none',
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: `1px solid ${portfolioColors.parchmentBorder}`,
          boxShadow: 'none',
          backgroundColor: portfolioColors.parchmentSurface,
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
          fontWeight: 400,
          letterSpacing: '-0.01em',
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
          letterSpacing: '-0.015em',
        },
      },
    },
  },
});
