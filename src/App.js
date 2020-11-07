import React from "react";
import './App.css';
import { Pagination } from "@material-ui/lab";
import Table from './components/table';
import usePagination from './components/paginations';
import {RestuarantProvider, RestuarntProvider} from "./contexts/context"
import Searchbox from "./components/SearchBox";

function App() {

  // let [page, setPage] = useState(1);
  // const PER_PAGE = 10;

  // const count = Math.ceil(data.length / PER_PAGE);
  // const _Data = usePagination(data, PER_PAGE);

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   // _Data.jump(p);
  // }

  return (
    <RestuarntProvider>
      <div className="App">
        <Searchbox />
        <Table />
      </div>
    </RestuarntProvider>
  );
}

export default App;
