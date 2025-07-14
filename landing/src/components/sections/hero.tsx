"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Pill } from "../atoms/pill"
import { useEffect, useState } from "react"
import { Checklist } from "../atoms/checklist"
import { Button } from "../atoms/button"
import { Video } from "../atoms/video"

export const headlines = [
  { text: "ship faster", gradient: "from-violet-400 to-violet-600" },
  { text: "build robust apps", gradient: "from-[#5B9EE9] to-[#2F74C0]" },
  { text: "handle errors", gradient: "from-red-400 to-red-600" },
  { text: "do clustering", gradient: "from-orange-400 to-orange-600" },
  { text: "build workflows", gradient: "from-violet-400 to-violet-600" },
  { text: "manage complexity", gradient: "from-emerald-400 to-emerald-600" },
  { text: "do observability", gradient: "from-green-400 to-green-600" },
  { text: "deal with concurrency", gradient: "from-orange-400 to-orange-600" }
]

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  useEffect(() => {
    const id = setInterval(
      () =>
        setCurrentIndex((id) => (id === headlines.length - 1 ? 0 : id + 1)),
      2500
    )
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <section className="relative z-10">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-20">
        <div className="flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4">
          <div className="shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto">
            <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300">
                The best way to
              </span>
              <br />
              <span className="block relative">
                <AnimatePresence initial={false}>
                  <span className="relative opacity-0">
                    {headlines[currentIndex].text}
                  </span>
                  <motion.span
                    key={currentIndex}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className={`not-sr-only absolute top-0 -bottom-4 block text-transparent bg-clip-text bg-gradient-to-br ${headlines[currentIndex].gradient}`}
                  >
                    {headlines[currentIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300">
                in TypeScript
              </span>
            </h1>
            <p className="mt-8 mb-4 max-w-md text-zinc-300">
              Effect is a TypeScript library that provides a unified runtime for building robust, scalable applications. 
              It eliminates runtime errors through typed error handling and offers powerful tools for concurrency, 
              dependency injection, and observability.
            </p>
            <div className="md:hidden my-8">
              <Video />
            </div>
            <Checklist
              items={[
                "Maximum Type-safety with structured error handling",
                "Composable, reusable code with dependency injection",
                "Rich ecosystem: HTTP, databases, validation, CLI tools",
                "Built-in observability with tracing and metrics"
              ]}
            />
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <Button href="/docs/quickstart">Get Started</Button>
            </div>
          </div>
          <div className="hidden md:block pt-3 shrink grow">
            <Video />
          </div>
        </div>
      </div>
    </section>
  )
}
