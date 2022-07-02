import { Box, SvgIcon, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const MupStatusChild = ({
  icon,
  text,
  image,
  mask,
}) => {
  const theme = useTheme()

  return <Box
    display="flex"
    alignItems="center"
    flexWrap="nowrap"
    style={{ gap: '4px', color: theme.palette.action }}
  >

    {icon && <SvgIcon style={{ fontSize: 20 }} color='action'>{icon}</SvgIcon>}

    {text && <Typography
      variant="subtitle2"
      color="textPrimary"
      style={{ lineHeight: '0px', whiteSpace: 'nowrap', userSelect: 'none' }}
    >
      {text}
    </Typography>}

    {image && <img
      alt="injected element"
      style={{
        width: '20px',
        height: '20px',
        borderRadius: mask ? '50%' : '0px',
      }} src={image} />}
  </Box>
}

export default MupStatusChild