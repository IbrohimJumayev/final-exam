import React from "react";
import { Pagination } from "flowbite-react";

const PaginationSection = ({ currentPage, onPageChange }) => {
  return (
    <div className="flex overflow-x-auto sm:justify-center bg-none">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={25}
        onPageChange={onPageChange}
        previousLabel=""
        nextLabel=""
        showIcons
        className="text-sky outline-none"
      />
    </div>
  );
};

export default PaginationSection;
