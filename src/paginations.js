import React, {useState} from 'react';

let usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

   let currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end)
    }


   let next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

   let prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage -1, 1));
    }

    return next, prev, currentData, currentPage, maxPage

}

export default usePagination;