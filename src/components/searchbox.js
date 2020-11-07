import React, { Component, useState, useContext } from "react";
import {RestaurantContext} from "../context";


const SearchBox = () => {
    const [searchString, setSearchString] = useState("");
    const [tablesArray, setTablesArray] = useContext(RestaurantContext);

    const updateSearch = e => {
        setSearchString(e.target.value)
        // setTablesArray(prevTablesArray => [...prevTablesArray, {name: tablesArray.name}])
    }

    return (
        <form>
            <input 
            type="text" 
            name="Restaurant, City, Genre" 
            value={tablesArray.name} 
            onChange={e => updateSearch(e)}
            />
            <button>Submit</button>
        </form>
    )

}

export default SearchBox;