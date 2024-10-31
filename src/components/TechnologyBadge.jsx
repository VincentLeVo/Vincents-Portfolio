import clsx from 'clsx'

export function TechnologyBadge({
  size = 'small',
  className,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(
        'rounded-md px-1 py-0.5 text-slate-300 ring-1 ring-white/25',
        size == 'small' ? 'px-1 py-0.5 text-xs' : 'px-2 py-1 text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
