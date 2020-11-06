import {useState} from "react";
import './App.css';
import { Pagination } from "@material-ui/lab";
import Table from './table';
import usePagination from './paginations';

function App() {

  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  // const count = Math.ceil(data.length / PER_PAGE);
  // const _Data = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    // _Data.jump(p);
  }

  return (
    <div className="App">
      <Pagination 
      size="small"
      />
      <Table />
    </div>
  );
}

export default App;
