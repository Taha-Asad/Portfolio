# Portfolio — Taha Asadullah

Personal software engineering portfolio and high-density technical workstation. Built as a decoupled TypeScript monorepo with Next.js 16 (App Router), React 19, NestJS 11, React Three Fiber, and custom MUI Joy UI design tokens.

---

## 🏛️ Architecture & Monorepo Topology

Managed via **pnpm workspaces** and **Turborepo**:

```
projects/Portfolio/
├── apps/
│   ├── web/           # Public portfolio console (Next.js 16, React 19, R3F viewports)
│   ├── admin/         # Content management terminal (Next.js 16, Joy UI)
│   └── api/           # Backend REST API (NestJS 11, Prisma ORM, JWT auth)
└── packages/
    ├── ui/            # Shared design system (MUI Joy UI tokens & atomic components)
    ├── database/      # Prisma relational schema, PostgreSQL client & seed engine
    └── types/         # Domain TypeScript contracts, DTOs & response schemas
```

---

## 🛠️ Tech Stack

* **Frontend**: Next.js 16.4.3 (App Router), React 19.3.1
* **3D Viewports**: React Three Fiber (`@react-three/fiber`), Three.js, `@react-three/drei`
* **UI & Theming**: MUI Joy UI (`@mui/joy`), custom warm parchment & matte slate design tokens
* **Backend**: NestJS 11, Passport JWT, class-validator
* **Persistence**: PostgreSQL, Prisma ORM
* **Monorepo & Tooling**: pnpm v12, Turborepo, TypeScript 5.8+

---

## 🚀 Getting Started

### Prerequisites

* Node.js v20+ (tested on v26)
* pnpm v10+ / v12+

### Installation

```bash
# Install workspace dependencies
pnpm install

# Generate Prisma client
pnpm --filter @portfolio/database db:generate
```

### Running Locally

```bash
# Run public portfolio (port 3000)
pnpm --filter @portfolio/web dev

# Run admin curation dashboard (port 3001)
pnpm --filter @portfolio/admin dev

# Run NestJS API (port 4000)
pnpm --filter @portfolio/api dev
```

### Production Build

```bash
# Build all packages and applications
pnpm --filter @portfolio/web build
pnpm --filter @portfolio/admin build
pnpm --filter @portfolio/api build
```

---

## 📋 Featured Projects Tracked

1. **Corbel ERP System**: Offline-First Desktop ERP & Financial Core built with Tauri 2, React 19, Mantine, and SQLite in Rust with 494 verified automated tests.
2. **BugBountyTrack Platform**: Multi-Tenant Vulnerability Disclosure Platform with Cryptographic Payload Isolation and Remediation Traceability.
3. **Token Bucket Sandbox**: Concurrency rate limiting trial in Rust under test-driven development (TDD).

---

## 👤 Author

**Taha Asadullah**  
*Software Engineer — Backend Systems, Rust, Next.js, Relational Databases*  
GitHub: [@Taha-Asad](https://github.com/Taha-Asad)
