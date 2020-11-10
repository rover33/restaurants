import React from "react";
import './App.css';
import Table from './components/table';
import  {RestuarantProvider} from "./contexts/context"
import Searchbox from "./components/SearchBox";
import Filters from "./components/Filters";

function App() {

  return (
    <RestuarantProvider>
      <div className="App">
        <div className="searching-boxs">
          <Searchbox />
          <Filters />
        </div>
        <Table />
      </div>
    </RestuarantProvider>
  );
}

export default App;
