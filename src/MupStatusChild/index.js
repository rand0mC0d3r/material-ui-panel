import { Box, SvgIcon, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  box: {
    gap: '4px',
    color: theme.palette.action,
  },
  svg: {
    fontSize: 20
  },
  typography: {
    lineHeight: '0px',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  },
  image: {
    width: '20px',
    height: '20px',
  }
}))

const MupStatusChild = ({
  icon,
  text,
  textStyle,
  image,
  mask,
}) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return <Box display="flex" alignItems="center" flexWrap="nowrap"
    className={classes.box}>
    {icon && <SvgIcon className={classes.svg} color='action'>{icon}</SvgIcon>}
    {text && <Typography
      variant="subtitle2"
      color="textPrimary"
      className={classes.typography}
      style={{ ...textStyle }}
    >
      {text}
    </Typography>}

    {image && <img
      alt="injected element"
      className={classes.image}
      style={{ borderRadius: mask ? '50%' : '0px' }}
      src={image} />}
  </Box>
}

export default MupStatusChild
