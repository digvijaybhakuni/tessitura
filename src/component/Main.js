import React from 'react';

import { AppBar, Paper} from 'material-ui';

import RightMenu from './menu/RightMenu';
import StepperForm from './StepperForm';

const Main = (props) => (
    <Paper className="main">
        <AppBar title="Tessitura" 
        showMenuIconButton={false} 
        iconElementRight={<RightMenu/>}
        zDepth={2}></AppBar>
        <Paper className="content" zDepth={0} >
            <StepperForm/>
        </Paper>
    </Paper>
);


//Main.muiName = 'Paper';

export default Main;