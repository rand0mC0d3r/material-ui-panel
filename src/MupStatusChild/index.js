import { Box, Popover, SvgIcon, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'


const MupStatusChild = ({
  icon,
  text,
  children
}) => {
  const theme = useTheme()

  return  <Box display="flex" alignItems="center" flexWrap="nowrap"
    style={{ gap: '8px', color: theme.palette.action }}>

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