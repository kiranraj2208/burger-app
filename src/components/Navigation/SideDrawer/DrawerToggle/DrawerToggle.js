import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = props => (
        <div 
        className={classes.DrawerToggle}
        onClick={props.menuClicked}>
        <div></div>
        <div></div>
        <div></div>
        </div>
    );
export default DrawerToggle;