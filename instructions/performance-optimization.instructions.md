---
applyTo: '*'
description: 'Performance optimization best practices for all languages, frameworks, and stacks. Actionable guidance for frontend, backend, and database optimization.'
---

# Performance Optimization Best Practices

## Core Principles

- **Measure First:** Profile before optimizing. Use Chrome DevTools, Lighthouse, language-specific profilers (Py-Spy, dotTrace, VisualVM)
- **Optimize Common Paths:** Focus on frequently executed code, not edge cases
- **Avoid Premature Optimization:** Write clear code first, optimize when necessary
- **Minimize Resources:** Use memory, CPU, network, and disk efficiently
- **Document Critical Paths:** Comment performance-critical code and non-obvious optimizations
- **Automate Testing:** Integrate performance tests in CI/CD; set and enforce performance budgets


## Frontend Optimization

**Rendering & DOM:**
- Batch DOM updates; avoid updates in loops—use document fragments
- React: Use `React.memo`, `useMemo`, `useCallback`; avoid inline functions in render
- Angular: Use OnPush change detection, `trackBy` in `ngFor`, lazy load modules
- Vue: Use computed properties, `v-show` for frequent toggles, lazy load routes
- Use stable keys in lists; prefer CSS animations over JavaScript

**Assets:**
- Compress images (WebP, AVIF); minify/bundle JS/CSS with tree-shaking
- Lazy load images (`loading="lazy"`), components (dynamic imports)
- Use CDNs, HTTP/2/3, long-lived cache headers with cache busting
- Subset fonts, use `font-display: swap`

**JavaScript:**
- Offload heavy work to Web Workers; debounce/throttle scroll/resize events
- Clean up event listeners to prevent memory leaks
- Use Maps/Sets for lookups, avoid deep cloning unless necessary

**Troubleshooting:** Chrome DevTools Performance tab, Lighthouse, WebPageTest, Core Web Vitals (LCP, FID, CLS)


## Backend Optimization

**Algorithms & Data:**
- Choose appropriate data structures (arrays, hash maps, trees); avoid O(n²) or worse
- Batch process data; use streaming for large datasets
- Cache expensive computations with TTL/event-based invalidation
- Use distributed caching (Redis, Memcached) with cache stampede protection

**Concurrency:**
- Use async/await for I/O; thread/worker pools for CPU-bound tasks
- Implement backpressure in queues; avoid race conditions with locks/atomics
- Batch network/database calls to reduce round trips

**API & Network:**
- Minimize payloads; compress responses (gzip, Brotli)
- Paginate large result sets; use cursors for real-time data
- Connection pooling for databases/external services
- Rate limiting and protocol choice (HTTP/2, gRPC, WebSockets)

**Language-Specific:**
- **Node.js:** Avoid blocking event loop; use streams; cluster for CPU tasks; profile with clinic.js
- **Python:** Use `asyncio`/`multiprocessing`; `lru_cache` for memoization; profile with Py-Spy
- **Java:** Use thread pools, tune JVM GC; `CompletableFuture` for async; profile with VisualVM
- **.NET:** Use `async/await`, `Span<T>`/`Memory<T>`; pool connections; profile with dotTrace

**Troubleshooting:** Flame graphs, distributed tracing (OpenTelemetry, Jaeger), heap dumps, slow query logs


## Database Optimization

**Queries:**
- Index frequently queried/filtered/joined columns; drop unused indexes
- Avoid `SELECT *`; use parameterized queries; analyze query plans with `EXPLAIN`
- Prevent N+1 queries with joins/batch queries; use `LIMIT`/`OFFSET` for pagination

**Schema:**
- Normalize for integrity, denormalize for read-heavy workloads
- Use efficient data types; partition large tables; archive old data regularly

**Transactions:**
- Keep transactions short; use lowest isolation level that meets consistency needs
- Avoid long-running transactions to prevent lock contention

**Scaling:**
- Use read replicas for scaling reads; monitor replication lag
- Cache query results in Redis/Memcached; shard for horizontal scaling
- For NoSQL: Design for access patterns; avoid hot partitions; understand eventual vs strong consistency

**Troubleshooting:** Slow query logs, `EXPLAIN` analysis, cache hit/miss ratios, pg_stat_statements, MySQL Performance Schema


## Code Review Checklist

- [ ] Algorithmic efficiency (avoid O(n²) or worse in hot paths)
- [ ] Appropriate data structures and caching strategies
- [ ] Database queries optimized with indexes; no N+1 queries
- [ ] Large payloads paginated/streamed; assets optimized and compressed
- [ ] No memory leaks or blocking operations in critical paths
- [ ] Performance-critical code documented and tested
- [ ] Monitoring/alerts for performance regressions

---

## Quick Reference

**Profile Tools:** Chrome DevTools, Lighthouse, Py-Spy, VisualVM, dotTrace, clinic.js, OpenTelemetry  
**Common Fixes:** Add indexes, batch queries, lazy load, compress assets, use CDN, cache results, debounce events  
**Red Flags:** `SELECT *`, blocking I/O, missing indexes, no pagination, memory leaks, global state

---

<!-- End of Performance Optimization Instructions --> 