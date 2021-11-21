import { Button, Tooltip } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  container: {
    flex: '1 1 50%',
    height: '70px',
    width: '130px',
    padding: '8px',
    borderRadius: '8px',
  },
  wrapper: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoRows: '1fr',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gap: '8px',
    gridTemplateAreas:
      '. .',
    width: '100%',
    height: '100%',
  },
  block: {
    backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    alignSelf: 'stretch',
    border: `1px solid ${theme.palette.divider}`,
    flex: '1 1 50%',
    minWidth: 'unset',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  blockHorizontal: {
    '&:first-child': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
    '&:last-child': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  },
  blockVertical: {
    '&:first-child': {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',

    },
    '&:last-child': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  },
  general: {
    display: 'flex',
    gap: '4px',
    height: '100%',
    justifyContent: 'space-between',
    alignContent: 'stretch',
  },
}))

const MupSectionsSplitter = ({ createSection = () => { }, isRoot = false }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(visible => !visible)
  }

  const generateButton = ({ className, action }) => {
    return <Button className={`${classes.block} ${className}`} onClick={action} onTouchStart={action}></Button>
  }


  const blocks = [
    {
      tooltip: 'Vertical split',
      content: <div className={classes.general} style={{ 'flexDirection': 'row' }}>
        {generateButton({ className: classes.blockHorizontal, action: () => createSection({ type: 'vs', index: 0, count: 2 }) })}
        {generateButton({ className: classes.blockHorizontal, action: () => createSection({ type: 'vs', index: 1, count: 2 }) })}
      </div>
    },
    {
      tooltip: 'Horizontal split',
      content: <div className={classes.general} style={{ 'flexDirection': 'column' }}>
        {generateButton({ className: classes.blockVertical, action: () => createSection({ type: 'hs', index: 0, count: 2 }) })}
        {generateButton({ className: classes.blockVertical, action: () => createSection({ type: 'hs', index: 1, count: 2 }) })}
      </div>
    },
    {
      tooltip: '3 Mains primary',
      content: <div className={classes.general} style={{ 'flexDirection': 'row' }}>
        {generateButton({ className: classes.blockHorizontal, action: () => createSection({ type: 'vs', index: 0, count: 3 }) })}
        {generateButton({ className: classes.blockHorizontal, action: () => createSection({ type: 'vs', index: 1, count: 3 }) })}
        {generateButton({ className: classes.blockHorizontal, action: () => createSection({ type: 'vs', index: 2, count: 3 }) })}
      </div>
    },
    {
      tooltip: '3 Mains even',
      content: <div className={classes.general} style={{ 'flexDirection': 'column' }}>
        {generateButton({ className: classes.blockVertical, action: () => createSection({ type: 'hs', index: 0, count: 3 }) })}
        {generateButton({ className: classes.blockVertical, action: () => createSection({ type: 'hs', index: 1, count: 3 }) })}
        {generateButton({ className: classes.blockVertical, action: () => createSection({ type: 'hs', index: 2, count: 3 }) })}
      </div>
    },
  ]

  return visible
    ? <div
      onTouchStart={toggleVisible}
      onClick={toggleVisible}
      className={classes.wrapper}
      style={isRoot ? {  } : { }}>
      {blocks.map(block => (
        <div key={block.tooltip} className={classes.container}>
          {block.content}
        </div>
      ))}
    </div>
    : <div>
      <Tooltip title="Split the screen" arrow>
        <Button style={{ minWidth: 'auto' }} onTouchEnd={toggleVisible} onClick={toggleVisible}>
          <VerticalSplitIcon />
        </Button>
      </Tooltip>
    </div>
}
export default MupSectionsSplitter
