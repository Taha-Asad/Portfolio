'use client';

import React, { useMemo } from 'react';
import Typography from '@mui/joy/Typography';

export interface BarcodeStampProps {
  code: string;
  className?: string;
}

export function BarcodeStamp({ code, className }: BarcodeStampProps) {
  // Deterministic SVG barcode generation based on string chars
  const bars = useMemo(() => {
    const list: number[] = [];
    for (let i = 0; i < code.length * 3; i++) {
      const charCode = code.charCodeAt(i % code.length);
      const width = (charCode + i) % 3 === 0 ? 3 : (charCode + i) % 2 === 0 ? 2 : 1;
      list.push(width);
    }
    return list;
  }, [code]);

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
    >
      <svg
        height="18"
        viewBox={`0 0 ${bars.length * 3} 18`}
        style={{ opacity: 0.85 }}
        aria-hidden="true"
      >
        {bars.map((w, idx) => (
          <rect
            key={idx}
            x={idx * 3}
            y="0"
            width={w}
            height="18"
            fill="currentColor"
          />
        ))}
      </svg>
      <Typography
        level="body-xs"
        sx={{
          fontFamily: 'code',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        {code}
      </Typography>
    </div>
  );
}
