import React, { useState, useContext } from "react";
import {RestaurantContext} from "../contexts/context";
import "../styles/filters.css"


const Filters = () => {
    const [searchState, setSearchState] = useState("");
    const [searchGenre, setSearchGenre] = useState("");
    const [tablesDisplayArr, setTablesDisplayArr, tableLookUpArr, setTableLookUpArr ] = useContext(RestaurantContext);

    const handleStateChange = (e) => {
        e.preventDefault()
        let filterArr = tableLookUpArr.filter(function(item){
            if (item.state.includes(searchState) || item.genre.includes(searchGenre) || item.state.includes(searchState) && item.genre.includes(searchGenre)) {
               console.log(tableLookUpArr)
                return true
            }
            return false
        })
        setTablesDisplayArr(filterArr)
    }


    const renderState = () => {

        let stateArr = tableLookUpArr.map((item) => {
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
        let genreArr = tableLookUpArr.map((item) => {
            return item.genre
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
            <form className="filter-form" onChange={handleStateChange}>
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