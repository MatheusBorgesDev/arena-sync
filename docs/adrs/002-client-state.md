# ADR 002: Client-Side Global State Management

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

We need a mechanism to manage global UI states (e.g., theme preferences, sidebar visibility, complex booking forms across steps) without resorting to prop drilling. The solution must be performant, avoiding the "Context Hell" or unnecessary re-renders common in native React Context usage for rapidly changing data.

## 2. Decision

We will use **Zustand** for global client-state management.

Zustand offers a minimalistic API based on hooks and allows for state selection, ensuring components only re-render when the specific slice of state they consume changes.

## 3. Consequences

### Pros:

- **Performance:** Granular selectors prevent unnecessary re-renders without needing complex `useMemo` wrappers.
- **Simplicity:** Significantly less boilerplate compared to Redux.
- **Flexibility:** The store can be accessed outside the React component tree, which is beneficial for future service layers.

### Cons:

- **Responsibility Risk:** There is a risk of developers trying to store Server State (API data) in Zustand. We must enforce strict separation: Zustand is for _UI State_ only.
