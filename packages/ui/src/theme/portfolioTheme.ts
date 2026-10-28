'use client';

import { extendTheme } from '@mui/joy/styles';

export const portfolioColors = {
  parchmentBg: '#ECE6D8',
  parchmentSurface: '#F5F1E8',
  parchmentBorder: '#D2CBB9',
  parchmentBorderSubtle: '#E2DBD0',
  parchmentTextPrimary: '#1A1B1C',
  parchmentTextSecondary: '#63615A',
  parchmentTextTertiary: '#8C897F',

  slateDockBg: '#141517',
  slateDockSurface: '#1C1D20',
  slateDockBorder: '#282A2E',
  slateTextPrimary: '#EDEDEC',
  slateTextSecondary: '#8E9094',

  statusGreen: '#2D8A4E',
  statusBlue: '#2072B8',
  statusAmber: '#C97A1E',
  statusRed: '#B83232',
};

export const portfolioTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: portfolioColors.parchmentBg,
          surface: portfolioColors.parchmentSurface,
          level1: portfolioColors.parchmentSurface,
          level2: '#E6DFCE',
          level3: '#DCD4C0',
        },
        text: {
          primary: portfolioColors.parchmentTextPrimary,
          secondary: portfolioColors.parchmentTextSecondary,
          tertiary: portfolioColors.parchmentTextTertiary,
        },
        neutral: {
          50: '#FAF8F4',
          100: '#F5F1E8',
          200: '#ECE6D8',
          300: '#D2CBB9',
          400: '#B8AF99',
          500: '#8C8471',
          600: '#63615A',
          700: '#3D3B37',
          800: '#232220',
          900: '#141517',
          outlinedBorder: portfolioColors.parchmentBorder,
        },
        primary: {
          50: '#F5F2ED',
          100: '#E9E2D5',
          200: '#D2CBB9',
          300: '#9B9382',
          400: '#6E6656',
          500: '#232220',
          600: '#1A1B1C',
          700: '#141517',
          800: '#0E0F10',
          900: '#080809',
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
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    code: '"JetBrains Mono", "IBM Plex Mono", Menlo, Consolas, Monaco, monospace',
  },
  radius: {
    xs: '0px',
    sm: '1px',
    md: '2px',
    lg: '2px',
    xl: '2px',
  },
  shadow: {
    xs: 'none',
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '1px',
          border: `1px solid ${portfolioColors.parchmentBorder}`,
          boxShadow: 'none',
          backgroundColor: portfolioColors.parchmentSurface,
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '1px',
          fontFamily: '"JetBrains Mono", monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 600,
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '-0.01em',
        },
      },
    },
  },
});
