import React from "react";

const IngredientList = ({ingredients}) => {
    return (
        <div className={'row'}>
            <div className="col-12">
                <div className="box-title">
                    <h2 className={'ingTitle'}>Ingredients</h2>
                </div>
            </div>
            {
                ingredients.map((ingredient, idx) =>
                <div className={'col-2'} key={idx}>
                    <div className={'card'}>
                        <img className={'ingredientImg'} src={`https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`} alt=""/>
                        <h5 className={'ihgSubtitle'}>{`${ingredient.ingredient}`}</h5>
                        <h6 className={'measure'}>{`${ingredient.measure}`}</h6>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default IngredientList