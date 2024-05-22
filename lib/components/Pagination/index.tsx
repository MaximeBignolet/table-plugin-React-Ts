interface PaginateProps {
  currentPage: number;
  totalPages: number;
  handlePagination: (pageNumber: number) => void;
}

export const Paginate = ({
  currentPage,
  totalPages,
  handlePagination,
}: PaginateProps) => {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <a
          href="#"
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={
            currentPage === pageNumber ? "active pagination" : "pagination"
          }
        >
          {pageNumber}
        </a>
      ))}
    </div>
  );
};
