import React, { useState, useContext } from "react";
import {RestaurantContext} from "../contexts/context";
import "../styles/searchbox.css";


const SearchBox = () => {
    const [searchString, setSearchString] = useState("");
    const [tablesDisplayArr, setTablesDisplayArr, tableLookUpArr, setTableLookUpArr] = useContext(RestaurantContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tableLookUpArr === "") return tableLookUpArr
        let filterArr = tableLookUpArr.filter(function(item){
            if (item.name.toLowerCase().includes(searchString) || item.city.toLowerCase().includes(searchString) || item.genre.toLowerCase().includes(searchString)) {
                return true
            } 
            return false
        }) 
        setTablesDisplayArr(filterArr)
    }

    return (
        <div className="panel-search">
            <div className="search">Search</div>
            <form onSubmit={handleSubmit}>
                <input 
                className="search-input"
                type="text" 
                name="Restaurant, City, Genre" 
                placeholder="Restaurant, City, Genre"
                value={tableLookUpArr.name} 
                onChange={e => setSearchString(e.target.value)}
                />
                <button className="search-submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBox;