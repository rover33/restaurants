import React, { Component, useState, useContext } from "react";
import {RestaurantContext} from "../contexts/context";


const SearchBox = () => {
    const [search, setSearch] = useState("");
    const [tablesArray, setTablesArray] = useContext(RestaurantContext);

    // const updateSearch = e => {
    //     setSearchString(searchString)
    //     // setTablesArray(prevTablesArray => [...prevTablesArray, {name: tablesArray.name}])
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        tablesArray.filter(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="Restaurant, City, Genre" 
            value={tablesArray.name} 
            onChange={e => setSearch(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )

}

export default SearchBox;