import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
//
import * as LAGS from '../../../constants/langs.enum'
//////////////////////////////////////////////////

const Timer = () => {
  const { t } = useTranslation()
  const initLng = localStorage.getItem('language')
  const timerComponents = []

  const calculateTimeLeft = React.useCallback(() => {

    let timeLeft = {}
    let year = new Date().getFullYear()
    let difference = +new Date(`10/01/${year}`) - +new Date()

    if (difference > 0 ) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    if (difference > 0 && initLng === LAGS.UA ) {
      timeLeft = {
        // дні: Math.floor(difference / (1000 * 60 * 60 * 24)),
        години: Math.floor((difference / (1000 * 60 * 60)) % 24),
        хвилини: Math.floor((difference / 1000 / 60) % 60),
        секунди: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }, [initLng])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  const set = React.useCallback(e => {
    setInterval(() => {
      setTimeLeft(calculateTimeLeft(e))
    }, 1000)
  }, [setTimeLeft, calculateTimeLeft])

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) return

    timerComponents.push(
      <span key={i}>{timeLeft[interval]} {interval}{' '}</span>,
    )
  })

  useEffect(() => {
    if (!timeLeft) return

    clearInterval(set())

    return () => clearInterval(set())

  }, [set, setTimeLeft, timeLeft])

  return (
    <>
      <span style={{ color: '#EE7178' }}>
        {
          timerComponents.length
            ? timerComponents
            : <span>{t("Time's up")}</span>
        }
      </span>
    </>
  )
}

export default Timer
