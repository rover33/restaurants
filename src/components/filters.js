import React, { useState, useContext } from "react";
import {RestaurantContext} from "../contexts/context";


const Filters = () => {
    const [searchString, setSearchString] = useState("");
    const [tablesDisplayArr, setTablesDisplayArr, tableLookUpArr, setTableLookUpArr, filterArr, setFilterArr ] = useContext(RestaurantContext);

    const renderState = () => {

        let stateArr = filterArr.map((item) => {
            return item.state
        })
        
        let filterState = Array.from(new Set(stateArr))
        console.log(filterState)

       return(
           filterState.map(el => (
            <option key={el.id}>
                {el.state}
            </option>
         ))
       )
    }

    return (
        <select >
            {renderState()}
        </select>
    )
}

export default Filters;