import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const OrderSummary = props => {
    const orderSummary = Object.keys(props.ingredients)
        .map( ele =>
            <li key={ele}>
                <span style={{textTranform:'Capitalize'}}>{ele}</span>: 
                {props.ingredients[ele]}
                </li>
             )
    return (
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with following incredients</p>
        <ul>
            {orderSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
    </Aux>
    );
}
export default OrderSummary;