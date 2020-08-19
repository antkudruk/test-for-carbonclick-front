import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuProps } from './MenuProps';
import { Link } from 'react-router-dom';
import DefaultButton from '../base/buttons/DefaultButton';

const Menu = (props: MenuProps) => {

    const {items} = props;

    const [visible, setVisible] = useState(false);

    return <>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start"color="inherit" aria-label="menu">
                    <MenuIcon onClick={() => setVisible(true)}/>
                </IconButton>
                <DefaultButton color="inherit">Login</DefaultButton>
                </Toolbar>
            </AppBar>
            {visible && <Drawer anchor='left' open={visible} onClose={() => setVisible(false)}>
                {items?.map(e => <Link key={e.id} to={e.link}><DefaultButton>{e.title}</DefaultButton></Link>)}
            </Drawer>}
        </>;
};

export default Menu;