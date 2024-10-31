import { clsx } from 'clsx'

export function PlusGrid({ className = '', children }) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({ className = '', children }) {
  return (
    <div
      className={clsx(
        className,
        'group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/15"></div>
        <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block dark:border-white/15"></div>
      </div>
      {children}
    </div>
  )
}
