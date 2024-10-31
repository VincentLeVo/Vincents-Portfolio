import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center gap-3 px-6 py-3',
    'rounded-xl border border-transparent bg-blue-500 shadow-md',
    'whitespace-nowrap text-lg font-medium text-white',
    'data-[disabled]:bg-gray-950 data-[hover]:bg-blue-800 data-[disabled]:opacity-40',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center gap-3 px-6 py-3',
    'rounded-xl border border-transparent bg-neutral-100/10 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'whitespace-nowrap text-lg font-medium text-gray-950',
    'data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40',
  ),
  outline: clsx(
    'inline-flex items-center justify-center gap-3 px-6 py-3',
    'rounded-lg border border-transparent shadow ring-1 ring-black/10',
    'whitespace-nowrap text-lg font-medium text-gray-950',
    'data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40',
  ),
  link: clsx(
    'inline-flex items-center justify-center gap-3',
    'rounded-lg border border-transparent',
    'whitespace-nowrap text-lg font-medium',
    'data-[disabled]:bg-transparent data-[hover]:bg-white/10 data-[disabled]:opacity-40',
  ),
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(variants[variant], className)

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
