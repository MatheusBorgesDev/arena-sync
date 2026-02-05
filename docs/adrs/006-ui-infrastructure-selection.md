# ADR 006: UI Infrastructure Selection (shadcn/ui)

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

The **ArenaSync** project requires a robust set of UI components that are accessible, highly customizable, and easy to integrate with Tailwind CSS. We had two main paths:

1. **Component Libraries (e.g., MUI, Ant Design):** Fast to start, but often act as "black boxes" that are hard to customize at a low level and add significant weight to `node_modules`.
2. **Headless UI / Custom Built:** Maximum control, but high development cost to ensure WAI-ARIA compliance and complex interaction states (e.g., Modals, Popovers).

## 2. Decision

We will adopt **shadcn/ui** as our UI infrastructure.

Unlike traditional libraries, **shadcn/ui** is a collection of re-usable components that we copy and paste into our source code. It is built on top of **Radix UI** (for accessible primitives) and **Tailwind CSS** (for styling).

## 3. Consequences

### Pros:

- **Code Ownership:** The components live within our `src/shared/components/ui` folder. We have 100% control over their code and can refactor them to fit our specific domain needs.
- **Architecture Alignment:** Radix UI's focus on **Compound Components** and the **Slot Pattern** aligns perfectly with our PDI Pillar 1 goals.
- **Accessibility:** We get industry-standard WAI-ARIA compliance out of the box.
- **Performance:** We only ship the code we actually use, avoiding the overhead of massive third-party UI bundles.

### Cons:

- **Maintenance Overhead:** Since we own the code, we are responsible for updates and potential bugs within the copied components.
- **Initial Friction:** It requires a manual step to "add" each component, unlike a single npm install.
- **Learning Curve:** Developers must understand Radix UI's composition patterns to make significant changes.

## 4. Implementation Notes

All shadcn/ui components must be placed in `src/shared/components/ui`. Any business-specific adaptations should be wrapped in feature-specific components or documented as a local refactor.
