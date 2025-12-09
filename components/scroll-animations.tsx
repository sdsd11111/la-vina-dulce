"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el, index) => {
      el.style.setProperty("--animation-order", index.toString())
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
