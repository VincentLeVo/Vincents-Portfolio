'use client'

import { Container } from '@/components/Container'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/Text'
import { image } from '@/sanity/image'
import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { FadeIn, StaggerWrapper } from './Animations'
function PortfolioCard({ project, children, bounds, scrollX, ...props }) {
  let ref = useRef(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <Link href={project.slug && `/projects/${project.slug}`}>
      <FadeIn
        ref={ref}
        style={{ opacity }}
        {...props}
        className="relative flex aspect-[11/16] w-[20rem] shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-4xl shadow-lg sm:aspect-[5/4] sm:w-[36rem]"
      >
        {project.mainImage && (
          <img
            alt=""
            src={image(project.mainImage).url()}
            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-800 from-[calc(7/16*100%)] to-[calc(12/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-35% sm:to-65%"
        />
        <figure className="relative p-10">
          <div>
            {project.title && (
              <p className="relative inline-block bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text text-3xl/7 font-normal text-transparent">
                {project.title}
              </p>
            )}
            {project.excerpt && (
              <p className="text-md/6 mt-2 text-sm font-semibold uppercase tracking-wider text-slate-200">
                {project.excerpt}
              </p>
            )}
          </div>
          {project.technologies && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/20 pt-6">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-md px-1 py-0.5 text-xs text-slate-300 ring-1 ring-white/25"
                >
                  {tech}
                </div>
              ))}
            </div>
          )}
        </figure>
      </FadeIn>
    </Link>
  )
}

function PortfolioList({ bounds, scrollX, scrollTo, projects }) {
  return (
    <>
      {projects.map((project, testimonialIndex) => (
        <PortfolioCard
          key={project.slug}
          project={project}
          bounds={bounds}
          scrollX={scrollX}
          onClick={() => scrollTo(testimonialIndex)}
        />
      ))}
    </>
  )
}

export function Portfolio({ projects = [] }) {
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <StaggerWrapper
      faster={true}
      className="overflow-hidden bg-neutral-200 py-16"
    >
      <Container id="projects">
        <div ref={setReferenceWindowRef}>
          <Subheading>Projects</Subheading>
          <Heading as="h3" className="mt-2">
            What I Have Worked On
          </Heading>
        </div>
      </Container>

      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        <PortfolioList
          bounds={bounds}
          scrollX={scrollX}
          projects={projects}
          scrollTo={scrollTo}
        />
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-14">
        <div className="flex justify-end">
          <div className="hidden sm:flex sm:gap-5">
            {projects.map(({ name }, projectsIndex) => (
              <Headless.Button
                key={projectsIndex}
                onClick={() => scrollTo(projectsIndex)}
                data-active={activeIndex === projectsIndex ? true : undefined}
                aria-label={`Scroll to project from ${name}`}
                className={clsx(
                  'size-3 rounded-full border border-transparent bg-neutral-600/30 transition',
                  'data-[active]:bg-neutral-500/80 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </StaggerWrapper>
  )
}
