import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  resetPage: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange, resetPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log(resetPage)
    if (resetPage) {
      setCurrentPage(0);
    }
  }, [resetPage]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
    onPageChange(data);
  };

  return (
    <ReactPaginate
      previousLabel={'Prev'}
      nextLabel={'Next'}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      previousLinkClassName={'previous_page'}
      nextLinkClassName={'next_page'}
      disabledClassName={'disabled'}
      activeClassName={'active'}
      forcePage={currentPage}
    />
  );
};

export default Pagination;
