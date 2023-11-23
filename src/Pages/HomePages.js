import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";
import Footer from "../Components/Footer";

const HomePages = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({ data }) => setMeals(data.meals))
    }, []);

    return (
        <div className={'body'}>
            <section className={'imgSection'}>
                <div className={'title'}>
                    <h1>Home page</h1>
                </div>
            </section>
            <section className={'mainPage'}>
                <div className={'container'}>
                    <MealList meals={meals}/>
                </div>
            </section>
        </div>
    )
}

export default HomePages