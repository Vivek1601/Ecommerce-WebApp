import React, { useState } from "react";

const Pagination = ({ totalPages, currPage, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(currPage);

  const handlePrevClick = () => {
    const prevPage = Math.max(pageNumber - 1, 1);
    setPageNumber(prevPage);
    onPageChange(prevPage);
  };

  const handleNextClick = () => {
    const nextPage = Math.min(pageNumber + 1, totalPages);
    setPageNumber(nextPage);
    onPageChange(nextPage);
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          className={`cursor-pointer mx-1 px-3 py-1 border rounded ${
            i === pageNumber ? "bg-gray-600 text-white" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="mx-2 px-3 py-1 border rounded bg-gray-600 text-white"
        onClick={handlePrevClick}
        disabled={pageNumber === 1}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        className="mx-2 px-3 py-1 border rounded bg-gray-600 text-white"
        onClick={handleNextClick}
        disabled={pageNumber === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
