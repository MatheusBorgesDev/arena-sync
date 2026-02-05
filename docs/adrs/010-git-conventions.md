# ADR 010: Git Commit Conventions

* **Status:** Accepted
* **Date:** 2026-02-05
* **Author:** Matheus Borges

## 1. Context
A messy git history makes it difficult to generate changelogs, understand the project's evolution, and perform bisects to find bugs. We need a standardized way to write commit messages.

## 2. Decision
We will adopt the **Conventional Commits** specification enforced by **Commitlint** and **Husky**.

Structure: `type(scope): description`

Allowed Types:
* `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `ci`, `build`.

## 3. Consequences
* **Pros:** Automated versioning and changelogs (future), clear readability.
* **Cons:** Developers cannot commit using generic messages like "wip" or "fix".