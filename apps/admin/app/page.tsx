'use client';

import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Table from '@mui/joy/Table';
import {
  portfolioColors,
  HairlinePanel,
  BarcodeStamp,
  StatusDot,
} from '@portfolio/ui';
import { Plus, Save, Terminal, ShieldCheck } from 'lucide-react';

export default function AdminCuratorPage() {
  const [activeSection, setActiveSection] = useState<'works' | 'actions' | 'logs'>('works');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: portfolioColors.parchmentBg,
        fontFamily: 'code',
      }}
    >
      {/* Admin Header */}
      <Box
        component="header"
        sx={{
          height: 48,
          backgroundColor: portfolioColors.slateDockBg,
          borderBottom: `1px solid ${portfolioColors.slateDockBorder}`,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: portfolioColors.slateTextPrimary,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Terminal size={18} color={portfolioColors.statusGreen} />
          <Typography
            level="title-sm"
            sx={{
              color: portfolioColors.slateTextPrimary,
              fontFamily: 'code',
              letterSpacing: '0.08em',
              fontWeight: 800,
            }}
          >
            PORTFOLIO CONTENT MANAGER
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.7rem' }}>
            <ShieldCheck size={14} color={portfolioColors.statusGreen} />
            <span style={{ color: portfolioColors.statusGreen }}>AUTH: TAHA ASADULLAH</span>
          </Box>
          <Button
            size="sm"
            variant="outlined"
            onClick={() => window.open('http://localhost:3000', '_blank')}
            sx={{
              fontSize: '0.68rem',
              fontFamily: 'code',
              color: portfolioColors.parchmentBg,
              borderColor: portfolioColors.slateDockBorder,
            }}
          >
            VIEW LIVE PORTFOLIO ↗
          </Button>
        </Box>
      </Box>

      {/* Main Workspace */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Navigation Sidebar */}
        <Box
          sx={{
            width: 220,
            backgroundColor: portfolioColors.slateDockSurface,
            borderRight: `1px solid ${portfolioColors.slateDockBorder}`,
            p: 1.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            level="body-xs"
            sx={{
              color: portfolioColors.slateTextSecondary,
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              px: 1,
            }}
          >
            CONTENT MANAGEMENT
          </Typography>
          {[
            { id: 'works', label: 'PROJECTS & DOSSIERS' },
            { id: 'actions', label: 'ROADMAP / SPRINTS' },
            { id: 'logs', label: 'TECHNICAL NOTES' },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeSection === tab.id ? 'solid' : 'plain'}
              onClick={() => setActiveSection(tab.id as any)}
              sx={{
                justifyContent: 'flex-start',
                fontFamily: 'code',
                fontSize: '0.72rem',
                backgroundColor: activeSection === tab.id ? portfolioColors.parchmentBg : 'transparent',
                color: activeSection === tab.id ? portfolioColors.parchmentTextPrimary : portfolioColors.slateTextSecondary,
                '&:hover': {
                  backgroundColor: portfolioColors.slateDockBorder,
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Content Editor Panel */}
        <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
          {activeSection === 'works' && (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography level="title-md" sx={{ fontFamily: 'code', fontWeight: 700 }}>
                  FEATURED ENGINEERING PROJECTS
                </Typography>
                <Button
                  size="sm"
                  startDecorator={<Plus size={14} />}
                  sx={{
                    fontFamily: 'code',
                    backgroundColor: portfolioColors.parchmentTextPrimary,
                    color: portfolioColors.parchmentBg,
                  }}
                >
                  NEW PROJECT RECORD
                </Button>
              </Box>

              <HairlinePanel sx={{ mb: 3 }}>
                <Table
                  size="sm"
                  sx={{
                    fontFamily: 'code',
                    fontSize: '0.75rem',
                    '& th': { color: portfolioColors.parchmentTextSecondary, fontSize: '0.65rem' },
                  }}
                >
                  <thead>
                    <tr>
                      <th>RECORD ID</th>
                      <th>TITLE</th>
                      <th>CATEGORY</th>
                      <th>STATUS</th>
                      <th>COMPLETION</th>
                      <th style={{ textAlign: 'right' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <BarcodeStamp code="PRJ-2026-CORBEL" />
                      </td>
                      <td>CORBEL ERP SYSTEM</td>
                      <td>COMMERCIAL</td>
                      <td>
                        <StatusDot status="In progress" />
                      </td>
                      <td>85%</td>
                      <td style={{ textAlign: 'right' }}>
                        <Button size="sm" variant="plain" sx={{ fontFamily: 'code', fontSize: '0.68rem' }}>
                          EDIT
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <BarcodeStamp code="RES-2026-BBT" />
                      </td>
                      <td>BUGBOUNTYTRACK PLATFORM</td>
                      <td>RESEARCH</td>
                      <td>
                        <StatusDot status="Planned" />
                      </td>
                      <td>25%</td>
                      <td style={{ textAlign: 'right' }}>
                        <Button size="sm" variant="plain" sx={{ fontFamily: 'code', fontSize: '0.68rem' }}>
                          EDIT
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <BarcodeStamp code="SYS-2026-TBS" />
                      </td>
                      <td>TOKEN BUCKET SANDBOX</td>
                      <td>SYSTEMS</td>
                      <td>
                        <StatusDot status="Completed" />
                      </td>
                      <td>100%</td>
                      <td style={{ textAlign: 'right' }}>
                        <Button size="sm" variant="plain" sx={{ fontFamily: 'code', fontSize: '0.68rem' }}>
                          EDIT
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </HairlinePanel>
            </Box>
          )}

          {activeSection === 'actions' && (
            <Box>
              <Typography level="title-md" sx={{ fontFamily: 'code', fontWeight: 700, mb: 2 }}>
                ROADMAP &amp; SPRINT ACTIONS
              </Typography>
              <HairlinePanel>
                <Typography level="body-xs" sx={{ fontFamily: 'code', color: portfolioColors.parchmentTextSecondary }}>
                  Configure active tasks, deadlines, priorities, and project associations visible on your portfolio.
                </Typography>
              </HairlinePanel>
            </Box>
          )}

          {activeSection === 'logs' && (
            <Box>
              <Typography level="title-md" sx={{ fontFamily: 'code', fontWeight: 700, mb: 2 }}>
                TECHNICAL NOTES &amp; LOGS
              </Typography>
              <HairlinePanel sx={{ p: 2 }}>
                <Typography level="body-xs" sx={{ fontFamily: 'code', color: portfolioColors.parchmentTextSecondary, mb: 1 }}>
                  POST NEW TECHNICAL LOG
                </Typography>
                <Textarea
                  minRows={4}
                  placeholder="Record architecture insights, engineering lessons, or system designs..."
                  sx={{
                    fontFamily: 'code',
                    fontSize: '0.75rem',
                    mb: 2,
                    backgroundColor: '#EDE7DC',
                  }}
                />
                <Button
                  size="sm"
                  startDecorator={<Save size={14} />}
                  sx={{
                    fontFamily: 'code',
                    backgroundColor: portfolioColors.parchmentTextPrimary,
                    color: portfolioColors.parchmentBg,
                  }}
                >
                  SAVE NOTE
                </Button>
              </HairlinePanel>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
