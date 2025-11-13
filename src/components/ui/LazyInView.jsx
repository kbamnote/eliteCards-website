import React, { useEffect, useRef, useState } from 'react'

export default function LazyInView({
  children,
  className,
  style,
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return (
    <div ref={ref} className={className} style={style}>
      {visible ? children : null}
    </div>
  )
}