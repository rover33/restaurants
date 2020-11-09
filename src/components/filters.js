import React, { useState, useContext } from "react";
import {RestaurantContext} from "../contexts/context";


const Filters = () => {
    const [searchString, setSearchString] = useState("");
    const [tablesDisplayArr, setTablesDisplayArr, tableLookUpArr, setTableLookUpArr, filterArr, setFilterArr ] = useContext(RestaurantContext);

    const renderState = () => {

        let stateArr = filterArr.map((item) => {
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
        let genreArr = filterArr.map((item) => {
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
        <>
            <select >
                {renderState()}
            </select>
            <select>
                {renderGenre()}
            </select>
        </>
    )
}

export default Filters;