import React, {useEffect, useState} from "react";
import axios from "axios";
import IngredientList from "../Components/IngredientList";
import Loader from "../Components/Loader";
import {useParams} from "react-router-dom";

const MealPage = () => {
    const {idMeal} = useParams()
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([]);

    const filterIngredients = (meal) => {
        const newIngredients = [];
        for (const key in meal) {
            if (key.startsWith('strIngredient') && meal[key] !== null && meal[key] !== '') {
                const ingredientNumber = key.slice(13);
                const measure = meal[`strMeasure${ingredientNumber}`];
                newIngredients.push({
                    ingredient: meal[key],
                    measure: measure || ''
                });
            }
        }
        setIngredients(newIngredients);
    };

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(({data}) => {
                filterIngredients(data.meals[0])
                setMeal(data.meals[0])
            })
            console.log(meal)
    }, [idMeal]);

    if (!meal.idMeal || !ingredients.length) {
        return <Loader />
    } else {
        return (
            <>
                <div className={'body'}>
                    <section className={'IngPage'}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box-meal">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="box-title">
                                                    <h2 className={'ingTitle'}>{meal.strMeal}</h2>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="box-meal">
                                                    <p className={'ingInstructions'}>{meal.strInstructions}</p>
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${meal.strYoutube?.slice(meal.strYoutube.indexOf('=')+1)}`}
                                                        frameBorder="0"></iframe>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="box-meal">
                                                    <img src={meal.strMealThumb} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box-meal">
                                        <IngredientList ingredients={ingredients} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }

}

export default MealPage