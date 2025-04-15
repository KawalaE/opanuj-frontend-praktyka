interface PaginationProps {
  paginationIndex: number;
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
}

const PaginationComponent = ({
  paginationIndex,
  setPaginationIndex,
  pages,
}: PaginationProps) => {
  return (
    <div className="flex flex-row gap-5 items-center justify-end">
      <button
        onClick={() =>
          paginationIndex > 1 ? setPaginationIndex(paginationIndex - 1) : null
        }
      >
        Previous
      </button>
      <button
        onClick={() =>
          paginationIndex < pages
            ? setPaginationIndex(paginationIndex + 1)
            : null
        }
      >
        Next
      </button>
      <p>
        Page {paginationIndex} of {pages}
      </p>
    </div>
  );
};

export default PaginationComponent;
