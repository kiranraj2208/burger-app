import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p>Price is {props.price.toFixed(2)}</p>
        {
            controls.map( ele => {
                return <BuildControl 
                key={ele.label} 
                label={ele.label}
                added={() => props.ingredientAdded(ele.type)} 
                removed={() => props.ingredientRemoved(ele.type)}
                disableInfo={props.disableInfo[props.type]}/>
            })
        }
        <button 
        onClick={props.ordered}
        className={classes.OrderButton} 
        disabled={!props.purchasable}>Order Now</button>
    </div>
)


export default BuildControls;
