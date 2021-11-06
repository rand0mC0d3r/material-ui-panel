import { ClickAwayListener } from '@material-ui/core'
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
      // '. . .',
      '. .',
    width: '100%',
    height: '100%',
  },
  block: {
    backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    alignSelf: 'stretch',
    border: `1px solid ${theme.palette.divider}`,
    flex: '1 1 50%',

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
  }
}))

const MupSectionsSplitter = ({ createSection = () => { }, isRoot = false}) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(visible => !visible)
  }

  const blocks = [
    {
      tooltip: 'Vertical split',
      content: <div className={classes.general} style={{'flexDirection': 'row'}}>
        <div className={`${classes.block} ${classes.blockHorizontal}`} onClick={() => createSection({ type: 'vs', index: 0, count: 2 })}></div>
        <div className={`${classes.block} ${classes.blockHorizontal}`} onClick={() => createSection({ type: 'vs', index: 1, count: 2 })}></div>
      </div>
    },
    {
      tooltip: 'Horizontal split',
      content: <div className={classes.general} style={{'flexDirection': 'column'}}>
        <div className={`${classes.block} ${classes.blockVertical}`} onClick={() => createSection({type: 'hs', index:  0, count: 2})}></div>
        <div className={`${classes.block} ${classes.blockVertical}`} onClick={() => createSection({type: 'hs', index:  1, count: 2})}></div>
      </div>
    },
    {
      tooltip: '3 Mains primary',
      content: <div className={classes.general} style={{'flexDirection': 'row'}}>
        <div className={`${classes.block} ${classes.blockHorizontal}`} onClick={() => createSection({type: 'vs', index:  0, count: 3})}></div>
        <div className={`${classes.block} ${classes.blockHorizontal}`} onClick={() => createSection({type: 'vs', index:  1, count: 3})}></div>
        <div className={`${classes.block} ${classes.blockHorizontal}`} onClick={() => createSection({type: 'vs', index:  2, count: 3})}></div>
      </div>
    },
    {
      tooltip: '3 Mains even',
      content: <div className={classes.general} style={{'flexDirection': 'column'}}>
        <div className={`${classes.block} ${classes.blockVertical}`} onClick={() => createSection({type: 'hs', index:  0, count: 3})}></div>
        <div className={`${classes.block} ${classes.blockVertical}`} onClick={() => createSection({type: 'hs', index:  1, count: 3})}></div>
        <div className={`${classes.block} ${classes.blockVertical}`} onClick={() => createSection({type: 'hs', index:  2, count: 3})}></div>
      </div>
    },
    // {
    //   tooltip: 'Main + sides',
    //   content: <div className={classes.general} style={{'flexDirection': 'row'}}>
    //     <div className={classes.block}></div>
    //     <div style={{
    //       'flex': '1 1 50%',
    //       display: 'flex',
    //       gap: '4px',
    //       flexDirection: 'column',
    //     }}>
    //       <div className={classes.block}></div>
    //       <div className={classes.block}></div>
    //     </div>
    //   </div>
    // },
    // {
    //   tooltip: '4 squares',
    //   content: <div style={{
    //     display: 'grid',
    //     gridAutoColumns: '1fr',
    //     gridAutoRows: '1fr',
    //     gridTemplateColumns: '1fr 1fr',
    //     gridTemplateRows: '1fr',
    //     gap: '4px',
    //     gridTemplateAreas:
    //       '. .',
    //     width: '100%',
    //     height: '100%',
    //   }}>
    //     <div className={classes.block}></div>
    //     <div className={classes.block}></div>
    //     <div className={classes.block}></div>
    //     <div className={classes.block}></div>
    //   </div>
    // },
  ]

  return <>
    {visible && <ClickAwayListener onClickAway={toggleVisible}>
      <div
        onClick={toggleVisible}
        className={classes.wrapper}
        style={isRoot ? {  } : { }}>
        {blocks.map(block => (
          <div key={block.tooltip} className={classes.container}>
            {block.content}
          </div>
        ))}
      </div>
    </ClickAwayListener>}
    {!visible && <VerticalSplitIcon style={{cursor: 'pointer'}} onClick={toggleVisible} color="action" />}
  </>
}
export default MupSectionsSplitter
