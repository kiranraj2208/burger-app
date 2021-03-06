import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, i) => 
        <BurgerIngredient key={igKey+i} type={igKey} />
        )
    } )
    .reduce( (arr, ele) => {
        return arr.concat(ele);
    }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
             <BurgerIngredient type="bread-top"/>
             { transformedIngredients }
             <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;