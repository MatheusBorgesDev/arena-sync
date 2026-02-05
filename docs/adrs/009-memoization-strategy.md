# ADR 009: Memoization Strategy (React Compiler)

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

In traditional React development, performance optimization relies heavily on manual memoization APIs (`useMemo`, `useCallback`, `React.memo`). This approach has significant drawbacks:

1.  **Cognitive Load:** Developers must constantly decide what to memoize.
2.  **Brittle Code:** Missing a dependency in the array invalidates the optimization.
3.  **Visual Noise:** Business logic gets buried under boilerplate hooks.

With the release of React 19 and Next.js 15+, the ecosystem introduced the **React Compiler** (formerly React Forget) to automate this process.

## 2. Decision

We will enable and rely on the **React Compiler** for automatic memoization.

## 3. Consequences

### Pros:

- **DX (Developer Experience):** We write idiomatic JavaScript/TypeScript without worrying about referential equality of functions or objects passed as props.
- **Performance by Default:** The compiler optimizes components at a granular level that is hard to achieve manually.
- **Cleaner Codebase:** Significant reduction in `useMemo` and `useCallback` usage.

### Cons:

- **Debugging:** Issues related to re-renders might be harder to trace if the compiler's behavior is opaque (though React DevTools are adapting).
- **Strictness:** The code _must_ strictly follow the "Rules of React". Violations that previously worked by luck might break or de-opt the compiler.

## 4. Implementation Guidelines

- Developers should **avoid** manual `useMemo` or `useCallback` unless strictly necessary for specific edge cases or interoperability with external libraries that require stable references.
- We trust the compiler to handle the render lifecycle.
