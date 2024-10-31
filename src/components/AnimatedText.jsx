import clsx from 'clsx'
import { motion } from 'framer-motion'
export const AnimatedText = ({ text, className }) => {
  const parseText = (text) => {
    const regex = /(<br>)|\s+/g
    let lastIndex = 0
    let match
    const elements = []

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push({
          type: 'word',
          content: text.slice(lastIndex, match.index),
        })
      }
      if (match[0] === '<br>') {
        elements.push({ type: 'br' })
      } else {
        elements.push({ type: 'space', content: match[0] })
      }
      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      elements.push({ type: 'word', content: text.slice(lastIndex) })
    }

    return elements
  }

  const textElements = parseText(text)

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={clsx('inline', className)}
    >
      {textElements.map((element, index) => {
        if (element.type === 'word') {
          return (
            <span key={`word-${index}`} className="inline-block">
              {element.content.split('').map((char, charIndex) => (
                <motion.span
                  key={`char-${index}-${charIndex}`}
                  variants={letterVariants}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          )
        } else if (element.type === 'space') {
          return <span key={`space-${index}`}>{element.content}</span>
        } else if (element.type === 'br') {
          return <br key={`br-${index}`} />
        }
      })}
    </motion.span>
  )
}
