# FAQ Section for Effect Landing Page

## Frequently Asked Questions

### Q: I already use TypeScript. What does Effect add?

TypeScript prevents type errors. Effect prevents runtime failures:
- **TypeScript**: "This function returns a string"
- **Effect**: "This function returns a string, might fail with NetworkError or ValidationError, needs a Database service, and takes 2-5 seconds"

Your code becomes self-documenting about what can actually go wrong in production.

### Q: How much do I need to learn?

Start with three concepts that solve 80% of problems:
1. **Effect.tryPromise** - Wrap existing async code
2. **Effect.retry** - Add automatic retries
3. **pipe** - Compose operations

```typescript
// That's it. You're now handling errors better than most production apps
pipe(
  Effect.tryPromise(() => fetchUser(id)),
  Effect.retry(Schedule.exponential("1 second")),
  Effect.catchTag("UserNotFound", () => Effect.succeed(guestUser))
)
```

### Q: Will this make my code harder to understand?

The opposite. New team members can see:
- What errors each function might throw
- What services each module depends on
- How long operations typically take
- Where retries and fallbacks exist

No more archaeology through logs to understand system behavior.

### Q: What's the overhead?

**Bundle size**: ~15KB for core (smaller than most validation libraries)
**Runtime**: <5% overhead, but prevents performance disasters like:
- Uncontrolled parallel API calls exhausting connection pools
- Missing timeouts causing request pile-ups
- Memory leaks from forgotten cleanup

Most teams see performance improve because Effect prevents the bad patterns.

### Q: Can I use my existing libraries?

Yes. Effect wraps any Promise-based code:

```typescript
// Your existing libraries still work
const result = await Effect.runPromise(
  Effect.tryPromise(() => stripe.charges.create(params))
)

// But now with superpowers
const resilientCharge = pipe(
  Effect.tryPromise(() => stripe.charges.create(params)),
  Effect.retry(Schedule.exponential("1 second")),
  Effect.timeout("30 seconds"),
  Effect.withSpan("stripe-charge")
)
```

### Q: What about testing?

Testing becomes trivial. Swap real services for test versions:

```typescript
// Production
const program = pipe(
  getUserPreferences,
  Effect.flatMap(sendEmail),
  Effect.provide(LiveEmailService)
)

// Test - no mocking libraries needed
test("sends welcome email", () => {
  const result = Effect.runSync(
    program.pipe(Effect.provide(TestEmailService))
  )
  expect(TestEmailService.sentEmails).toContain("welcome")
})
```

### Q: Is this overkill for a simple CRUD app?

Even "simple" apps aren't simple in production:
- Database connection pools need management
- External APIs fail and need retries  
- Background jobs need error handling
- Webhook processing needs concurrency control

Effect handles these patterns consistently instead of ad-hoc solutions.

### Q: How do I convince my team?

Start small. Pick one problem everyone hates:
- That flaky integration that pages you at 3am
- The background job that randomly fails
- The webhook endpoint that drops events

Fix it with Effect. The code quality speaks for itself.

### Q: What if I get stuck?

- **Discord community**: 5,000+ developers, median response time <1 hour
- **Extensive docs**: Every API with runnable examples
- **AI-friendly**: LLMs understand Effect patterns well
- **Type-driven**: If it compiles, it usually works

### Q: Does this work with serverless?

Perfectly. Effect's design matches serverless constraints:
- Fast startup (no runtime DI container)
- Explicit resource management (no connection leaks)
- Structured concurrency (stay within execution limits)
- Built-in tracing (debug across invocations)

### Q: What's the future of Effect?

Effect is solving real problems for real companies. The roadmap includes:
- Better framework integrations
- More pre-built service implementations
- Enhanced debugging tools
- Performance optimizations

But the core API is stable—code you write today will keep working.

### Q: Why haven't I heard of Effect before?

Effect focused on solving problems before marketing. Now it's proven in production:
- Handling billions of requests at scale
- Powers critical infrastructure at major companies
- Growing 50% month-over-month
- Most developers who try it for one project use it for the next

### Q: What's the catch?

The syntax is different. You'll write `pipe` instead of `.`. You'll use generators for complex flows. It takes a week to feel natural.

In exchange, you get production systems that don't wake you up at night.

### Q: Should I use Effect for my next project?

If you're building:
- An AI application with complex pipelines
- A service handling real money or user data
- A system that needs to stay up
- Anything where errors have consequences

Then yes. Effect turns runtime surprises into compile-time conversations.