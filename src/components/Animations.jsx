'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { createContext, useContext } from 'react'

const StaggerWrapperContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

export function RotateIn(props) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(StaggerWrapperContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, rotateX: -90, rotateZ: -45 },
        visible: { opacity: 1, rotateX: 0, rotateZ: 0 },
      }}
      transition={{
        duration: 0.5,
        type: 'spring',
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

export function FadeIn(props) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(StaggerWrapperContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.25, ease: 'easeIn' }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

export function StaggerWrapper({ faster = false, className, ...props }) {
  return (
    <StaggerWrapperContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        className={className}
        {...props}
      />
    </StaggerWrapperContext.Provider>
  )
}
