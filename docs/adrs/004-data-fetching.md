# ADR 004: Data Fetching and Server State Management

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

ArenaSync relies heavily on asynchronous data (court availability, user bookings, payments). Managing loading states, caching, deduplication, and error handling manually with `useEffect` is error-prone and leads to poor user experience (e.g., waterfalls, flickering).

## 2. Decision

We will use **TanStack Query (v5+)** for all asynchronous data operations.

This establishes a clear boundary: Components request data via Hooks, and Hooks delegate execution to Services. Components never interact with `fetch` or `axios` directly.

## 3. Consequences

### Pros:

- **Decoupling:** UI components become agnostic to the data source implementation.
- **UX/Performance:** Automatic caching, background refetching, and optimistic updates are available out of the box.
- **Code Cleanliness:** Eliminates the need for boilerplate `useEffect` and local `useState` for loading/error tracking.

### Cons:

- **Paradigm Shift:** Developers must learn to think in terms of "Server State" synchronization rather than imperative fetching.
- **Overhead:** Adds bundle size, though justified by the functionality provided.
