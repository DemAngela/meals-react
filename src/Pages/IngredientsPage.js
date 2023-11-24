import React, {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../Components/MealList";
import {useParams} from "react-router-dom";

const IngredientsPage = () => {
    const {name} = useParams()
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data}) => {
                setIngredient(data.meals)
            })
    }, []);


    return (
        <div className={'body'}>
            <section className={'IngMealPage'}>
                <div className={'container'}>
                    <div className={'imgWrapper'}>
                        <div className={'imgInner'}>
                            <img className={'ingImage'} src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
                            <h5 className={'name'}>{name}</h5>
                        </div>
                        <MealList meals={ingredient}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IngredientsPage