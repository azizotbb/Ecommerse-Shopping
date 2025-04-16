import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, getPage }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination mt-5 justify-content-center"
        pageClassName="page-item"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakClassName="page-item"
        previousClassName="page-link"
        breakLinkClassName="page-link"
      />
    </div>
  );
}
