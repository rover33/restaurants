import { useState, useEffect, useContext } from "react";

let Table = () => {
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
        setTableArray(tablesArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)))
        setIsLoading(false)
      })
      .catch(() => {
        console.log("stop it");
      })
  }, []);


    let renderTables = () => {
      return(
        tablesArray.map(el => (
            <tr key={el.id} className="tableList" >
                <td>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.state}</td>
                <td>{el.telephone}</td>
                <td>{el.genre}</td>
            </tr>
        ))
      )
    }


    return (
      <table>
          <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
              <th>Genre</th>
          </tr>
          {renderTables()}
        </table>
    )
  };


export default Table;

