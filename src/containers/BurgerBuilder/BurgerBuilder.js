import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = props => {

    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    const addIngredient = (type) => {
        const count = ingredients[type] + 1;
        let oldIngredient = {...ingredients};
        oldIngredient[type] = count;
        setIngredients(oldIngredient);
        setTotalPrice(totalPrice + INGREDIENTS_PRICES[type]);
        updatePurchasable(oldIngredient);
    }

    const removeIngredient = type => {
        if (ingredients[type] <= 0)
            return;
        const count = ingredients[type] - 1;
        let oldIngredient = {...ingredients};
        oldIngredient[type] = count;
        setIngredients(oldIngredient);
        setTotalPrice(totalPrice - INGREDIENTS_PRICES[type]);
        updatePurchasable(oldIngredient);
    }

    let disableInfo = { ...ingredients };
    for (let key in ingredients){
        disableInfo[key] = ingredients[key] <= 0;
    }

    const updatePurchasable = myIngredients => {
        const sum = Object.keys(myIngredients)
        .map( igKey => {
            return myIngredients[igKey]
        }).reduce( (total, a) => total + a, 0);
        setPurchasable(sum > 0);
    }

    const purchaseHandler = () => {
        setPurchasing(true);
    }
    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        alert("Purchased successful");
    }


    return (
        <Aux>
            <Modal show={purchasing} 
            modalClosed={purchaseCancelHandler}>
                <OrderSummary 
                price={totalPrice}
                purchaseCancelHandler={purchaseCancelHandler}
                purchaseContinueHandler={purchaseContinueHandler}
                ingredients={ingredients}/>
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls 
            price={totalPrice}
            ingredientAdded={addIngredient}
            ingredientRemoved={removeIngredient}
            disableInfo={disableInfo}
            purchasable={purchasable}
            ordered={purchaseHandler}
            />
        </Aux>


    );
}

export default BurgerBuilder;