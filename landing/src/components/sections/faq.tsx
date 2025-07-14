import { Button } from "../atoms/button"
import { Divider } from "../layout/divider"

const questions = [
  // Getting Started
  {
    q: "Can I incrementally adopt Effect?",
    a: "Yes! Start by refactoring small portions of your app with higher complexity. You can use Effect alongside existing Promise-based code, gradually migrating modules as you gain confidence.",
    link: "/docs"
  },
  {
    q: "Do I have to know functional programming?",
    a: "No! While Effect uses functional programming principles internally, you can be proficient by treating it as a smart Promise. Focus on the core concepts and patterns rather than FP theory.",
    link: "/docs"
  },
  {
    q: "What's the learning curve like for my team?",
    a: "Most developers become productive within 1-2 weeks. Start with basic Effect operations, error handling, and dependency injection. The type system guides you through correct usage patterns.",
    link: "/docs/quickstart"
  },
  {
    q: "Can I use Effect with React/Node.js applications?",
    a: "Absolutely! Effect works seamlessly with React (hooks, server components), Node.js APIs, Express, Fastify, and other frameworks. We provide platform-specific adapters and utilities.",
    link: "/docs"
  },
  {
    q: "How do I debug Effect applications?",
    a: "Effect provides built-in debugging tools including structured logging, tracing, metrics collection, and a visual trace viewer. Debug information is type-safe and contextual.",
    link: "/docs"
  },
  
  // Technical Implementation
  {
    q: "How is Effect different from other TypeScript libraries?",
    a: "Effect provides a unified runtime for async operations, error handling, dependency injection, and observability. Unlike Promise-based libraries, it offers structured concurrency and typed error management.",
    link: "/docs"
  },
  {
    q: "How does Effect handle error management vs try/catch?",
    a: "Effect treats errors as typed values, not exceptions. This eliminates runtime crashes, makes error handling explicit, and enables powerful retry/recovery patterns without nested try/catch blocks.",
    link: "/docs"
  },
  {
    q: "What's the migration path from Promise-based code?",
    a: "Start by wrapping existing Promise code with Effect.promise(). Gradually refactor to use Effect's error handling, then add dependency injection and observability features as needed.",
    link: "/docs"
  },
  {
    q: "How does Effect compare to RxJS or Ramda?",
    a: "Effect combines reactive programming (like RxJS) with functional utilities (like Ramda) in a unified runtime. It provides better TypeScript integration, structured concurrency, and built-in error handling.",
    link: "/docs"
  },
  {
    q: "Does Effect work with popular frameworks like Next.js?",
    a: "Yes! Effect has excellent Next.js integration including server actions, API routes, middleware, and streaming responses. We provide examples and patterns for all major frameworks.",
    link: "/docs"
  },
  
  // Business & Team Adoption
  {
    q: "What companies are using Effect in production?",
    a: "Effect powers applications at companies ranging from startups to enterprises across fintech, e-commerce, and SaaS. The ecosystem includes battle-tested patterns for high-scale applications.",
    link: "/docs"
  },
  {
    q: "Does Effect scale for large applications?",
    a: "Effect was designed for production from day one. It provides excellent performance with structured concurrency, efficient memory usage, and powerful observability for finding bottlenecks.",
    link: "/docs"
  },
  {
    q: "How does Effect improve team productivity?",
    a: "Effect reduces debugging time through structured logging, eliminates runtime errors via typed error handling, and improves code reusability through dependency injection and composability.",
    link: "/docs"
  },
  
  // Performance & Production
  {
    q: "What's the minimum bundle size?",
    a: "The core Effect runtime is ~15KB compressed and tree-shaken. Additional modules scale with usage. Using 100KB of Effect code typically replaces 1MB+ of traditional dependencies.",
    link: "/docs"
  },
  {
    q: "How does Effect perform in production?",
    a: "Effect provides superior performance through structured concurrency, efficient resource management, and zero-overhead abstractions. Built-in observability helps optimize performance bottlenecks.",
    link: "/docs"
  },
  {
    q: "What production tooling does Effect provide?",
    a: "Effect includes comprehensive observability with metrics, traces, logs, health checks, and a visual trace viewer. All tooling is built-in and type-safe.",
    link: "/docs"
  },
  
  // Ecosystem & Community
  {
    q: "The library is huge, do I have to know it all?",
    a: "No! Focus on 2-3 core modules for 80% of productivity gains. Each module solves specific problems - use what you need. The ecosystem grows with your requirements.",
    link: "/docs"
  },
  {
    q: "What's the Effect ecosystem like?",
    a: "Effect provides a rich ecosystem of packages for HTTP, databases, validation, CLI tools, and more. The ecosystem is designed for composability and consistency across all packages.",
    link: "/docs"
  }
]

const questionCategories = [
  {
    title: "Getting Started",
    questions: questions.slice(0, 5)
  },
  {
    title: "Technical Implementation", 
    questions: questions.slice(5, 10)
  },
  {
    title: "Business & Team Adoption",
    questions: questions.slice(10, 13)
  },
  {
    title: "Performance & Production",
    questions: questions.slice(13, 16)
  },
  {
    title: "Ecosystem & Community",
    questions: questions.slice(16, 18)
  }
]

export const FAQ = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pb-24 pt-32">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-16">
          Frequently asked questions
        </h2>
        <div className="space-y-16">
          {questionCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-display text-xl text-white text-center mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.questions.map(({ q, a, link }, index) => (
                  <div key={index} className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800/50">
                    <h4 className="font-medium text-white text-sm mb-3">{q}</h4>
                    <p className="text-sm text-zinc-300 mb-4">{a}</p>
                    <Button href={link} secondary>
                      Learn more
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center">
            <div className="bg-zinc-900/50 rounded-lg p-8 border border-zinc-800/50 inline-block">
              <h3 className="font-medium text-white text-lg mb-3">Any more questions?</h3>
              <p className="text-zinc-300 mb-6">
                Feel free to reach out in our Discord community!
              </p>
              <Button href="https://discord.gg/effect-ts" external>
                Join our Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  )
}
