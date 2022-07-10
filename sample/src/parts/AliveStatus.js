import SignalWifi1BarIcon from '@material-ui/icons/SignalWifi1Bar'
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar'
import { useEffect, useState } from 'react'
import MupStatus from '../components/MupStatus'
import MupStatusChild from '../components/MupStatusChild'

const breakpoint = 60
const max = 300

export default () => {
  const [speed, setSpeed] = useState(175)
  const [highlight, setHighlight] = useState('default')

  useEffect(() => {
    const interval = setInterval(() => {
      const signChosen = Math.ceil(Math.random() * 250) > 210 ? '-1' : '1'
      const number = speed + signChosen * Math.ceil(Math.random() * 150)
      setHighlight(number < breakpoint ? 'secondary' : number < max ? 'default' : 'primary')
      setSpeed(() => number)
    }, 750)

    return () => clearInterval(interval)
  }, [])

  return <MupStatus {...{ highlight }}
    secondary
    id='statusAlive'
    tooltip={`Server connection bandwidth ${speed} KB/s`}
  >
    <MupStatusChild
      icon={highlight === 'secondary' ? <SignalWifi1BarIcon /> : <SignalWifi4BarIcon />}
      text={`${speed} KB/s`}
      textStyle={{ minWidth: '60px' }}
    />
  </MupStatus>
}
