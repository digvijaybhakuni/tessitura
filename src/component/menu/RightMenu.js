import React from 'react';
import { IconButton, IconMenu, MenuItem } from 'material-ui';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const RightMenu = (props) => (
    <IconMenu 
    {...props}
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
)

//To add Theme
RightMenu.muiName = 'IconMenu';

export default RightMenu;