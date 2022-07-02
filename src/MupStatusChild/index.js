import { Box, SvgIcon, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const MupStatusChild = ({
  icon,
  text,
  children
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
    {children}
  </Box>
}

export default MupStatusChild