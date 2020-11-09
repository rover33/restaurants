import React from "react";
import './App.css';
import Table from './components/table';
import {RestuarantProvider, RestuarntProvider} from "./contexts/context"
import Searchbox from "./components/SearchBox";
import Filters from "./components/Filters";

function App() {

  return (
    <RestuarntProvider>
      <div className="App">
        <Searchbox />
        <Filters />
        <Table />
      </div>
    </RestuarntProvider>
  );
}

export default App;
