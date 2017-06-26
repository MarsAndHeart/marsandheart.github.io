import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

const AppBarWithBack = (props) => (
  <AppBar
    title={props.title}
    iconElementLeft={<IconButton><HardwareKeyboardArrowLeft /></IconButton>}
  />
)

export default AppBarWithBack