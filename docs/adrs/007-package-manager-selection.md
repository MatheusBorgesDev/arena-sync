# ADR 007: Package Manager Selection

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

Dependency management is a critical part of the software supply chain. We need a tool that is fast, efficient with disk space, and enforces strict dependency resolution to prevent "phantom dependencies" (accessing packages not explicitly declared in `package.json`).

## 2. Decision

We will adopt **pnpm** as the official package manager for ArenaSync.

## 3. Consequences

### Pros:

- **Strictness:** pnpm uses a non-flat `node_modules` structure, making it impossible to import packages that are not listed in the project's `package.json`. This aligns with our strict architectural governance.
- **Performance:** Significantly faster installation times compared to npm and yarn due to its content-addressable store strategy.
- **Disk Efficiency:** Uses hard links to store packages globally on the machine, saving disk space across multiple projects.

### Cons:

- **Tooling:** Developers must ensure `pnpm` is installed globally (`npm i -g pnpm`) before starting work.
- **CI Configuration:** Requires specific setup steps in CI/CD pipelines (e.g., GitHub Actions `pnpm/action-setup`), though this is standard practice today.
