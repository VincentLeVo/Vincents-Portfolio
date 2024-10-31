'use client'

import { AnimatedText } from '@/components/AnimatedText'
import { FadeIn, StaggerWrapper } from '@/components/Animations'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'
import { Navbar } from '@/components/Navbar'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Gradient className="absolute inset-0 bottom-0 ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="flex content-center justify-center pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <div
            transition={{ staggerChildren: 0.12 }}
            className="flex max-w-4xl flex-col"
          >
            <div className="relative flex">
              <AnimatedText
                className="font-display z-20 inline w-auto text-6xl/[0.9] font-medium tracking-tight text-gray-950 md:text-8xl/[0.8] lg:text-9xl/[0.8]"
                text={`Hello there!<br>I'm Vincent.`}
              />
              <div className="relative h-auto w-3 md:w-[6rem] lg:w-[10rem]">
                <motion.div
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute -left-[0rem] z-0 w-[11rem] sm:-left-[2rem] md:w-[15rem] lg:-top-10 lg:w-[20rem]"
                >
                  <Image
                    src={'/personal/profile_picture_duotone.jpg'}
                    className="image-cover ring-3 aspect-square h-auto w-full rounded-full opacity-40 shadow-lg ring-white/35 md:opacity-90"
                    width={400}
                    height={400}
                    alt="Photo of Vincent"
                  />
                </motion.div>
              </div>
            </div>
            <StaggerWrapper
              className="relative"
              transition={{ delayChildren: 0.5, staggerChildren: 0.12 }}
            >
              <FadeIn>
                <p className="mt-4 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                  Hello there! I am a software engineer with a passion for
                  building.
                </p>
              </FadeIn>
              <FadeIn>
                <div className="mt-10 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                  <Button href="/#projects">View Projects</Button>
                  <Button
                    variant="secondary"
                    href="/resume/Resume_VincentVo.pdf"
                  >
                    View Resume
                  </Button>
                </div>
              </FadeIn>
            </StaggerWrapper>
          </div>
        </div>
      </Container>
    </div>
  )
}
