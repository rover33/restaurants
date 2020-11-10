import React, { createContext, useState, useEffect, useReducer } from "react";


export const RestaurantContext = createContext();


export const RestuarantProvider  = props => {

   // states to be passed to different components
    const [tablesDisplayArr, setTablesDisplayArr] = useState([]);
    const [tableLookUpArr, setTableLookUpArr] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [searchGenre, setSearchGenre] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
      setIsLoading(true)
      fetch(
        `https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
          headers: {
              Authorization: "Api-Key q3MNxtfep8Gt",
              }
        })
        .then(res => res.json())
        .then(tablesDisplayArr => {
            //sorted Alphabetically
          const sortData = tablesDisplayArr.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
          setTablesDisplayArr(sortData)
          setTableLookUpArr(sortData)
          setSearchState("")
          setSearchGenre("")
          setIsLoading(false)
        })
        .catch(() => {
          console.log("stop it");
        })
    }, []);

    
    return (
        <RestaurantContext.Provider value={[tablesDisplayArr, setTablesDisplayArr, tableLookUpArr, setTableLookUpArr, searchGenre, setSearchGenre, searchState, setSearchState]}>
            {props.children}
        </RestaurantContext.Provider>
    )
}