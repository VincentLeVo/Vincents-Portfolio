import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        'bg-[linear-gradient(130deg,var(--tw-gradient-stops))] from-neutral-200 from-[30%] to-neutral-400 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
        className,
      )}
    />
  )
}

export function DarkGradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        'bg-[linear-gradient(130deg,var(--tw-gradient-stops))] from-blue-700 from-[30%] to-blue-900 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
        className,
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(130deg,var(--tw-gradient-stops))] from-neutral-200 from-[30%] to-neutral-300',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
