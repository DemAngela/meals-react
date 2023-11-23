import React from "react";
import Header from "../Components/Header";
import SearchInput from "../Components/SearchInput";
import Footer from "../Components/Footer";

const Search = () => {
    return (
        <div className={'body'}>
            <section className={'imgSection'}>
                <div className={'title'}>
                    <h1>Search</h1>
                </div>
            </section>
            <section className={'mainPage'}>
                <div className={'container'}>
                    <div>
                        <SearchInput />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search