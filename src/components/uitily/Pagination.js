import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination() {
  const handlePageClick = () => {};
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={100}
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
