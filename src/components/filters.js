import React, { useState, useContext } from "react";
import {RestaurantContext} from "../contexts/context";
import "../styles/filters.css"


const Filters = () => {
    const [tablesDisplayArr, setTablesDisplayArr, searchGenre, setSearchGenre, searchState, setSearchState ] = useContext(RestaurantContext);

    const handleStateChange = (e) => {
        e.preventDefault()
        let filterArr = tablesDisplayArr.filter((item) =>{
            if (item.state.includes(searchState) && item.genre.includes(searchGenre)) {
                return true
            }
            return false
        })
        setTablesDisplayArr(filterArr)
    }


    const renderState = () => {

        let stateArr = tablesDisplayArr.map((item) => {
            return item.state
        })

        let filterState = Array.from(new Set(stateArr)).sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))

       return(
           filterState.map(el => (
            <option key={el}>
                {el}
            </option>
         ))
       )
    }

    const renderGenre = () => {
        let genreArr = tablesDisplayArr.flatMap((item) => {
            return item.genre.split(",")
        })



        let filterGenre = Array.from(new Set(genreArr)).sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))

       return(
           filterGenre.map(el => (
            <option key={el}>
                {el}
            </option>
         ))
       )
    }

    return (
        <div className="panel-filters">
            <div className="filters">Filters</div>
            <form className="filter-form" onSubmit={handleStateChange}>
                <select className="filter-state" onChange={e => setSearchState(e.target.value)}>
                    {renderState()}
                </select>
                <select className="filter-genre"onChange={e => setSearchGenre(e.target.value)}>
                    {renderGenre()}
                </select>
                <button className="filter-button">Submit</button>
            </form>
        </div>
    )
}

export default Filters;