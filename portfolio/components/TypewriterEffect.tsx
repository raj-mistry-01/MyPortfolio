"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypewriterEffect({
  words,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current word being processed
        const currentWord = words[currentWordIndex]

        // If deleting
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        } else {
          // If typing
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        }

        // If word is complete
        if (!isDeleting && currentText === currentWord) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to next word
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn("", className)}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
