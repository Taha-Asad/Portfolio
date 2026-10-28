import { PrismaClient, WorkType, WorkStatus, ActionStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding portfolio database with Taha Asadullah real project records...');

  // 1. Initial System Metric
  await prisma.systemMetric.upsert({
    where: { id: 'default-system-metric' },
    update: {},
    create: {
      id: 'default-system-metric',
      totalFiles: 524,
      storageBytes: BigInt(2147483648), // 2.0 GB
      lastBackupAt: new Date(Date.now() - 2 * 3600 * 1000),
      integrityOk: true,
      systemVersion: '1.0.0',
    },
  });

  // 2. Corbel ERP Project Record
  const corbel = await prisma.work.upsert({
    where: { recordId: 'PRJ-2026-CORBEL' },
    update: {},
    create: {
      recordId: 'PRJ-2026-CORBEL',
      slug: 'corbel-erp-system',
      title: 'CORBEL ERP SYSTEM',
      subtitle: 'Offline-First Desktop ERP & Financial Core for Wholesale, Retail & Distribution SMBs.',
      description:
        'Architected with Tauri 2, React 19, Mantine, and SQLite in Rust (sqlx). Built with strict TDD test-first methodology with 494 passing automated tests.',
      type: WorkType.PROJECT,
      status: WorkStatus.IN_PROGRESS,
      area: 'Commercial Software',
      owner: 'Taha Asadullah',
      progress: 85,
      tags: ['rust', 'tauri-2', 'sqlite', 'react-19', 'accounting', 'erp', 'tdd'],
      milestones: {
        create: [
          { title: 'Core Domain Accounting Architecture', completed: true, order: 1 },
          { title: 'Full-Stack Entity & Query Parity', completed: true, order: 2 },
          { title: 'Phase 4 QA & Verification (494 Tests)', completed: true, order: 3 },
          { title: 'Release Packaging (v1.3.0)', completed: false, order: 4 },
        ],
      },
    },
  });

  // 3. BugBountyTrack Project Record
  await prisma.work.upsert({
    where: { recordId: 'RES-2026-BBT' },
    update: {},
    create: {
      recordId: 'RES-2026-BBT',
      slug: 'bugbountytrack-platform',
      title: 'BUGBOUNTYTRACK PLATFORM',
      subtitle: 'Multi-Tenant Vulnerability Disclosure Platform with Cryptographic Payload Isolation.',
      description:
        'Academic FYP evaluated prototype ensuring evidence-based remediation traceability, STRIDE threat containment, and zero-trust verification.',
      type: WorkType.RESEARCH,
      status: WorkStatus.PLANNED,
      area: 'Academic / FYP Prototype',
      owner: 'Taha Asadullah',
      progress: 25,
      tags: ['nextjs', 'postgresql', 'cryptography', 'security', 'stride', 'audit'],
    },
  });

  // 4. Token Bucket Sandbox
  await prisma.work.upsert({
    where: { recordId: 'SYS-2026-TBS' },
    update: {},
    create: {
      recordId: 'SYS-2026-TBS',
      slug: 'token-bucket-trial-sandbox',
      title: 'TOKEN BUCKET SANDBOX',
      subtitle: 'Isolated verification trial for Token Bucket distributed rate limiting.',
      description:
        'Test-driven development (TDD) trial in Rust for multi-threaded rate limiting algorithms with zero contention locks.',
      type: WorkType.SYSTEM,
      status: WorkStatus.COMPLETED,
      area: 'Systems Engineering',
      owner: 'Taha Asadullah',
      progress: 100,
      tags: ['rust', 'concurrency', 'algorithms', 'tdd'],
    },
  });

  // 5. Initial Action Items
  await prisma.actionItem.createMany({
    data: [
      {
        workId: corbel.id,
        time: '09:30',
        title: 'Audit Corbel ERP sqlx Query Isolation & Parity',
        status: ActionStatus.IN_PROGRESS,
        priority: 4,
        date: new Date(),
      },
      {
        time: '11:00',
        title: 'Finalize HOD Academic Proposal for BugBountyTrack',
        status: ActionStatus.TO_DO,
        priority: 4,
        date: new Date(),
      },
      {
        time: '14:00',
        title: 'Verify Token Bucket concurrency tests in Rust',
        status: ActionStatus.COMPLETED,
        priority: 3,
        date: new Date(),
      },
      {
        time: '16:00',
        title: 'Refactor Monorepo Workspace & Decouple Joy UI Themes',
        status: ActionStatus.IN_PROGRESS,
        priority: 4,
        date: new Date(),
      },
    ],
  });

  // 6. Initial Dev Log
  await prisma.dailyLog.create({
    data: {
      title: 'Decoupled Monorepo Architecture',
      content:
        'Decoupled the personal portfolio into a high-performance Next.js 16 + NestJS monorepo. Focused on clean information architecture, strict TDD verification evidence, and responsive spatial viewports without bloated fluff.',
      energy: 80,
      focusRate: 85,
      tags: ['systems', 'monorepo', 'nextjs', 'typescript', 'architecture'],
    },
  });

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
