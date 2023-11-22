import React from "react";

const MealCard = ({meal}) => {

    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <div className={'mealTitle'}>
                <h4>{meal?.strMeal}</h4>
                <p>{meal?.strCategory}</p>
            </div>
        </div>
    )
}

export default MealCard
