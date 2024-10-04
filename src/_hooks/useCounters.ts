import { useEffect, useRef, useState } from 'react'

interface TimeFormat {
  days: number
  hours: number
  min: number
  sec: number
}

const useCounter = () => {
  const [count, setCount] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const startTimeRef = useRef<number | null>(null)

  const start = () => {
    setIsRunning(true)
    startTimeRef.current = Date.now() - count * 1000
  }

  const stop = () => {
    setIsRunning(false)
  }

  const restart = () => {
    setCount(0)
    start()
  }

  const format = (): TimeFormat => {
    const elapsedTime = isRunning
      ? Math.floor((Date.now() - startTimeRef.current!) / 1000)
      : count

    const days = Math.floor(elapsedTime / 86400)
    const hours = Math.floor((elapsedTime % 86400) / 3600)
    const min = Math.floor((elapsedTime % 3600) / 60)
    const sec = elapsedTime % 60

    return { days, hours, min, sec }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  return { count, isRunning, start, stop, restart, format }
}

export default useCounter
