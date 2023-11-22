import React, {useState} from "react";
import axios from "axios";
import MealList from "./MealList";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then(({ data }) => {
                    if (data.meals) {
                        setSearchResult(data.meals);
                        setError('');
                    } else {
                        setSearchResult([]);
                        setError('No results');
                    }
                    setSearchTerm('')
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    setSearchResult([]);
                    setError('Data loading error');
                    setSearchTerm('')
                });
        } else {
            setError('Enter your request');
            setSearchResult([])
        }
    };

    return (
        <div className={'SearchWrapper'}>
            <input className={'SearchInput'} type="text" placeholder='' value={searchTerm}
                   onChange={event => setSearchTerm(event.target.value)} name="" id=""/>
            <button className={'SearchBtn'} onClick={handleSearch} >OK</button>
            {error && <h6>{error}</h6>}
            <div>
               <MealList meals={searchResult}/>
            </div>
        </div>
    )
}

export default SearchInput