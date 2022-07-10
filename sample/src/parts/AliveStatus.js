import WifiIcon from '@material-ui/icons/Wifi'
import WifiOffIcon from '@material-ui/icons/WifiOff'
import { useEffect, useState } from 'react'
import MupStatus from '../components/MupStatus'
import MupStatusChild from '../components/MupStatusChild'

const breakpoint = 60

export default () => {
  const [speed, setSpeed] = useState(75)
  const [highlight, setHighlight] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const signChosen = Math.ceil(Math.random() * 250) > 210 ? '-1' : '1'
      const number = speed + signChosen * Math.ceil(Math.random() * 50)
      setHighlight(number < breakpoint)
      setSpeed(() => number)
    }, 750)

    return () => clearInterval(interval)
  }, [])

  return <MupStatus {...{ highlight: highlight ? 'secondary' : 'default' }}
    secondary
    style={{ minWidth: '90px' }}
    id='statusAlive'
    tooltip={`Server connection bandwidth ${speed} KB/s`}
  >
    <MupStatusChild icon={highlight ? <WifiOffIcon /> :  <WifiIcon />} text={`${speed} KB/s`} />
  </MupStatus>
}
