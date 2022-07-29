import { Chip } from '@material-ui/core'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import CachedIcon from '@material-ui/icons/Cached'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import { useCallback, useState } from 'react'
import MupPanel from '../components/MupPanel'

const IframePanel = () => {
  const [url, setUrl] = useState('https://en.wikipedia.org/wiki/Special:Random')
  const [timestamp, setTimestamp] = useState(0)

  const callbackSetTimestamp = useCallback(() => {
    setTimestamp(new Date().getTime())
  }, [])

  return <MupPanel
    noPadding
    extraButtons={[
      {
        key: 'play',
        icon: <CachedIcon />,
        onClick: () => callbackSetTimestamp(),
        tooltip: 'Reload URL'
      },
      {
        key: 'preview',
        node: <Chip label="Preview" color="primary" size="small" />,
        tooltip: 'Preview Panel'
      },
    ]}
    id="anotherIframePanel"
    title="AnotherIframePanel"
    subTitle="Sample sub-title text"
    icon={<LanguageOutlinedIcon />}
  >
    <OutlinedInput style={{ borderRadius: '0px' }} fullWidth value={url}
      onChange={event => setUrl(event.target.value)} />
    <iframe
      title="Random Wiki article"
      style={{
        filter: 'opacity(0.5) grayscale(0.5)',
        width: '100%',
        height: '95%',
        border: '0px none'
      }}
      src={`${url}${timestamp ? `#timestamp=${timestamp}` : ''}`}
    />
  </MupPanel>
}

export default IframePanel
