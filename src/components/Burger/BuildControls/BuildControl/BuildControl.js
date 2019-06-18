import  React  from 'react';
import classes from './BuildControl.module.css';

const BuildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.Less} onClick={props.removed} disabled={props.disableInfo}>less</div>
        <div className={classes.More} onClick={props.added}>more</div>
    </div>
)

export default BuildControl;