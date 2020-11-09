import {  useContext } from "react";
import { RestaurantContext } from "../contexts/context";

let Table = () => {
  const [tablesDisplayArr, setTablesDisplayArr] = useContext(RestaurantContext)

    let renderTables = () => {
      return(
        tablesDisplayArr.map(el => (
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

