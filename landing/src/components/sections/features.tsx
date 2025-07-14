import {Button} from '../atoms/button'
import {Checklist} from '../atoms/checklist'
import {GlowingIcon} from '../atoms/glowing-icon'
import {Divider} from '../layout/divider'

export const Features = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pb-24 pt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <div className="flex items-center gap-3">
            <GlowingIcon name="blocks" />
            <h3 className="font-display text-xl text-white">Powerful building blocks</h3>
          </div>
          <p className="my-6">
            Build complex applications from simple, composable primitives. Effect's 
            functional building blocks eliminate entire classes of bugs while making 
            your code more testable and maintainable.
          </p>
          <Checklist items={['Type-safe streams and async operations', 'Built-in resource management and cleanup', 'Composable dependency injection system']} />
          <Button href="/docs" secondary className="mt-10">
            Explore building blocks
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <GlowingIcon name="plugs" />
            <h3 className="font-display text-xl text-white">No more one-off dependencies</h3>
          </div>
          <p className="my-6">
            Replace dozens of npm packages with a single, cohesive ecosystem. 
            Effect provides everything you need: validation, HTTP, databases, 
            CLI tools, and more - all designed to work together seamlessly.
          </p>
          <Checklist items={['Replace 20+ packages with unified ecosystem', 'Zero-config validation with @effect/schema', 'Full-stack HTTP with type-safe APIs']} />
          <Button href="/docs" secondary className="mt-10">
            Browse ecosystem
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <GlowingIcon name="shield" />
            <h3 className="font-display text-xl text-white">Never try & catch again</h3>
          </div>
          <p className="my-6">
            Eliminate runtime crashes with structured error handling. Effect treats 
            errors as typed values, making them explicit and recoverable. No more 
            unhandled exceptions bringing down your application.
          </p>
          <Checklist items={['Errors tracked at compile-time in type system', 'Automatic retry with exponential backoff', 'Built-in circuit breakers and timeouts']} />
          <Button href="/docs" secondary className="mt-10">
            Learn error handling
          </Button>
        </div>
      </div>
      <Divider />
    </section>
  )
}
