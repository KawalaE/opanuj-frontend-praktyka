interface PaginationProps {
  paginationIndex: number;
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent = ({
  paginationIndex,
  setPaginationIndex,
}: PaginationProps) => {
  return (
    <div className="flex flex-row gap-5 items-center justify-end">
      <button
        onClick={() =>
          paginationIndex > 0 ? setPaginationIndex(paginationIndex - 1) : null
        }
      >
        Previous
      </button>
      <button onClick={() => setPaginationIndex(paginationIndex + 1)}>
        Next
      </button>
      <p>Pages {paginationIndex}</p>
    </div>
  );
};

export default PaginationComponent;
