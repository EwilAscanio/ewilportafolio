"use client"

import { useState, useEffect, useRef } from "react"

/**
 * Hook personalizado para manejar animaciones de entrada con scroll
 * Utiliza Intersection Observer para detectar cuando los elementos entran en viewport
 */
export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasAnimated(true)
          }
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasAnimated])

  return { elementRef, isVisible }
}

/**
 * Hook para animaciones escalonadas (stagger animations)
 */
export function useStaggerAnimation(itemCount, delay = 100) {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar elementos uno por uno con delay
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, i]))
            }, i * delay)
          }
        }
      },
      { threshold: 0.1 },
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [itemCount, delay])

  return { containerRef, visibleItems }
}
