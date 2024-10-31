'use client'

import { PlusGrid, PlusGridRow } from '@/components/plus-grid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Container } from './Container'
import { DarkGradient } from './Gradient'
import { Link } from './link'
import { Logo } from './Logo'
import { links } from './Navbar'
import { Subheading } from './Text'

function Contact() {
  return (
    <section id="contact" className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Let’s Build Something Great Together</Subheading>
        <p className="mt-8 text-4xl font-medium text-slate-200 sm:text-5xl">
          Get in Touch
        </p>
      </hgroup>
      <p className="mx-auto mt-8 max-w-md text-base/6 text-slate-400">
        Whether you have a question, need a developer, or just want to talk
        tech, I’d love to hear from you.
      </p>
      <div className="flex justify-center">
        <dl className="mx-auto mt-10 max-w-sm space-y-4 text-lg font-semibold text-slate-300">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">LinkedIn</span>
              <SocialIconLinkedIn
                aria-hidden="true"
                className="h-7 w-6 text-slate-400/40"
              />
            </dt>
            <dd>
              <Link
                href="http://www.linkedin.com/in/vincent-le-vo"
                className="text-base hover:text-blue-300"
              >
                linkedin.com/in/vincent-le-vo
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Github</span>
              <SocialIconGithub
                aria-hidden="true"
                className="h-7 w-6 text-slate-400/40"
              />
            </dt>
            <dd>
              <Link
                href="https://github.com/VincentLeVo"
                className="text-base hover:text-blue-300"
              >
                github.com/VincentLeVo
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-slate-400/40"
              />
            </dt>
            <dd>
              <Link
                href="mailto:vincentvo2910@gmail.com"
                className="text-base hover:text-blue-300"
              >
                vincentvo2910@gmail.com
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function SitemapHeading({ children }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }) {
  return (
    <ul className="flex flex-col items-center gap-x-10 gap-y-4 text-base/6 md:flex-row md:flex-wrap">
      {children}
    </ul>
  )
}

function SitemapLink(props) {
  return (
    <li>
      <Link
        {...props}
        className="font-normal text-slate-400 data-[hover]:text-slate-600/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapLinks>
          {links.map(({ href, label }) => (
            <SitemapLink key={href} href={href}>
              {label}
            </SitemapLink>
          ))}
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      ></path>
    </svg>
  )
}

function SocialIconLinkedIn(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://github.com/VincentLeVo"
        target="_blank"
        aria-label="Visit us on Github"
        className="text-gray-500 data-[hover]:text-slate-600/75"
      >
        <SocialIconGithub className="size-4" />
      </Link>
      <Link
        href="http://www.linkedin.com/in/vincent-le-vo"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-slate-500 data-[hover]:text-slate-600/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-slate-500">
      &copy; {new Date().getFullYear()} Vincent Vo.
    </div>
  )
}

export function Footer() {
  return (
    <footer className="dark">
      <DarkGradient className="relative">
        <div className="absolute inset-5 rounded-3xl bg-slate-400/10" />
        <Container>
          <Contact />
          <PlusGrid className="px-6 pb-16">
            <PlusGridRow>
              <div className="flex flex-col items-center pb-6 md:pb-10">
                <div className="py-6">
                  <Logo className="h-16 w-16 text-blue-300" />
                </div>
                <div className="flex">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <div className="relative flex justify-between text-slate-900">
              <div>
                <div className="py-3">
                  <Copyright />
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </PlusGrid>
        </Container>
      </DarkGradient>
    </footer>
  )
}
