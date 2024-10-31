import { clsx } from 'clsx'

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        'text-pretty text-4xl font-medium tracking-tighter text-slate-800 data-[dark]:text-white dark:text-slate-200 sm:text-6xl',
        className,
      )}
    />
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'font-mono text-base font-normal uppercase tracking-wider text-slate-500 dark:text-slate-300',
      )}
    />
  )
}

export function Lead({ className, ...props }) {
  return (
    <p
      className={clsx(className, 'text-3xl font-medium text-slate-500')}
      {...props}
    />
  )
}
