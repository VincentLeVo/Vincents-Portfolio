'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './Logo'
import { PlusGrid, PlusGridRow } from './plus-grid'

export const links = [
  { href: '/about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
  { href: '/resume/Resume_VincentVo.pdf', label: 'Resume' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-6 py-2 text-base font-medium text-slate-950 bg-blend-multiply data-[hover]:bg-black/[2.5%] dark:text-slate-100 dark:data-[hover]:text-slate-300"
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg text-slate-100 data-[hover]:bg-black/5 dark:text-slate-100 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <Transition
      enter="transition-all ease-in-out duration-500 sm:duration-800"
      enterFrom="max-h-0"
      enterTo="max-h-screen"
      leave="transition-all ease-in-out duration-500 sm:duration-400"
      leaveFrom="max-h-screen"
      leaveTo="max-h-0"
      className="origin-top overflow-hidden"
    >
      <DisclosurePanel className="lg:hidden">
        <div className="flex flex-col gap-6 py-4">
          {links.map(({ href, label }, linkIndex) => (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
              }}
              key={href}
            >
              <Link
                href={href}
                className="text-base font-medium text-slate-950 dark:text-slate-100"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="absolute left-1/2 w-screen -translate-x-1/2">
          <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/5" />
          <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/5" />
        </div>
      </DisclosurePanel>
    </Transition>
  )
}

export function Navbar({ banner, className, dark = false }) {
  return (
    <Disclosure
      as="header"
      className={clsx('pt-7 sm:pt-10', dark && 'dark', className)}
    >
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <div className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-10 w-auto text-slate-950 dark:text-slate-100" />
              </Link>
            </div>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
