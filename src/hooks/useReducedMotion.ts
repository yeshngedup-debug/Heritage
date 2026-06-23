"use client"

import { useReducer, useEffect } from "react"

export function useReducedMotion(): boolean {
  const [prefersReduced, dispatch] = useReducer(
    (_state: boolean, event: MediaQueryListEvent | MediaQueryList) => event.matches,
    false,
  )

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    dispatch(mq)
    mq.addEventListener("change", dispatch)
    return () => mq.removeEventListener("change", dispatch)
  }, [])

  return prefersReduced
}
