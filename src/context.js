import React, { createContext, useState, useEffect } from "react";


export const RestaurantContext = createContext();

export const RestuarntProvider  = props => {
    const [tablesArray, setTableArray] = useState([]);
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
        .then(tablesArray => {
            //sorted Alphabetically
          setTableArray(tablesArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)))
          setIsLoading(false)
        })
        .catch(() => {
          console.log("stop it");
        })
    }, []);
    
    return (
        <RestaurantContext.Provider value={[tablesArray, setTableArray ]}>
            {props.children}
        </RestaurantContext.Provider>
    )
}